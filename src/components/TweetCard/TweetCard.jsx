import { useRef } from 'react';
import useLocalStorage from 'use-local-storage';

import { axiosUpdateFollowers } from 'api/users';
import Card from '../../images/card.png';
import Card2x from '../../images/card@2x.png';

import s from './TweetCard.module.scss';

const toggleClassName = (conditions) => {
  return conditions ? `${s.btn} ${s.active}` : s.btn;
};

const TweetCard = ({
  name,
  avatar,
  followers,
  tweets,
  currentUser,
  updateUsers,
  setLoading,
  filter,
}) => {
  const [following, setFollowing] = useLocalStorage(
    `following_${currentUser.id}`,
    false
  );
  const buttonRef = useRef(null);

  const handleFormatingFollowers = (number) => {
    return number.toLocaleString();
  };

  const handleBtnClick = () => {
    if (!following) {
      setLoading(true);
      axiosUpdateFollowers({ ...currentUser, followers: currentUser.followers + 1 })
        .then(() => updateUsers())
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    if (following) {
      setLoading(true);
      axiosUpdateFollowers({ ...currentUser, followers: currentUser.followers - 1 })
        .then(() => updateUsers())
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    setFollowing(!following);
    buttonRef.current.blur();
  };

  const shouldDisplayCard =
    filter === 'show all' ||
    (filter === 'follow' && !following) ||
    (filter === 'followings' && following);

  if (!shouldDisplayCard) {
    return null;
  }

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
        <p className={s.followers}>
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
