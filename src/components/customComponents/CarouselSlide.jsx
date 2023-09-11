import { useContext } from "react";

import { CarouselContext } from "../context/appDataContext"; //

export default function CarouselSlide({ card, title }) {
  const { data, currentSlide } = useContext(CarouselContext); //

  const Card = card;
  const renderCards = (cards) =>
    cards.map((card, idx) => <Card key={`card${idx}`} data={card} />);

  const renderSlides = () => {
    return data.map((slide, idx) => (
      <div
        className="carousel-slide-wrapper"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        key={idx}
      >
        {renderCards(slide)}
      </div>
    ));
  };

  return (
    <div className="carousel-wrapper">
      <div className="slides-wrapper">{renderSlides()}</div>
    </div>
  );
}
