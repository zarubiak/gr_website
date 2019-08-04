import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="services" className={`${this.props.article === 'services' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Services</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>At Campbell Electric, we pride ourselves on being hard working and getting the job done right. We offer services to all of the greater Victoria area and we're not satisfied until the work we provide exceeds your expectations. We offer a wide range of services for commercial and residential clients which includes electrical service upgrades, wiring, lighting installations, heat pump connections, renovations, knob and tube removal, electrical inspections and more.</p>
          <p>Most homes in the Greater Victoria Area built before 2000 come standard with a 100 amp service. This 100 amp service can only handle a limited amount of circuits. Electrical service upgrades can be important for home owners to consider when adding new devices to their current living situation. If you are heavily reliant on high powered electrical devices in your home, and you feel you are not getting the efficiency out of these devices that you should, a 200 amp upgrade may be the solution. Contact us to learn more about 200 amp service upgrades and other services we offer!</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <p>Below are some of the projects we have worked on. We're proud of out work and we want to ensure that our customers receive the best work in the Greater Victoria Area.</p>
          <span className="image main"><img src={pic02} alt="" /></span>
          <span className="image main"><img src={pic05} alt="" /></span>
          <p>The above two photos are showing a brand new custom home with all electrical done by Campbell Electric.</p>
          <span className="image main"><img src={pic06} alt="" /></span>
          <p>The above photo showcases a kitchen renovation that was completed by Campbell Electric.</p>
          <span className="image main"><img src={pic04} alt="" /></span>
          This photo shows us working on a 200 amp electrical service upgrage with an automatic transfer switch to a gas powered generator. Work done by Campbell Electric. 
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Campbell Electric is a family run company that is local to Victoria. We are dedicated to quality commercial and residential electrical work in a safe cost effective manner. We strive to go above and beyond when working on all of our projects. For any interested inquires about our services please feel free to contact us!</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>For any questions or inquires about services that we offer, contact us via phone, email, or Facebook below. We will be happy to assist you in making your electrical dreams a reality!</p><br />
          <p>Email: campbellelectric3@gmail.com</p>
          <p>Phone: (250)-885-7709</p>
          <ul className="icons">
            <li><a href="https://www.facebook.com/campbellelectriccanada/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main