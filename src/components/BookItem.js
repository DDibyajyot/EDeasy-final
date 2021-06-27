import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

function BookItem(props) {
    const data = props.data;
    // console.log(data);
    // console.log(data.grade)
    return (
        // <Wrap>
        //     {/* {console.log(data)} */}
        //     <h3>{data.Name}</h3>
        //     <p>{data.Subject}</p>
        //     <span>{data.grade}</span>
        // </Wrap>
        <div class="card text-white" style={{backgroundColor: "#0D0934"}}>
        {/* <img class="card-img-top mx-auto rounded " src={data.coverURL} alt="Card image" style={{width: "60%", height: "300px"}} /> */}
        <div class="card-body">
          <h4 class="card-title">{data.Name}</h4>
          <p class="card-text">Subject: {data.Subject}</p>
          <p class="card-text">Grade: {data.grade}</p>
          <a href={data.coverURL} class="btn btn-warning" target="_blank">Get Now</a>
        </div>
      </div>
    )
}

export default BookItem

// const Wrap = styled.div `
//     cursor:pointer;
//     border-radius: 10px;
//     width: 300px;
//     background-color: #231E56;
//     color: #ffffff;
//     border: 3px solid rgba(249, 249, 249, 0.1);
//     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
//     rgb(0 0 0 / 73%)  0px 16px 10px -10px;
//     transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94) 0s;

//     &:hover{
//         transform: scale(1.05);
//         border-color: rgba(249, 249, 249, 0.8);
//         box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -10px,
//         rgb(0 0 0 / 72%)  0px 30px 22px -10px;
//     }
//     margin: 0 auto;

// `
// const Text = styled.div `

// `
