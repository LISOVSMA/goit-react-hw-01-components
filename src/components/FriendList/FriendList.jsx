import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Items } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Items>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Items>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
