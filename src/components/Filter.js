import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
const Filter = ({onFilter}) => {
    const [open, setOpen] = useState(false);
	function show() {
        if (open === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }

    }
    
    const filterValue = (value) => {
        onFilter(value);
    }
    const List = () => (
		<ul className="filter_list">
			<li>
				<label
					htmlFor="africa"
					onClick={(e) => {
						filterValue(e.target.textContent);
						setOpen(false);
					}}
				>
					Africa
				</label>
			</li>
			<li>
				<label
					htmlFor="america"
					onClick={(e) => {
						filterValue(e.target.textContent);
						setOpen(false);
					}}
				>
					Americas
				</label>
			</li>
			<li>
				<label
					htmlFor="asia"
					onClick={(e) => {
						filterValue(e.target.textContent);
						setOpen(false);
					}}
				>
					Asia
				</label>
			</li>
			<li>
				<label
					htmlFor="europe"
					onClick={(e) => {
						filterValue(e.target.textContent);
						setOpen(false);
					}}
				>
					Europe
				</label>
			</li>
			<li>
				<label
					htmlFor="oceania"
					onClick={(e) => {
						filterValue(e.target.textContent);
						setOpen(false);
					}}
				>
					Oceania
				</label>
			</li>
		</ul>
	);
	return (
		<div className="filter_container">
			<p className="filter_trigger" onClick={show}>
				Filter by Region <HiChevronDown className="arrow_icon" />
			</p>
			{open === true ? <List /> : null}
		</div>
	);
};

export default Filter;
