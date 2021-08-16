import React from "react";
import {useState} from 'react';
interface dataToChooseIfInput{
	input : boolean,
}

export const Line = (props : dataToChooseIfInput) => {
	
	const [value, setValue] = useState('')
	

	if(props.input === true){
		return(
			<input ></input>
		)
	}	
	else{return(<p>hola</p>)}
}
