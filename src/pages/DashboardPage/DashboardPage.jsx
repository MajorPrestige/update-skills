import { Link } from 'react-router-dom';
import s from './DashboardPage.module.scss';

const DashboardPage = () => {
  return (
    <div className={s.colorContainer}>
      <div className={`${s.container} container`}>
        <h1 className={s.title}>Welcome to Dashboard!</h1>
        <img src="" alt="dashboard img" />
        <p className={s.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, autem, eum
          laborum est neque ab non dicta totam quis voluptates, reiciendis mollitia
          ratione? Ea, quis? Quas recusandae deserunt esse eligendi molestias ipsa
          ratione ea nam in incidunt quibusdam autem id optio eos temporibus, soluta
          repellat? Aspernatur temporibus a consectetur. Excepturi.
        </p>
        <Link to='/tweets' className={s.link}>Get started!</Link>
      </div>
    </div>
  );
};

export default DashboardPage;
