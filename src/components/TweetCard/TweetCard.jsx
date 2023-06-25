import { useState } from 'react';

import Card from '../../images/card.png';
import Card2x from '../../images/card@2x.png';
import Avatar from '../../images/avatar.png';
import Avatar2x from '../../images/avatar@2x.png';

import s from './TweetCard.module.scss';

const toggleClassName = (conditions) => {
  return conditions ? `${s.btn} ${s.active}` : s.btn;
};

const TweetCard = () => {
  const [btnCheck, setBtnCheck] = useState(false);

  console.log(btnCheck);

  return (
    <div className={s.card}>
      <picture>
        <source srcSet={Card2x} media="(min-resolution: 2dppx)" />
        <img className={s.img} src={Card} alt="card chat" />
      </picture>
      <div className={s.info}>
        <picture className={s.imgWrapper}>
          <source srcSet={Avatar2x} media="(min-resolution: 2dppx)" />
          <img height="62" width="62" className={s.ava} src={Avatar} alt="avatar" />
        </picture>
        <p className={s.tweets}>
          <span className={s.number}>777</span> TWEETS
        </p>
        <p className={s.folowers}>
          <span className={s.number}>100500</span> FOLLOWERS
        </p>
        <button
          onClick={() => setBtnCheck(!btnCheck)}
          className={toggleClassName(btnCheck)}
          type="button"
        >
          {btnCheck ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default TweetCard;
