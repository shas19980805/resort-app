import React, { Component } from "react";
import defaultBcg from "../images/room-3.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

export default class SingleRooms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <Hero>
          <Banner title="no such room could be found">
            <Link to="/rooms" className="btn-primary">
              Go Back
            </Link>
          </Banner>
        </Hero>
      );
    }

    const {
      name,
      description,
      capacity,
      price,
      size,
      extras,
      breakfast,
      pets,
      images
    } = room;

    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg}>
          <Banner title={`${name}`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img src={item} key={index} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: @{price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                maximum Capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>pets {pets ? "allowed" : "not allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h3>Extras</h3>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
