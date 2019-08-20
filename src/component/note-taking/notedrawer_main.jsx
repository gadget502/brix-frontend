import axios from 'axios'
import SimpleNote from './Note_Simple';
import Note from './Note';

export default class NoteDrawerMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
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

    render() {
        var child;
        if (this.state.isDetailedView) {
            const memoItem = this.detailedView;
            child = (
                <Note timestamp={memoItem.time}
                    title={memoItem.content}
                    content={memoItem.content}
                />
            )
        }
        else {
            child = this.state.data.map(memos => {
                return (<SimpleNote
                    timestamp={memos.time}
                    title={memos.content}
                    seeMore={() => this.handleClick(memos._id)}
                />)
            });
        }
        return child;
    }
}