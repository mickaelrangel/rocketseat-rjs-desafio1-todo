import styles from './NoTaskMessage.module.css';
import clipboard from '../assets/clipboard.svg';

export function NoTaskMessage() {
    return (
        <div className={styles.box}>
            <div className={styles.content}>
                <img src={clipboard} alt="Clipboard" />
                <span className={styles.messageNoTasks}>
                    <strong>Você ainda não tem tarefas cadastradas.</strong>
                </span>
                <span>
                    Crie tarefas e organize seus itens a fazer.
                </span>
            </div>
        </div>
    );
}