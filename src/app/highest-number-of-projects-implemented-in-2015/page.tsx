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
                <a href="/the-global-impact-investing-ratings-system/">
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
                <a
                  href="/highest-number-of-projects-implemented-in-2015/"
                  className="selected"
                >
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
            <h1>Highest number of projects implemented in 2015</h1>
            <p style={{ textAlign: "center" }}>
              <img
                src="/static/images/ebrd.png"
                style={{ lineHeight: "1.6em" }}
              />
            </p>
            <p>
              The New Media Group was awarded "Highest number of projects
              implemented in 2015" on the 3rd March, 2016.
            </p>
            <p>
              The European Bank for Reconstruction and Development (EBRD) is an
              international financial institution founded in 1991. As a
              multilateral developmental investment bank, the EBRD uses
              investment as a tool to build market economies. Initially focused
              on the countries of the former Eastern Bloc it expanded to support
              development in 30 countries from central Europe to central Asia.
              Besides Europe, member countries of the EBRD are from all 5
              continents (North America, Africa, Asia and Australia see below),
              with the biggest shareholder being the United States, so the name
              is somewhat of a misnomer. Headquartered in London, the EBRD is
              owned by 65 countries and two EU institutions. Despite its public
              sector shareholders, it invests mainly in private enterprises,
              together with commercial partners.
            </p>
            <h3>Social links:</h3>
            <p>
              <a
                href="http://www.ebrd.com/home"
                target="_blank"
                rel="noreferrer"
              >
                http://www.ebrd.com/home
              </a>
              <br />
              <a
                href="https://twitter.com/ebrd"
                target="_blank"
                rel="noreferrer"
              >
                https://twitter.com/ebrd
              </a>
              <br />
              <a
                href="https://www.facebook.com/ebrdhq"
                target="_blank"
                rel="noreferrer"
              >
                https://www.facebook.com/ebrdhq
              </a>
            </p>
          </div>
          <div className="clear" />
        </div>
        <div className="clear" />
      </div>
      <Clients />
    </div>
  );
}
