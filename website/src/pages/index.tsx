import React, { FC, ReactElement } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    icon: "📦",
    title: "Lightweight & Easy to Use",
    description: (
      <>
        Hack4Impact&apos;s Logger was designed from the ground up to be easily
        installed and used off the bat so that you can focus on building your
        application.
      </>
    ),
  },
  {
    icon: "🌟",
    title: "Bug Free",
    description: (
      <>
        Hack4Impact&apos;s Logger is typed thoroughly and tested entirely with
        Jest. Each change goes through automated GitHub Workflows to ensure that
        our product remains high quality and functional.
      </>
    ),
  },
  {
    icon: "🚀",
    title: "Lightning Fast",
    description: (
      <>
        Hack4Impact&apos;s Logger uses absolutely NO dependencies! The zipped
        size of our package is less than 1.1kB. If speed matters, our logger is
        for you.
      </>
    ),
  },
];

interface FeatureProps {
  icon: string;
  title: string;
  description: ReactElement;
}

const Feature: FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="text--center">
        <h1 className={styles.featureIcon}>{icon}</h1>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Home: FC = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <Link href="https://hack4impact.org/">
            <img
              className={clsx(styles.heroBannerLogo, "margin-vert--md")}
              src={useBaseUrl("img/hack4impact.svg")}
            />
          </Link>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started&nbsp;&nbsp;→
            </Link>
          </div>
        </div>
      </header>
      <main>
        <p className="padding-vert--md">
          <p className="container">
            <p className="row">
              <p className="col col--10 col--offset-1">
                <h1 className="text--center margin-bottom--md">
                  Why Hack4Impact&apos;s Logger?
                </h1>
                {features && features.length > 0 && (
                  <section className={styles.features}>
                    <div className="container">
                      <div className="row">
                        {features.map((props, idx) => (
                          <Feature key={idx} {...props} />
                        ))}
                      </div>
                    </div>
                  </section>
                )}
              </p>
            </p>
          </p>
        </p>
      </main>
    </Layout>
  );
};

export default Home;
