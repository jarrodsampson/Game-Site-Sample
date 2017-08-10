import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/css/Home.css';
import '../../styles/css/owl.carousel.min.css';
import '../../styles/css/owl.theme.default.min.css';
import * as APIService from '../../services/APIService';
import Layout from '../layouts/Layout';
import CarouselHomeSlides from './views/CarouselHomeSlides';
import CarouselItems from './views/CarouselItems';
import { Parallax } from 'react-parallax';

class Home extends Component {

  getContent() {
    APIService.getAllDroneStrikes();
  }

  componentDidMount() {
    this.getContent();
  }

  render() {
    return (
      <Layout className="App">


          <div className="slideshowBanner relative">
              <CarouselHomeSlides list={this.props.slideshowBanner} />
          </div>

        <div className="panel panelA">

            <div className="row video-section">

                <div className="video-background">
                    <div className="video-foreground">
                        <iframe
                            title="CoverVid"
                            id="myVideo"
                            frameBorder="0"
                            src={"https://www.youtube.com/embed/" + this.props.videoIdData + "?controls=0&showinfo=0&mute=1&rel=0&autoplay=1&loop=1&playlist=" + this.props.videoIdData}></iframe>
                    </div>
                </div>

            </div>

            <div className="container-fluid row center-align padding-top panel-small">

                <div className="col s12 m12 storyPanel">
                    <h3 className="headerTitle" id="story">Story</h3>
                    <p>Enroute to wed his fiancée Luna on a road trip with his best friends, Prince Noctis is advised by news reports that his homeland has been invaded and taken over under the false pretense of a peace treaty – and that he, his loved one and his father King Regis, have been slain at the hands of the enemy.</p>
                    <p>To gather the strength needed to uncover the truth and reclaim his homeland, Noctis and his loyal companions must overcome a series of challenges in a spectacular open world - that is filled with larger-than-life creatures, amazing wonders, diverse cultures and treacherous foes.</p>
                </div>

            </div>

        </div>

        <div id="game">
            <CarouselItems list={this.props.carouselData} />
        </div>

        <div className="panel panelB">
            <Parallax bgImage={this.props.parallaxImage} strength={400}>
                <br/>
                <h3>Download From the App Store</h3>
                <p>
                    <img className="badges" src="assets/images/badges-apple.png" alt="" />
                    <img className="badges" src="assets/images/badges-google.png" alt="" />
                </p>
            </Parallax>
        </div>

        <div className="panel panelC" id="store">


            <div className="row center-align padding-top max-width">

                <div className="col s12 m7">
                </div>

                <div className="col s12 m5">
                    <h3 className="headerTitle">An Uncharted Story</h3>
                    <p>Available September 6. PC Available October 24. Release date subject to change. Open Beta period for all consoles is July 21-23, 2017. PC open beta and early access to follow in August. See destinythegame.com/beta for details. Limited time only, while beta codes last, at participating retailers. *Timed exclusive content until at least Fall 2018. Internet connection required. May require subscription for applicable platform, sold separately. Minimum 68 GB available hard drive storage space required as of September 2017. Storage requirements subject to increase. After September 2017, visit www.destinythegame.com/size-requirements for current requirements prior to purchase.</p>
                </div>
            </div>

        </div>


      </Layout>
    );
  }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        slideshowBanner: store.api.slideshowBanner,
        parallaxImage: store.api.parallaxImage,
        carouselData: store.api.carouselData,
        videoIdData: store.api.videoIdData
    };
};

export default connect(mapStateToProps)(Home);
