import styles from '@/styles/HamburgerMenu.module.css';

const HamburgerMenu = ({ onClick, isOpen }) => {

    return (
        <div className={styles.hamburgerMenu} onClick={onClick}>
            <div className={`${styles.line} ${isOpen ? styles.line1 : ''}`}></div>
            <div className={`${styles.line} ${isOpen ? styles.line2 : ''}`}></div>
            <div className={`${styles.line} ${isOpen ? styles.line3 : ''}`}></div>
        </div>
    );
};

export default HamburgerMenu;