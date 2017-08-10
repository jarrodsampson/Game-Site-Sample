import React from 'react';
import {
    NavLink
} from 'react-router-dom'
import Headroom from 'react-headroom';
import Back2Top from 'react-back2top';
import Scrollspy from 'react-scrollspy';
import {Navbar, Button, Modal} from 'react-materialize';
import Scrollchor from 'react-scrollchor';

export default function(props) {
    return (
        <div className="App">
            <header>

                <Headroom>
                    <Navbar brand='Game Title' right className="nav-bar-color uppercase" options={{ closeOnClick: true }}>
                        <Scrollspy items={ ['story', 'game', 'download'] } currentClassName="activeV">
                            <li><Scrollchor animate={{offset: -200}} to="#story">Story</Scrollchor></li>
                            <li><Scrollchor to="#game">Game</Scrollchor></li>
                            <li><Scrollchor to="#store">Store</Scrollchor></li>
                            <li><NavLink to="#download">Download</NavLink></li>
                        </Scrollspy>
                    </Navbar>
                    <div className="socials socials-top">
                        <a href="#holder"><img src="assets/images/social-facebook.png" alt="social" /></a>
                        <a href="#holder"><img src="assets/images/social-instagram.png" alt="social" /></a>
                        <a href="#holder"><img src="assets/images/social-reddit.png" alt="social" /></a>
                        <a href="#holder"><img src="assets/images/social-twitch.png" alt="social" /></a>
                        <a href="#holder"><img src="assets/images/social-twitter.png" alt="social" /></a>
                        <a href="#holder"><img src="assets/images/social-youtube.png" alt="social" /></a>
                    </div>
                </Headroom>
            </header>

            <main>

                <div className="appRoot2">
                    {props.children}
                </div>

                <Back2Top>
                    <div className="scrollTop">
                        <Button floating large className='black' waves='light' icon='navigation' />
                    </div>
                </Back2Top>

                <Modal
                    header='Download The Game'
                    id='download'
                    className='center-align'>
                    <div className='center-align'>
                        <p>
                            <img className="badges" src="assets/images/badges-apple.png" alt="" />
                            <img className="badges" src="assets/images/badges-google.png" alt="" />
                        </p>

                        <p>Copyright © 2017 GungHo Online Entertainment America, Inc. All rights reserved. </p>
                    </div>
                </Modal>
            </main>

            <footer className="page-footer black">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Game Title</h5>
                            <p className="grey-text text-lighten-4">
                                This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies. Find out more <a className="accent-color-simple" href="#sample">here.</a>
                            </p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">About The Developer</h5>
                            <ul className="col l6 m6 s6">
                                <li><a className="grey-text text-lighten-3" href="//github.com/planlodge" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a className="grey-text text-lighten-3" href="//www.linkedin.com/in/jarrodsampson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                            <ul className="col l6 m6 s6">
                                <li><a className="grey-text text-lighten-3" href="//Ko-fi.com/jarrodsampson" target="_blank" rel="noopener noreferrer">Donate</a></li>
                                <li><a className="grey-text text-lighten-3" href="//www.npmjs.com/~planlodge" target="_blank" rel="noopener noreferrer">NPMJS</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright secondary-color">
                    <div className="container">
                        © 2017 Planlodge
                        <a className="grey-text text-lighten-4 right" href="//planlodge.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
                    </div>
                </div>
            </footer>

        </div>

    );
}