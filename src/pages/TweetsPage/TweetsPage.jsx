import TweetList from 'components/TweetList/TweetList';
import s from './TweetsPage.module.scss';


var merge = function (nums1, m, nums2, n) {
  const sortedFirstArr = nums1.splice(0, m)
  const sortedSecondArr = nums2.splice(0, n)
  const sortedThirdArr = [...sortedFirstArr, ...sortedSecondArr].sort((a, b) => a - b)
  return sortedThirdArr;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));


const TweetsPage = () => {
  return (
    <div className={s.colorContainer}>
      <div className={s.container}>
        <TweetList />
      </div>
    </div>
  );
};

export default TweetsPage;
