import React from "react";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  link: string;
  description: JSX.Element;
  tags: string[];
  isNew: boolean;
};

const UseCases = [
  {
    title: "Credit profile widget",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    svg_path: "/static/img/undraw_docusaurus_mountain.svg",
    link: "/use-cases/credit-profile-widget",
    tags: ["API", "Iframe", "JavaScript"],
    isNew: true,
    description: (
      <>Help users track business credit score directly from your platform</>
    ),
  },
  {
    title: "Embedded funding search",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    link: "/use-cases/embedded-funding-search",
    tags: ["Iframe", "JavaScript"],
    description: (
      <>
        Help users funding funding for from with over 100 lenders in 5 minutes
      </>
    ),
  },
  {
    title: "Native funding search",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    tags: ["API"],
    description: (
      <>
        Design your own native journey to help user fund funding from over 100
        lenders
      </>
    ),
  },
  {
    title: "Direct referral",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    tags: ["HTML"],
    description: (
      <>Directly refer users to our platform and search for funding</>
    ),
  },
];

const ApiProducts = [
  {
    title: "Platform",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    link: "/api/platform",
    description: (
      <>
        Customer benefits customer benefits a lot of customer benefits and
        customer benefits continue and going on an on - but snappy!
      </>
    ),
  },
  {
    title: "Marketplace",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    link: "/api/marketplace",
    description: (
      <>
        Customer benefits customer benefits a lot of customer benefits and
        customer benefits continue and going on an on - but snappy!
      </>
    ),
  },
];

function Feature({ link, title, Svg, description, tags, isNew }: FeatureItem) {
  return (
    <Link to={link} className=" card padding-horiz--md">
      <div className="card__image">
        <Svg role="img" />
      </div>
      <div className="card__body">
        <h3>{title}</h3>
        {!link && (
          <p className="featured-badge">
            <span className="badge badge--secondary">COMING SOON</span>
          </p>
        )}
        {isNew && (
          <p className="featured-badge">
            <span className="badge badge--info">NEW</span>
          </p>
        )}
        <p>{description}</p>
      </div>
      {tags && (
        <div className="card__footer">
          <div className="button-group button-group--block">
            <ul className="pills">
              {tags
                ? tags.map((tag) => (
                    <li className="pills__item pills__item--active" key={tag}>
                      {tag}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      )}
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section>
        <h2>Use cases</h2>
        <div className="container flex">
          {UseCases.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>
      <section>
        <h2>API products</h2>
        <div className="container flex">
          {ApiProducts.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>
    </>
  );
}
