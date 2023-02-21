import Link from "next/link";
import styles from "@/styles/Home.module.css"
import Image from "next/image";
import user from "@/public/user.png"


export default function Navbar(){
    
    return(
        <nav className={styles.navbar}>

           <div className={styles.logo}>
                <Link href="/">
                <h2>HOME</h2>
                    </Link>
           </div>
           
           <div className={styles.links}>
                <ul>
                    <li className={styles.linksList}><Link href="">Buy</Link></li>
                    <li className={styles.linksList}><Link href="">Sell</Link></li>
                    <li className={styles.linksList}><Link href="">Rent</Link></li>
                </ul>
           </div>
           
            <div className={styles.user}>
                <Link href="/Auth">
                    <Image src={user} alt="user icon" width={50} height={50} />
                </Link>
            </div>
           
        </nav>
    )
}