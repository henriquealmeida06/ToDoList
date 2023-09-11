import styles from './ToDoList.module.css'

function ToDoList(){
    return(
        <div className={styles.container}>
            <h1>Lista de Tarefas</h1>
            <div className={styles.inputButton}>
            <input type="text" placeholder="Adicionar Tarefa"/>
            <button>Adicionar</button>
            </div>

        </div>

    )
}
export default ToDoList