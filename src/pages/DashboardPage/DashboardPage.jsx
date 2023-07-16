import { Link } from 'react-router-dom';

import img from 'images/dashboard.png';
import s from './DashboardPage.module.scss';

const DashboardPage = () => {
  function customFlat(arr) {
    return arr.reduce((flattenedArray, element) => {
      if (Array.isArray(element)) {
        return flattenedArray.concat(customFlat(element));
      } else {
        return flattenedArray.concat(element);
      }
    }, []);
  }

  const arr = [1, 2, 3, [4, { cat: 1 }, [6, 'dog']]];
  const flattenedArray = customFlat(arr);
  console.log(flattenedArray);

  // function customFlat(arr) {
  //   return arr.reduce((flattenedArray, element) => {
  //     if (Array.isArray(element)) {
  //       flattenedArray.push(...customFlat(element));
  //     } else {
  //       flattenedArray.push(element);
  //     }
  //     return flattenedArray;
  //   }, []);
  // }

  // const arr = [
  //   ['black'],
  //   1,
  //   2,
  //   3,
  //   [4, { cat: 1 }, [{ dog: 2 }], [6, 'dog', ['cat']]],
  // ];
  // const flattenedArray = customFlat(arr);
  // console.log(flattenedArray);

  return (
    <div className={s.colorContainer}>
      <div className={`${s.container} container`}>
        <h1 className={s.title}>Welcome to Dashboard!</h1>
        <img
          width="280"
          height="195"
          className={s.img}
          src={img}
          alt="dashboard img"
        />
        <p className={s.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, autem, eum
          laborum est neque ab non dicta totam quis voluptates, reiciendis mollitia
          ratione? Ea, quis? Quas recusandae deserunt esse eligendi molestias ipsa
          ratione ea nam in incidunt quibusdam autem id optio eos temporibus, soluta
          repellat? Aspernatur temporibus a consectetur. Excepturi.
        </p>
        <Link to="/tweets" className={s.link}>
          Get started!
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
