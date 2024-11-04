"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function FullScreenSlider() {
  return (
    <div className="group-slider owl-carousel owl-theme">
      <div className="owl-wrapper-outer autoHeight" style={{ height: 500 }}>
        <Swiper className="mySwiper" slidesPerView={1}>
          <div className="owl-wrapper">
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background: 'url("/static/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>The New Media Group</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        The New Media Group is a social enterprise leading the
                        way in Mongolia and across Asia as the Founding
                        Certified B Corporation in the region. The New Media
                        Group is made up of several subsidiary companies
                        focusing on e-commerce, design, marketing and
                        technology. As a social enterprise, which empowers
                        human-centered business, our utmost goal is to create a
                        positive and friendly corporate culture.
                      </p>
                      <p>
                        Additionally, The New Media Group has cultivated strong
                        social engagement through its human-centered social
                        responsibility programs and is dedicated to supporting
                        nonprofits and international organizations who are
                        working to help people in Mongolia and around the globe.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="https://thenewmediagroup.co/">
                        <span className="icon-link" />{" "}
                      </a>
                      <a target="_blank" href="https://facebook.com/NMGteam">
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a target="_blank" href="https://twitter.com/NMGteam/">
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://youtube.com/c/TheNewMediaGroup"
                      >
                        <span className="icon-youtube-play" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="http://linkedin.com/company/the-new-media-group/"
                      >
                        <span className="icon-linkedin" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>gerege.agency</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        gerege.agency is a full stack web &amp; mobile app
                        development company.
                      </p>
                      <p>
                        Through strategy planning, project management, design
                        solutions, program development, security, and complete
                        customer care we build custom websites that meets all
                        your needs.
                        <br />
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="http://gerege.agency/">
                        <span className="icon-link" />{" "}
                      </a>
                      <a target="_blank" href="https://facebook.com/GeregeHQ/">
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a target="_blank" href="https://twitter.com/GeregeHQ/">
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a target="_blank" href="https://youtube.com/GeregeHQ/">
                        <span className="icon-youtube-play" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>Mandukhai Khatan LLC</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        The company “Mandukhai Khatan" has been set up in 1990
                        as a “Mandukhai" firm which manufacturing cosmetics
                        production. Since its establishment the company has been
                        manufacturing essential cosmetic products such as day
                        and night creams, cleansers and hand creams.
                      </p>
                      <p>
                        During past years, the “Mandukhai khatan" had numerous
                        achievements in improving its production line as well as
                        in field of customer satisfaction. Nowadays the
                        “Mandukhai khatan" produces more than 20 kinds of
                        products enriched with valuable types of vitamins,
                        biologically active resources, also concentrating on
                        producing of naturally pure products, which contains sea
                        buckthorn, horse milk (Mongolian traditional recipe),
                        honey, aloe etc.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="http://mandukhai-khatan.mn/">
                        <span className="icon-link" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://facebook.com/MandukhaiKhatan"
                      >
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://twitter.com/MandukhaiKhatan"
                      >
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://youtube.com/MandukhaiKhatan"
                      >
                        <span className="icon-youtube-play" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>http://segsgermaa.com</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        Segsgermaa.com is an online community that inspires
                        young women to dress and act confidently in their
                        everyday lives and spend their freetime productively,
                        successful lives they’ve always dreamed of through
                        finance, fashion and beauty tips and many more.
                        Segsgermaa is successfully operating since February,
                        2012 and became one of the well known website for women
                        in Mongolia.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="http://segsgermaa.com/">
                        <span className="icon-link" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://facebook.com/segsgermaa/"
                      >
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a target="_blank" href="https://twitter.com/segsgermaa/">
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://youtube.com/segsgermaacom/"
                      >
                        <span className="icon-youtube-play" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      "url(https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg) center no-repeat",
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>The New Media Marketing Agency</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        The New Media Marketing Agency is a digital marketing,
                        social community engagement, and creative development
                        firm. We design and implement new media marketing
                        strategies to our clients to build and humanize their
                        brand.
                      </p>
                      <p>
                        The New Media Marketing Agency was founded on June, 2010
                        and the company has been satisfying its customers with
                        highly qualified new media marketing operations
                        performed by the experienced professionals. We fully
                        reflect the preference of our customers on the company
                        operation and adhere to the mutual development policy.
                      </p>
                      <p>
                        We are planning to expand our operation and aiming at
                        giving more complex service to our customers in order to
                        make a real contribution towards the field of new media
                        marketing.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a
                        target="_blank"
                        href="http://newmediamarketingagency.com/"
                      >
                        <span className="icon-link" />{" "}
                      </a>
                      <a target="_blank" href="https://facebook.com/NMMAteam/">
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a target="_blank" href="https://twitter.com/NMMAteam/">
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://youtube.com/c/TheNewMediaGroup"
                      >
                        <span className="icon-youtube-play" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="http://linkedin.com/company/NMMAteam/"
                      >
                        <span className="icon-linkedin" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="http://flickr.com/photos/NMMAteam/"
                      >
                        <span className="icon-flickr" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://profiles.google.com/NMMAteam/"
                      >
                        <span className="icon-google-plus" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>The New Media Foundation</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        The New Media Foundation is the philanthropic arm of The
                        New Media Group. We pride ourselves on our strong sense
                        of corporate and social responsibility and are dedicated
                        to promoting and supporting nonprofit and community
                        organizations in Mongolia and around the world. We
                        partner with nonprofit and community organizations to
                        donate our skills and time in support of their work,
                        including the work of our talented team at The New Media
                        Group.
                      </p>
                      <p>
                        The mission of the New Media Foundation is to support
                        nonprofit and community organizations in their work to
                        improve our local communities. We are constantly on the
                        lookout for potential new partners to work with in
                        pursuit of these goals.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a
                        target="_blank"
                        href="https://facebook.com/NewMediaFoundation"
                      >
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a target="_blank" href="https://twitter.com/NMFteam">
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a target="_blank" href="https://youtube.com/NMFteam">
                        <span className="icon-youtube-play" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>Erkhet</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        ERKHET.BIZ is a web-based accounting software developed
                        by The New Media Group. As it was initially modeled for
                        strengthening SMEs' financial literacy, ERKHET.BIZ is
                        designed user-friendly and cost-effective so anyone can
                        easily access and understand the main features, without
                        needing any accounting or bookkeeping knowledge. Systems
                        range from a single user version to those that support
                        hundreds of users simultaneously. Because ERKHET.BIZ is
                        online, there is no download required. It is the most
                        convenient way to handle all day-to-day financial tasks,
                        as the user can begin using the system just by logging
                        in from their chosen device wherever with internet
                        access. Start by using our product with video tutorials
                        and email support, to exclusive packages with bonus
                        features including financial statements with official
                        English translation, and more.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="http://erkhet.biz/">
                        <span className="icon-link" />{" "}
                      </a>
                      <a target="_blank" href="https://facebook.com/ErkhetHQ">
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a target="_blank" href="https://twitter.com/ErkhetHQ">
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a target="_blank" href="https://youtube.com/ErkhetHQ">
                        <span className="icon-youtube-play" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>Career.today</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        Компаниа бүрэн илэрхийлэх боломжийг CAREER.TODAY олгож
                        байна
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="https://career.today">
                        <span className="icon-link" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>http://creativemongolia.com</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        Yaruu Setgegch is a Mongolian intellectual development
                        community collaborating on various social activities,
                        creation of corporate and organizational cultures and
                        supporting motivational ideas.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="http://creativemongolia.com/">
                        <span className="icon-link" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://facebook.com/yaruusetgegch/"
                      >
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://twitter.com/yaruusetgegch/"
                      >
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://youtube.com/yaruusetgelgee/"
                      >
                        <span className="icon-youtube-play" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>http://bidchadna.mn</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        Under the purpose of providing disabled people with
                        protection from discrimination in the workplace,
                        comfortable living environment and increasing the
                        vacancies for disabled people and promoting the
                        employers who support and hire disabled people and
                        sending out the positive message about disabled people
                        to the society, Bid Chadna website was first initiated
                        by MACA and Tugeemel Hugjil Center. In 2013, Bid Chadna
                        website established its non-government organization
                        under the same name to promote Bid Chadna website and to
                        help increase employment rate among the disabled.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="http://bidchadna.mn/">
                        <span className="icon-link" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://facebook.com/BidchadnaMN"
                      >
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a target="_blank" href="https://twitter.com/BidChadnaMN">
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a target="_blank" href="https://youtube.com/BidChadnaMN">
                        <span className="icon-youtube-play" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>http://marketing.org.mn/</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        Mongolian Marketing Association (MMA) was established in
                        1994 by the joint initiation of marketing professors,
                        research institutions, and business entities to bring
                        Mongolian Marketing development to the next level. Our
                        mission is to facilitate development of marketing in all
                        business and non-business sectors of Mongolia up to the
                        standard achieved by developed countries. As the leading
                        organisation for Mongolian marketing professionals, we
                        strive to be the trusted resource and networking group
                        for professional marketers and academics in Mongolia.
                      </p>
                      <p>
                        We partner many international Marketing organisations
                        such as American Marketing Association, Asia-Pacific
                        Marketing Federation, Marketing Institute of Singapore
                        and are planning to expand our foreign relations further
                        in the upcoming year.
                      </p>
                      <p>
                        We organise monthly discussion forums, training, and
                        networking events for our members and find out more
                        about us at{" "}
                        <a
                          href="http://www.marketing.org.mn/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          www.marketing.org.mn
                        </a>
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="http://marketing.org.mn/">
                        <span className="icon-link" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/MongolianMAssoc/"
                      >
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://twitter.com/MongolianMAssoc"
                      >
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/user/MongolianMAssoc"
                      >
                        <span className="icon-youtube-play" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/mongolian-marketing-association"
                      >
                        <span className="icon-linkedin" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>http://bcmongolia.org</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        The Business Council of Mongolia (BCM) was founded in
                        the fall of 2007 to promote increased trade and
                        investment in Mongolia. BCM represents all investors in
                        Mongolia, domestic and foreign, on business climate
                        issues.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="http://bcmongolia.org/">
                        <span className="icon-link" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://facebook.com/TheBusinessCouncilOfMongolia"
                      >
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a target="_blank" href="https://twitter.com/bcmongolia">
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://linkedin.com/company/1645296"
                      >
                        <span className="icon-linkedin" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>http://jcimongolia.mn</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        JCI Mongolia has its headquarter in Ulaanbaatar and its
                        local chapters in Darkhan and Erdenet. JCI Mongolia has
                        local chapters including Ulaanbaatar, Darkhan, Erdenet,
                        Capital, Ikh Khuree, UB Central, Leader, Chairman, Eco,
                        Nairamdal, Progress and Congress. JCI is expanding more
                        and more which currently has more than 660 members and
                        120 senators around the world. During the last 23 years,
                        JCI Mongolia has become one of the leading organization
                        that has created top leaders.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="http://jcimongolia.mn/">
                        <span className="icon-link" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://facebook.com/jcimongolia"
                      >
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://twitter.com/jcimongolia "
                      >
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://youtube.com/channel/UCbaIweQnTJBQ5ZpUibjlCeA"
                      >
                        <span className="icon-youtube-play" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>http://tedxulaanbaatar.com</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        TEDxUlaanbaatar NGO is non-profit organization devoted
                        to Ideas Worth Spreading in Mongolia. Its speakers aim
                        to present inspirational stories about the past,
                        present, and future of Mongolia.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="http://tedxulaanbaatar.com/ ">
                        <span className="icon-link" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://facebook.com/tedxulaanbaatar/ "
                      >
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://twitter.com/tedxulaanbaatar/ "
                      >
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://youtube.com/user/TEDxTalks/videos?query=tedxulaanbaatar "
                      >
                        <span className="icon-youtube-play" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="owl-item" style={{ width: "100vw" }}>
                <div
                  className="nm-slider-item"
                  style={{
                    background:
                      'url("https://thenewmediagroup.co/static/sites/thenewmediagroup/default/images/bg.jpg") center no-repeat',
                  }}
                >
                  <div className="overlay" />
                  <div className="nm-content-section wrapper">
                    <h2>http://startupmongolia.com</h2>
                    <div className="nm-description">
                      <p />
                      <p>
                        Startup Weekend is a global network of passionate
                        leaders and entrepreneurs on a mission to inspire,
                        educate, and empower individuals, teams and communities.
                        Come share ideas, form teams, and launch startups.
                      </p>
                      <p>
                        Startup Weekends are 54-hour events where developers,
                        designers, marketers, product managers and startup
                        enthusiasts come together to share ideas, form teams,
                        build products, and launch startups!{" "}
                      </p>
                      <p>
                        Startup Weekends are weekend-long, hands-on experiences
                        where entrepreneurs and aspiring entrepreneurs can find
                        out if startup ideas are viable. On average, half of
                        Startup Weekend’s attendees have technical backgrounds,
                        the other half have business backgrounds.
                      </p>
                      <p />
                    </div>
                    <div className="nm-links">
                      <a target="_blank" href="http://startupmongolia.com/">
                        <span className="icon-link" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://facebook.com/swmongolia/"
                      >
                        <span className="icon-facebook" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="https://twitter.com/#!/swmongolia/"
                      >
                        <span className="icon-twitter" />{" "}
                      </a>
                      <a target="_blank" href="https://youtube.com/swmongolia/">
                        <span className="icon-youtube-play" />{" "}
                      </a>
                      <a
                        target="_blank"
                        href="http://flickr.com/photos/swmongolia/"
                      >
                        <span className="icon-flickr" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="owl-controls clickable">
        <div className="owl-pagination">
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page active">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
          <div className="owl-page">
            <span className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
