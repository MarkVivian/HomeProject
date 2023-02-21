import styles from "@/styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import google from "@/public/icons/google-240.png"
import instagram from "@/public/icons/instagram-480.png"
import whatsapp from "@/public/icons/whatsapp-375.png"

export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.icons}>
                <Link href="">
                    <Image src={google} alt="" width={30} height={30} />
                </Link>
                <Link href="">
                    <Image src={instagram} alt="" width={30} height={30} />
                </Link>
                <Link href="">
                    <Image src={whatsapp} alt="" width={30} height={30} />
                </Link>
            </div>
            <div className={styles.text}>
            ©Copyright Deserunt officia commodo nostrud mollit Lorem aliquip est labore eu ullamco laborum esse.
            </div>
        </div>
    )
}