



import React, {Fragment} from "react";
import "../../style/global.css";
import PersonsTemp from "./PersonsTemp";

const Persons = () => {

   // const[personName, setPersonName] = useState([]);

    const myPersons = [
        {
            id: 1,
            name: 'Luke Skywalker',
            age: '30',
            height: '172',
            mass: 77,
            eye_color: 'blue',
            gender: 'male',
        },
        {
            id: 2,
            name: 'Darth Vader',
            age: '34',
            height: '202',
            mass: 150,
            eye_color: 'yellow',
            gender: 'male',
        },
        {
            id: 3,
            name: 'Leia Organa',
            age: '55',
            height: '150',
            mass: 50,
            eye_color: 'brown',
            gender: 'female',
        },
        {
            id: 4,
            name: 'Anakin Skywalker',
            age: '25',
            height: '188',
            mass: 200,
            eye_color: 'blue',
            gender: 'male',
        }
    ];

        // all name
        let allName = myPersons.map((pname)=> {
            return pname.name;
        }).join(", ");

         //  name with height
         let allNameHeight = myPersons.map((nameHight)=> {
            return `
            Name : ${nameHight.name} and Height : ${nameHight.height} ,
            `
        });

        //All first name
        let allFirstName = myPersons.map((fname) => {
                return fname.name.split(" ", 1);
        }).join(", ");

        // total mass
        let totalMass = myPersons.reduce((intVal, currVal) => {
            return intVal + parseInt(currVal.mass);
        },0);
        
        let totalHeights = myPersons.reduce((intValue, currValue) => {
            return intValue + parseInt(currValue.height);
        },0);

        //total Characters in all name

        let totalNameCharacters = myPersons.map((totalChar) => {
            return totalChar.name.length;
        });

        let totalCharacters = totalNameCharacters.reduce((intValue, currValue) => {
                return intValue + currValue;
        },0);

        // Mass greater than 100
        let massGreaterThanHundred = myPersons.filter((mymass) => {
            //console.log(mymass.mass);
                return  mymass.mass  > 100;
        }).map(filteredMass => filteredMass.name).join(", ");

        console.log(massGreaterThanHundred);

        //get the name Height Less than 200
        let heightLessThanTwoHundred = myPersons.filter((myHeight) => {
            return myHeight.height < 200;
        }).map((filteredHeight) => filteredHeight.name).join(", ");

        //total male
        let totalMale = myPersons.filter((male) => {
            return male.gender === 'male';
        }).map((allMale) => allMale.name).join(", ");



    return (
        <Fragment>

            <div className="row bdr g-0">
                <div className="col-sm-2">Name</div>
                <div className="col-sm-2">Age</div>
                <div className="col-sm-2">Height </div>
                <div className="col-sm-2">Mass</div>
                <div className="col-sm-2">Eye Color</div>
                <div className="col-sm-2">Gender</div>
            </div>

            {
                myPersons.map((person) => 
                        <PersonsTemp 
                            personid={person.id}
                            personName={person.name}
                            personAge={person.age}
                            personHeight={person.height}
                            personMass={person.mass}
                            personEyeColor={person.eye_color}
                            personGender={person.gender}
                        />
                )
            }
             <div className="row bdr g-0 header padd">
                <div className="col-sm-2 txt">All Name</div>
                <div className="col-sm-10">{ allName }</div>
            </div>
            
            <div className="row bdr g-0 header padd">
                <div className="col-sm-2 txt">All Name and Height</div>
                <div className="col-sm-10">{ allNameHeight }</div>
            </div>

            <div className="row bdr g-0 header padd">
                <div className="col-sm-2 txt">All First Name</div>
                <div className="col-sm-10">{ allFirstName }</div>
            </div>

            <div className="row bdr g-0 header padd">
                <div className="col-sm-2 txt">Total Mass</div>
                <div className="col-sm-10">{ totalMass }</div>
                <div className="col-sm-2 txt"> Total Height</div>
                <div className="col-sm-10">  { totalHeights } </div>
                <div className="col-sm-5 txt"> Total number of characters in all the filed names</div>
                <div className="col-sm-7">  { totalCharacters } </div>
            </div>

            <div className="row bdr g-0 header padd">
                <div className="col-sm-5 txt"> Get Names with mass greater than 100</div>
                <div className="col-sm-7">  { massGreaterThanHundred } </div>
                <div className="col-sm-5 txt"> Get Names with height less than 200</div>
                <div className="col-sm-7">  { heightLessThanTwoHundred } </div>
                <div className="col-sm-5 txt"> Get all male person</div>
                <div className="col-sm-7">  { totalMale } </div>
                
            </div>

            

      </Fragment>
    );
}
export default Persons;

// MAP
// Get an array of all names - DONE
// Get an array of all heights - DONE
// Get an array of objects with just name and height properties - DONE
// Get an array of all first names - DONE

// REDUCE
// Get the total mass of all characters - DONE
// Get the total height of all characters - DONE
// Get the total number of characters in all the character names - DONE
// Get the total number of characters by eye color (hint. a map of eye color to count)

// FILTER
// Get characters with mass greater than 100 - DONE
// Get characters with height less than 200
// Get all male characters  - DONE
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

