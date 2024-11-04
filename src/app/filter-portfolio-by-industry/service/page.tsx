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
            href="/e-mart/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/Portfolio/placeit_7.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>E-Mart</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/jet-school-of-english/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/Portfolio/placeit_3.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5> JET School Of English</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/hunnu-mall/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/1_YIYyyTv.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>HUNNU MALL</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/everyday/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/Everyday1.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>EVERYDAY</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/tavin-us/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/50_us1.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>TAVIN-US</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/sansar-media-group/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/sansar2.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>SANSAR MEDIA GROUP</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/mongolian-student-sports-federation/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/1_BOJLrkl.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>MONGOLIAN STUDENT SPORTS FEDERATION</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/mongolia-pavilion/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/1.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>MONGOLIA PAVILION</h5>
            </div>
          </a>
        </div>
        <div className="portfolio-grid">
          <a
            className="portfolio-box"
            href="/gatsuurt/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/1_1_Q1HlsZF.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>GATSUURT</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/tenger-insurance/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/tenger_daatgal1.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>TENGER INSURANCE</h5>
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
            href="/tengis-cinema/"
            style={{
              backgroundImage:
                'url("/media/thenewmediagroup/content/uchral/1_4qRVjAR.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>TENGIS CINEMA</h5>
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
          <div className="clear" />
        </div>
      </div>
      <Clients />
    </div>
  );
}
