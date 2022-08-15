import React from 'react'

export default function Card(props) {
    let classname;
    let condition;
    if(props.status === "Alive"){
        classname = "status--alive"
        condition = "Alive"
    }else if(props.status === "Dead"){
        classname = "status--dead"
        condition = "Dead"
    }else{
        classname = "status--unknown"
        condition = "Unknown "
    }
    
  return (
      <div className='card'>
        <h3 className={classname}>{condition}</h3>
        <div className='card--avatar'>
            <img src={props.avatar} alt="" />
        </div>
        <div className='card--details'>
            <h2>{props.name}</h2>
            <h3>Gender: <span>{props.gender}</span></h3>
            <h3>Location: <span>{props.location}</span></h3>
            <h3>Origin: <span>{props.origin}</span></h3>
        </div>
    </div>
  )
}
