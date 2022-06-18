import React, { useEffect, useRef, useCallback } from 'react';
import Feed from '../../components/Feed/Feed';
import { HomeWrapper } from './HomeStyles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFeeds, setLoading, setFeeds } from '../../actions/getFeedAction';
import Fallback from '../../components/Feed/Fallback';

const Home = () => {
  const dispatch = useDispatch();

  const { feeds, isLoading } = useSelector((state) => state.feedReducer);

  // -------------- infinite scrolling--------------------//
  const observer = useRef();

  const lastFeedRef = useCallback(
    (node) => {
      console.log(isLoading);
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log('Intersecting');
          dispatch(getFeeds());
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, dispatch]
  );

  // -----------------------------------------------------------------------//

  useEffect(() => {
    dispatch(getFeeds());
  }, [dispatch]);

  return (
    <>
      <HomeWrapper>
        {feeds?.map((feed, idx) => {
          if (feeds?.length === idx + 1) {
            return (
              <Feed
                Ref={lastFeedRef}
                key={feed.id}
                imgURL={feed.urls.regular}
                avatarURL={feed.user.profile_image.small}
                userName={feed.user.username}
              />
            );
          } else {
            return (
              <Feed
                key={feed.id}
                imgURL={feed.urls.regular}
                avatarURL={feed.user.profile_image.small}
                userName={feed.user.username}
              />
            );
          }
        })}
      </HomeWrapper>
    </>
  );
};

export default Home;
