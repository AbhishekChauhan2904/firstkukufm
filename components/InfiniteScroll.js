import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from './Carousel';
import styles from '../styles/InfiniteScroll.module.css';

const InfiniteScroll = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems || []);
  const [page, setPage] = useState(2); // start from the next page
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=${page}&lang=english`);
      if (response.data && response.data.items) {
        setItems(prevItems => [...prevItems, ...response.data.items]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching infinite scroll items:", error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    fetchItems();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!items || items.length === 0) {
    return <div className={styles.infiniteScroll}>Loading...</div>;
  }

  return (
    <div className={styles.infiniteScroll}>
      <div className={styles.itemsContainer}>
        {items.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2>{section.title}</h2>
            <Carousel items={section.banners || section.items || []} />
          </div>
        ))}
      </div>
      {loading && <div className={styles.loading}>Loading...</div>}
    </div>
  );
};

export default InfiniteScroll;
