import React, { useState, useEffect } from 'react'
import { Zoom } from 'react-awesome-reveal';
import Card from './Card'


export default function Container() {

    const [info, setInfo] = useState([]);
    const detail = info;
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
                .then(data => setInfo(data.results))
    }, [])

    let mappedInfo = detail.map((element,index) => {
      return <Card 
              key={index}
              avatar={element.image}
              name={element.name}
              status={element.status}
              gender={element.gender}
              location={element.location.name}
              origin={element.origin.name}
          />
  })

  return (
    <div className='main'>
        <div id='container'>
            <Zoom>
                {mappedInfo}
            </Zoom>
        </div>        
    </div>
  )
}
