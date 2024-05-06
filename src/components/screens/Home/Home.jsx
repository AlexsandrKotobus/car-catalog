import styles from './Home.module.css'
import  car1 from './1.jpg'

const Home = () => {
    return (
        <div>
            <h1>Cars catalog</h1>
            <div className={styles.item}>
                <img src={car1} alt='c'/>
                <h2>Car 1</h2>
                <p>$ 100 000</p>
                <button>Read more</button>
            </div>
        </div>
    );
}

export default Home;
