import Clients from "@/components/Clients";
import React from "react";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <div className="wrapper">
        <div className="ln5">
          <div id="sidemenu" className="fleft">
            <div className="title">What we believe</div>
            <ul>
              <li>
                <a href="/certified-b-corporation/">Certified B Corporation</a>
              </li>
              <li>
                <a href="/the-oath-project/">The Oath Project</a>
              </li>
              <li>
                <a
                  href="/the-global-impact-investing-ratings-system/"
                  className="selected"
                >
                  The Global Impact Investing Ratings System
                </a>
              </li>
              <li>
                <a href="/pledge-1/">Pledge 1%</a>
              </li>
              <li>
                <a href="/the-ten-principles-of-the-un-global-compact/">
                  The Ten Principles of the UN Global Compact
                </a>
              </li>
              <li>
                <a href="/heforshe/">HeForShe</a>
              </li>
              <li>
                <a href="/human-centered-core-value/">
                  Human-Centered Core Value
                </a>
              </li>
              <li>
                <a href="/highest-number-of-projects-implemented-in-2015/">
                  Highest number of projects implemented in 2015
                </a>
              </li>
            </ul>
            <div className="title">Leadership</div>
            <ul>
              <li>
                <a href="/leadership/">Leadership</a>
              </li>
              <li>
                <a href="/advisory-board/">Advisory Board</a>
              </li>
            </ul>
          </div>
          <div id="sidecontent" className="fright">
            <h1>The Global Impact Investing Ratings System</h1>
            <p className="flex items-center justify-center text-center">
              <img
                src="/static/images/giirs (1).png"
                className="nmma_plugin_object nmma_plugin_object_image"
              />
            </p>
            <h3>Driving Capital to Impact</h3>
            <p>
              The impact investing industry is facilitating investments that are
              not only socially responsible, but which also actively create
              positive social and environmental impact. In order to scale the
              impact investing marketplace, investors require an independent
              third-party impact ratings product that is comparable,
              transparent, and easy to use. Learn more about impact investing.
            </p>
            <p>
              A key impediment to new capital flowing into the impact investing
              marketplace continues to be a lack of easy to use tools to assess,
              benchmark, and report impact. Most impact investors lack the
              expertise, staffing, data, and technology to build their own
              approach to judging impact, so they remain on the sidelines for
              lack of ability to compare investment opportunities across
              markets, industries, and impact areas using comparable,
              transparent, and independently verified tools. For this reason,
              many players in the impact investing space have expressed a desire
              to see a ratings and analytics platform that can facilitate the
              flow of capital and provide leadership on judging impact
              performance as a public good.
            </p>
            <h3>Why is GIIRS well-suited to solve this problem?</h3>
            <p>
              GIIRS (pronounced "gears," stands for Global Impact Investing
              Rating System) is a comprehensive and transparent system for
              assessing the social and environmental impact of developed and
              emerging market companies and funds with a ratings and analytics
              approach analogous to Morningstar investment rankings and Capital
              IQ financial analytics.
            </p>
            <p>
              GIIRS is uniquely positioned in the impact investing marketplace
              because GIIRS is the only entity that has: a focus on the impact
              performance of private companies; that uses a cross-industry and
              cross-geographic methodology; and that provides transparent,
              independent, and verified data. GIIRS is a hybrid private/public
              good in that while it charges for its services in order to become
              sustainable, it is a non-profit entity that publishes data for
              public use and educates/advocates about impact investing and
              impact metrics, and it maintains transparent standards and an
              assessment tool that can be used by anyone for internal use for
              free.
            </p>
            <h3>What will change when GIIRS has scaled?</h3>
            <p>
              When GIIRS has scaled, GIIRS will be a normal part of the
              investment process for companies, funds and investors for impact
              investments globally and as a result there will be an:
            </p>
            <ul>
              <li>
                Increase in the amount of $ invested in impact investments
              </li>
              <li>
                Increase in the efficiency of the due diligence, investment, and
                reporting process for impact investments
              </li>
              <li>
                Measurable improvements in the impact of rated companies and
                funds as they seek to improve their GIIRS ratings
              </li>
              <li>
                Increase in capital invested in high impact, impact investing
                opportunities
              </li>
              <li>
                A better understanding of the field of impact investing, as
                GIIRS publishes data on aggregate market impact performance and
                provides education to investors on how to utilize the impact
                data collected through GIIRS
              </li>
            </ul>
            <h3>Social links</h3>
            <a href="http://giirs.org/" target="_blank">
              http://giirs.org/
            </a>
          </div>
          <div className="clear" />
        </div>
        <div className="clear" />
      </div>
      <Clients />
    </div>
  );
}
