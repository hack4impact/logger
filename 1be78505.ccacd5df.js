(window.webpackJsonp=window.webpackJsonp||[]).push([[7,10],{115:function(e,t,a){"use strict";var r=a(3),l=a(7),n=a(0),o=a.n(n),c=a(104),m=a(105),s=a(103),i=a(106),f=a(109),u=a(55),_=a.n(u),h=function(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,s=Object(l.a)(e,["to","href","label","prependBaseUrlToHref"]),f=Object(i.a)(t),u=Object(i.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(m.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?u:a}:{to:f},s),n)},d=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(f.a)().isDarkTheme,t=Object(s.useThemeConfig)().footer,a=t||{},r=a.copyright,l=a.links,n=void 0===l?[]:l,m=a.logo,u=void 0===m?{}:m,p=Object(i.a)("img/hack4impact"+(e?"-dark":"")+".svg");return t?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===t.style})},o.a.createElement("div",{className:"container"},n&&n.length>0&&o.a.createElement("div",{className:"row footer__links"},n.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(h,e))}))):null)}))),(u||r)&&o.a.createElement("div",{className:"footer__bottom text--center"},u&&o.a.createElement("div",{className:"margin-bottom--sm"},u.href?o.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:_.a.footerLogoLink},o.a.createElement(d,{alt:u.alt,url:p})):o.a.createElement(d,{alt:u.alt,url:p})),r?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null))):null}}}]);