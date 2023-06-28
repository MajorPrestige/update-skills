import { useRef } from 'react';
import useLocalStorage from 'use-local-storage';

import Card from '../../images/card.png';
import Card2x from '../../images/card@2x.png';

import s from './TweetCard.module.scss';

const toggleClassName = (conditions) => {
  return conditions ? `${s.btn} ${s.active}` : s.btn;
};

const TweetCard = ({ user, avatar, followers, tweets }) => {
  const [btnCheck, setBtnCheck] = useLocalStorage(false);
  const buttonRef = useRef(null);

  const handleFormatingFollowers = (number) => {
    if (btnCheck) {
      return (number + 1).toLocaleString();
    }

    return number.toLocaleString();
  };

  const handleBtnClick = () => {
    setBtnCheck(!btnCheck);
    buttonRef.current.blur();
  };

  return (
    <li className={s.card}>
      <picture>
        <source srcSet={Card2x} media="(min-resolution: 2dppx)" />
        <img className={s.img} src={Card} alt="card chat" />
      </picture>
      <div className={s.info}>
        <div className={s.imgWrapper}>
          <img height="62" width="62" className={s.ava} src={avatar} alt={user} />
        </div>
        <p className={s.tweets}>
          <span className={s.number}>{tweets.toLocaleString()}</span> TWEETS
        </p>
        <p className={s.folowers}>
          <span className={s.number}>{handleFormatingFollowers(followers)}</span> FOLLOWERS
        </p>
        <button
          onClick={handleBtnClick}
          ref={buttonRef}
          className={toggleClassName(btnCheck)}
          type="button"
        >
          {btnCheck ? 'Following' : 'Follow'}
        </button>
      </div>
    </li>
  );
};

export default TweetCard;
