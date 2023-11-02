import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  //   const navigate = useNavigate();
  return (
    <NotFoundStyled>
      <NotFoundImgStyled
        src="https://st5.depositphotos.com/2466369/66485/v/450/depositphotos_664857908-stock-illustration-page-not-found-concept-with.jpg."
        alt="error"
      />
      <h2>
        You can go to <Link to="/">Home</Link>
      </h2>
    </NotFoundStyled>
  );
};

export default NotFound;

const NotFoundStyled = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
`;

const NotFoundImgStyled = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
