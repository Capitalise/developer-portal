import React from "react";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  link?: string; // If empty, `Coming soon` tag will show
  isNew?: boolean; // If true, `New` tag will show
  tags?: string[]; // Integration patern
};

const UseCases: FeatureItem[] = [
  {
    title: "Native credit profile",
    Svg: require("@site/static/img/index-native-credit-report.svg").default,
    link: "/use-cases/native-credit-report",
    tags: ["API"],
    isNew: true,
    description: (
      <>Offer credit profile of your users' businesses with your own branding</>
    ),
  },
  {
    title: "Credit profile widget",
    Svg: require("@site/static/img/index-credit-profile-widget.svg").default,
    link: "/use-cases/credit-profile-widget",
    tags: ["API", "iFrame", "JavaScript"],
    isNew: true,
    description: (
      <>
        Out-of-the-box widget to help users track business credit score directly
        from your platform
      </>
    ),
  },
  {
    title: "Embedded funding search",
    Svg: require("@site/static/img/index-embedded-funding-search.svg").default,
    link: "/use-cases/embedded-funding-search",
    tags: ["iFrame", "JavaScript"],
    description: (
      <>
        Low-code integration to offer funding search with over 100 lenders in 5
        minutes
      </>
    ),
  },
  {
    title: "Native funding search",
    Svg: require("@site/static/img/index-native-funding-search.svg").default,
    link: "/use-cases/native-funding-search",
    tags: ["API"],
    description: (
      <>
        Design your own native journey to help user search funding from over 100
        lenders
      </>
    ),
  },
  {
    title: "Native instant offers",
    Svg: require("@site/static/img/index-direct-referral.svg").default,
    tags: ["API"],
    description: (
      <>
        Integrate once with access to get instant offers from multiple lenders
      </>
    ),
  },
];

const ApiProducts: FeatureItem[] = [
  {
    title: "Business",
    Svg: require("@site/static/img/index-business.svg").default,
    link: "/api/business",
    isNew: true,
    description: (
      <>
        One-stop shop for small and medium businesses funding matching and
        intelligent scoring & insight services
      </>
    ),
  },
  {
    title: "Platform",
    Svg: require("@site/static/img/index-platform.svg").default,
    link: "/api/platform",
    description: <>Authentication and authorisation to Capitalise APIs</>,
  },
  {
    title: "Marketplace",
    Svg: require("@site/static/img/index-marketplace.svg").default,
    link: "/api/marketplace/v1",
    description: <>Funding matching services with over 100 lenders</>,
  },
];

function Feature({ link, title, Svg, description, tags, isNew }: FeatureItem) {
  return (
    <Link to={link} className="card padding-horiz--md">
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
            <span className="badge badge--success">NEW</span>
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
