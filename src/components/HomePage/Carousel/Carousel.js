import React, { useState, useEffect } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { train } from "./imgs";
import "./Carousel.css";
import Slide from "./Slide/Slide";

const Carousel = () => {
  const items = [
    {
      bg: train,
      title: "Hello everyone this is a photo album ",
      description:
        "Hello everyone this is a photo album and I'm trying to make this sentance as long as possible so we can see how it looks on the screen",
    },
    {
      bg:
        "https://images.unsplash.com/photo-1519567141891-788b756572ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=963&q=80",
      title: "hello there salem alaykom",
      description:
        "aya anesto ay lbs lyom maw ? wiw aya anesto ay lbs lyom maw ? wiw hhehe haajaja hhhahhaa  ahahha e e e e  ee  akakka",
    },
    {
      bg:
        "https://images.unsplash.com/photo-1583809935642-5334675b581c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "hello there salem alaykom",
      description:
        "aya anesto ay lbs lyom maw ? wiw aya anesto ay lbs lyom maw ? wiw hhehe haajaja hhhahhaa  ahahha e e e e  ee  akakka",
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);
  const [styles, setStyles] = useState("carousel__slide-item ");

  const leftSlide = () => {
    // e.stopPropagation();
    setStyles("carousel__slide-item  slide_out_backward");

    setTimeout(() => {
      setStyles("carousel__slide-item  slide_in_backward");
      setCurrentItem((currentItem) =>
        !currentItem ? items.length - 1 : currentItem - 1
      );
    }, 150);
  };

  const rightSlide = () => {
    // e.stopPropagation();
    setStyles("carousel__slide-item  slide_out_forward ");

    setTimeout(() => {
      setStyles("carousel__slide-item  slide_in_forward ");
      setCurrentItem((currentItem) =>
        currentItem === items.length - 1 ? 0 : currentItem + 1
      );
    }, 150);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rightSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel">
      <AiFillLeftCircle
        className="carousel__slide-button carousel__slide-button__left"
        onClick={() => leftSlide()}
      />

      <Slide
        styles={styles}
        item={items[currentItem]}
        currentItem={currentItem}
        nbItems={items.length}
      />

      <AiFillRightCircle
        className="carousel__slide-button carousel__slide-button__right"
        onClick={() => rightSlide()}
      />
      <div
        className="carousel_tag-container"
        style={{ width: `${items.length * 20 + 80}px` }}
      >
        {items.map((item, key) => (
          <div
            className="carousel_tag-container--tag"
            style={{
              background: `${currentItem === key ? "white" : "transparent"}`,
            }}
            key={key}
            onClick={() => setCurrentItem(() => key)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
