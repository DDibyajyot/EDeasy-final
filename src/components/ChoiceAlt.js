import React, { useState } from 'react'
import Book from './Book'
import styled from 'styled-components'
import { BooksContextProvider } from '../BooksContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

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
        <div className="container" style={{minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column"}}>
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
            </div>
            {
                print?<BooksContextProvider>
                <Book grade={grade} subject={subject} />
                </BooksContextProvider>:null
            }
            <Footer>
                    <span>&copy;EDeasy</span>
                    <SocialMedia>
                        <Instagram>
                            <InstagramIcon />
                        </Instagram>
                        <Twitter>
                            <TwitterIcon />
                        </Twitter>
                        <Facebook>
                            <FacebookIcon />
                        </Facebook>
                    </SocialMedia>
                </Footer>
        </div>
    )
}

export default ChoiceAlt


const Footer = styled.footer `
    margin-top: auto;
    color: #ffffff;
    background-color: #0D0934;
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
    height: 60px;

    span{
        padding: 20px;
    }

    img{
        padding: 20px;
    }
`

const SocialMedia = styled.div `
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    a{
        cursor: pointer;
        padding: 10px;
    }
`
const Instagram = styled.a `
    svg{
        fill: #ffffff;
    }
    svg:hover{
        // fill: linear-gradient( #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80);
        fill: #CE31A7;
    }
`
const Twitter = styled.a `
    svg{
        fill: #ffffff;
    }
    svg:hover{
        fill: #32AAE8;
    }
`
const Facebook = styled.a `
    svg{
        fill: #ffffff;
    }
    svg:hover{
        fill: #1A3C77;
    }
`
