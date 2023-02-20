import Link from "next/link";
import styles from "@/styles/Home.module.css"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>

           <div className={styles.logo}>
                <h2>HOME</h2>
           </div>
           
        <div className={styles.center}>
           <div className={styles.links}>
                <ul>
                    <li className={styles.linksList}><Link href="">Buy</Link></li>
                    <li className={styles.linksList}><Link href="">Sell</Link></li>
                    <li className={styles.linksList}><Link href="">Rent</Link></li>
                </ul>
           </div>
           
           <div className={styles.auth}>
                <ul>
                    <li className={styles.authList}><Link href="">Log in</Link></li>
                    <li className={styles.authList}><Link href="">Sign in</Link></li>
                </ul>
           </div>
        </div>
           
        </nav>
     )
}