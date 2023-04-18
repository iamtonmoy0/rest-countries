import React, { Component } from 'react';

export const Country=(props)=>{
	const {area,name,region}=props.country;
	

	return(
		<>
		<h2> Name: {name.common}</h2>
		<p>Area: {area}</p>
		<p><small>Region: {region}</small></p>
				</>
	)
}