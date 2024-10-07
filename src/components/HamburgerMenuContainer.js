import styles from '@/styles/HamburgerMenuContainer.module.css';

const HamburgerMenuContainer = ({ onClick, isOpen }) => {
    const lineClasses = [styles.line, isOpen ? styles.line1 : '', isOpen ? styles.line2 : '', isOpen ? styles.line3 : ''].join(' ');

    return (
        <div className={styles.hamburgerMenuContainer} onClick={onClick}>
            <div className={lineClasses}></div>
        </div>
    );
};

export default HamburgerMenuContainer;