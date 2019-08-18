import React from 'react';
import styled from 'styled-components';


const ContentWrap = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

class WrapPanel extends React.Component {
    render() {
        return (
            <ContentWrap>
                {this.props.children}
            </ContentWrap>
        );
    }
}

export default WrapPanel;
