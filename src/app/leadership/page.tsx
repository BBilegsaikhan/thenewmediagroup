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
                <a href="/leadership/" className="selected">
                  Leadership
                </a>
              </li>
              <li>
                <a href="/advisory-board/">Advisory Board</a>
              </li>
            </ul>
          </div>
          <div id="sidecontent" className="fright">
            <h1>Leadership</h1>
            <div className="team-wrapper">
              <div className="team">
                <figure>
                  <img
                    src="/static/images/Shinegerel-Nyamsuren.jpg"
                    data-image="11gt15nukfa8"
                  />
                </figure>
                <h3>
                  <strong>Shinegerel</strong> Nyamsuren
                </h3>
                <div className="position">Chairman</div>
              </div>
              <div className="team">
                <figure>
                  <img
                    src="/static/images/Mend-Orshikh-Amartaivan.jpg"
                    data-image="x4ornm8tuia2"
                  />
                </figure>
                <h3>
                  <strong>Mend-Orshikh</strong> Amartaivan
                </h3>
                <div className="position">Founder and President</div>
              </div>
              <div className="team">
                <figure>
                  <img
                    src="/static/images/Tuguldur-Turbat.jpg"
                    data-image="nbjasopxle8h"
                  />
                </figure>
                <h3>
                  <strong>Tuguldur</strong> Turbat
                </h3>
                <div className="position">VP of Communication</div>
              </div>
              <div className="team">
                <figure>
                  <img
                    src="/static/images/Luvsandorj-Jamsranjav.jpg"
                    data-image="zvxsta5zc5jd"
                  />
                </figure>
                <h3>
                  <strong>Luvsandorj</strong> Jamsranjav
                </h3>
                <div className="position">VP of Knowledge</div>
              </div>
              <div className="team">
                <figure>
                  <img
                    src="/static/images/Travis-Hellstrom.jpg"
                    data-image="9564v76b75xp"
                  />
                </figure>
                <h3>
                  <strong>Travis </strong> Hellstrom
                </h3>
                <div className="position">VP of Global Relation</div>
              </div>
              <div className="team">
                <figure>
                  <img
                    src="/static/images/Uyanga-Vladimir.jpg"
                    data-image="yq1eoutlq2vy"
                  />
                </figure>
                <h3>
                  <strong>Uyanga</strong> Vladimir
                </h3>
                <div className="position">VP of Partnership</div>
              </div>
              <div className="team">
                <figure>
                  <img
                    src="/static/images/Naran-Batjargal.jpg"
                    data-image="iaa6u1to5lcn"
                  />
                </figure>
                <h3>
                  <strong>Naran</strong> Batjargal
                </h3>
                <div className="position">Chief Financial Officer</div>
              </div>
              <div className="team">
                <figure>
                  <img
                    src="/static/images/Batchimeg-Khishigt.jpg"
                    data-image="s6zfxrb6wanc"
                  />
                </figure>
                <h3>
                  <strong>Batchimeg</strong> Khishigt
                </h3>
                <p>Chief Executive Officer</p>
              </div>
              <div className="team">
                <figure>
                  <img
                    src="/static/images/-8464697490415703724_300_x_300.jpg"
                    data-image="hgw8umorlbll"
                  />
                </figure>
                <h3>
                  <strong>Bat-Amar</strong> Battulga
                </h3>
                <p>Chief Technology Officer</p>
              </div>
              <div className="team">
                <figure>
                  <img
                    src="/static/images/-4606271830311144366_300_x_300.jpg"
                    data-image="nq09e9hhe0qh"
                  />
                </figure>
                <h3>
                  <strong>Batchimeg</strong> Bat-erdene
                </h3>
                <p>Chief Product Officer</p>
              </div>
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
