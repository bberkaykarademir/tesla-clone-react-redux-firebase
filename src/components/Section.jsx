import React from "react";
import { Fade } from "react-awesome-reveal"

const Section = ({
  sidebar,
  backgroundImg,
  title,
  description,
  leftBtnText,
  rightBtnText,
  itemId,
  range,
  speed,
  top,
  hp,
}) => {
  return (
    <div
      id={itemId}
      className={sidebar ? "container blur" : "container"}
      style={{ backgroundImage: backgroundImg }}
    >
      <Fade delay={400} bottom>
        <div className="itemText">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Fade>
      {leftBtnText && (
        <Fade delay={1100} left>
          <div className="buttonsec">
            <button className="leftButton">{leftBtnText}</button>
            {rightBtnText && (
              <button className="rightButton">{rightBtnText}</button>
            )}
          </div>
        </Fade>
      )}
      {range && (
        <div className="infos">
        <div className="infs">
          <Fade delay={600} bottom>
            <div className="info">
              <h2>{range} mi</h2>
              <p>Range (EPA est.)</p>
            </div>
          </Fade>
          <Fade delay={700} bottom>
            <div className="info">
              <h2>{speed} s</h2>
              <p>0-60 mph*</p>
            </div>
          </Fade>
          <Fade delay={800} bottom>
            <div className="info">
              <h2>{top} mph</h2>
              <p>Top Speed</p>
            </div>
          </Fade>
          {hp && (
            <Fade delay={900} bottom>
              <div className="info">
                <h2>{hp} hp</h2>
                <p>Peak Power</p>
              </div>
            </Fade>
          )}
          </div>
          <Fade delay={1000} bottom>
            <button className="infoButton">Order Now</button>
          </Fade>
        </div>
      )}
    </div>
  );
};

export default Section;
