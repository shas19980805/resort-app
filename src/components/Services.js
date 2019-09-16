import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda eum ad magni? Minus, animi. Porro, laboriosam, iure itaque, ad magni doloribus reiciendis repudiandae suscipit accusantium obcaecati nesciunt aliquid doloremque!"
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda eum ad magni? Minus, animi. Porro, laboriosam, iure itaque, ad magni doloribus reiciendis repudiandae suscipit accusantium obcaecati nesciunt aliquid doloremque!"
      },
      {
        icon: <FaShuttleVan />,
        title: "shuttle facility",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda eum ad magni? Minus, animi. Porro, laboriosam, iure itaque, ad magni doloribus reiciendis repudiandae suscipit accusantium obcaecati nesciunt aliquid doloremque!"
      },
      {
        icon: <FaBeer />,
        title: "complimentary beers",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda eum ad magni? Minus, animi. Porro, laboriosam, iure itaque, ad magni doloribus reiciendis repudiandae suscipit accusantium obcaecati nesciunt aliquid doloremque!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
