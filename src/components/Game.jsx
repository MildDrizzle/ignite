import React from "react";
import { Link } from "react-router-dom";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux

import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";
//Utils
import { smallImage } from "./../utli";

const Game = ({ name, released, id, image }) => {
  //Load Detail

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
