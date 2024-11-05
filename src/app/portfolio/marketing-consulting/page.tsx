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
          <a href="/portfolio/marketing-consulting/">
            <strong>Marketing consulting</strong>
          </a>
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
            href="/great-british-fair-mongolia-2015/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/Portfolio/Poster_web_fb_.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5> GREAT British Fair Mongolia 2015</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/hackathon-youth-2015/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/Portfolio/11872245_757567294387216_7152081357512143032_o.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Hackathon Youth 2015</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/mongolian-beekeepers-association/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/Portfolio/honey.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Mongolian Beekeepers Association </h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/pizza-hut/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/placeit-4.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Pizza Hut</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/kfc-mongolia/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/placeit-2.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>KFC Mongolia</h5>
            </div>
          </a>
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
            href="/the-coffee-bean-and-tea-leaf/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/CoffeeBeanandTeaLeaf052510-01-masterwits-cc-390x235.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>The Coffee Bean And Tea Leaf</h5>
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
        </div>
        <div className="portfolio-grid">
          <a
            className="portfolio-box"
            href="/national-life-insurance/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/creative/2.png")',
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
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/1_1.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>WAGNER ASIA AUTOMOTIVE LLC</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/tengis-cinema/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/1_4qRVjAR.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>TENGIS CINEMA</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/millennium-challenge-corporation/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/5.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>MILLENNIUM CHALLENGE CORPORATION</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/heineken/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/Portfolio/Heineken.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>HEINEKEN</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/state-bank/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/Portfolio/placeit.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>STATE BANK</h5>
            </div>
          </a>
          <div className="clear" />
        </div>
      </div>
      <Clients />
    </div>
  );
}
