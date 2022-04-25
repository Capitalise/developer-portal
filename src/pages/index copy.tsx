import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="flex min-h-[40vh] items-center justify-center bg-gradient-to-br from-green-700  to-green-600">
      <div className="container text-white">
        <Link
          className="flex items-center no-underline hover:no-underline hover:text-white text-slate-200"
          to="/">
          <button className="px-2 py-1 font-mono text-xs tracking-widest text-center bg-green-600 rounded-full">
            NEW
          </button>
          <span className="ml-2">Credit profile widget is now live!</span>
        </Link>
        <h1 className="mt-2 mb-12 text-6xl font-semibold text-white">
          {siteConfig.title}
        </h1>
        <Link className="" to="/docs/intro">
          <button className="px-4 py-2 bg-teal-300 rounded hover:bg-teal-400">
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
