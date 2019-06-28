import React, {Component} from 'react';
import AddVideo from './components/AddVideo.js';
import Displayer from './components/Displayer.js';
import Title from './components/Title.js';
//import stylesheet from './components/stylesheet.css';
import EmotionAnalysis from './components/EmotionAnalysis.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [{
        videoLink: ''
      }]
    }
  }
  
  addVideo(postSubmitted) {
    this.setState(state => ({
      posts: [postSubmitted]
    }))
  }

  render() {
    return (
      <div>
        <Title title = {'Don\'t Laugh Challenge'}/>
        <AddVideo onAddVideo = {(addedPost) => {
          this.addVideo(addedPost);
        }}/>
        <div className = "video-wrapper">
          <Displayer posts = {this.state.posts}/>
        </div>
        <h1>
          <EmotionAnalysis/>
        </h1>
      </div>
    );
  }
}

/*

*/

export default App;
