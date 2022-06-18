import React, { useEffect } from 'react';
import Feed from '../../components/Feed/Feed';
import { HomeWrapper } from './HomeStyles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFeeds, setLoading, setFeeds } from '../../actions/getFeedAction';
import Fallback from '../../components/Feed/Fallback';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeeds());
  }, [dispatch]);

  const { feeds, isLoading } = useSelector((state) => state.feedReducer);

  return (
    <>
      <HomeWrapper>
        {feeds.map((feed, idx) => {
          return (
            <Feed
              key={feed.id}
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
