import TweetCard from 'components/TweetCard/TweetCard';
import users from 'database/users.json';

import s from './TweetList.module.scss'

const TweetList = () => {
  return (
    <ul className={s.list}>
      {users.map((user) => (
        <TweetCard
          key={user.id}
          name={user.user}
          avatar={user.avatar}
          followers={user.followers}
          tweets={user.tweets}
        />
      ))}
    </ul>
  );
};

export default TweetList;
