// import styles from './Home.module.css'
import {/*useEffect,*/ useState} from 'react'
// import {cars as carsData } from './cars.data'    /* для имитации сервера*/
import { cars as carsData } from '../../../../public/images/dbcars'


import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/CreateCarForm';

// import { CarService } from '../../../services/carservice';


const Home = () => {
    console.log("cars + ", carsData, )
    
    // значение по дефолту - изначальный массив с данными
    // const [cars, setCars] = useState([])          /* для имитации сервера - e useEffect нач знач пуст массив*/
    const [cars, setCars] = useState(carsData)
     /* для имитации сервера*/
    // useEffect(()=> {
    //    const fetchData = async() => {
    //     const data = await CarService.getAll()
    //     setCars(data)
    //    }
    //     fetchData()
    // },[cars])
    return (
        <div>
            <h1>Cars catalog</h1>
            {/* добавляем setCars для CreateCarForm */}
            <CreateCarForm setCars={setCars}/>
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
