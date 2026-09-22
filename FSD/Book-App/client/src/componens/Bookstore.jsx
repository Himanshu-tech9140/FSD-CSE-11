import React from 'react'
import Book from './Book.jsx'
const Bookstore = () => {
  const bookdata=[
    {image:"https://m.media-amazon.com/images/I/51N-u8AsmdL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",title:"Atomic Habits",author:"James Clear"},
    {image:"https://m.media-amazon.com/images/I/51N-u8AsmdL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",title:"Atomic Habits",author:"James Clear"},
    {image:"https://m.media-amazon.com/images/I/51N-u8AsmdL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",title:"Atomic Habits",author:"James Clear"},
    {image:"https://m.media-amazon.com/images/I/51N-u8AsmdL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",title:"Atomic Habits",author:"James Clear"},
    {image:"https://m.media-amazon.com/images/I/51N-u8AsmdL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",title:"Atomic Habits",author:"James Clear"},           
  ]
  return (
    <div className='bookstore'>
        {bookdata.map((book,index)=>(
            <Book key={index} image={book.image} title={book.title} author={book.author}/>
        ))}
    </div>
  )
}

export default Bookstore
