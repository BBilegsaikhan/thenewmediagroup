import Clients from '@/components/Clients'
import Link from 'next/link'
import React from 'react'

const MAIN_MENUS = [
  {
    title: 'OYU TOLGOI',
    link: '/oyu-tolgoi/',
    image: 'url("https://thenewmediagroup.co/media/thenewmediagroup/content/uchral/placeit_16.jpg")',
  },
  {
    title: 'SUKHBAATAR DISTRICT',
    link: '/sukhbaatar-district/',
    image:
      'url("http://newmediamarketingagency.com/media/nmgteam/content/works/work%20uchral/Sukhbaatar%20District/placeit_2.jpg")',
  },
  {
    title: 'Darkhan-Uul Province',
    link: '/darkhan-uul-province/',
    image: 'url("/media/thenewmediagroup/content/uchral/darkhan.jpg")',
  },
  {
    title: 'Shangri-La Centre',
    link: '/shangri-la-centre/',
    image: 'url("/media/thenewmediagroup/content/uchral/shangrila.jpg")',
  },
  { title: 'E-Mart', link: '/e-mart/', image: 'url("/media/thenewmediagroup/content/Portfolio/placeit_7.jpg")' },
  {
    title: ' JET School Of English',
    link: '/jet-school-of-english/',
    image: 'url("/media/thenewmediagroup/content/Portfolio/placeit_3.jpg")',
  },
  {
    title: ' GREAT British Fair Mongolia 2015',
    link: '/great-british-fair-mongolia-2015/',
    image: 'url("/media/thenewmediagroup/content/Portfolio/Poster_web_fb_.jpg")',
  },
  {
    title: 'Hackathon Youth 2015',
    link: '/hackathon-youth-2015/',
    image: 'url("/media/thenewmediagroup/content/Portfolio/11872245_757567294387216_7152081357512143032_o.jpg")',
  },
]

export default function page() {
  return (
    <div id="content" style={{ display: 'block' }}>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: '\n\t\t#content{\n\t\t\tmargin-top: 0;\n\t\t}\n\t',
        }}
      />
      <div className="portfolio-header">
        <div className="wrapper relative">
          <div className="p-filter">
            <div>
              Filter portfolio by Industry <span>▼</span>
              <ul>
                <li>
                  <Link href="/filter-portfolio-by-industry/automotive/">Automotive</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/construction/">Construction</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/consumer-products/">Consumer Products</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/financial-services/">Financial Services</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/food-beverage-tobacco/">Food, Beverage &amp; Tobacco</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/manufacturing/">Manufacturing</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/newspaper-publishers/">Newspaper Publishers</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/real-estate/">Real Estate</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/retail-wholesale/">Retail &amp; Wholesale</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/service/">Service</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/television/">Television</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/tourism/">Tourism</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/international-organization/">
                    International organization
                  </Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/government/">Government</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/public-figure/">Public figure</Link>
                </li>
                <li>
                  <Link href="/filter-portfolio-by-industry/non-governmental-organization">
                    Non-governmental organization
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/portfolio/"> Portfolio </Link>
          <Link href="/portfolio/marketing-consulting/">Marketing consulting</Link>
          <Link href="/portfolio/technology-development/">Technology development</Link>
          <Link href="/portfolio/creative-solution/">Creative solution</Link>
          <div className="clear" />
        </div>
      </div>
      <div className="wrapper">
        <h2>The New Media Group is a social enterprise that builds companies, communities and partnerships</h2>
      </div>
      <div id="cateogry_portfolio">
        <div className="portfolio-grid">
          {MAIN_MENUS.map((menu, index) => (
            <Link
              key={index}
              className="portfolio-box"
              href={menu.link}
              style={{
                backgroundImage: menu.image,
              }}
            >
              <div className="curtain" />
              <div className="caption">
                <h5>{menu.title}</h5>
              </div>
            </Link>
          ))}
        </div>
        <div className="portfolio-grid">
          <Link
            className="portfolio-box"
            href="/mongoliin-ardchilsan-kholboo/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/Portfolio/1_HI7qDKu.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Mongoliin Ardchilsan Kholboo</h5>
            </div>
          </Link>
          <Link
            className="portfolio-box"
            href="/pizza-hut/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/placeit-4.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Pizza Hut</h5>
            </div>
          </Link>
          <Link
            className="portfolio-box"
            href="/hasu-megawatt-llc/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/uchral/khasu.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Hasu Megawatt LLC</h5>
            </div>
          </Link>
          <Link
            className="portfolio-box"
            href="/bloomberg-tv-mongolia/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/uchral/1_4fpStNF.png")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>BLOOMBERG TV MONGOLIA</h5>
            </div>
          </Link>
          <Link
            className="portfolio-box"
            href="/jijig-dund-uildver-erhlegchded-zoriulsan-medeelliin-san/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/uchral/sme.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Jijig Dund Uildver Erhlegchded Zoriulsan Medeelliin San</h5>
            </div>
          </Link>
          <Link
            className="portfolio-box"
            href="/aimag-index/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/uchral/aimag.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Aimag Index</h5>
            </div>
          </Link>
          <Link
            className="portfolio-box"
            href="/accounting/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/ac.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Accounting</h5>
            </div>
          </Link>
          <Link
            className="portfolio-box"
            href="/ochir-undraa-group/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/uchral/ou.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Ochir Undraa Group</h5>
            </div>
          </Link>
        </div>
        <div className="portfolio-grid">
          <Link
            className="portfolio-box"
            href="/gem/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/uchral/placeit_17.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Gem</h5>
            </div>
          </Link>
          <a
            className="portfolio-box"
            href="/mongolian-secret-history/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/uchral/placeit_16.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Mongolian Secret History</h5>
            </div>
          </a>
          <Link
            className="portfolio-box"
            href="/unique-travel/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/placeit_16.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Unique Travel</h5>
            </div>
          </Link>
          <Link
            className="portfolio-box"
            href="/tuguldur-foundation/"
            style={{
              backgroundImage: 'url("/media/thenewmediagroup/content/uchral/placeit_16_YH6Xw0q.jpg")',
            }}
          >
            <div className="curtain" />
            <div className="caption">
              <h5>Tuguldur Foundation</h5>
            </div>
          </Link>
          <div className="clear" />
          <div className="pagination">
            <span className="disabled prev">‹‹ pager_previous</span>
            <span className="current page" id="current">
              1
            </span>
            <Link href="?page=2&_=1718171251846">2</Link>
            <Link href="?page=3&_=1718171251846">3</Link>
            <Link href="?page=4&_=1718171251846">4</Link>
            <Link href="?page=2&_=1718171251846" className="next">
              pager_next ››
            </Link>
          </div>
        </div>
      </div>
      <Clients />
    </div>
  )
}
