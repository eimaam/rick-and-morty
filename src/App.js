import React, { useState, useEffect} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";
import { BarLoader, DotLoader } from 'react-spinners';


function App() {
  const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

  return (
    <div className="App">
      {loading ? (
        <BarLoader color={'#fff'} loading={loading} size={100} className="loader"/>
      ) :  (
        <div>
          <Header />
          <Container />
          <Footer />
        </div>
     )
      }
    </div>
  );
}

export default App;
