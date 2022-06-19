import React, { useEffect, useState } from 'react';
import {
  CollectionHeader,
  CollectionsWrapper,
  CollectionTop,
  Loading,
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
  ToggleViewWrap,
  Username,
} from './ProfileStyles';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../actions/profileAction';
import { GrInstagram } from 'react-icons/gr';
import { BsTwitter, BsGrid } from 'react-icons/bs';
import { FaGlobeAmericas, FaList } from 'react-icons/fa';
import Feed from '../../components/Feed/Feed';
import { MdDownloading } from 'react-icons/md';

const Profile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { userID } = params;

  const [listView, setListView] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile(userID));
  }, [dispatch, userID]);

  const { userData, isFetching } = useSelector((state) => state.profileReducer);

  return (
    <>
      <ProfileWrapper>
        {isFetching ? (
          <Loading>
            <MdDownloading />
            <Name>Fetching Profile...</Name>
          </Loading>
        ) : (
          <>
            <ProfileCardWrap>
              <ProfileCard>
                <ProfilePicture
                  profilePicture={userData?.profile_image?.large}
                />
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
                  <SocialBadge
                    bgColor='#E64854'
                    href={`https://www.instagram.com/${userData.instagram_username}`}
                    target='_blank'
                  >
                    <SocialIcon>
                      <GrInstagram />
                    </SocialIcon>
                    INSTAGRAM
                  </SocialBadge>
                )}
                {userData?.twitter_username && (
                  <SocialBadge
                    bgColor='#2BA1F2'
                    href={`https://www.twitter.com/${userData.twitter_username}`}
                    target='_blank'
                  >
                    <SocialIcon>
                      <BsTwitter />
                    </SocialIcon>
                    Twitter
                  </SocialBadge>
                )}
                {userData?.portfolio_url && (
                  <SocialBadge
                    bgColor='#81c784'
                    href={userData.portfolio_url}
                    target='_blank'
                  >
                    <SocialIcon>
                      <FaGlobeAmericas />
                    </SocialIcon>
                    Portfolio
                  </SocialBadge>
                )}
              </StatsRow>
            </ProfileCardWrap>
            <CollectionTop>
              <CollectionHeader>Collection</CollectionHeader>
              <ToggleViewWrap onClick={() => setListView(!listView)}>
                {listView ? <BsGrid /> : <FaList />}
              </ToggleViewWrap>
            </CollectionTop>
            <CollectionsWrapper listView={listView}>
              {userData &&
                userData.photos.map((photo) => {
                  return (
                    <Feed
                      listView={listView}
                      userName={userID}
                      avatarURL={userData.profile_image.small}
                      imgURL={photo.urls.regular}
                    />
                  );
                })}
            </CollectionsWrapper>
          </>
        )}
      </ProfileWrapper>
    </>
  );
};

export default Profile;
