import React, { Component } from 'react';

export const Country=({name,population})=>{

	return(
		<>
		<h2> Name: {name}</h2>
		<p>Population:{population}</p>
		</>
	)
}