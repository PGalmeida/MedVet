import { useState, useEffect, useRef } from "react";

export default function Carousel({
  images = [],          // array de URLs (ex: ['/img1.jpg','/img2.jpg'])
  autoPlay = true,
  autoPlayInterval = 4000, // ms
  showDots = true,
  showArrows = true
}) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);

  const count = images.length;

  useEffect(() => {
    if (!autoPlay || count <= 1) return;
    resetAutoplay();
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoPlay, count, autoPlayInterval]);

  function resetAutoplay() {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      goNext();
    }, autoPlayInterval);
  }

  function goNext() {
    setIndex((i) => (i + 1) % count);
  }
  function goPrev() {
    setIndex((i) => (i - 1 + count) % count);
  }
  function goTo(i) {
    setIndex(i % count);
  }

  // touch handlers for mobile swipe
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40; // minimal px to count as swipe
    if (dx > threshold) goPrev();
    else if (dx < -threshold) goNext();
    touchStartX.current = null;
  }

  if (count === 0) return null;

  return (
    <div
      className="carousel"
      onMouseEnter={() => clearTimeout(timeoutRef.current)}
      onMouseLeave={() => autoPlay && resetAutoplay()}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div className="carousel-slide" key={i}>
            <img src={src} alt={`slide-${i}`} />
          </div>
        ))}
      </div>

      {showArrows && count > 1 && (
        <>
          <button className="carousel-arrow prev" onClick={goPrev} aria-label="Anterior">‹</button>
          <button className="carousel-arrow next" onClick={goNext} aria-label="Próximo">›</button>
        </>
      )}

      {showDots && count > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
