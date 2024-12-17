import React, { useState, useEffect } from "react";
import styles from './About.module.css';

export const About = () => {

	return (
		<div className={styles.loginContainer}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <div className={styles.logoSquare}></div>
          <span className={styles.boldText}>Amanda</span>
        </div>
		
		<div className={styles.logo}>
			<span className={styles.boldText}>Mokhachane</span>
        </div>
        
      </div>

      <div className={styles.rightSide}>
        <div className={styles.iconGrid}>
        <img src="https://res.cloudinary.com/drgxphf5l/image/upload/v1734435509/160619183_gnnic9.jpg" className='image' />
        </div>
      </div>
    </div>
	);
};

export default About;