import React, { Component, useEffect, useState } from 'react';
import { Country } from './Country';


export const LoadCountries=()=>{
const [countries,setCountries]=useState([]);

useEffect(()=>{
	fetch('https://restcountries.com/v3.1/all')
	.then(res=>res.json())
	.then(data=> setCountries(data))
},[])
	return(
		<>
		<p>Total Countries  {countries.length}  Available </p>
		<div className="container">

		{
			countries.map(country=> <Country   country={country} key={country.cca3} />)
		}
		</div>
		</>
	)
}