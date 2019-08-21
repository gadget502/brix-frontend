import React from 'react';
import styled from 'styled-components';


const ContentWrap = styled.span`
    display: block;
    text-align: center;
`;

export default class Center extends React.Component {
    render() {
        return (
            <ContentWrap style={{ padding: String(this.props.padding) }}>
                <div style={{ textAlign: 'center' }}>
                    {this.props.children}
                </div>
            </ContentWrap>
        );
    }
}
Center.defaultProps = {
    padding: null
};
