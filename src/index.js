import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetails';

const API_KEY = 'AIzaSyAQL9RvEEQdOIiH5wGYmpYt - Qj - ppHZoNY';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YtSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideos: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectVideo => this.setState({ selectedVideo })}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));