import styles from '@/styles/HamburgerMenuContainer.module.css';

const HamburgerMenuContainer = ({ onClick, isOpen }) => {
    return (
        <div className={styles.hamburgerMenuContainer} onClick={onClick}>
            <div className={`${styles.line} ${isOpen ? styles.line1 : ''}`}></div>
            <div className={`${styles.line} ${isOpen ? styles.line2 : ''}`}></div>
            <div className={`${styles.line} ${isOpen ? styles.line3 : ''}`}></div>
        </div>
    );
};

export default HamburgerMenuContainer;