import  {useState} from 'react';
import styles from './CreateCarForm.module.css'
// объект для очистки формы
const clearData = {
    price: '',
    image: '',
    name: '',

}


// принимаем setCars из Home
const CreateCarForm = ({ setCars }) => {
    //setName - ф-я, принимающая новое значение
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
    // const [image, setImage] = useState('');
    const [data, setData] = useState(clearData)


    const createCar = e =>{
        e.preventDefault();
        // setCars(prev => [...prev, {id:prev.length +1, name, price, image }])
        // а этот вариант  - сначала новый элемент, потом старый массив
        setCars(prev => [ {id:prev.length +1, ...data }, ...prev])
// очищаем форму
        setData(clearData)
    } 
    return (
        <form className={styles.form}>
            <input placeholder='Name'  onChange={e => setData(prev => ({...prev, name: e.target.value}))} value={data.name} />
            <input placeholder='Price' onChange={e => setData(prev => ({...prev, price: e.target.value}))} value={data.price}/>
            <input placeholder='Image' onChange={e => setData(prev => ({...prev, image: e.target.value}))} value={data.image}/>
            <button className='btn' onClick={e=> createCar(e)}>Create</button>
        </form>
    );
}

export default CreateCarForm;
