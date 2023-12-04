
import {TiDeleteOutline} from 'react-icons/ti'
import {TiEdit} from 'react-icons/ti'

function Tarefas({lista, onExcluir, editando, novaTarefa, setNovaTarefa, concluirEdicao, editarItem, marcarConcluido, caixaMarcada}){
    return(
        <div>
            
        
            
      
        <div className="overflow-y-auto overflow-x-auto mt-1 h-80">
            {lista.map((item, index)=>(
                <item className={`${"flex justify-between items-center bg-fundoAzul md:w-80 mc:w-72 rounded p-2 mt-3"} ${item.concluido? " bg-verdeMarcados": null}`}>
                {editando === index ?(
                    <>
                    <input className="bg-fundoRoxo p-2 border-none outline-none text-px13 rounded-sm" type='text' placeholder='Digite uma tarefa' value={novaTarefa} onChange={(e)=> setNovaTarefa(e.target.value)}/>
                    <button className="border-none bg-botao pt-px10 pb-px10 pr-px15 pl-px15 rounded-px3 text-px13 cursor-pointer" onClick={()=>concluirEdicao(index)}>Concluir</button>
                    </>
                    ):(
                <>
                <input className="" type='checkbox' checked={item.concluida} onChange={()=> marcarConcluido(index)}/>
                {item.texto}
               <div className="bg-transparent flex items-center justify-end">
               
                <button className="border: none bg-transparent text-white flex justify-center items-center cursor: pointer p-px2 text-xl hover:bg-hover rounded-px4" onClick={()=> onExcluir(index)}><TiDeleteOutline/></button>
                <button className="border: none bg-transparent text-white flex justify-center items-center cursor: pointer p-px2 text-xl hover:bg-hover rounded-px4" onClick={()=> editarItem(index)}><TiEdit/></button>
                </div>
                </>
               )}
                </item>
            ))}
            
            
     </div>
     
       </div>
)}
export default Tarefas;