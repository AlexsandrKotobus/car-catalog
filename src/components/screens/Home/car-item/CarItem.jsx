// import React from 'react';

import styles from '../Home.module.css'


const CarItem = ({ car }) => {
    // console.log('car ... ', car.name )
    return (
        <div>
             <div className={styles.item}>
                        <div className={styles.image} style={{backgroundImage: `url(${car.image})`,}}/>
                        <div className={styles.info}>
                                <h2>{car.name}</h2>
                                <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(car.price)}</p>
                                <button>Read more</button>
                        </div>
                        </div>
            
         </div>
    );
}


export default CarItem;
