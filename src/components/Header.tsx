"use client";
import React, { useEffect } from "react";
import $ from "jquery";
const Header: React.FC = () => {
  useEffect(() => {
    const handleSearchClick = () => {
      $("#mainmenu").stop().animate({ marginRight: "168px" });
      $("#search").stop().animate({ width: "150px" });
    };

    const handleSearchBlur = () => {
      $("#mainmenu").animate({ marginRight: "50px" });
      $("#search").animate({ width: "1px" });
      $("#search").val("");
    };

    $("#search").on("click", handleSearchClick);
    $("#search").on("blur", handleSearchBlur);

    $(".menu-icon button").on("click", () => {
      $("#mainmenu").toggleClass("close");
    });

    selectMenu();

    return () => {
      $("#search").off("click", handleSearchClick);
      $("#search").off("blur", handleSearchBlur);
      $(".menu-icon button").off("click");
    };
  }, []);

  const selectMenu = () => {
    const path = location.pathname;
    let flag = false;

    $(".mainmenu a").each(function (index, element) {
      $(element).addClass("noajax");
      if (encodeURI($(element).attr("href") || "") === path) {
        $(".mainmenu a").removeClass("selected");
        $(element).addClass("selected");
        flag = true;
      }
    });

    if (!flag) $(".mainmenu a").removeClass("selected");
  };
  return (
    <div id="web">
      <div id="header" className="">
        <div className="bg_pattern">
          <div className="wrapper">
            <div className="left transition">
              <h1>
                <a href="/" className="noajax">
                  <img
                    src="/static/images/logo.png"
                    alt="The New Media Group"
                    className="transition"
                  />
                </a>
              </h1>
            </div>
            <div id="topmenu">
              <a href="/leadership/" className="noajax">
                Leadership
              </a>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href="/request-for-proposal/" className="noajax">
                Request for Proposal
              </a>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href="/pressroom/" className="noajax">
                Pressroom
              </a>
            </div>
            <div className="transition menu-icon">
              <button>
                <span className="icon-reorder" />
              </button>
            </div>
            <div id="topsearch" className="transition">
              <input type="text" id="search" className="watermark" />
            </div>
            <div id="mainmenu" className="right transition close  ">
              <div className="mainmenu">
                <a href="/" className="noajax selected">
                  Who we are
                </a>
                <a href="/what-we-do/" className="noajax">
                  What we do
                </a>
                <a href="/certified-b-corporation/" className="noajax">
                  What we believe
                </a>
                <a href="/portfolio/" className="noajax">
                  Portfolio
                </a>
                <a
                  href="https://career.today/jobs/new-media-group/"
                  target="_blank"
                  className="noajax"
                >
                  Careers
                </a>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
