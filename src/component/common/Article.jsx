import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 0 20px 40px 20px;
`;

const Title = styled.a`
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  color: #2e3092;
  margin-bottom: 1em;
`;

const Content = styled.div`
  line-height: 1.4em;
`;

class Article extends React.Component {
  render() {
    const linkId = this.props._id;

    return (
      <Wrap>
        {this.props.title && <Title id={linkId}>{this.props.title}</Title>}
        {React.Children.map(this.props.children, (item) => item)}
      </Wrap>
    );
  }
}
Article.defaultProps = {
  title: null,
  _id: null,
};

export default Article;
