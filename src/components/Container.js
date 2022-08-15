import React, { useState, useEffect } from 'react'
import { Zoom } from 'react-awesome-reveal';
import Card from './Card'
import { DotLoader } from 'react-spinners';


export default function Container() {
    
    // Loading Spinner
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

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
            {info ? 
                <Zoom>
                    {mappedInfo}
                </Zoom>
                :
                <DotLoader color={'#fff'} loading={loading} size={100} />
            }
        </div>        
    </div>
  )
}
