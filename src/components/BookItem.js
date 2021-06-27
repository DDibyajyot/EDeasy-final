import React from 'react'
import styled from 'styled-components'

function BookItem(props) {
    const data = props.data;
    // console.log(data);
    // console.log(data.grade)
    return (
        <Wrap>
            {/* {console.log(data)} */}
            <h3>{data.Name}</h3>
            <p>{data.Subject}</p>
            <span>{data.grade}</span>
        </Wrap>
    )
}

export default BookItem

const Wrap = styled.div `
    cursor:pointer;
    border-radius: 10px;
    width: 300px;
    background-color: #000000;
    color: #ffffff;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%)  0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94) 0s;

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -10px,
        rgb(0 0 0 / 72%)  0px 30px 22px -10px;
    }
    margin: 0 auto;

`
const Text = styled.div `

`