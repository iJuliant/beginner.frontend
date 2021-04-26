import React, { Component } from "react";
import styles from "./footer.module.css"
import logo from  "../../assets/navbar-logo.png"
import cineOne from "../../assets/cineone21.png"
import ebv from "../../assets/ebv.png"
import hiflix from "../../assets/hiflix.png"
import facebook from "../../assets/eva_facebook-outline.png"
import twitter from "../../assets/eva_twitter-outline.png"
import youtube from "../../assets/feather_youtube.png"
import instagram from "../../assets/bx_bxl-instagram.png"
import { Col } from 'react-bootstrap';


class Footer extends Component {
  render() {
    return (
      <>
          <Col className={styles.footerEl1}>
            <img src={logo} />
            <p className={styles.footerText1}>Stop waiting in line. Buy tickets,</p>
            <p className={styles.footerText2}>Conveniently, watch movie quitely</p>
          </Col>
          <Col className={styles.footerEl1}>
            <p className={styles.footerText3}>Explore</p>
            <p className={styles.footerText4}>Cinemas</p>
            <p className={styles.footerText4}>Movie List</p>
            <p className={styles.footerText4}>My Tickets</p>
            <p className={styles.footerText4}>Notifications</p>
          </Col>
          <Col>
            <p className={styles.footerText3}>Our Sponsors</p>
            <img className={styles.cinemaLogo1} src={ebv} /><br />
            <img className={styles.cinemaLogo2} src={cineOne} /><br />
            <img className={styles.cinemaLogo3} src={hiflix} />
          </Col>
          <Col>
            <p className={styles.footerText3}>Follow Us</p>
              <Col className={styles.socialMediaFooter}><img src={facebook}/>Tickitz Cinema Id</Col>
              <Col className={styles.socialMediaFooter}><img src={instagram}/>tickitz.id</Col>
              <Col className={styles.socialMediaFooter}><img src={twitter}/>tickitz.id</Col>
              <Col className={styles.socialMediaFooter}><img src={youtube}/>Tickitz Cinema Id</Col>
          </Col>
      </>
    );
  }
}

export default Footer;