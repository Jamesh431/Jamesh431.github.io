import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowSize from "../helpers/useWindowSize";
import { sortCarouselData } from "../helpers/sortCarouselData";
import { truncatePageNumbers } from "../helpers/arrayUtils";
import { CarouselContext } from "../context/appDataContext";

export default function Carousel({ children, data, views }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(5);
  const sortedData = sortCarouselData(data, cardsPerSlide);
  const { width } = useWindowSize();

  const defaultCarouselData = {
    data: sortedData,
    currentSlide,
  };

  useEffect(() => {
    for (const view in views) {
      if (width <= view) {
        setCardsPerSlide(views[view]);
        break;
      }
    }
  }, [width, views]);

  const renderCarousel = () => {
    const truncatedPageNumbers = truncatePageNumbers(
      7,
      currentSlide,
      sortedData.length
    );

    return truncatedPageNumbers.map((pageNum) => {
      return pageNum.page === "..." ? (
        <p key={pageNum.id}>{pageNum.page}</p>
      ) : (
        <button
          key={`carousel-button-${pageNum.id}`}
          className={`${pageNum.page - 1 === currentSlide ? "active" : ""}`}
          onClick={() => setCurrentSlide(pageNum.page - 1)}
        >
          {pageNum.page}
        </button>
      );
    });
  };

  return (
    <CarouselContext.Provider value={defaultCarouselData}>
      <div className="carousel-container">
        {children}

        <div className="control-buttons-wrapper">
          <button
            onClick={() => setCurrentSlide((prev) => prev - 1)}
            disabled={currentSlide === 0}
          >
            <FontAwesomeIcon icon="fa-solid fa-circle-left" />
          </button>

          <div className="page-numbers-wrapper">{renderCarousel()}</div>

          <button
            onClick={() => setCurrentSlide((prev) => prev + 1)}
            disabled={currentSlide === sortedData.length - 1}
          >
            <FontAwesomeIcon icon="fa-solid fa-circle-right" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}
