import React, { useEffect, useRef, useCallback, Suspense } from 'react';
import { HomeWrapper } from './HomeStyles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFeeds } from '../../actions/getFeedAction';
import Fallback from '../../components/Feed/Fallback';
import { Loading, Name } from '../Profile/ProfileStyles';
import { BiSad } from 'react-icons/bi';

const LazyFeed = React.lazy(() => import('../../components/Feed/Feed'));

const Home = () => {
  const dispatch = useDispatch();

  const { feeds, isLoading, error } = useSelector((state) => state.feedReducer);

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
  }, []);

  return (
    <>
      {error.length > 0 ? (
        <Loading>
          <BiSad />
          <Name>{error}</Name>
        </Loading>
      ) : (
        <HomeWrapper>
          {feeds &&
            feeds?.map((feed, idx) => {
              if (feeds?.length === idx + 1) {
                return (
                  <Suspense fallback={<Fallback />}>
                    <LazyFeed
                      Ref={lastFeedRef}
                      key={feed.id}
                      imgURL={feed.urls.regular}
                      avatarURL={feed.user.profile_image.small}
                      userName={feed.user.username}
                    />
                  </Suspense>
                );
              } else {
                return (
                  <Suspense fallback={<Fallback />}>
                    <LazyFeed
                      key={feed.id}
                      imgURL={feed.urls.regular}
                      avatarURL={feed.user.profile_image.small}
                      userName={feed.user.username}
                    />
                  </Suspense>
                );
              }
            })}
        </HomeWrapper>
      )}
    </>
  );
};

export default Home;
