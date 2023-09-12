import styles from './Tarefas.module.css'
import {TiDeleteOutline} from 'react-icons/ti'
import {TiEdit} from 'react-icons/ti'

function Tarefas({lista}){
    return(
        <div>
            
        
            
      
        <div className={styles.containerTarefa}>
            {lista.map((item, index)=>(
                <item className={styles.itensContainer}>{item}
               <div className={styles.buttonsContainer}>
                <button className={styles.buttonTarefas}><TiDeleteOutline/></button>
                <button className={styles.buttonTarefas}><TiEdit/></button>
                </div>
               
                </item>
            ))}
     </div>
       </div>
)}
export default Tarefas;