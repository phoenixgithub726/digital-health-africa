import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import OurServicesItemThumbnail from "./OurServicesItemThumbnail";

import ourServicesStyles from "./OurServices.module.scss";

const OurSevices = () => {

  return (
    <section className={ourServicesStyles["service-wrapper"]}>
      <div className={ourServicesStyles["bg-overlay"]}></div>
      <div className={ourServicesStyles["service-container"]}>
        <h2 className={ourServicesStyles["service-header"]}>Our Services</h2>
        <p className={ourServicesStyles["service-subtext"]}>
          {"We offer complete healthcare to individuals with various health concerns."}
        </p>
        <div className={ourServicesStyles["carousel-container"]}>
          <div className={ourServicesStyles["carousel-outer"]}>
            <div className={ourServicesStyles["carousel-inner"]}>
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode
                className={ourServicesStyles["carousel-item"]}
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
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
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 768,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  },
                  medium: {
                    breakpoint: {
                      max: 1024,
                      min: 768
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                  }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                <OurServicesItemThumbnail />
                <OurServicesItemThumbnail />
                <OurServicesItemThumbnail />
                <OurServicesItemThumbnail />
                <OurServicesItemThumbnail />
                <OurServicesItemThumbnail />
                <OurServicesItemThumbnail />
                <OurServicesItemThumbnail />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSevices;
