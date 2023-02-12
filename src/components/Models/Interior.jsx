import React from "react";
import { Fade } from "react-awesome-reveal"

const Interior = () => {
  return (
    <div className="interior">
      <div className="interior-title-sec">
        <Fade delay={200} duration={2000} bottom>
          <h2 className="interior-title">Interior of the Future</h2>
        </Fade>
      </div>
      <div className="interior-img"></div>
      <div className="interior-section">
        <div className="row">
          <div className="col">
            <Fade delay={200} duration={2000} left>
              <img className="img" src="/img/game.jpg" />
            </Fade>
          </div>
          <div className="col-text">
            <Fade delay={200} duration={2000} right>
              <h3> Game from Anywhere </h3>
              <p>
                Up to 10 teraflops of processing power enables in-car gaming
                on-par with today’s newest consoles. Wireless controller
                compatibility lets you game from any seat.
              </p>
            </Fade>
          </div>
        </div>
        <div className="row">
          <div className="col-text">
            <Fade delay={200} duration={2000} left>
              <h3> Stay Connected </h3>
              <p>
                Multi-device Bluetooth, wireless and USB-C charging for every
                passenger, with enough power to fast-charge your tablets and
                laptop.
              </p>
            </Fade>
          </div>
          <div className="col">
            <Fade delay={200} duration={2000} right>
              <img className="img" src="/img/connected.jpg" />
            </Fade>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Fade delay={200} duration={2000} left>
              <img className="img" src="/img/audio.jpg" />
            </Fade>
          </div>
          <div className="col-text">
            <Fade delay={200} duration={2000} right>
              <h3> Your Best Audio System </h3>
              <p>
                Up to 10 teraflops of processing power enables in-car gaming
                on-par with today’s newest consoles. Wireless controller
                compatibility lets you game from any seat.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interior;
