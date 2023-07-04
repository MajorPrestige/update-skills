import { useEffect, useState } from 'react';

import { axiosGetUsers } from 'api/users';
import TweetCard from 'components/TweetCard/TweetCard';
import Loader from 'components/Loader/Loader';
import SelectStatus from 'components/Select/SelectStatus';

import s from './TweetList.module.scss';

const options = [
  { value: 'show all', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

const TweetList = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('show all');
  const [displayedUsers, setDisplayedUsers] = useState(12);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosGetUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const getValue = () => {
    return filter? options.find(select => select.value === filter) : ""
  }

  const handleInputChange = (newValue) => {
    setFilter(newValue.value)
  };

  const updateUsers = async () => {
    const result = await axiosGetUsers();
    setUsers(result);
  };

  const loadMoreUsers = () => {
    setDisplayedUsers((prevCount) => prevCount + 12);
  };

  return (
    <>
      <SelectStatus handleInputChange={handleInputChange} options={options} value={getValue}/>
      {loading && <Loader />}
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
            loading={loading}
            setLoading={setLoading}
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
