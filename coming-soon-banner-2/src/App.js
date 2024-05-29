import React, { useState, useEffect } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './media.css';
import './index.css';
import './isTabletOrMobile.css';
import SocialButton from './SocialButtons/SocialButton';
import Loading from './loader/Loading';
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive'
import { BreakpointState } from "./Breakpoint/BreakpointState";

const queries = {
  "for-phone-only": "(max-width: 559px)",
  "for-tablet-portrait-up": "(min-width: 600px)",
  "for-tablet-landscape-up": "(min-width: 900px)",
  "for-desktop-up": "(min-width: 1200px)",
  "for-big-desktop-up": "(min-width: 1800px)",
  portrait: "(orientation: portrait)",
  landscape: "(orientation: landscape)"
};

function App() {
  const [loading, setLoading] = useState(true);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
  const Mobile = useMediaQuery({ query: '(max-width: 430px)' })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleClick = (platform) => {
    switch (platform) {
      case 'instagram':
        window.open('https://www.instagram.com/', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/', '_blank');
        break;
      case 'twitter':
        window.open('https://www.twitter.com/', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BreakpointState queries={queries}>
          {isTabletOrMobile ? <section className="isTabletOrMobile-container">
            <motion.div className="isTabletOrMobile-clock_content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {Mobile ? <h1 >We’re <br /> Coming Soon!</h1> : <h1 >We’re Coming Soon!</h1>}
              <h3 style={{ color: '#000000' }}>Website is under construction</h3>
              <h4 style={{ color: '#4F4F4F' }}>We’re working hard to give you the<br />
                best experience.</h4>
              <motion.div className='isTabletOrMobile-social-decoration'>
                <SocialButton platform="instagram" onClick={handleClick} />
                <SocialButton platform="facebook" onClick={handleClick} />
                <SocialButton platform="twitter" onClick={handleClick} />
                <SocialButton platform="linkedin" onClick={handleClick} />
              </motion.div>
            </motion.div>
            <div className="isTabletOrMobile-time-container">
              <FlipClockCountdown className='isTabletOrMobile-flip-clock' to={new Date().getTime() + 24 * 3600 * 1000 + 5000} />
              <div className="isTabletOrMobile-input-container">
                <input type='text' className="isTabletOrMobile-email-input" placeholder="Email Address" />
                <div className='isTabletOrMobile-notify-btn'>
                  <button className="isTabletOrMobile-notify-button" >Notify Me</button></div>
              </div>
              <div className='isTabletOrMobile-yellow-line'></div>
            </div>
          </section> :
            <section className="container">

              <motion.div className="clock_content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 >We’re Coming Soon!</h1>
                <h3 style={{ color: '#000000' }}>Website is under construction</h3>
                <h4 style={{ color: '#4F4F4F' }}>We’re working hard to give you the<br />
                  best experience.</h4>
                <motion.div className='social-decoration'>
                  <SocialButton platform="instagram" onClick={handleClick} />
                  <SocialButton platform="facebook" onClick={handleClick} />
                  <SocialButton platform="twitter" onClick={handleClick} />
                  <SocialButton platform="linkedin" onClick={handleClick} />
                </motion.div>
              </motion.div>
              <div className="time-container">
                <FlipClockCountdown className='flip-clock' to={new Date().getTime() + 24 * 3600 * 1000 + 5000} />
                <div className="input-container">
                  <input type='text' className="email-input" placeholder="Email Address" />
                  <div className='notify-btn'>
                    <button className="notify-button" >Notify Me</button></div>
                </div>
                <div className='yellow-line'></div>
              </div>
            </section>}
        </BreakpointState>
      )}
    </>
  );
}

export default App;
