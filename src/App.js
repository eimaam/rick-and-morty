import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import Container from "./components/Container";

function App() {
  // const [info, setInfo] = useState([]);

  //   useEffect(() => {
  //       fetch("https://rickandmortyapi.com/api/character")
  //           .then(res => res.json())
  //               .then(data => setInfo(data.results))
  //   }, [])

  //   let mappedInfo = info.map((element,index) => {
  //     return <Card 
  //             key={index}
  //             avatar={element.image}
  //             name={element.name}
  //             status={element.status}
  //             gender={element.gender}
  //             location={element.location.name}
  //             origin={element.origin.name}
  //         />
      
  // })

  return (
    <div>
     <Header />
     <Container />
     <Footer />
    </div>
  );
}

export default App;
