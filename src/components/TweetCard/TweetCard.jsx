import { useRef } from 'react';
import useLocalStorage from 'use-local-storage';

import { axiosUpdateFollowers} from 'api/users';
import Card from '../../images/card.png';
import Card2x from '../../images/card@2x.png';

import s from './TweetCard.module.scss';

const toggleClassName = (conditions) => {
  return conditions ? `${s.btn} ${s.active}` : s.btn;
};

const TweetCard = ({ name, avatar, followers, tweets, currentUser, updateUsers }) => {
  const [following, setFollowing] = useLocalStorage(
    `following_${currentUser.id}`,
    false
  );
  const buttonRef = useRef(null);

  const handleFormatingFollowers = (number) => {
    return number.toLocaleString();
  };

  const handleBtnClick = () => {
    // const fetchUpdateFollowers = async (user) => {
    //   await axiosUpdateFollowers(user);
    // };
    if (!following) {
      axiosUpdateFollowers({ ...currentUser, followers: currentUser.followers + 1 });
    }

    if (following) {
      axiosUpdateFollowers({ ...currentUser, followers: currentUser.followers - 1 });
    }

    setFollowing(!following);
    buttonRef.current.blur();
    updateUsers();
  };

  return (
    <li className={s.card}>
      <picture>
        <source srcSet={Card2x} media="(min-resolution: 2dppx)" />
        <img className={s.img} src={Card} alt="card chat" />
      </picture>
      <div className={s.info}>
        <div className={s.imgWrapper}>
          <img height="62" width="62" className={s.ava} src={avatar} alt={name} />
        </div>
        <p className={s.tweets}>
          <span className={s.number}>{tweets.toLocaleString()}</span> TWEETS
        </p>
        <p className={s.folowers}>
          <span className={s.number}>{handleFormatingFollowers(followers)}</span>{' '}
          FOLLOWERS
        </p>
        <button
          onClick={handleBtnClick}
          ref={buttonRef}
          className={toggleClassName(following)}
          type="button"
        >
          {following ? 'Following' : 'Follow'}
        </button>
      </div>
    </li>
  );
};

export default TweetCard;
