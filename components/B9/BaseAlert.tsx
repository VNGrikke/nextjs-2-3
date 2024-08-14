import styles from './alert.module.css';

export default function BaseAlert({ type, children }: any) {
    return (
        <div className={`${styles.alert} ${styles[type]}`}>
            {children}
        </div>
    );
}