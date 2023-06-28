import TweetList from 'components/TweetList/TweetList';
import s from './TweetsPage.module.scss';

const TweetsPage = () => {
  return (
    <div className={s.colorContainer}>
      <div className={`${s.container} container`}>
        <TweetList />
      </div>
    </div>
  );
};

export default TweetsPage;
