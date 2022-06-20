import React from "react";
import style from "./header.module.css";
import newsStyle from "./news.module.css";
import newsStyle2 from "./news2.module.css";
import { ReactComponent as Logo } from "../../media/jusan_logo.svg";
import backgroundVideo from "../../media/videoplayback2.mp4";

const Header = () => {
  return (
    <div>
      <header className={style.header}>
        <Logo className={style.logo}></Logo>
        <a href="https://www.jusaninvest.kz/ipo.html">IPO</a>
        <a href="https://www.jusaninvest.kz/tariffs">Тарифы</a>
        <a href="https://www.jusaninvest.kz/ipif">ПИФы</a>
        <a href="https://www.jusaninvest.kz/pension">Пенсионные активы</a>
        <a href="https://www.jusaninvest.kz/academy">Обучение</a>
        <a href="https://www.jusaninvest.kz/junior">Junior</a>
        <a href="https://www.jusaninvest.kz/radar">Radar</a>
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
              height: "20%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "0",
            }}
          >
            <source src={backgroundVideo} type="video/mp4"></source>
          </video>
        </div>
      </header>
      <div className={newsStyle2.tickerwrapperv}>
        <div className={newsStyle2.heading}>Trending Now</div>
        <ul className={newsStyle2.newstickerv}>
          <li className={newsStyle2.newstickervli}>
            <a href="">JUSAN invest web-app made by Batyrbek Kantarbayev</a>
          </li>
          <li className={newsStyle2.newstickervli}>
            <a href="https://github.com/baticon">
              Would you like to see more of Batyrbek's projects?
            </a>
          </li>
          <li className={newsStyle2.newstickervli}>
            <a href="https://singularity.camp/">
              Would you like to know where Batyrbek learned his programming
              skills?
            </a>
          </li>
          <li className={newsStyle2.newstickervli}>
            <a href="">The last news item</a>
          </li>
        </ul>
        <div>
          <input
            className={newsStyle2.searchField}
            type="text"
            placeholder="🔍 Search"
            id="searchField"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
