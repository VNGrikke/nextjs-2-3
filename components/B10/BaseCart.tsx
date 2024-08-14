import styles from './styles.module.css';

export default function BaseCart({ content, title, image, children }: any) {
    return (
        <div className={styles.cart}>
            <img src={image} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{content}</p>
            <div className={styles.actions}>
                {children}
            </div>
        </div>
    );
}
