import styles from './Tarefas.module.css'
import {TiDeleteOutline} from 'react-icons/ti'
import {TiEdit} from 'react-icons/ti'

function Tarefas({lista, onExcluir, editando, novaTarefa, setNovaTarefa, concluirEdicao, editarItem, marcarConcluido, caixaMarcada}){
    return(
        <div>
            
        
            
      
        <div className={styles.containerTotal}>
            {lista.map((item, index)=>(
                <item className={`${styles.itensContainer} ${item.concluido? styles.itensMarcados: null}`}>
                {editando === index ?(
                    <>
                    <input className={styles.inputEdicao} type='text' placeholder='Digite uma tarefa' value={novaTarefa} onChange={(e)=> setNovaTarefa(e.target.value)}/>
                    <button className={styles.buttonConcluir} onClick={()=>concluirEdicao(index)}>Concluir</button>
                    </>
                    ):(
                <>
                <input className={styles.caixaMarcada} type='checkbox' checked={item.concluida} onChange={()=> marcarConcluido(index)}/>
                {item.texto}
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