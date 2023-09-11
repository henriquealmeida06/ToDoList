import styles from './ToDoList.module.css'
import Tarefas from './../Tarefas'

function ToDoList(){
    return(
        <div className={styles.container}>
            <h1>Lista de Tarefas</h1>
            <div className={styles.inputButton}>
            <input type="text" placeholder="Adicionar Tarefa"/>
            <button className={styles.buttonAdicionar}>Adicionar</button>
            </div>
            <Tarefas/>

        </div>

    )
}
export default ToDoList