import Clients from "@/components/Clients";
import React from "react";

export default function page() {
  return (
    <div id="content">
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
          <a href="/portfolio/">
            <strong>Portfolio</strong>
          </a>
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
            href="/moncement-video-ad/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co//media/thenewmediagroup/content/Portfolio/moncement.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Moncement - Video ad</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/oyu-tolgoi/"
            style={{
              backgroundImage:
                'url("https://newmediamarketingagency.com/media/nmgteam/content/works/work%20uchral/Oyu%20Tolgoi/1.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>OYU TOLGOI</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/sukhbaatar-district/"
            style={{
              backgroundImage:
                'url("https://newmediamarketingagency.com/media/nmgteam/content/works/work%20uchral/Sukhbaatar%20District/placeit_2.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>SUKHBAATAR DISTRICT</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/darkhan-uul-province/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co//media/thenewmediagroup/content/uchral/darkhan.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Darkhan-Uul Province</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/shangri-la-centre/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co//media/thenewmediagroup/content/uchral/shangrila.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Shangri-La Centre</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/e-mart/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co//media/thenewmediagroup/content/Portfolio/placeit_7.jpg")',
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
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/Portfolio/placeit_3.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5> JET School Of English</h5>
            </div>
          </a>
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
        </div>
        <div className="portfolio-grid">
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
            href="/mongoliin-ardchilsan-kholboo/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/Portfolio/1_HI7qDKu.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Mongoliin Ardchilsan Kholboo</h5>
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
            href="/hasu-megawatt-llc/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/khasu.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Hasu Megawatt LLC</h5>
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
            href="/jijig-dund-uildver-erhlegchded-zoriulsan-medeelliin-san/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/sme.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Jijig Dund Uildver Erhlegchded Zoriulsan Medeelliin San</h5>
            </div>
          </a>
        </div>
        <div className="portfolio-grid">
          <a
            className="portfolio-box"
            href="/aimag-index/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/aimag.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Aimag Index</h5>
            </div>
          </a>
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
            href="/ochir-undraa-group/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/ou.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Ochir Undraa Group</h5>
            </div>
          </a>
          <a
            className="portfolio-box"
            href="/gem/"
            style={{
              backgroundImage:
                'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/placeit_17.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Gem</h5>
            </div>
          </a>
          <div className="clear" />
          <div className="pagination">
            <span className="disabled prev">‹‹ pager_previous</span>
            <span className="current page" id="current">
              1
            </span>
            <a href="?page=2">2</a>
            <a href="?page=3">3</a>
            <a href="?page=4">4</a>
            <a href="?page=2" className="next">
              pager_next ››
            </a>
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
}
