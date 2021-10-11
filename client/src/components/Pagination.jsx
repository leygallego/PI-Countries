import React from 'react';
import { NavLink } from 'react-router-dom';






function Pagination({countriesPerPage, totalcountries, paginate}) {


    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalcountries / countriesPerPage); i++) {
        pageNumbers.push(i)
         }

            // console.log(pageNumbers);
 
    return (
        <div>
           
                {
                    pageNumbers.map(number =>{
                      return  <NavLink exact to={number}>
                            <button onClick={()=> paginate(number)}>{number}</button>
                        </NavLink>
                    })
                }
           
        </div>
        
    )
}

export default Pagination
