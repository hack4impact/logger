// Node
import { readFile } from "fs/promises";
import { join } from "path";

// Externals
import { config } from "dotenv-safe";
import { Octokit, RestEndpointMethodTypes } from "@octokit/rest";

// Internals
import pkg from "../package.json";
import getChangeLogSection from "./helpers/get-changelog-section";

config();

const CHANGELOG_PATH = join(__dirname, "..", "CHANGELOG.md");

const recreateReleases = async () => {
  const changelog = (await readFile(CHANGELOG_PATH, "utf-8")).trim();

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const [tags, releases] = await Promise.all([
    getTags(octokit),
    getReleases(octokit),
  ]);

  checkTags(octokit, changelog, tags, releases);

  checkReleases(octokit, changelog, releases);
};

type Releases = RestEndpointMethodTypes["repos"]["listReleases"]["response"]["data"];

const getReleases = async (octokit: Octokit) => {
  const { data: releases } = await octokit.repos.listReleases({
    owner: "YashTotale",
    repo: "logger",
    per_page: 10,
  });

  return releases;
};

const getTags = async (octokit: Octokit) => {
  const { data: tags } = await octokit.repos.listTags({
    owner: "YashTotale",
    repo: "logger",
    per_page: 10,
  });
  return tags;
};

const checkTags = async (
  octokit: Octokit,
  changelog: string,
  tags: RestEndpointMethodTypes["repos"]["listTags"]["response"]["data"],
  releases: Releases
) => {
  tags.forEach(async ({ name, commit }) => {
    if (
      name === `v${pkg.version}` &&
      !releases.find(({ name: releaseName }) => name === releaseName)
    ) {
      console.log(`Creating release ${name}...`);

      octokit.repos.createRelease({
        owner: "YashTotale",
        repo: "logger",
        tag_name: name,
        body: await getChangeLogSection(changelog, name.substring(1)),
        target_commitish: commit.sha,
        name,
        prerelease: false,
        draft: false,
      });
    }
  });
};

const checkReleases = async (
  octokit: Octokit,
  changelog: string,
  releases: Releases
) => {
  releases.forEach(async (release) => {
    const { id, name, tag_name, body } = release;
    const section = await getChangeLogSection(changelog, tag_name.substring(1));

    if (section !== body) {
      console.log(`Updating release ${name} ...`);

      await octokit.repos.updateRelease({
        ...release,
        owner: "YashTotale",
        repo: "logger",
        release_id: id,
        body: section,
        name: name ?? undefined,
      });
    }
  });
};

recreateReleases();
