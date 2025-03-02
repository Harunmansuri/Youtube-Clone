import { useParams } from 'react-router-dom';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended.jsx';
import './Video.css';
import React from 'react'

const Video = () => {
  const {videoId,categoryId} =useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video

