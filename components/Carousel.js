import React, { useEffect, useState } from 'react';
import styles from '../styles/Carousel.module.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items && items.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [items]);

  const nextSlide = () => {
    if (items && items.length > 0) {
      setCurrentIndex((currentIndex + 1) % items.length);
    }
  };

  const prevSlide = () => {
    if (items && items.length > 0) {
      setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    }
  };

  if (!items || items.length === 0) {
    return <div className={styles.carousel}>Loading...</div>;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer} style={{ transform: `translateX(-${currentIndex * (100 / items.length)}%)` }}>
        {items.map((item, index) => (
          <div key={item.item_id || index} className={styles.carouselItem}>
            <img src={item.image} alt={item.title} className={styles.carouselImage} />
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={prevSlide}>Previous</button>
      <button className={styles.next} onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
