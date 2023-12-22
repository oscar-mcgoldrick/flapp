import { Link } from "react-router-dom";
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.title}>
          <h2>Flapp5</h2>
        </div>
        <div className={styles.navItems}>
          <Link to='/'>Home</Link>
          <Link to='/finances'>Finances</Link>
          <Link to='/shoplists'>Shoplist</Link>
          <Link to='/joblists'>Joblist</Link>
        </div>
        <div className={styles.iconContainer}>
          <img src="/bars.svg" alt="bars" />
        </div>
      </div>
    </>
  );
};

export default Nav;
