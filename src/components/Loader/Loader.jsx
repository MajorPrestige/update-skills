import { Comment } from 'react-loader-spinner';

import s from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={s.container}>
      <Comment
        visible={true}
        height="160"
        width="160"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#373737"
        backgroundColor="#ebd8ff"
      />
    </div>
  );
};

export default Loader;
