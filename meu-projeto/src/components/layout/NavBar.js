import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../img/logo_cinepipoca.png'
function NavBar(){
    return(
        <div className={styles.navbar}  >
            <Link to="/">
                    <img className={styles.imglogo} src={logo} alt="cinepipoca"/> 
                     
            </Link>
            <Link  className={styles.link} to="/">
                   <h2>Cine.Pipoca</h2>  
            </Link>
        </div>
    )
}

export default NavBar