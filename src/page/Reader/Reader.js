import React from 'react';
import styled from 'styled-components';

import Prologue from 'component/algorithms-jeffe/Prologue';
import NoteDrawer from 'component/note-taking/NoteDrawer';
import Chapter1 from '../../component/algorithms-jeffe/Chapter1';
import Chapter0 from '../../component/algorithms-jeffe/Chapter0';

const Wrap = styled.div``;

const InnerWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Header = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 72px;
  padding: 0 24px;
  background-color: white;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 200;
`;

const HeaderText = styled.div`
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075rem;
`;

const __DUMMY_JSON__ = [
  {
    _id: '',
    content: 'asdfsadf',
    type: 'text',
  },
];

export default function Reader({
  page = null,
  title = 'Algorithms - Jeff Erickson',
}) {
  if (page == null)
    page = (
      <InnerWrap>
        {' '}
        <Prologue /> <Chapter0 /> <Chapter1 />{' '}
      </InnerWrap>
    );
  return (
    <Wrap>
      <NoteDrawer page={page} title={title} />
    </Wrap>
  );
  /*
  return (
    <Wrap>
      <Header>
        <HeaderText>{title}</HeaderText>
      </Header>
      <InnerWrap>
        {page}
      </InnerWrap>
    </Wrap>
  );*/
}
