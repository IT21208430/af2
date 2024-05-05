import { Component } from "react";
import { Footer } from "antd/es/layout/layout";

export default class Footers extends Component{


    render() {
        return (
            <>
                <Footer style={{ textAlign: "center",height:100,
                 backgroundColor: "rgba(0, 0, 0, 0.9)"
            }}>
                <div style={{marginTop:"40px",color: "white",}}>
                Nasa Api was ©2024 Created by THARAKA NUWAN
                </div>
                    
                    <span
                        style={{
                            color: "white",
                            letterSpacing: "1.5px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            display: "inline-block",
                            width: "100%",
                            
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                        }}
                    >
                        THARAKA | IT21208430
                    </span>
                </Footer>


            </>
        )
    }



}