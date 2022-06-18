import styled from 'styled-components';

export const CardWrapper = styled.div`
  height: 500px;
  box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2),
    15px 15px 15px rgba(0, 0, 0, 0.15);
  padding: 12px;
  border-radius: 15px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 65%;
  border-radius: 15px;
  background-image: url(${(props) => props.imgURL});
  background-size: cover;
`;

export const CardBottom = styled.div`
  width: 100%;
  height: 35%;
  color: #000;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const BottomFirstHalf = styled.div`
  width: 80%;
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

export const Username = styled.strong`
  font-size: 18px;
  padding: 0;
  margin: 0;
`;

export const FeedDescription = styled.p`
  font-size: 14px;
  color: #4d4b4b;
  text-align: left;
`;

export const BottomSecondHalf = styled.div`
  width: 20%;
  height: 100%;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  gap: 30px;
`;
