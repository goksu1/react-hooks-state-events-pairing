import video from "../data/video.js";
import VideoInfo from './VideoInfo';

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
       <VideoInfo embedUrl={video.embedUrl} title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes} comments={video.comments}/>
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
     
      />*/}
    </div>
  );
}

export default App;
