import React from 'react';
import styled from 'styled-components';

import * as Material from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Label = styled.div`
    font-family: Roboto, "Noto-Sans CJK KR", Verdana, "Segoe UI", "맑은 고딕";
`;

export default class Reply extends React.Component {
    onClickHandler() {
        alert('Yongho Aye! Add popup menu!');
    }
    render() {
        var e = (x) => {
            x = String(x);
            return (x.length == 1) ? ('0' + x) : (x);
        };

        var d = new Date(Number(this.props.timestamp));
        var str_timestamp = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" +
            d.getDate() + " " + e(d.getHours()) + ":" + e(d.getMinutes()) + ":" + e(d.getSeconds());

        return (
            <Material.Box style={{
                display: 'flex',
                alignItems: 'start',
                padding: '12px',
                marginTop: '12px',
                marginBottom: '12px'
            }}>
                <div style={{ width: 'calc(100% - 50px)', display: 'inline-block' }}>
                    <Label>{this.props.content}</Label>
                    <Label style={{ fontSize: '0.8em', color: '#808080', marginTop: '8px' }}>{str_timestamp}</Label>
                </div>
                <Material.IconButton onClick={this.onClickHandler.bind(this)}
                    aria-label="more" aria-controls="long-menu" aria-haspopup="true">
                    <MoreVertIcon />
                </Material.IconButton>
            </Material.Box >
        );
    }
}
Reply.defaultProps = {
    content: "ReplyDefaultContent",
    timestamp: 0
};
