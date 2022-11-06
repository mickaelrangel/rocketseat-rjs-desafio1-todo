import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './Tasks.module.css';
import { PlusCircle } from 'phosphor-react';
import { BoxTasks } from './BoxTasks';
import { v4 as uuidv4 } from 'uuid';

interface TaskProps {
    id: string;
    description: string;
    isComplete: boolean;
}

export function Tasks() {
    const [newTask, setNewTask] = useState<TaskProps>({
        id: "",
        description: "",
        isComplete: false
    });

    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const isNewTaskEmpty = newTask.description.length === 0;

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');

        const newTask: TaskProps = {
            id: uuidv4(),
            description: event.target.value,
            isComplete: false
        }

        setNewTask(newTask);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Campo obrigatório.');
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, newTask]);
        setNewTask({ id: '', description: '', isComplete: false });
    }

    function deleteTask(taskId: string) {
        const tasksWihoutDeletedOne = tasks.filter(task => {
            return task.id !== taskId;
        });

        setTasks(tasksWihoutDeletedOne);
    }

    function completeTask(taskId: string, isChecked: boolean) {
        const updatedCompleteTasks = tasks.map(task => {
            if (task.id === taskId) {
                task.isComplete = isChecked;
            }
            return task;
        });

        setTasks(updatedCompleteTasks);
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleCreateNewTask}>
                <div className={styles.boxCreateTask}>
                    <input
                        type="text"
                        name="task"
                        placeholder="Adicione uma nova tarefa"
                        value={newTask.description}
                        onChange={handleNewTaskChange}
                        onInvalid={handleNewTaskInvalid}
                        required
                    />

                    <button type="submit" disabled={isNewTaskEmpty}>
                        Criar
                        <PlusCircle size={24} />
                    </button>
                </div>
            </form>

            <BoxTasks tasks={tasks} onDeleteTask={deleteTask} completeTask={completeTask} />
        </div>
    );
}