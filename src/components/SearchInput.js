import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
const SearchInput = ({getCountry}) => {
	const [isCountry, setIsCountry]= useState("")

	const handleSearchInput = (e)=>{
		setIsCountry(e.target.value);
		getCountry(e.target.value);
	}
	
	return (
		<div className="search_form--container">
            <form className="search_form">
                <HiSearch className="search_icon"></HiSearch>
				<input
					type="text"
					className="search_country"
					placeholder="Search for a country..."
					value={isCountry}
					onChange={handleSearchInput}
				/>
			</form>
		</div>
	);
};

export default SearchInput;
