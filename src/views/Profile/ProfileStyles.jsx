import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  height: auto;
  padding: 50px;
  background: rgba(136, 130, 130, 0.2);
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ProfileCardWrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const ProfileCard = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;

export const ProfilePicture = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: url(${(props) => props.profilePicture});
  background-size: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
  /* padding: 15px 0; */
`;

export const Name = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 800;
  font-size: 32px;
`;

export const Username = styled.p`
  padding: 0;
  margin: 0;
  font-style: italic;
  font-size: 16px;
  color: #494747;
  margin-top: 10px;
`;

export const ProfileBio = styled.p`
  color: #f48fb1;
  padding: 0;
  margin: 0;
  max-width: 400px;
  font-style: italic;
  font-size: 18px;
  margin-top: 20px;
  line-height: 15px;
  max-height: 50px;
  text-align: left;
`;

export const StatsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const StatBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

export const StatNumber = styled.h3`
  font-weight: 800;
  font-size: 25px;
  color: #000;
  padding: 0;
  margin: 0;
`;

export const StatName = styled.p`
  margin: 0;
  padding: 0;
  color: #000;
  font-size: 16px;
`;

export const SocialIcon = styled.span`
  font-size: 14px;
  color: #fff;
  margin-right: 5px;
  vertical-align: middle;
`;

export const SocialBadge = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 5px 8px;
  background: ${(props) => props.bgColor};
  border-radius: 5px;
  font-size: 14px;
  vertical-align: middle;
`;
