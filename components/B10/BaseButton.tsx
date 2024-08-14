import styles from './styles.module.css';

export default function BaseButton({ children, type }: any) {
    return (
        <button className={`${styles.button} ${styles[type]}`}>
            {children}
        </button>
    );
}
