import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../img/logo_cinepipoca.png'
import {BiSearchAlt2} from 'react-icons/bi'
function NavBar(){
    return(
        <div className={styles.navbar}  >
            <Link to="/">
                    <img className={styles.imglogo} src={logo} alt="cinepipoca"/> 
                     
            </Link>
            <Link  className={styles.link} to="/">
                   <h2>Cine.Pipoca</h2>  
            </Link>
            <div className={styles.formulario}>
                <form>
                    <input type = "text" placeholder="Busque aqui"/>
                    <button type="submit">
                        <BiSearchAlt2/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NavBar