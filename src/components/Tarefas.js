import styles from './Tarefas.module.css'
import {TiDeleteOutline} from 'react-icons/ti'
import {TiEdit} from 'react-icons/ti'

function Tarefas({lista, onExcluir}){
    return(
        <div>
            
        
            
      
        <div>
            {lista.map((item, index)=>(
                <item className={styles.itensContainer}>{item}
               <div className={styles.buttonsContainer}>
                <button className={styles.buttonTarefas} onClick={()=> onExcluir(index)}><TiDeleteOutline/></button>
                <button className={styles.buttonTarefas}><TiEdit/></button>
                </div>
               
                </item>
            ))}
            
            
     </div>
     
       </div>
)}
export default Tarefas;