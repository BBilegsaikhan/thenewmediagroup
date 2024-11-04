import React from "react";

export default function Footer() {
  return (
    <div id="footer " className="footerlogofunc">
      <div className="wrapper ln5">
        <div className="">
          <div className="col-1-5 fcol mobile-col-1-2 tablet-col-1-3">
            <h4>Ulaanbaatar Office:</h4>
            <p>
              Apartment 12 #220,
              <br /> 4th Sub-District <br /> 7th Khoroo, Bayangol District{" "}
              <br />
              Ulaanbaatar, Mongolia <br /> Tel: +976 11 365555
            </p>
          </div>
          <div className="col-1-7 fcol grid grid-pad mobile-col-1-2 tablet-col-1-3">
            <div className="bcorp tablet-clear cert-img">
              <a href="/the-ten-principles-of-the-un-global-compact/">
                <img
                  src="/static/images/global_compact.jpg"
                  width=""
                  alt="Global Compact"
                  height="115px"
                  style={{ float: "right" }}
                />
              </a>
            </div>
          </div>
          <div className="col-6-12 tablet-clear cert-img">
            <div className=" grid-pad">
              <div className="col-1-4 tablet-col-1-2 bcorp">
                <a href="/pledge-1/">
                  <img
                    src="/static/images/pledge1.jpg"
                    width=""
                    alt="Pledge 1%"
                  />
                </a>
              </div>
              <div className="col-1-4 tablet-col-1-2 bcorp">
                <a href="/certified-b-corporation/">
                  <img
                    src="/static/images/bcorp.png"
                    width=""
                    alt="B Corporation"
                  />
                </a>
              </div>
              <div className="col-1-4 tablet-col-1-2 giirs">
                <a
                  className="giirs"
                  href="/the-global-impact-investing-ratings-system/"
                >
                  <img
                    src="/static/images/giirs.png"
                    alt="The Global Impact Investing Ratings System"
                  />
                </a>
              </div>
              <div className="col-1-4 tablet-col-1-2 col-no-pad">
                <a href="/highest-number-of-projects-implemented-in-2015/">
                  <img
                    src="/static/images/badge.png"
                    alt="Highest number of projects implemented in 2015"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className="he4she col-1-7 fcol grid grid-pad mobile-col-1-2 tablet-col-1-3"
            style={{ padding: "0 10px", borderLeft: "none" }}
          >
            <div className="bcorp tablet-clear heforshe">
              <a className="heforshe" href="/heforshe/">
                <img src="/static/images/He_for_she.png" alt="HeForShe" />
              </a>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
      <div className="footer-bottom">
        <div className="wrapper">
          <div className="left mr40 no-border">
            <div id="socialicons">
              <a href="https://facebook.com/NMGteam/" target="_blank">
                <span className="icon-facebook" />
              </a>
              <a href="https://twitter.com/NMGTeam/" target="_blank">
                <span className="icon-twitter" />
              </a>
              <a
                href="http://linkedin.com/company/the-new-media-group/"
                target="_blank"
              >
                <span className="icon-linkedin" />
              </a>
              <a
                className="bordered"
                href="mailto:info@thenewmediagroup.co?Subject=To%20NMGroup"
                target="_top"
              >
                <span className="icon-envelope" />
              </a>
            </div>
          </div>
          <div className="right cert hide-on-mobile">
            <p>All Rights Reserved. Copyright ©1990-2024.</p>
          </div>
          <div className="clear" />
        </div>
      </div>
    </div>
  );
}
