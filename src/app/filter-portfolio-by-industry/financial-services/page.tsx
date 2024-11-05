import Clients from "@/components/Clients";
import React from "react";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: "\n\t\t#content{\n\t\t\tmargin-top: 0;\n\t\t}\n\t",
        }}
      />
      <div className="portfolio-header">
        <div className="wrapper relative">
          <div className="p-filter">
            <div>
              Filter portfolio by Industry <span>▼</span>
              <ul>
                <li>
                  <a href="/filter-portfolio-by-industry/automotive/">
                    Automotive
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/construction/">
                    Construction
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/consumer-products/">
                    Consumer Products
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/financial-services/">
                    Financial Services
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/food-beverage-tobacco/">
                    Food, Beverage &amp; Tobacco
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/manufacturing/">
                    Manufacturing
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/newspaper-publishers/">
                    Newspaper Publishers
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/real-estate/">
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/retail-wholesale/">
                    Retail &amp; Wholesale
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/service/">Service</a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/television/">
                    Television
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/tourism/">Tourism</a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/international-organization/">
                    International organization
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/government/">
                    Government
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/public-figure/">
                    Public figure
                  </a>
                </li>
                <li>
                  <a href="/filter-portfolio-by-industry/non-governmental-organization/">
                    Non-governmental organization
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a href="/portfolio/">Portfolio</a>
          <a href="/portfolio/marketing-consulting/">Marketing consulting</a>
          <a href="/portfolio/technology-development/">
            Technology development
          </a>
          <a href="/portfolio/creative-solution/">Creative solution</a>
          <div className="clear" />
        </div>
      </div>
      <div className="wrapper">
        <h2>
          The New Media Group is a social enterprise that builds companies,
          communities and partnerships
        </h2>
      </div>
      <div id="cateogry_portfolio">
        <div className="portfolio-grid">
          <a
            className="portfolio-box"
            href="/accounting/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/ac.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Accounting</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/capital-bank/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/1_1_taXcdiz.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>CAPITAL BANK</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/golomt-securities/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/1_YsYlmiN.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>GOLOMT SECURITIES</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/xac-leasing/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/khas_leasing1.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>XAC LEASING</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/tenger-financial-group/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/Portfolio/placeit_MBSLxtJ.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>TENGER FINANCIAL GROUP</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/development-bank-of-mongolia/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/Portfolio/DBM.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>DEVELOPMENT BANK OF MONGOLIA</h5>
            </div>
          </a>
          <div className="clear" />
        </div>
      </div>
      <Clients />
    </div>
  );
}
