import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 0 20px 40px 20px;
`;

export default function Remark({ src }) {
  const linkId = _id && title;

  return (
    <Wrap>
      <img style={{ margin: '0 auto', maxHeight: '300px' }} src={src} />
    </Wrap>
  );
}
