import React, { useEffect, useState } from 'react';
import Feed from '../../components/Feed/Feed';
import { HomeWrapper } from './HomeStyles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFeeds } from '../../actions/getFeedAction';
import Fallback from '../../components/Feed/Fallback';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.feeds);
  const { feeds } = state;
  const [dataExists, setDataExists] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDataExists(true);
    }, 5000);
    dispatch(getFeeds());
  });

  return (
    <>
      <HomeWrapper>
        {JSON.parse(localStorage.getItem('newsFeed'))?.map((feed) => {
          return (
            <Feed
              imgURL={feed.urls.regular}
              avatarURL={feed.user.profile_image.small}
              userName={feed.user.username}
            />
          );
        })}
      </HomeWrapper>
    </>
  );
};

export default Home;
