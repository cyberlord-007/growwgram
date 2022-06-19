import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
  height: ${({ listView }) => (listView ? '250px' : '500px')};
  min-width: ${({ listView }) => (listView ? '50vw' : 'none')};
  box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2),
    15px 15px 15px rgba(0, 0, 0, 0.15);
  padding: 12px;
  border-radius: 15px;
  color: #000;
  display: flex;
  flex-direction: ${({ listView }) => (listView ? 'row' : 'column')};
  /* align-items: center; */
  gap: 20px;
  cursor: pointer;
  background: url(${({ fallback, bg }) => (fallback ? bg : 'none')});
  background-size: cover;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width: ${({ listView }) => (listView ? '100%' : 'auto')};
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: ${({ listView }) => (listView ? '100%' : '65%')};
  border-radius: 15px;
  background-image: url(${(props) => props.imgURL});
  background-size: cover;
`;

export const CardBottom = styled.div`
  width: 100%;
  height: ${({ listView }) => (listView ? '100%' : '35%')};
  color: #000;
  display: flex;
  flex-direction: ${({ listView }) => (listView ? 'column' : 'row')};
  gap: 10px;
`;

export const BottomFirstHalf = styled.div`
  width: ${({ listView }) => (listView ? '100%' : '80%')};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const UserAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url(${(props) => props.avatarURL});
`;

export const Username = styled(Link)`
  font-size: 18px;
  padding: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 800;
  margin: 0;
`;

export const FeedDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.subtext};
  text-align: left;

  @media screen and (max-width: 480px) {
    padding: 0;
    margin: 0;
  }
`;

export const BottomSecondHalf = styled.div`
  width: ${({ listView }) => (listView ? '100%' : '20%')};
  height: 100%;
  font-size: 40px;
  display: flex;
  flex-direction: ${({ listView }) => (listView ? 'row' : 'column')};
  align-items: ${({ listView }) => (listView ? 'flex-start' : 'flex-end')};
  text-align: right;
  gap: 30px;
`;
