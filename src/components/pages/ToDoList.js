import styles from './ToDoList.module.css'
import Tarefas from './../Tarefas'
import { useState } from 'react'

function ToDoList(){

    const [lista, setLista] = useState([])
    const [novaTarefa, setNovaTarefa] = useState ('')  
    const [preenchido, setpreenchido] = useState('')

    function adicionarTarefa(){
        if(novaTarefa.trim() !=='')
        setLista([...lista, novaTarefa])
        setNovaTarefa('')
        setpreenchido('ok')
       
    }  
    function excluirTarefa(index){
        const novaLista = [...lista]
        novaLista.splice(index, 1);
        setLista(novaLista)
    }


    return(
        <div className={styles.container}>
            <h1>Lista de Tarefas</h1>
            <div className={styles.inputButton}>
            <input type="text" placeholder="Adicionar Tarefa" value={novaTarefa} onChange={(e)=>setNovaTarefa(e.target.value)}/>
            <button className={styles.buttonAdicionar} onClick={adicionarTarefa}>Adicionar</button>
            </div>
            { preenchido ?
            <Tarefas lista={lista} onExcluir={excluirTarefa}/>
        : null}
            
        
        

        </div>

    )
}
export default ToDoList