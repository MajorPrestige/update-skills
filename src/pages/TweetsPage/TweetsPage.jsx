import TweetCard from 'components/TweetCard/TweetCard';
import s from './TweetsPage.module.scss';

const TweetsPage = () => {
  return (
    <div className={s.colorContainer}>
      <div className={`${s.container} container`}>
        <TweetCard />
      </div>
    </div>
  );
};

export default TweetsPage;
