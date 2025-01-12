import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/bookslisting.css"
import BookImg from "../assets/img-01.png"
const BooksListing = () => {
  return (
    <>
    <div className="booksListingpage">
    <Navbar/>
    <div className="bookspage_container">
        <h2>Books</h2>
        <div className="books">
            <div className="book">
                <img src={BookImg} alt="" />
                <div className="booktext">
                    <h3 className="title">Database and Algorithum</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, temporibus?</p>
                    <button>Download</button>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default BooksListing