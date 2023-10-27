import { Component } from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import React, { useState, useEffect } from 'react';

function MovieGallery({ searchQuery }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const apiKey = '19f99c1';
        const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=Pirates of the Caribbean`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.Search) {
                    // Filtra solo gli oggetti con Type "movie"
                    const filteredMovies = data.Search.filter(movie => movie.Type === 'movie');
                    setMovies(filteredMovies);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [searchQuery]);

    return (
        <Container className="text-white">
            <Row lg={2} md={2} xs={1}>
                {movies.map((movie) => (
                    <Col key={movie.imdbID} className='d-md'>
                        <div>
                            <h2>{movie.Title}</h2>
                            <p>Year: {movie.Year}</p>
                            <img src={movie.Poster} alt={movie.Title} />
                        </div>
                    </Col>
                ))}
            </Row>
            <Carousel className="d-block d-md-none">
                {movies.map((movie) => (
                    <Carousel.Item key={movie.imdbID}>
                        <img
                            className="d-block w-100"
                            src={movie.Poster}
                            alt={movie.Title}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default MovieGallery;
