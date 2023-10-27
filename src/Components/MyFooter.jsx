import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';

function MyFooter() {
    return (
        <footer>
            <div
                class="d-flex pt-5 container mt-5 w-75 text-secondary flex-column-reverse flex-wrap flex-lg-row justify-content-around"
            >
                <div>
                    <a href="#" class="text-decoration-none text-secondary"
                    ><Facebook style={{ marginRight: 1 + 'em' }} /></a>
                    <a href="#" class="text-decoration-none text-secondary"
                    ><Instagram style={{ marginRight: 1 + 'em' }} /></a>
                    <a href="#" class="text-decoration-none text-secondary">
                        <Twitter style={{ marginRight: 1 + 'em' }} /> <Youtube /></a>
                    <div>
                        <a href="#" class="text-decoration-none text-secondary">
                            <p class="m-1">Audio And Subtitles</p></a
                        >
                        <a href="#" class="text-decoration-none text-secondary">
                            <p class="m-1">Media Center</p></a
                        >
                        <a href="#" class="text-decoration-none text-secondary">
                            <p class="m-1">Privacy</p></a
                        >
                        <a href="#" class="text-decoration-none text-secondary">
                            <p class="m-1">Contact Us</p></a
                        >
                        <button type="button" class="btn btn-outline-secondary">
                            Service Code
                        </button>
                        <p class="fs-6">© 1997-2019, inc</p>
                    </div>
                </div>
                <div>
                    <a href="#" class="text-decoration-none text-secondary">
                        <p class="m-1">Audio Description</p></a
                    >
                    <a href="#" class="text-decoration-none text-secondary">
                        <p class="m-1">Investor Relation</p></a
                    >
                    <a href="#" class="text-decoration-none text-secondary">
                        <p class="m-1">Legal Notices</p></a
                    >
                </div>
                <div>
                    <a href="#" class="text-decoration-none text-secondary">
                        <p class="m-1">Help Center</p></a
                    >
                    <a href="#" class="text-decoration-none text-secondary">
                        <p class="m-1">Jobs</p></a
                    >
                    <a href="#" class="text-decoration-none text-secondary">
                        <p class="m-1">Cookie Preferences</p></a
                    >
                </div>
                <div>
                    <a href="#" class="text-decoration-none text-secondary">
                        <p class="m-1">Gift Card</p></a
                    >
                    <a href="#" class="text-decoration-none text-secondary">
                        <p class="m-1">Terms of Use</p></a
                    >
                    <a href="#" class="text-decoration-none text-secondary"
                    ><p class="m-1">Corporate Information</p></a
                    >
                </div>
            </div >
        </footer >
    );
}

export default MyFooter;


