import Clients from "@/components/Clients";
import React from "react";

export default function page() {
  return (
    <div id="content">
      <div className="wrapper">
        <div className="ln5">
          <div id="sidemenu" className="fleft">
            <div className="title">What we believe</div>
            <ul>
              <li>
                <a href="/certified-b-corporation/" className="selected">
                  Certified B Corporation
                </a>
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
            <h1>Certified B Corporation</h1>
            <p className="flex items-center justify-center text-center">
              <img
                src="/static/images/bcorp.jpg"
                className="nmma_plugin_object nmma_plugin_object_image"
              />
            </p>
            <p>
              The New Media Group is a social enterprise leading the way in
              Mongolia and across Asia as the Founding Certified B Corporation
              in the region. The New Media Group is made up of several
              subsidiary companies focusing on commerce, design, investment,
              marketing and technology. As a social enterprise, which empowers
              human-centered business, its utmost goal is to create a positive
              and friendly corporate culture.
            </p>
            <p>
              Additionally, The New Media Group has cultivated strong social
              engagement through its human-centered social responsibility
              programs and is dedicated to supporting nonprofits and
              international organizations who are working to help people in
              Mongolia and around the world.
            </p>
            <h3>Why we became a B Corp</h3>
            <p>
              It is our lifelong mission to build businesses, support
              communities and solve environmental and social problems. We
              believe our commitment to make society a better place through
              running businesses and giving back to the community is perfectly
              in line with B Corp’s ultimate mission to encourage a better way
              of doing business.
            </p>
            <h3>The Change We Seek</h3>
            <p>
              We became the Founding B Corporation in Asia because we believe in
              the B Corporation movement and want to strengthen its growth
              throughout Mongolia and the rest of the world through our products
              and services.
            </p>
            <h3>Social links:</h3>
            <p>
              <a
                href="http://www.bcorporation.net/community/the-new-media-group"
                target="_blank"
              >
                http://www.bcorporation.net/community/the-new-media-group
                <br />
              </a>
              <a href="http://bcorporation.net/" target="_blank">
                http://bcorporation.net/
                <br />
              </a>
              <a href="https://www.facebook.com/bcorporation" target="_blank">
                http://facebook.com/bcorporation/
                <br />
              </a>
              <a href="https://twitter.com/bcorporation/" target="_blank">
                http://twitter.com/bcorporation/
                <br />
              </a>
              <a href="http://linkedin.com/groups?gid=1121967" target="_blank">
                http://linkedin.com/groups?gid=1121967
                <br />
              </a>
              <a href="https://youtube.com/user/bcorporations" target="_blank">
                http://youtube.com/user/bcorporations
                <br />
              </a>
              <a
                href="https://plus.google.com/u/0/+BCorporation/posts"
                target="_blank"
              >
                https://plus.google.com/u/0/+BCorporation/posts
                <br />
              </a>
              <a href="https://instagram.com/bcorporation" target="_blank">
                http://instagram.com/bcorporation
                <br />
              </a>
              <a href="https://pinterest.com/bcorporation/" target="_blank">
                http://pinterest.com/bcorporation/
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
