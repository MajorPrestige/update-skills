import { useEffect, useState } from 'react';

import { axiosGetUsers } from 'api/users';
import TweetCard from 'components/TweetCard/TweetCard';

import s from './TweetList.module.scss';

const TweetList = () => {
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState(12);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axiosGetUsers();
      setUsers(result);
    };

    fetchUsers();
  }, []);

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
