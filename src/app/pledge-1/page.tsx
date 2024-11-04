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
                <a href="/pledge-1/" className="selected">
                  Pledge 1%
                </a>
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
            <h1>Pledge 1%</h1>
            <p>
              <img
                src="/static/images/time_pledage.jpg"
                alt=""
                style={{ width: 343, display: "block", margin: "auto" }}
              />
              <span className="redactor-invisible-space" />
            </p>
            <p>
              Pledge 1% is a corporate philanthropy movement dedicated to making
              the community a key stakeholder in every business. Pledge 1%
              encourages and challenges individuals and companies to pledge 1%
              of equity, product, and employee time for their communities.
              <span className="redactor-invisible-space" />
            </p>
            <h3>Social links:</h3>
            <p>
              <a href="http://pledge1percent.org/" target="_blank">
                http://pledge1percent.org/
              </a>
              <br />
              <a href="https://twitter.com/pledgeone" target="_blank">
                https://twitter.com/pledgeone
              </a>
              <br />
              <a
                href="https://www.linkedin.com/groups/6717331/profile"
                target="_blank"
              >
                https://www.linkedin.com/groups/6717331/profile
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
