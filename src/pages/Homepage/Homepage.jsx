import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './Homepage.module.css';

const Homepage = () => {
    // const navigate = useNavigate();

    // const handleRentVanClick = () => {
    //   navigate('/catalogue');
    // };
  return (
    <div className={styles.container}>
        <div className={styles.textColumn}>
          <h1 className={styles.header}>Welcome to Trailers Booking App!</h1>
          <p  className={styles.descr}>
            We strive to make your journeys as comfortable and enjoyable as possible.
          </p>
          <p  className={styles.descr}>
            Our wide range of vans in different sizes and configurations allows you to find the perfect solution for everything from spontaneous outings to long journeys.
          </p>
          <p  className={styles.descr}>
            Flexibility and comfort are our guiding principles.
Book your van today and embark on an unforgettable journey!
          </p>
        </div>
       
    </div>
  );
};

export default Homepage;
