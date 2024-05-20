// import styles from './Home.module.css'
import {useEffect, useState} from 'react'
import {cars as carsData } from './cars.data'
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/CreateCarForm';


const Home = () => {
    // console.log("car name + ",cars.name, cars, )
    // значение по дефолту - изначальный массив с данными
    const [cars, setCars] = useState([])

    useEffect(()=> {
       const fetchData = async() => {
        const response = await fetch('http://localhost:4200/cars')
        const data = await response.json()
        setCars(data)
        console.log("data - ", data)
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
