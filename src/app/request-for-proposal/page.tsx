import React from "react";
import Clients from "@/components/Clients";
export default function page() {
  return (
    <div id="content">
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
            <h1>Request for Proposal</h1>
            <div id="form_container_5">
              <div
                data-erxes-embed="GtEe2hyYWkSDQXouC"
                style={{ width: "100%", height: 500, position: "relative" }}
              />
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="clear" />
      </div>
      <Clients />
    </div>
  );
}
