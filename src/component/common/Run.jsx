import React from 'react';
import styled from 'styled-components';


const Content = styled.span`
  line-height: 1.4em;
  display: contents;
  white-space: pre-wrap;
  font-family: Verdana, Segoe UI, 맑은 고딕;
`;

class Run extends React.Component {
    render() {
        return (
            <Content style={{ ...this.props.style }}>
                {this.props.children}
            </Content>
        );
    }
}
Run.defaultProps = {
    style: ''
};

export default Run;
