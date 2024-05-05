import { useEffect, useState } from "react";
import { Button, Col, Row,Card } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../Components/NavBar";
import Footers from "../Components/Footer";


AOS.init();
// This function checks if the user is authenticated
const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token ? true : false;
  };
  
  export default function Home() {
    
  
    useEffect(() => {
      // Check if the user is not authenticated
      if (!isAuthenticated()) {
        // Redirect the user to the login page
        window.location.href="/";
      }
    }, []); 

    useEffect(() => {
        document.body.style.backgroundImage = `url('https://apod.nasa.gov/apod/image/2405/M100_DrewEvans.png')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }, []);

    return (
        <div>
            <NavBar />
            <div style={{ textAlign: "center" }}>
                <Row gutter={[0, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} data-aos="fade-up" data-aos-duration="3000">
                        <p style={{ textAlign: "center", color: "#ffffff", fontWeight: "bold", marginTop: "100px", fontSize: "18px" }}>

                            Embark on a cosmic journey! Every day, feast your eyes on a new, <br />
                            mesmerizing image or photograph from the vast expanse of our <br />
                            universe. Accompanied by captivating explanations crafted by <br />
                            seasoned astronomers, each image offers a glimpse into the <br />
                            awe-inspiring wonders of space. Join us in exploring the mysteries <br />
                            and beauty of the cosmos, one breathtaking image at a time.<br /><br />


                        </p>

                        <Button type="primary" style={{ backgroundColor: "rgba(2, 4, 130, 0.75)", boxShadow: "0 2px 4px rgba(0,0,0,0.5)" }}><a href="/APOD" style={{ textDecoration: "none" }}>Go to APOD</a></Button>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div style={{ padding: "40px" }}>
                            <img
                                data-aos="flip-left" data-aos-duration="3000"
                                src="https://static.scientificamerican.com/sciam/cache/file/C454F5A6-536E-4C9F-AA6AF354BB85A85B_source.jpg?w=900"
                                style={{ width: "100%", borderRadius: "50px", height: 500, objectFit: "cover", }}
                            ></img>
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <Row gutter={[0, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div style={{ padding: "40px" }}>
                            <img
                                data-aos="flip-left" data-aos-duration="3000"
                                src="https://helios-i.mashable.com/imagery/articles/030CT4yzqwUoq4lnxIqlaaD/hero-image.fill.size_1248x702.v1696557026.jpg"
                                style={{ width: "100%", borderRadius: "50px", height: 500, objectFit: "cover", }}
                            ></img>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} data-aos="fade-up" data-aos-duration="3000">
                        <p style={{ textAlign: "center", color: "#ffffff", fontWeight: "bold", marginTop: "100px", fontSize: "16px" }}>


                            Embark on a visual odyssey with Mars Rover Photos! Dive into<br />
                            a captivating collection of images captured by the intrepid<br />
                            rovers exploring the Red Planet. Each photo tells a unique<br />
                            story, unveiling the rugged terrain, ancient landscapes, <br />
                            and potential clues to Mars' intriguing past. Join us on a<br />
                            journey of discovery as we unravel the mysteries of our <br />
                            neighboring planet through the lens of cutting-edge Martian <br />
                            exploration.<br /><br />

                        </p>

                        <Button type="primary" style={{ backgroundColor: "rgba(2, 4, 130, 0.75)", boxShadow: "0 2px 4px rgba(0,0,0,0.5)" }}><a href="/marsroverphotos" style={{ textDecoration: "none" }}>Mass Rover Photo Collection</a></Button>
                    </Col>
                </Row>
                <br /><br /><br />
                <Row gutter={[0, 16]}>
                    <Card data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" style={{ margin: 50, backgroundColor: 'rgba(85, 83, 84, 0.40)', marginTop: "50px", marginBottom: 100 }}>
                    <img
                                src="https://res.cloudinary.com/dljyf8xev/image/upload/v1714673957/background_images/2150188957_i8fppo.jpg"
                                style={{ width: "100%", borderRadius: "10px", height: 400, objectFit: "cover", }}
                            ></img>
                    <p style={{ textAlign: "center", color: "#ffffff", fontWeight: "bold", marginTop: "40px", fontSize: "16px" }}>
                    Mars, often referred to as the "Red Planet," is the fourth planet from the Sun in our solar system, located between Earth and Jupiter. 
                        With a diameter of about 6,779 kilometers, Mars is approximately half the size of Earth and has a surface area similar to Earth's dry landmass.
                        One of the most striking features of Mars is its reddish appearance, which is due to iron oxide, or rust, on its surface. This iron oxide gives 
                        the planet its distinct color and has led to its nickname. Mars has a thin atmosphere, composed mostly of carbon dioxide, with traces of nitrogen 
                        and argon. The planet's thin atmosphere means that Mars experiences extreme temperature variations, with temperatures ranging from -195 degrees 
                        Fahrenheit (-125 degrees Celsius) at the poles to 70 degrees Fahrenheit (20 degrees Celsius) in equatorial regions.
                        Mars has a diverse range of surface features, including vast deserts, rocky mountains, and polar ice caps. The planet is home to the largest volcano 
                        in the solar system, Olympus Mons, which is about 13.6 miles (22 kilometers) high and 370 miles (600 kilometers) in diameter. Mars also boasts the 
                        largest canyon in the solar system, Valles Marineris, which stretches over 2,500 miles (4,000 kilometers) long, 370 miles (600 kilometers) wide, 
                        and up to 7 miles (11 kilometers) deep. Mars has been a target for exploration for centuries, with astronomers observing its movements in the night 
                        sky since ancient times. The planet has been the subject of numerous robotic missions, including the Mars rovers Spirit, Opportunity, and Curiosity, 
                        which have provided valuable information about the planet's geology, climate, and potential for past habitability. Future missions to Mars, including 
                        crewed missions, are being planned by space agencies around the world, with the goal of further exploring the planet and potentially establishing a 
                        human presence there</p>
                    </Card>

                </Row>
                <Row gutter={[0, 16]}>
                    <Card data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" style={{ margin: 50, backgroundColor: 'rgba(85, 83, 84, 0.40)', marginBottom: 200 }}>
                    <img
                                src="https://cdn.mos.cms.futurecdn.net/n2nNPpAxscQp3gwNb4do85-1200-80.jpg"
                                style={{ width: "100%", borderRadius: "10px", height: 400, objectFit: "cover", }}
                            ></img>
                    <p style={{ textAlign: "center", color: "#ffffff", fontWeight: "bold", marginTop: "40px", fontSize: "16px" }}>
                    The Mars Rover is a series of robotic vehicles designed and sent to explore the surface of Mars. These rovers have 
                    been an integral part of NASA's Mars Exploration Program, providing valuable data and images of the Martian landscape. 
                    The rovers are equipped with a variety of scientific instruments, including cameras, spectrometers, and drills, allowing 
                    them to study the geology, climate, and atmosphere of Mars. One of the most famous Mars Rovers is Curiosity, which landed 
                    on Mars in 2012 as part of the Mars Science Laboratory mission. Curiosity is about the size of a small car and is powered by a 
                    radioisotope thermoelectric generator, which allows it to operate for long periods without the need for recharging. Curiosity 
                    has made numerous discoveries during its mission, including evidence of past water activity on Mars and the presence of organic molecules.
                    Another notable Mars Rover is Perseverance, which landed on Mars in February 2021. Perseverance is equipped with the most 
                    advanced scientific instruments to date and is tasked with searching for signs of past microbial life, collecting samples 
                    of Martian rock and soil for future return to Earth, and testing technologies for future human exploration of Mars.
                    The Mars Rovers have captured the imagination of people around the world, providing a glimpse into the fascinating and mysterious 
                    world of Mars. Their discoveries have helped scientists better understand the history and potential habitability of Mars, paving 
                    the way for future exploration and possibly even human colonization of the Red Planet.
                    </p>
                    </Card>

                </Row>

                
                
            </div>
            <Footers />
        </div>
    )
}
