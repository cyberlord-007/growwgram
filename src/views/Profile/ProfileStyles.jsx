import styled from 'styled-components';

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10;
  color: grey;
  font-size: 100px;
`;

export const ProfileWrapper = styled.div`
  height: 100%;
  padding-top: 150px;
  background: ${({ theme }) => theme.body};
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

  @media screen and (max-width: 480px) {
    padding: 0 30px;
    gap: 28px;
  }
`;

export const ProfileCard = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 480px) {
    gap: 24px;
  }
`;

export const ProfilePicture = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: url(${(props) => props.profilePicture});
  background-size: cover;

  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
  /* padding: 15px 0; */

  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;

export const Name = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 800;
  font-size: 32px;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Username = styled.p`
  padding: 0;
  margin: 0;
  font-style: italic;
  font-size: 16px;
  color: ${({ theme }) => theme.subtext};
  margin-top: 10px;

  @media screen and (max-width: 480px) {
    margin-top: 5px;
  }
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

  @media screen and (max-width: 480px) {
    max-width: 350px;
    margin-top: 10px;
  }
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
  color: ${({ theme }) => theme.text};
`;

export const StatNumber = styled.h3`
  font-weight: 800;
  font-size: 25px;
  padding: 0;
  margin: 0;
`;

export const StatName = styled.p`
  margin: 0;
  padding: 0;
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

export const CollectionTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 50px;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 480px) {
    margin-top: 28px;
  }
`;

export const CollectionHeader = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 44px;
  font-weight: 800;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const ToggleViewWrap = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  font-size: 30px;
  box-shadow: -15px -15px 15px rgba(114, 112, 112, 0.2),
    15px 15px 15px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    padding: 8px;
    font-size: 22px;
    border-radius: 10px;
  }
`;

export const CollectionsWrapper = styled.div`
  height: auto;
  gap: 1rem;
  display: ${({ listView }) => (listView ? 'flex' : 'grid')};
  flex-direction: column;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 410px));
  justify-content: ${({ listView }) => (listView ? 'space-between' : 'center')};
  align-items: ${({ listView }) => (listView ? 'center' : 'none')};
  padding: 50px ${({ listView }) => (listView ? '100px' : '0px')};
  background: ${({ theme }) => theme.body};

  @media screen and (max-width: 480px) {
    padding: 50px;
  }
`;
