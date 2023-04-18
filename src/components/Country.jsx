import React, { Component } from 'react';
import './Country.css'

export const Country=(props)=>{
	
	const {area,name,region,flags }=props.country;
	

	return(
		< >
		<h2> Name: {name.common}</h2>
		<img src="{flags.png}" alt="" />
		<p>Area: {area}</p>
		<p><small>Region: {region}</small></p>
				</>
	)
}