import React from 'react';
import styled from 'styled-components';

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='disney' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='disney' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='disney' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='disney' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='disney' />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgb(0, 0, 0);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
