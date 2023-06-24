import Card from '../../images/card.png';
import Card2x from '../../images/card@2x.png';

import s from './TweetCard.module.scss';

const TweetCard = () => {
  return (
    <div className={s.card}>
      <picture >
        <source srcSet={Card2x} media="(min-resolution: 2dppx)" />
        <img className={s.img} src={Card} alt="card chat" />
      </picture>
    </div>
  );
};

export default TweetCard;
