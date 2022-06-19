import React from 'react';
import {
  BottomFirstHalf,
  BottomSecondHalf,
  CardBottom,
  CardImage,
  CardWrapper,
  FeedDescription,
  UserAvatar,
  UserInfo,
  Username,
} from './FeedStyles';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineModeComment } from 'react-icons/md';

const Feed = ({ imgURL, userName, avatarURL, Ref, listView }) => {
  return (
    <>
      <CardWrapper listView={listView} ref={Ref}>
        <CardImage listView={listView} imgURL={imgURL} />
        <CardBottom listView={listView}>
          <BottomFirstHalf listView={listView}>
            <UserInfo>
              <UserAvatar avatarURL={avatarURL} />
              <Username to={{ pathname: `/users/${userName}` }}>
                {userName}
              </Username>
            </UserInfo>
            <FeedDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              odit facere, ad dignissimos reprehenderit dolores commodi id atque
              sunt dolore.
            </FeedDescription>
          </BottomFirstHalf>
          <BottomSecondHalf listView={listView}>
            <AiOutlineHeart color='red' />
            <MdOutlineModeComment />
          </BottomSecondHalf>
        </CardBottom>
      </CardWrapper>
    </>
  );
};

export default Feed;
