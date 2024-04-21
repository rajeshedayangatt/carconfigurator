import React from "react";
import { useStoreMaster } from '../store';
import { shallow } from 'zustand/shallow';


const sidebar = [
    "Front Bumper" , "Hood","Full Fender","Side View Mirror",
    "Rear Bumper",
    "Rocker Pannels","Roof","Door","Door Handles","Trunk","Rear Doors"
]

const colours = [
    {
      colour: "#FF0000",
      name: "red",
    },
    {
      colour: "#1a5e1a",
      name: "green",
    },
    {
      colour: "#0000FF",
      name: "blue",
    },
    {
      colour: "#A020F0",
      name: "purple",
    },
    {
      colour: "#ffa500",
      name: "orange",
    },
    {
      colour: "#59555b",
      name: "grey",
    },
    {
      colour: "#222222",
      name: "black",
    },
    {
      colour: "#ececec",
      name: "white",
    },
  ];
export default function Customiser() {

    const storeMaster = useStoreMaster(
        (state) => ({
            setColor : state.setColor,
            setParts : state.setParts,
    
        }),
        shallow,
      );
    

    const [activeElement , setActiveElement] = React.useState("Front Bumper")

    const handlesidebar = (val) => {
        setActiveElement(val)
        storeMaster.setParts(val);

    }

    const handleColor = (val) => {

        storeMaster.setColor(val);

    }
    
    return(
        <div className="w-full h-auto absolute z-[9999999] bottom-0 left-0 bg-black text-white">
            <div id="title" className="bg-gray-800   
            
            ">
                <div className="flex flex-row justify-evenly ">

                    {
                        sidebar && sidebar.map(val => {

                            return(
                                <div 
                                key={val}
                                onClick={() => handlesidebar(val)}
                                className={`font-bold p-2 hover:bg-black cursor-pointer text-center justify-center
                                transition duration-150 ease-out 
                                ${activeElement === val ? 'bg-black' : ''}
                                `}
                    
                                >{val}</div>
                            )
                        })
                    }
         
                  
                </div>
            </div>

            <div id="content" className="flex  flex-row justify-evenly p-5 bg-black-500">
              
                    {
                        colours && colours.map( (val , index) =>
                        
                             <div 
                             key={val+index}

                             onClick={() => handleColor(val.colour)}
                             className="w-[50px] h-[50px] block ml-12   rounded-[12px] "
                             style={{
                                backgroundColor : val.colour,
                                cursor : 'pointer'
                             }}></div>
                            
                        )
                    }
            </div>
        </div>
    )
}