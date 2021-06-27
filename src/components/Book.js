import React, { useContext } from 'react'
import BooksContext from '../BooksContext'
import BookItem from './BookItem';
import styled from 'styled-components'

function Book(props) {
    const { data } = useContext(BooksContext);
    // console.log(data);
    // console.log(props.grade);

    return (
        <Content>
            {data?
            data.map(book => (
                    (book.grade == props.grade) && (book.Subject == props.subject)?
                    <BookItem data={book} grade={props.grade} />:null
                ))
                :"Loading"
            }
            
        </Content>
    )
}

export default Book

const Content = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3, minmax(0,0.5fr));
    //padding-bottom: 40px;

    &:empty{
        grid-gap: 0px;
        width: 0;
        height: 0;
    }
`
