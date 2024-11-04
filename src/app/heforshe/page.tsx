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
                <a href="/heforshe/" className="selected">
                  HeForShe
                </a>
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
            <h1>HeForShe</h1>
            <p className="flex items-center justify-center text-center">
              <img
                src="/static/images/HeforShe_s.jpg"
                className="nmma_plugin_object_h4s nmma_plugin_object_h4s_image"
              />
            </p>
            <p>
              HeForShe (often referred to as He for She) is a solidarity
              campaign for the advancement of gender equality, initiated by UN.
              Its goal is to achieve equality by encouraging all genders as
              agents of change and take action against negative stereotypes and
              behaviors, faced by people with feminine personalities/genders.
              Grounded in the idea that gender inequality is an issue that
              affects all people—socially, economically and politically—it seeks
              to actively involve men and boys in a movement that was originally
              conceived as "a struggle for women by women".
            </p>
            <p>
              Gender Equality has always been an important concern for The New
              Media Group as its culture often promotes equality for different
              genders and disability statuses as well. We, the New Medians, have
              joined the HeForShe movement since 8th July, 2018 the date that
              movement itself was officially implemented in Mongolia first time.
            </p>
            <p>
              We solemnly believe that promoting equality between different
              genders, different races or physicalities as well will bring
              difference for situations in our country by erasing the difference
              and delay between Mongolia and the whole world since the big
              context "Humanity" itself was and is the ultimate value for us all
              people on earth.
            </p>
            <h3>Social links:</h3>
            <p>
              <a href="http://www.heforshe.org/en" target="_blank">
                http://www.heforshe.org/en
              </a>
              <br />
              <a href="https://twitter.com/heforshe" target="_blank">
                https://twitter.com/heforshe
              </a>
              <br />
              <a
                href="https://www.facebook.com/HeForShe/?ref=br_rs"
                target="_blank"
              >
                https://www.facebook.com/HeForShe/?ref=br_rs
              </a>
              <br />
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
