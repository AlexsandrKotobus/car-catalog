// import styles from './Home.module.css'
import {cars} from './cars.data'
import CarItem from './car-item/CarItem';


const Home = () => {
    console.log("car name + ",cars.name, cars, )

    return (
        <div>
            <h1>Cars catalog</h1>
            <div>
                {cars.length ? (
                        cars.map(car => (
                       <CarItem key={car.id} car={car}/>
                    //    console.log("1 car ", car)
                       
                    ))) : <p>There are not cars</p>  }
            </div>           
        </div>
    );
}

export default Home;
