import styled from '@emotion/styled';

export const FriendList = styled.li`
  display: flex;
  width: 380px;
  background-color: #dbc4db;
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.statusType ? '#40b346' : '#ff4e55')};
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  padding: 8px;
  margin-right: 20px;
  background-color: #f2edf2;
`;
export const Name = styled.p`
  font-size: 19px;
  line-height: 1.6;
  margin-left: 20px;
`;

export const Items = styled.ul`
  background-color: #f2edf2;
  width: 400px;
  margin: 0px auto;
  margin-bottom: 60px;
  padding: 20px 0;
  -webkit-box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
  box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
`;
