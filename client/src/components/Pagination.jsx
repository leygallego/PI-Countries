import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';





function Pagination({countriesPerPage, totalcountries, paginate}) {


    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalcountries / countriesPerPage); i++) {
        pageNumbers.push(i)
         }

            // console.log(pageNumbers);
 
    return (
        <div>
           
                {
                    pageNumbers.map((number, index) =>{
                      return  <Link key={index} to={number}>
                            <button className="myButton-pagination" onClick={()=> paginate(number)}>{number}</button>
                        </Link>
                    })
                }
           
        </div>
        
    )
}

export default Pagination
