import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const BooksContext = createContext();

export const BooksContextProvider = (props) => {
    const [data, setData] = useState();
    // const apiKey = "65f16170a96c4d859ef314277fe85539";

    useEffect(() =>{
        fetch("../edezall.json").then(result =>{
            result.json().then((resp)=>{setData(resp)})},[])
            console.warn(data);
        })

    return (
        <BooksContext.Provider value={{ data }}>
          {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContext