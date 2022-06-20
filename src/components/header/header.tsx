import React from "react";
import style from "./header.module.css";
import { ReactComponent as Logo } from "../../media/jusan_logo.svg";
import backgroundVideo from "../../media/videoplayback2.mp4";

const Header = () => {
  return (
    <div>
      <header className={style.header}>
        <Logo className={style.logo}></Logo>
        <div>IPO</div>
        <div>Тарифы</div>
        <div>ПИФы</div>
        <div>Пенсионные активы</div>
        <div>Обучение</div>
        <div>Junior</div>
        <div>Radar</div>
        <div>
          <div className={style.user}>USER</div>
          <span>User name</span>
        </div>
        <div className="video">
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "30%",
              left: "93%",
              top: "1.7%",
              height: "30%",
              objectFit: "cover",
              transform: "translate(-50%, -50%",
              zIndex: "0",
            }}
          >
            <source src={backgroundVideo} type="video/mp4"></source>
          </video>
        </div>
      </header>
      <div className="ticker-wrapper-h">
        <div className="heading">Trending Now</div>

        <ul className="news-ticker-h">
          <li>
            <a href="google.com">What is Lorem Ipsum?</a>
          </li>
          <li>
            <a href="google.com">Why do we use it?</a>
          </li>
          <li>
            <a href="google.com">Where does it come from?</a>
          </li>
          <li>
            <a href="google.com">Where can I get some?</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
