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
                <a
                  href="/the-ten-principles-of-the-un-global-compact/"
                  className="selected"
                >
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
          </div>
          <div id="sidecontent" className="fright">
            <h1>The Ten Principles of the UN Global Compact</h1>
            <p className="flex items-center justify-center text-center">
              <img src="/static/images/Untitled-1_1.jpg" />
              <br />
            </p>
            <p>
              Corporate sustainability starts with a company’s value system and
              a principled approach to doing business. This means operating in
              ways that, at a minimum, meet fundamental responsibilities in the
              areas of human rights, labour, environment and anti-corruption.
              Responsible businesses enact the same values and principles
              wherever they have a presence, and know that good practices in one
              area do not offset harm in another. By incorporating the Global
              Compact principles into strategies, policies and procedures, and
              establishing a culture of integrity, companies are not only
              upholding their basic responsibilities to people and planet, but
              also setting the stage for long-term success.
            </p>
            <h3>Human Rights</h3>
            <p>
              <a
                href="https://www.unglobalcompact.org/what-is-gc/mission/principles/principle-1"
                target="_blank"
              >
                Principle 1
              </a>
              : Businesses should support and respect the protection of
              internationally proclaimed human rights; and
            </p>
            <p>
              <a
                href="https://www.unglobalcompact.org/what-is-gc/mission/principles/principle-2"
                target="_blank"
              >
                Principle 2
              </a>
              : make sure that they are not complicit in human rights abuses.
            </p>
            <h3>Labour</h3>
            <p>
              <a
                href="https://www.unglobalcompact.org/what-is-gc/mission/principles/principle-3"
                target="_blank"
              >
                Principle 3
              </a>
              : Businesses should uphold the freedom of association and the
              effective recognition of the right to collective bargaining;
            </p>
            <p>
              <a
                href="https://www.unglobalcompact.org/what-is-gc/mission/principles/principle-4"
                target="_blank"
              >
                Principle 4
              </a>
              : the elimination of all forms of forced and compulsory labour;
            </p>
            <p>
              <a
                href="https://www.unglobalcompact.org/what-is-gc/mission/principles/principle-5"
                target="_blank"
              >
                Principle 5
              </a>
              : the effective abolition of child labour; and
            </p>
            <p>
              <a
                href="https://www.unglobalcompact.org/what-is-gc/mission/principles/principle-6"
                target="_blank"
              >
                Principle 6
              </a>
              : the elimination of discrimination in respect of employment and
              occupation.
            </p>
            <h3>Environment</h3>
            <p>
              <a
                href="https://www.unglobalcompact.org/what-is-gc/mission/principles/principle-7"
                target="_blank"
              >
                Principle 7
              </a>
              : Businesses should support a precautionary approach to
              environmental challenges;
            </p>
            <p>
              <a href="https://www.unglobalcompact.org/what-is-gc/mission/principles/principle-8">
                Principle 8
              </a>
              : undertake initiatives to promote greater environmental
              responsibility; and
            </p>
            <p>
              <a
                href="https://www.unglobalcompact.org/what-is-gc/mission/principles/principle-9"
                target="_blank"
              >
                Principle 9
              </a>
              : encourage the development and diffusion of environmentally
              friendly technologies.
            </p>
            <h3>Social links:</h3>
            <p>
              <a href="https://www.unglobalcompact.org/" target="_blank">
                https://www.unglobalcompact.org/
                <br />
              </a>
              <a
                href="https://www.facebook.com/UNGlobalCompact"
                target="_blank"
              >
                https://www.facebook.com/UNGlobalCompact
                <br />
              </a>
              <a href="https://twitter.com/globalcompact" target="_blank">
                https://twitter.com/globalcompact
                <br />
              </a>
              <a
                href="https://www.linkedin.com/company-beta/3575926"
                target="_blank"
              >
                https://www.linkedin.com/company-beta/3575926
                <br />
              </a>
              <a
                href="https://www.youtube.com/channel/UCvGxh25-RUvCcZJXHj32Zzg"
                target="_blank"
              >
                https://www.youtube.com/channel/UCvGxh25-RUvCcZJXHj32Zzg
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
