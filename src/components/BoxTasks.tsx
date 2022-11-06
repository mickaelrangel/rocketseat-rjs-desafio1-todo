import { useEffect, useState } from 'react';
import styles from './BoxTasks.module.css';
import { NoTaskMessage } from './NoTaskMessage';
import { TaskDetail } from './TaskDetail';

interface TaskProps {
    id: string;
    description: string;
    isComplete: boolean;
}

interface BoxTasksProps {
    tasks: TaskProps[],
    onDeleteTask: (taskId: string) => void;
    completeTask: (taskId: string, isChecked: boolean) => void;
}

export function BoxTasks({ tasks, onDeleteTask, completeTask }: BoxTasksProps) {
    const [totalCreatedTasks, setTotalCreatedTasks] = useState(0);
    const [totalCompletedTasks, setTotalCompletedTasks] = useState(0);

    useEffect(() => {
        setTotalCreatedTasks(tasks.length);

        const completedTasks = tasks.filter(tasks => tasks.isComplete);
        setTotalCompletedTasks(completedTasks.length);
    }, [tasks]);

    return (
        <article className={styles.bodyTasks}>
            <header>
                <div className={styles.createdTasks}>
                    <strong>Tarefas criadas</strong>
                    <span>
                        <strong>{totalCreatedTasks}</strong>
                    </span>
                </div>
                <div className={styles.doneTasks}>
                    <strong>Concluídas</strong>
                    <span>
                        {
                            totalCreatedTasks == 0
                                ? <strong>0</strong>
                                : <strong>{totalCompletedTasks} de {totalCreatedTasks}</strong>
                        }
                    </span>
                </div>
            </header>
            <div>
                {
                    totalCreatedTasks == 0
                        ? <NoTaskMessage />
                        :
                        tasks.map(task => {
                            return <TaskDetail
                                key={task.id}
                                task={task}
                                onDeleteTask={onDeleteTask}
                                completeTask={completeTask}
                            />;
                        })
                }
            </div>
        </article>
    );
}