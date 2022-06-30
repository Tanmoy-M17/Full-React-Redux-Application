import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
const FilterSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const urlCategory=searchParams.getAll("category");
    const urlsort=searchParams.get("sortBy")

    const [category,setCategory]=useState(urlCategory || []);
    const[sortBy,setSortBy]=useState( urlsort || "")


    const handelCheckBox=(e)=>{
        const option =e.target.value;
        let newcatagory=[...category];
        if(category.includes(option)){
            newcatagory.splice(newcatagory.indexOf(option),1);
        }
        else{
            newcatagory.push(option);
        }
        setCategory(newcatagory)
    }
    const handelSort=(e)=>{
        setSortBy(e.target.value)
    }

    useEffect(()=>{
        if(category || sortBy){
            let params={};
            category && (params.category=category);
            sortBy && (params.sortBy=sortBy);

            setSearchParams(params);
        }
    },[category , setSearchParams , sortBy])
  return (
    <div>
        <h2>Filter</h2>
            <div>
                <div>
                    <input type="checkbox" 
                    onChange={(e)=>handelCheckBox(e)}
                    value="Novel" 
                    defaultChecked={category.includes("Novel")}/>
                    <label>Novel</label>
                </div>
                <div>
                    <input type="checkbox" 
                    onChange={(e)=>handelCheckBox(e)}
                    value="Science_Fiction" 
                    defaultChecked={category.includes("Science_Fiction")}/>
                    <label>Science_Fiction</label>
                </div>
                <div>
                    <input type="checkbox" 
                    onChange={(e)=>handelCheckBox(e)}
                    value="Motivational" 
                    defaultChecked={category.includes("Motivational")}/>
                    <label>Motivational</label>
                </div>
                <div>
                    <input type="checkbox"
                    onChange={(e)=>handelCheckBox(e)} 
                    value="Thriller" 
                    defaultChecked={category.includes("Thriller")}/>
                    <label>Thriller</label>
                </div>
            </div>

        <h2>Sort</h2>
        <div onChange={(e)=>handelSort(e)}>
        <input type="radio" 
            value="asc"
            name="sortby"
            defaultChecked={sortBy==="asc"}/>{" "} Ascending
            <input type="radio" 
            value="desc"
            name="sortby"
            defaultChecked={sortBy==="desc"}/>{" "} Descending
        </div>
        </div>
  )
}

export default FilterSort