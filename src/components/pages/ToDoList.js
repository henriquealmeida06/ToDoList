
import Tarefas from './../Tarefas'
import { useState } from 'react'

function ToDoList(){

    const [lista, setLista] = useState([])
    const [novaTarefa, setNovaTarefa] = useState ('')  
    const [preenchido, setpreenchido] = useState('')
    const [editandoItem, setEditandoItem] = useState('')
    const [concluido, setConcluido] = useState(false)


    function adicionarTarefa(){
        
        const novoItemObj = {texto: novaTarefa, concluido: false}
        if(novaTarefa.trim() !==''){
        setLista([...lista, novoItemObj])
        setNovaTarefa('')
        setpreenchido('ok')
    }else{
        alert('Preencha o espaço vazio!')
    }
       
    }  
    function excluirTarefa(index){
        const novaLista = [...lista]
        novaLista.splice(index, 1);
        setLista(novaLista)
    }

    function editarItem(index){
        setEditandoItem(index)
        setNovaTarefa(lista[index].texto)
        
    }
    function concluirEdicao(index){
        const novaLista = [...lista]
        if(novaTarefa.trim()!==''){
            
        
        novaLista[index].texto = novaTarefa;
        setLista(novaLista);
        setEditandoItem(null)
        setNovaTarefa('')
    }else{
        alert('Preencha o espaço vazio!')
    }
    }

    function marcarConcluido(index){
        const novaLista = [...lista]
        novaLista[index].concluido = !novaLista[index].concluido
        setLista(novaLista)
    }

   

    


    return(
        <div className="flex flex-col justify-start items-center rounded-lg pt-3 pb-3 pl-px18 pr-px18 bg-fundoRoxo text-white md:w-96 mc:w-80 h-vh70 font-roboto1 shadow-sombraPadrao">
            <h1 className='text-xl mt-4 font-semibold'>Lista de Tarefas</h1>
            <div className="mt-5 flex gap-2">
            <input className='bg-transparent border-2 text-px13 border-bodaAzul rounded-px3 p-px10 outline-none text-white' type="text" placeholder="Adicionar Tarefa" value={novaTarefa} onChange={(e)=>setNovaTarefa(e.target.value)}/>
            <button className="border-none bg-fundoAzul text-white pt-3 pb-3 pl-4 pr-4 rounded-px3 hover:bg-hover duration-150 cursor-pointer text-px13" onClick={adicionarTarefa}>Adicionar</button>
            </div>
            { preenchido ?
            <Tarefas lista={lista} onExcluir={excluirTarefa} editando={editandoItem} novaTarefa={novaTarefa} concluirEdicao={concluirEdicao} editarItem={editarItem} setNovaTarefa={setNovaTarefa}  marcarConcluido={marcarConcluido} caixaMarcada={concluido}/>
        : null}
            
        
        

        </div>

    )
}
export default ToDoList