import axios from 'axios'
import SimpleNote from './Note_Simple';
import Note from './Note';
import { Icon } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Box from '@material-ui/core/Box';
import { IconButton } from 'material-ui';

import styled from 'styled-components';
import { BackButton } from '../common';

export default class NoteDrawerMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.backToList = this.backToList.bind(this);
        this.detailedView;
        this.state = {
            isDetailedView: false,
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://13.124.213.75:3000/api/comment')
            .then((response) => {
                console.log(response.data)
                this.setState({
                    data: response.data
                });
            });
    }

    handleClick(id) {
        axios.get('http://13.124.213.75:3000/api/comment/' + id).then((response) => {
            console.log(response.data);
            this.detailedView = response.data;
            this.setState({ isDetailedView: true });
            this.render();
        })
    }

    backToList() {
        if (this.state.isDetailedView) {
            this.setState({ isDetailedView: false });
            this.render();
        }
    }


    render() {
        var child;
        if (this.state.isDetailedView) {
            const memoItem = this.detailedView;
            child = (
                <Box>
                    <BackButton style={{ margin: '16px' }} onClick={() => this.backToList()} />
                    <Note
                        uuid={memoItem._id}
                        timestamp={memoItem.time}
                        title={memoItem.content}
                        content={memoItem.content}
                    />
                </Box>
            )
        }
        else {
            child = this.state.data.map(memos => {
                return (
                    <SimpleNote
                        timestamp={memos.time}
                        title={memos.content}
                        seeMore={() => this.handleClick(memos._id)}
                    />
                )
            });
        }
        return child;
    }
}