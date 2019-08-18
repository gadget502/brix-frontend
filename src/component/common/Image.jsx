import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 10px 25px 10px 25px;
`;

export default function Image({ src }) {
  //const linkId = _id && title;

  return (
    <Wrap>
      <img style={{ margin: '0 auto', maxHeight: '300px' }} src={src} />
    </Wrap>
  );
}
