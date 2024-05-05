import { useEffect, useState } from "react";
import { Card,Button } from 'antd';
import axios from "axios";
import NavBar from "../Components/NavBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MoreInformation from "../Components/MoreInformation";
import 'animate.css';
import Footers from "../Components/Footer";
AOS.init();



    const isAuthenticated = () => {
        const token = localStorage.getItem("token");
        return token ? true : false;
      };
      
      export default function AstronomyPictureOfTheDay() {
        
      
        useEffect(() => {
          // Check if the user is not authenticated
          if (!isAuthenticated()) {
            // Redirect the user to the login page
            window.location.href="/";
          }
        }, []); 
    const [APOD, setAPOD] = useState([]);
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    useEffect(() => {
        
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=fdNSKBqbucYi4XGdZy0f0ZBNDITXO91dpMdlj36x")
            .then((response) => setAPOD(response.data))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${APOD.hdurl})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }, [APOD]);

    // const handleShowMoreInfo = () => {
    //     setShowMoreInfo(true);
    // };

    // const handleHideInfo = () => {
    //     setShowMoreInfo(false);
    // };

    return (
        <div>
            <NavBar />
            <p style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}> {APOD.title}</p>

            <Card data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" style={{  margin: 50, backgroundColor: 'black',color:'white', marginTop:"100vh", marginBottom:200 }}>
                <p>Title: {APOD.title}</p>
                <p>Explanation: {APOD.explanation}</p>
                <p>Date: {APOD.date}</p>
            </Card>

            <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)' }}>
                    <Button style={{color:"white",backgroundColor:'rgba(0, 0, 0, 0.60)'}}>---Scroll Down for more Information---</Button>
                </div>

            {/* <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                {showMoreInfo && <MoreInformation title={APOD.title} explanation={APOD.explanation}/>}
            </div> */}

            {/* {!showMoreInfo && (
                <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)' }}>
                    <button onClick={handleShowMoreInfo}>More Information</button>
                </div>
            )}

            {showMoreInfo && (
                <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)' }}>
                    <button onClick={handleHideInfo}>Hide Info</button>
                </div>
            )} */}
            <Footers/>
        </div>
    );
}
