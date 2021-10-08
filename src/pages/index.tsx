import { history } from 'umi';
import styles from './index.less';

const IndexPage = () => {
  return (
    <div>
      <button
        className={styles.comm_button}
        onClick={() => history.push('/from-to-example')}
      >
        from to example
      </button>
      <button
        className={styles.comm_button}
        onClick={() => history.push('/state-example')}
      >
        state example
      </button>
      <button
        className={styles.comm_button}
        onClick={() => history.push('interpolates-example')}
      >
        interpolates example
      </button>
    </div>
  );
};

export default IndexPage;
