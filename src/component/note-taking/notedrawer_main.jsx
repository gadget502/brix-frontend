import axios from 'axios'
import SimpleNote from './Note_Simple';

export default class NoteDrawerMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

    render() {
        const child = this.state.data.map(memos => {
            return (<SimpleNote
                timestamp={memos.time}
                title={memos.content} />)
        });
        return child
    }
}