import React from 'react';
import '../Css/Home.css';
import Banner from './Banner';
import Navbar from './Navbar';
import requests from '../Requests';
import Row from './Row';

function Home() {
   
  return (
    <div className='Homescreen'>
    <Navbar ></Navbar>
    <Banner></Banner>
    <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  )
}

export default Home