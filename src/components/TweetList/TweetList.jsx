import { useEffect, useState } from 'react';

import { axiosGetUsers } from 'api/users';
import TweetCard from 'components/TweetCard/TweetCard';

import s from './TweetList.module.scss';

const TweetList = () => {
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState(12);

  useEffect(() => {
    axiosGetUsers().then((data) => setUsers(data));
  }, []);

  const updateUsers = async () => {
    const result = await axiosGetUsers();
    setUsers(result);
  };

  const loadMoreUsers = () => {
    setDisplayedUsers((prevCount) => prevCount + 12);
  };

  return (
    <>
      <ul className={s.list}>
        {users.slice(0, displayedUsers).map((user) => (
          <TweetCard
            key={user.id}
            name={user.user}
            avatar={user.avatar}
            followers={user.followers}
            tweets={user.tweets}
            currentUser={users[user.id - 1]}
            updateUsers={updateUsers}
          />
        ))}
      </ul>
      {(users.length > displayedUsers || users.length !== displayedUsers) && (
        <button type="button" className={s.btn} onClick={loadMoreUsers}>
          load more
        </button>
      )}
    </>
  );
};

export default TweetList;
