import React, { useState } from 'react'
import Book from './Book'
import { BooksContextProvider } from '../BooksContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChoiceAlt() {
    const [grade,setGrade] = useState("")
    const [subject,setSubject] = useState("")
    const [print,setPrint] = useState(false)
    function getGrade(val) {
        setGrade(val.target.value)
        setPrint(false)
    }
    function getSubject(val){
        setSubject(val.target.value)
        setPrint(false)
    }
    return (
        <div className="container">
            <div class="form-group">
                <label for="usr">Enter Grade:</label>
                <input type="text" class="form-control" id="usr" onChange={getGrade} />
            </div>
            <br></br>
                <div class="form-group">
                <label for="pwd">Enter Subject:</label>
                <input type="text" class="form-control" id="pwd" onChange={getSubject} />
                </div>
                <br></br>
            <button class="btn btn-success" onClick={()=>setPrint(true)}>Submit</button>
            {
                print?<BooksContextProvider>
                <Book grade={grade} subject={subject} />
                </BooksContextProvider>:null
            }
        </div>
    )
}

export default ChoiceAlt
