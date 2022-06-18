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
import {AiOutlineHeart} from 'react-icons/ai'
import {MdOutlineModeComment} from 'react-icons/md'

const Feed = ({ imgURL, userName, avatarURL }) => {
  return (
    <>
      <CardWrapper>
        <CardImage imgURL={imgURL} />
        <CardBottom>
          <BottomFirstHalf>
            <UserInfo>
              <UserAvatar avatarURL={avatarURL} />
              <Username>{userName}</Username>
            </UserInfo>
            <FeedDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit facere, ad dignissimos reprehenderit dolores commodi id atque sunt dolore.
            </FeedDescription>
          </BottomFirstHalf>
          <BottomSecondHalf>
            <AiOutlineHeart color='red' />
            <MdOutlineModeComment />
          </BottomSecondHalf>
        </CardBottom>
      </CardWrapper>
    </>
  );
};

export default Feed;
