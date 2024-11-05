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
            href="/bloomberg-tv-mongolia/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/1_4fpStNF.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>BLOOMBERG TV MONGOLIA</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/mongol-tv/"
            style={{
              backgroundImage:
                'url("http://newmediamarketingagency.com/media/nmgteam/content/works/work%20uchral/Mongol%20Tv/2_Mongol_Tv.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>MONGOL TV</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/%D1%83%D0%BB%D1%81-%D1%82%D3%A9%D1%80%D0%B4-%D1%88%D0%B8%D0%BD%D1%8D-%D0%BC%D0%B0%D0%BD%D0%BB%D0%B0%D0%B9%D0%BB%D0%B0%D0%B3%D1%87/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/Portfolio/manlailagch.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Улс төрд шинэ манлайлагч</h5>
            </div>
          </a>
          <div className="clear" />
        </div>
      </div>
      <Clients />
    </div>
  );
}
