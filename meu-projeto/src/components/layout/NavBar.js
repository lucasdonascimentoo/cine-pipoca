import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../img/logo_cinepipoca.png'
import {BiSearchAlt2} from 'react-icons/bi'
function NavBar(){
    return(
        <div className={styles.navbar_container}  >
            <div>
                <Link className={styles.link} to="/">
                        <div className={styles.link_container}>
                            <img className={styles.imglogo} src={logo} alt="cinepipoca"/>
                            <h2>Cine.Pipoca</h2>
                        </div>
                </Link>
            </div>
            <div className={styles.navbar_child_search}>
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