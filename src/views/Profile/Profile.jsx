import React, { useEffect } from 'react';
import {
  Likes,
  Name,
  ProfileBio,
  ProfileCard,
  ProfileCardWrap,
  ProfileInfo,
  ProfilePicture,
  ProfileWrapper,
  SocialBadge,
  SocialIcon,
  StatBox,
  StatName,
  StatNumber,
  StatsRow,
  Username,
} from './ProfileStyles';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../actions/profileAction';
import { GrInstagram } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { FaGlobeAmericas } from 'react-icons/fa';

const Profile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { userID } = params;

  useEffect(() => {
    dispatch(getUserProfile(userID));
  }, [userID, dispatch]);

  const { userData } = useSelector((state) => state.profileReducer);

  return (
    <>
      <ProfileWrapper>
        <ProfileCardWrap>
          <ProfileCard>
            <ProfilePicture profilePicture={userData?.profile_image?.large} />
            <ProfileInfo>
              <Name>{userData?.name}</Name>
              <Username>{`@${userData?.username}`}</Username>
              <ProfileBio>{`"${
                userData.bio?.slice(0, 100) ?? 'Bio not available'
              }..."`}</ProfileBio>
              <StatsRow>
                <StatBox>
                  <StatNumber>{userData?.total_likes ?? 0}</StatNumber>
                  <StatName>Likes</StatName>
                </StatBox>
                <StatBox>
                  <StatNumber>{userData?.followers_count ?? 0}</StatNumber>
                  <StatName>Followers</StatName>
                </StatBox>
                <StatBox>
                  <StatNumber>{userData?.following_count ?? 0}</StatNumber>
                  <StatName>Following</StatName>
                </StatBox>
              </StatsRow>
            </ProfileInfo>
          </ProfileCard>
          <StatsRow>
            {userData?.instagram_username && (
              <SocialBadge bgColor='#E64854' href=''>
                <SocialIcon>
                  <GrInstagram />
                </SocialIcon>
                INSTAGRAM
              </SocialBadge>
            )}
            {userData?.twitter_username && (
              <SocialBadge bgColor='#2BA1F2' href=''>
                <SocialIcon>
                  <BsTwitter />
                </SocialIcon>
                Twitter
              </SocialBadge>
            )}
            {userData?.portfolio_url && (
              <SocialBadge bgColor='#81c784' href=''>
                <SocialIcon>
                  <FaGlobeAmericas />
                </SocialIcon>
                Portfolio
              </SocialBadge>
            )}
          </StatsRow>
        </ProfileCardWrap>
      </ProfileWrapper>
    </>
  );
};

export default Profile;
