import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/emojiPosts';
import { Container } from '@material-ui/core';
import EmojiGrid from './EmojiGrid';
import Mood from './Mood';
import './index.css';
// import EmojiPost from './EmojiPost';
// import EmojiPosts from '../EmojiPosts';

const Home = () => {
  // Set initial state
  const [userEmoji, setUserEmoji] = useState('');
  const dispatch = useDispatch();

  // add post state for displaying on posts section
  // try using the dropdown in the react course to make the fist index display at the top of the page, once the user choose a new emoji add it to the side bar but avoid it in both with an if/else as shown in the example

  // On state change create new post send to db
  useEffect(() => {
    // Prevents creating post on first load
    if (userEmoji !== '') {
      dispatch(createPost(userEmoji));
    }
    return () => {
      // Cleanup function to reset the state allowing for multiple posts on click
      setUserEmoji('');
    };
  }, [userEmoji, dispatch]);

  return (
    <Container>
      <br />
      <Mood userEmoji={userEmoji} />
      <br />
      <br />
      <br />
      <EmojiGrid setUserEmoji={setUserEmoji} />
      {/* <EmojiPosts /> */}
    </Container>
  );
};

export default Home;
