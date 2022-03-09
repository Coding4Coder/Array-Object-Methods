


import React from 'react';
import "../css/main.css";

const Customers = () => {

    const custumersData = [
        {
            name: 'Luke Skywalker',
            age: '30',
            height: '172',
            mass: '77',
            eye_color: 'blue',
            gender: 'male',
        },
        {
            name: 'Darth Vader',
            age: '40',
            height: '202',
            mass: '136',
            eye_color: 'yellow',
            gender: 'male',
        },
        {
            name: 'Leia Organa',
            age: '45',
            height: '150',
            mass: '49',
            eye_color: 'brown',
            gender: 'female',
        },
        {
            name: 'Anakin Skywalker',
            age: '50',
            height: '188',
            mass: '84',
            eye_color: 'blue',
            gender: 'male',
        },
    ];

// Get all the name

let totalMass = custumersData.reduce((initVal, currVal) => {
    return initVal + parseInt(currVal.mass);

}, 0)



    let totalChar = custumersData.map((totalNum) => {
        return totalNum.name.length;
          }
    )

    let totalVal = totalChar.reduce((intva, curval) => {
        return intva + curval;
    })
    console.log(totalVal);


        return (
        <>
       

            <div>
                <table className='customers'>
                     <tr>
                         <th>Name</th>
                         <th>Age</th>
                         <th>Height</th>
                         <th>Mass</th>
                         <th>Eye Color</th>
                         <th>Gender</th>
                     </tr>
                 {
                    custumersData.map((customer) =>
                     <tr>
                         <td>{customer.name}</td>
                         <td>{customer.age}</td>
                         <td>{customer.height}</td>
                         <td>{customer.mass}</td>
                         <td>{customer.eye_color}</td>
                         <td>{customer.gender}</td>
                     </tr>
                     )
                 }
                  <tr>
                         <th>Total Characters : {totalVal}</th>
                         <th></th>
                         <th></th>
                         <th>
                            Total Mass : { totalMass }
                         </th>
                         <th></th>
                         <th></th>
                     </tr>
               </table>

                <h1>All Name and Height</h1>
               <table className='customers'>
                     <tr>
                         <th>Name</th>
                         <th>Age</th>
                         <th>Height</th>
                         <th>Mass</th>
                         <th>Eye Color</th>
                         <th>Gender</th>
                     </tr>
                 {
                    custumersData.map((customer) =>
                     <tr>
                         <td>{customer.name}</td>
                         <td></td>
                         <td>{customer.height}</td>
                         <td></td>
                         <td></td>
                         <td></td>
                     </tr>
                     )
                     
                 }
               </table>

               <h1>Get First name only</h1>
               <table className='customers'>
                     <tr>
                         <th>Name</th>
                         <th>Age</th>
                         <th>Height</th>
                         <th>Mass</th>
                         <th>Eye Color</th>
                         <th>Gender</th>
                     </tr>
                 {
                    custumersData.map((customer) =>
                     <tr>
                         <td>{customer.name.split(" ", 1)}</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                     </tr>
                     )
                 }
               </table>

            </div>
       </>

         );
        }

        export default Customers;


        // MAP
        // Get an array of all names
        // Get an array of all heights
        // Get an array of objects with just name and height properties
        // Get an array of all first names
        
        // REDUCE
        // Get the total mass of all characters
        // Get the total height of all characters
        // Get the total number of characters in all the character names
        // Get the total number of characters by eye color (hint. a map of eye color to count)
        
        // FILTER
        // Get characters with mass greater than 100
        // Get characters with height less than 200
        // Get all male characters
        // Get all female characters
        
        
        // SORT
        // Sort by name
        // Sort by mass
        // Sort by height
        // Sort by gender
        
        
        // EVERY
        // Does every character have blue eyes?
        // Does every character have mass more than 40?
        // Is every character shorter than 200?
        // Is every character male?
        
        
        // SOME
        // Is there at least one male character?
        // Is there at least one character with blue eyes?
        // Is there at least one character taller than 200?
        // Is there at least one character that has mass less than 50?

//CSS
        
// .customers {
// 	font-family: Arial, Helvetica, sans-serif;
// 	border-collapse: collapse;
// 	width: 100%;
//   }
  
//   .customers td, .customers th {
// 	border: 1px solid #ddd;
// 	padding: 8px;
// 	text-align: center !important;
//   }
  
//   .customers tr:nth-child(even){background-color: #f2f2f2;}
  
//   .customers tr:hover {background-color: #ddd;}
  
//   .customers th {
// 	padding-top: 12px;
// 	padding-bottom: 12px;
// 	text-align: left;
// 	background-color: #04AA6D;
// 	color: white;
//   }

