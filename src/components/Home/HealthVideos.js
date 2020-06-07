import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import HealthVideoCard from "./HealthVideoCard";
import MoreVideos from "./MoreVideos";

import healthVideosStyles from "./HealthVideos.module.scss"

const HealthVideos = () => {
  return (
    <section className={healthVideosStyles["healthvideos-wrapper"]}>
      <h2 className={healthVideosStyles["healthvideos-heading"]}>Videos</h2>
      <h6 className={healthVideosStyles["healthvideos-subheading"]}>
        <FontAwesomeIcon
          style={{ fontSize: "1.3rem", marginRight: ".5rem" }}
          icon={faPlayCircle}
        />{" "}
        Health experts explain complex health issues
      </h6>
      <div className={healthVideosStyles["healthvideos-container"]}>
        <div className={healthVideosStyles["carousel-container"]}>
          <div className={healthVideosStyles["carousel-outer"]}>
            <div className={healthVideosStyles["carousel-inner"]}>
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className={healthVideosStyles["carousel-modifier"]}
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 4,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 512,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 768
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                  },
                  medium: {
                    breakpoint: {
                      max: 768,
                      min: 512
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                <HealthVideoCard />
                <HealthVideoCard />
                <HealthVideoCard />
                <HealthVideoCard />
                <HealthVideoCard />
                <HealthVideoCard />
                <HealthVideoCard />
                <MoreVideos />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthVideos;
