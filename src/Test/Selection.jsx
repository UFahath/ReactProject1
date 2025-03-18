import {useEffect,React, useState} from 'react'
import Select from 'react-select'

import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


export const Selection =() => {
  let [output,setOutput]=useState("");
  let [datas,setData]=useState([]);
  useEffect(()=>{
   fetch("/ReactProject1/db.json")
    .then((response)=>{
      console.log(response)
      if(response.ok)
      {
        return response.json();
      }
      else{
        throw new Error("new Error")
      }
    }).then((data)=>{
       setData(data.data.departure)
    }).catch(error=>{
      console.log(error,"not found file")
    });

  },[])

  let customStyle1=
    {
      control:(provided)=>({...provided,
      //  borderRadius:"none",

       topLeftRadius:"10px",
       bottomLeftRadius:"10px",
       

      }),
      option:(provided,state)=>({...provided,backgroundColor:state.isSelected?"green":"yellow"})
    };
    let customStyle2=
    {
      control:(provided)=>({...provided,
      //  borderRadius:"none",
       topRightRadius:"10px",
       bottomRightRadius:"10px",
   
      }),
      option:(provided,state)=>({...provided,backgroundColor:state.isSelected?"green":"yellow"})
    };

  return (
    <>
        <div className="conatiner d-flex bg-danger p-4">
              <Select options={options} className='w-25' styles={customStyle1} />
          
            
              <button className="btn btn-primary rounded-0">
                toggle
              </button>
            
          
            <Select options={options} className='w-25' styles={customStyle2}/>
           
        </div>
         <div className="container">
          {
            datas.map((data)=>(
              <ul>
                <li  key={Math.random()}>{data.departure}</li>
              </ul>
            ))

          }
         </div>
    </>
  )
}  
