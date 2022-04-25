import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--primary index">
      <div className="container">
        <Link className="hot-news" to="/use-cases/credit-profile-widget">
          <span className="badge badge--secondary">NEW</span>
          <span className=""> Credit profile widget is now live!</span>
        </Link>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <Link className="" to="/use-cases">
          <button className="button button--secondary button--lg">
            Get started - 5min ⏱️
          </button>
        </Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
