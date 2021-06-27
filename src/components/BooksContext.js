import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const BooksContext = createContext();

export const BooksContextProvider = (props) => {
    const [data, setData] = useState();
    // const apiKey = "65f16170a96c4d859ef314277fe85539";

    useEffect(() =>{
        axios
            .get(
                '../books.json'
            )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error)) 
    }, []);

    return (
        <BooksContext.Provider value={{ data }}>
          {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContext