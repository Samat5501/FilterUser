import React, {useState} from 'react';
import './App.css';
import { User } from './components/Users';
import {data} from './data'


function App() {
  const [age , setAge] = useState ('4');

  const [country , setCountry] = useState("");

  const filterKgPeople = () => {
    switch(country){
      case 1:
        let arr1 = data.filter((el) => {
          return el.age <= "18" && el.country === "Kyrgyzstan";
        });
        
        return  arr1.map((el,id,) => {
          return <User data={el} key= {id} color = 'red' />
          })
      case 2:
        let arr2 = data.filter((el) => {
          return el.age <= "18" && el.country !== "Kyrgyzstan";
        });
        
        return  arr2.map((el,id,) => {
          return <User data={el} key= {id} color = 'red' />
          })
      default:
        let arr = data.filter((el)=>{
          return el.age <= 18;
        })
        return arr.map((el,id)=>{
          return <User data={el} key={id} />
        })
    }
    }
  

  const renderUsers = () => {
    switch(age) {
      
      // 1 -render
      case "1" :
        return(
          <div className='onBtn'>
            <div>
            <button className="btn-1" onClick={()=> setCountry(1)}>Kyrgyzstan</button>
              <button  className="btn-1" onClick={()=> setCountry(2)}>Abroad</button>
            <div className="filterKgPeople">{filterKgPeople()}</div>

            </div>
          </div>
        
        )
      // <render-2></render-2>
      case "2":
        let arr2 =data.filter((el) => {
          return el.age > '18' && el.age < '24';
        });
        return arr2.map((el,id) => {
          return <User data={el} key= {id} color = 'red' />
        });
      
      // render -3
      case "3":
        let arr3 =data.filter((el) => {
          return el.age >'25';
        })
        return arr3.map((el,id) => {
          return <User data ={el} key ={id} color="blue"/>
        });
      // render 4
      case "4":
        let arr4 = data.filter((el) => {
          return el.age <= "29";
        })
        return arr4.map((el,id) => {
          return <User data={el} key={id} color="darkred"/>
        });
      default:
        return "";
    }
  }
  

  return (
    <div className="App">
      <div className = "btns-groups">
        {/* btn-1 */}
      <button className="btn"
        onClick ={ ()=> setAge('1')}
        style={
          age >'18'?{backgroundColor: "blue"} : {backgroundColor: "none"}
        }
      >
        under-18 years </button>
        
        {/* btn-2 */}
      <button  className="btn"
        onClick ={() => setAge('2')}
        style={ age >'18'&& age >'24' ?{backgroundColor: "red"} : {backgroundColor: "none"}}>
         18-24 years</button>
      {/* btn-3 */}
      <button  className="btn"
        onClick ={() => setAge('3')}
        style={
          age >='25'?{backgroundColor: "yellow"} : {backgroundColor: "none"}
        }
      >more-24 years</button>
      {/* btn-4 */}
      <button  className="btn"
        onClick ={() => setAge('4')}
        style={
          age <'29'?{backgroundColor: "silver"} : {backgroundColor: "none"}
        }
      >all years</button>
      </div>

      <div className = "containers">
      {
        renderUsers()
      //  data.map((el, id) => {
      //    return <User data ={el} key ={id} />
      //  })
     }
      </div>
     </div>
  
  )
}


export default App;