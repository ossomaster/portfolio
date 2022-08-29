import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";

const Wrapper = styled.header`
  min-height: 100vh;
  background-color: #fffaf0;
  display: flex;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  margin: 0 auto;
`

const Name = styled.h1`
  font-size: 48px;
  font-weight: 700;
`

const Position = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
`

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Grid>
          <div>
            <Name>Dante Alvarez</Name>
            <Position>Web Developer</Position>
            <p>Apasionado por el Front-end y Back-end</p>
          </div>
          <div>
            <Image src="https://via.placeholder.com/500" alt="Dante Alvarez" />
          </div>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Hero;
