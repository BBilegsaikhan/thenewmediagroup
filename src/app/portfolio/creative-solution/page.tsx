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
          <a href="/portfolio/creative-solution/">
            <strong>Creative solution</strong>
          </a>
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
            href="/moncement-video-ad/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/Portfolio/moncement.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Moncement - Video ad</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/mongolian-beekeepers-association/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/Portfolio/honey.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Mongolian Beekeepers Association </h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/bluefin-the-steak-house/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/Bluefin1.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>BLUEFIN THE STEAK HOUSE</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/national-life-insurance/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/creative/2.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>NATIONAL LIFE INSURANCE</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/wagner-asia-automotive-llc/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/1_1.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>WAGNER ASIA AUTOMOTIVE LLC</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/mongolian-star-distribution-llc/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/creative/mongolian_star_distrbution_logo.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Mongolian Star Distribution LLC</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/just-oil/"
            style={{
              backgroundImage:
                'url("http://newmediamarketingagency.com/media/nmgteam/content/works/creative/brandbook/justoil/3.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Just Oil</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/europharma/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/creative/9.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Europharma</h5>
            </div>
          </a>
        </div>
        <div className="portfolio-grid">
          <div className="clear" />
        </div>
      </div>
      <Clients />
    </div>
  );
}
