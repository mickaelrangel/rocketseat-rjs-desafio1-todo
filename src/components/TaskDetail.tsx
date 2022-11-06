import { Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './TaskDetail.module.css';

interface TaskProps {
    id: string;
    description: string;
    isComplete: boolean;
}

interface TaskDetailProps {
    task: TaskProps;
    onDeleteTask: (taskId: string) => void;
    completeTask: (taskId: string, isChecked: boolean) => void;
}

export function TaskDetail({ task, onDeleteTask, completeTask }: TaskDetailProps) {
    const [taskChecked, setTaskChecked] = useState(false);

    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    function handleCheckTask() {
        setTaskChecked(!taskChecked);
        completeTask(task.id, !taskChecked);
    }

    return (
        <div className={styles.box}>
            <article>
                <div className={styles.inputAndTaskDescription}>
                    <input
                        type="checkbox"
                        checked={taskChecked}
                        onChange={handleCheckTask}
                    />
                    <span className={styles.customize}>
                        {task.description}
                    </span>
                </div>


                <button onClick={handleDeleteTask} title="Excluir tarefa">
                    <Trash size={20} />
                </button>
            </article>
        </div>
    );
}