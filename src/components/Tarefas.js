import styles from './Tarefas.module.css'
import {TiDeleteOutline} from 'react-icons/ti'
import {TiEdit} from 'react-icons/ti'

function Tarefas({lista, onExcluir, editando, novaTarefa, setNovaTarefa, concluirEdicao, editarItem}){
    return(
        <div>
            
        
            
      
        <div>
            {lista.map((item, index)=>(
                <item className={styles.itensContainer}>
                {editando === index ?(
                    <>
                    <input className={styles.inputEdicao} type='text' placeholder='Digite uma tarefa' value={novaTarefa} onChange={(e)=> setNovaTarefa(e.target.value)}/>
                    <button className={styles.buttonConcluir} onClick={()=>concluirEdicao(index)}>Concluir</button>
                    </>
                    ):(
                <>
                {item}
               <div className={styles.buttonsContainer}>
               
                <button className={styles.buttonTarefas} onClick={()=> onExcluir(index)}><TiDeleteOutline/></button>
                <button className={styles.buttonTarefas} onClick={()=> editarItem(index)}><TiEdit/></button>
                </div>
                </>
               )}
                </item>
            ))}
            
            
     </div>
     
       </div>
)}
export default Tarefas;