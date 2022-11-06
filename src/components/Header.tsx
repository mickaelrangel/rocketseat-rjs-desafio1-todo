import styles from './Header.module.css';
import toDoLogo from '../assets/rocket-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt="Logotipo ToDo" />
            <div className={styles.title}>
                <strong className={styles.colorTo}>to</strong>
                <strong className={styles.colorDo}>do</strong>
            </div>
        </header>
    );
}