import styles from './Tarefas.module.css'
import {TiDeleteOutline} from 'react-icons/ti'
import {TiEdit} from 'react-icons/ti'

function Tarefas(){
    return(
        <div className={styles.containerTarefa}>
            <p>Nome da Tarefa</p>
            <div className={styles.buttonsContainer}>
            <button className={styles.buttonTarefas}><TiDeleteOutline/></button>
            <button className={styles.buttonTarefas}><TiEdit/></button>
            </div>
        </div>

    )
}
export default Tarefas;