import Card from '../../images/card.png';
import Card2x from '../../images/card@2x.png';
import Avatar from '../../images/avatar.png';
import Avatar2x from '../../images/avatar@2x.png';

import s from './TweetCard.module.scss';

const TweetCard = () => {
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
        <button className={s.btn} type="button">
          Follow
        </button>
      </div>
    </div>
  );
};

export default TweetCard;
