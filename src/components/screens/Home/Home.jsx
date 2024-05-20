// import styles from './Home.module.css'
import {useEffect, useState} from 'react'
// import {cars as carsData } from './cars.data'
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/CreateCarForm';
// import axios from 'axios';
import { CarService } from '../../../services/carservice';


const Home = () => {
    // console.log("car name + ",cars.name, cars, )
    // значение по дефолту - изначальный массив с данными
    const [cars, setCars] = useState([])

    useEffect(()=> {
       const fetchData = async() => {
        const data = await CarService.getAll()
        setCars(data)
       }
        fetchData()
    },[cars])
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
