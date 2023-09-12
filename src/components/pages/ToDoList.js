import styles from './ToDoList.module.css'
import Tarefas from './../Tarefas'
import { useState } from 'react'

function ToDoList(){

    const [lista, setLista] = useState([])
    const [novaTarefa, setNovaTarefa] = useState ('')  
    const [vazio, setvazio] = useState('')

    function adicionarTarefa(){
        setLista([...lista, novaTarefa])
        setNovaTarefa('')
        setvazio('ok')
    }  


    return(
        <div className={styles.container}>
            <h1>Lista de Tarefas</h1>
            <div className={styles.inputButton}>
            <input type="text" placeholder="Adicionar Tarefa" value={novaTarefa} onChange={(e)=>setNovaTarefa(e.target.value)}/>
            <button className={styles.buttonAdicionar} onClick={adicionarTarefa}>Adicionar</button>
            </div>
            { vazio ?
            <Tarefas lista={lista}/>
        : null}
            
        
        

        </div>

    )
}
export default ToDoList