import styles from './Home.module.css'
import {cars} from './cars.data'


const Home = () => {
    return (
        <div>
            <h1>Cars catalog</h1>
            <div>
                {cars.map(car => (
                    // обязательный key на главном элементе
                   <div className={styles.item} key={car.id}>
                   <div className={styles.image} style={{backgroundImage: `url(${car.image})`,}}/>
                   <div className={styles.info}>
                        <h2>{car.name}</h2>
                        <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(car.price)}</p>
                        <button>Read more</button>
                   </div>
                </div>
               )
               )}
            </div>           
        </div>
    );
}

export default Home;
