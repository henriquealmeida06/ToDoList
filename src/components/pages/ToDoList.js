import styles from './ToDoList.module.css'
import Tarefas from './../Tarefas'
import { useState } from 'react'

function ToDoList(){

    const [lista, setLista] = useState([])
    const [novaTarefa, setNovaTarefa] = useState ('')  
    const [preenchido, setpreenchido] = useState('')
    const [editandoItem, setEditandoItem] = useState('')

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

    function editarItem(index){
        setEditandoItem(index)
        setNovaTarefa(lista[index])
    }
    function concluirEdicao(index){
        const novaLista = [...lista]
        novaLista[index] = novaTarefa;
        setLista(novaLista);
        setEditandoItem(null)
        setNovaTarefa('')
    }

    


    return(
        <div className={styles.container}>
            <h1>Lista de Tarefas</h1>
            <div className={styles.inputButton}>
            <input type="text" placeholder="Adicionar Tarefa" value={novaTarefa} onChange={(e)=>setNovaTarefa(e.target.value)}/>
            <button className={styles.buttonAdicionar} onClick={adicionarTarefa}>Adicionar</button>
            </div>
            { preenchido ?
            <Tarefas lista={lista} onExcluir={excluirTarefa} editando={editandoItem} novaTarefa={novaTarefa} concluirEdicao={concluirEdicao} editarItem={editarItem} setNovaTarefa={setNovaTarefa}/>
        : null}
            
        
        

        </div>

    )
}
export default ToDoList