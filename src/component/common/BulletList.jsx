import React from 'react';
import styled from 'styled-components';

const Wrap = styled.ul`
  margin: 0 40px 18px 35px;
  list-style-type: disc;
`;

const Item = styled.li`
  margin-bottom: 0.75em;
`;

const Title = styled.span`
  font-family: serif;
  font-weight: bold;
  margin-bottom: 1em;
  display: contents;
  font-family: Segoe UI, 맑은 고딕;
`;

const Content = styled.span`
  line-height: 1.4em;
  white-space: pre-wrap;
  display: contents;
`;

// A BulletListItem can be either titled or titleless
export class BulletListItem extends React.Component {
    render() {
        return (
            <Content>
                {this.props.title && <Title>{this.props.title}: </Title>}
                {this.props.children}
            </Content>
        );
    }
}
BulletListItem.defaultProps = {
    title: null
};

export class BulletList extends React.Component {
    render() {
        const renderItem = (item) => {
            return (
                <Item>{item}</Item>
            );
        };
        return (
            <Wrap>
                {React.Children.map(this.props.children, (item) => renderItem(item))}
            </Wrap>
        );
    }
}
