import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import { ShopItemFunc } from "./components/ShopItemFunc";
import { ShopItemClass } from "./components//ShopItemClass";
import { CalendarFunc } from "./components//CalendarFunc";

const item = {
  brand: "Tiger of Sweden",
  title: "Leonard coat",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: "£",
};

const now = new Date();

function App() {
  return (
    <>
      <div className="container">
        <div className="background-element">
          <h2>Задание №1 - Страница интернет-магазина (Functional компонент).</h2>
        </div>
        <div className="highlight-window">
          <div className="highlight-overlay"></div>
        </div>
        <div className="window">
          <ShopItemFunc item={item}></ShopItemFunc>
        </div>
      </div>
      <div className="container">
        <div className="background-element">
          <h2>Задание №2 - Страница интернет-магазина (Class-based компонент).</h2>
        </div>
        <div className="highlight-window">
          <div className="highlight-overlay"></div>
        </div>
        <div className="window">
          <ShopItemClass item={item}></ShopItemClass>
        </div>
      </div>
      <div className="container">
        <div className="background-element">
          <h2>Задание №3 - Календарь (Functional компонент).</h2>
        </div>
        <CalendarFunc date={now} />
      </div>
    </>
  );
}

App.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default App;
