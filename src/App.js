import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import corona from './images/corona.png';
import { fetchData } from './api';

const App = () => {

    const [data, setData] = useState({});
    const [country, setCountry] = useState('');
    
    useEffect(() => {
        async function printData() {
            const response = await fetchData();
            setData(response)
        }

        printData();
    },[])
    
    const handleChageCountry = async (country) => {
        const response = await fetchData(country);
        setData(response);
        setCountry(country);
    }

    return(
        <div className={styles.container}>
            <img src={corona} className={styles.images} alt=""/>
            <Cards data={data} />
            <CountryPicker setCountry={handleChageCountry} />
            <Chart data={data} country={country} />
        </div>
    )
}

export default App;