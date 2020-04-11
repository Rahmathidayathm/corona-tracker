import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css';

import { countries } from '../../api';

const CountryPicker = ({setCountry})  => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {

        const fetchCountries = async () => {
            setFetchedCountries(await countries());
        }
        fetchCountries()
        
    }, [setFetchedCountries])
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => setCountry(e.target.value)}>
                <option value="">Dunia</option>
                { fetchedCountries.map((country, i) => <option name={country} key={i}>{country}</option>) }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;