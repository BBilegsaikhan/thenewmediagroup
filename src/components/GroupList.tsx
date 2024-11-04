"use client";

import React, { useState } from "react";
type TypeCategory = "companies" | "product" | "community" | "partnership";

export default function GroupList() {
  const [category, setCategory] = useState<TypeCategory | undefined>();

  const click = (category: TypeCategory | undefined) => setCategory(category);
  return (
    <div>
      <div className="portfolio-header   home-filter">
        <div className="wrapper relative  ">
          <ul>
            <li className="active">
              <button
                onClick={() => setCategory(undefined)}
                data-toggle="portfilter"
                data-target="all"
              >
                All
              </button>
            </li>
            <li data-toggle="portfilter" data-target="companies">
              <button onClick={() => setCategory("companies")}>
                Companies
              </button>
            </li>
            <li data-toggle="portfilter" data-target="home_products">
              <button onClick={() => setCategory("product")}>Products</button>
            </li>
            <li data-toggle="portfilter" data-target="home_communities">
              <button onClick={() => setCategory("community")}>
                Communities
              </button>
            </li>
            <li data-toggle="portfilter" data-target="home_partnerships">
              <button onClick={() => setCategory("partnership")}>
                Partnerships
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className=" groups flex w-[100%]  p-[30px] m-auto">
        <div className=" flex  w-[60vw] m-auto  ">
          <ul className="flex   flex-col items-start">
            <li
              className="active  gap-[20px] flex flex-wrap"
              data-tag="companies"
            >
              {allData
                .filter((item) => {
                  if (!category) {
                    return item;
                  }
                  if (item.type === category) {
                    return item;
                  }
                })
                .map((item, index) => (
                  <button
                    key={index}
                    className="flex items-center  justify-center bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundColor: item.bg,
                      height: "150px",
                      width: "150px",
                    }}
                  >
                    <span
                      className="flex items-center  justify-center bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${item.img})`,

                        height: "28%",
                        width: "100%",
                      }}
                    ></span>
                  </button>
                ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
const allData: { type: TypeCategory; bg: string; img: string }[] = [
  {
    type: "companies",
    bg: "#2980b9",
    img: "/static/images/grouplogo.png",
  },
  {
    type: "companies",
    bg: "#2980b9",
    img: "/static/images/geregeagency.png",
  },
  {
    type: "companies",
    bg: "#2980b9",
    img: "/static/images/mandukhai.png",
  },
  {
    type: "companies",
    bg: "#2980b9",
    img: "/static/images/01.png",
  },
  {
    type: "companies",
    bg: "#2980b9",
    img: "/static/images/new_media_marketing_agency.png",
  },
  {
    type: "companies",
    bg: "#2980b9",
    img: "/static/images/new_media_foundation.png",
  },
  {
    type: "product",
    bg: "#16a085",
    img: "/static/images/Erkhet.png",
  },
  {
    type: "product",

    bg: "#16a085",
    img: "/static/images/careertoday.png",
  },
  {
    bg: "#8e44ad",
    type: "community",
    img: "/static/images/creativemgl.png",
  },
  {
    bg: "#8e44ad",
    type: "community",

    img: "/static/images/bidchadna.png",
  },
  {
    bg: "#c0392b",
    type: "partnership",
    img: "/static/images/mmc.png",
  },
  {
    type: "partnership",
    bg: "#c0392b",
    img: "/static/images/bcm.png",
  },
  {
    type: "partnership",
    bg: "#c0392b",
    img: "/static/images/jci.png",
  },
  {
    type: "partnership",
    bg: "#c0392b",
    img: "/static/images/tedx.png",
  },
  {
    type: "partnership",
    bg: "#c0392b",
    img: "/static/images/startupmongolia.png",
  },
];
