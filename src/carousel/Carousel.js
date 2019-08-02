import React, { useState } from 'react';

function SlideIndicator({ slide }) {
  return (
    <ol className="carousel-indicator">
      <li onClick={() => slide(0)} />
      <li onClick={() => slide(1)} />
      <li onClick={() => slide(2)} />
    </ol>
  );
}

function Carousel({}) {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const items = [
    { backgroundColor: '#03A9F4' },
    { backgroundColor: '#00BCD4' },
    { backgroundColor: '#009688' }
  ];
  const renderItems = () => {
    [1, 2, 3].map((i, idx) => {
      const cls = ['carousel-slide'];
      if (idx === activeSlideIdx) {
        cls.push('active');
      }
      return (
        <div className={cls.join(' ')} style={{ backgroundColor: items[i].backgroundColor }}>
          {`Slide {i}`}
        </div>
      );
    });
  };
  return (
    <div className="carousel">
      <SlideIndicator slide={toIdx => setActiveSlideIdx(toIdx)} />
      <div className="carousel-frame">{renderItems()}</div>
    </div>
  );
}

export default Carousel;
