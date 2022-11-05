import {useState, useEffect} from 'react'
import {  headings, images } from "./json";
import "./App.css"

export default function App() {
    const [currentHeading, setCurrentHeading] = useState(null);
    const [image, setImage]=useState(null)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentHeading(headings[Math.floor(Math.random() * headings.length)]);
        }, 1000)
        
        return () => clearInterval(intervalId);
    }, [])
    useEffect(() => {
      const intervalImg = setInterval(() => {
          setImage(images[Math.floor(Math.random() * images.length)]);
      }, 1000)
      
      return () => clearInterval(intervalImg);
  }, [])

    return (
        <div className='app'>
          <div>
            <img src={image} alt="not" width='250px' height="250px"/>
          </div>
          <div>
            <h1>{currentHeading}</h1>
            </div>
            <div>
       <button style={{backgroundColor:'black', height:'50px', borderRadius:"5px", color:"white", width:"100px"}}>Book Now</button>
     </div>
        </div>
    )
}
