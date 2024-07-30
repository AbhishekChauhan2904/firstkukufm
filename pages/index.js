import React from 'react';
import Header from '../components/Header';
import InfiniteScroll from '../components/InfiniteScroll';

const Home = ({ initialItems }) => {
  return (
    <div>
      <Header />
      <InfiniteScroll initialItems={initialItems} />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch('https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english');
    const data = await response.json();

    const initialItems = data.items || [];

    return {
      props: {
        initialItems,
      },
    };
  } catch (error) {
    console.error("Error fetching initial items:", error);
    return {
      props: {
        initialItems: [],
      },
    };
  }
};

export default Home;
