import React, { useEffect, useState, useRef, useCallback } from 'react';
import Feed from '../../components/Feed/Feed';
import { HomeWrapper } from './HomeStyles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFeeds, setLoading, setFeeds } from '../../actions/getFeedAction';
import Fallback from '../../components/Feed/Fallback';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.feeds);
  const { feeds, isLoading } = state;

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(true));
    }, 2000);
    //dispatch(getFeeds());
  },[dispatch]);

  return (
    <>
      <HomeWrapper>
        {(JSON.parse(localStorage.getItem('newsFeed')))?.map((feed, idx) => {
          return (
            <Feed
              key={feed.id}
              imgURL={feed.urls.regular}
              avatarURL={feed.user.profile_image.small}
              userName={feed.user.username}
              userID={feed.user.id}
            />
          );
        })}
      </HomeWrapper>
    </>
  );
};

export default Home;
