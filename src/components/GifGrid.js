// import React,{useState, useEffect} from 'react';
import React from 'react';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ( { category } ) =>{
	
	const { data:images , loading} = useFetchGifs( category );

	// console.log(data);

	return(
		<>	
			<h3 className="animate__fadeInDown"> { category } </h3>
			{ loading && <p>Loading</p> }
			{
			
			<div className="card-grid">
				{
					images.map( img => (
						<GifGridItem 
									key={img.id}
									{ ...img } 
						/>
					))				
				}
			</div>
			
			}
		</>
	)
}