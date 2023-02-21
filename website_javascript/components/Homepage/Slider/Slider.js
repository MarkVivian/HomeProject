import Image from "next/image";
import styles from "@/styles/Home.module.css"
import arrowPressed from "/public/arrowPointers/arrowPressed.png"
import { useState, useEffect, useRef } from "react";

export default function Slider({data}) {
    
    const[img, setImg] = useState({
        imgUrl : [],
        imgDesc : []
    })
    
    useEffect(()=>{
        data.map((item)=>{
            setImg((res)=>{
                return{
                    imgUrl : [...res.imgUrl, item.imageUrl],
                    imgDesc : [...res.imgDesc, item.description]
                }
            })
        })
    }, [])
    
    const [calculation, setcalculation] = useState(0)  
    
    const nextImg = ()=>{
        const value = calculation + 1
        if(value > ((img.imgUrl.length / 2) - 1 )){
            setcalculation(0)
        }else{
        setcalculation(calculation + 1)   
        }
    }
    
    const prevImg = ()=>{
        const value = calculation - 1
        if(value < 0){
            setcalculation((img.imgUrl.length / 2) - 1 )
        }else{
            setcalculation(value)
        }
    }    

    return(
        <div className={styles.mainSlider}>  
            <div className={styles.switch}>
                <Image src={img.imgUrl[calculation]} alt="imageUrl" width={1400} height={600} className={styles.imageFormat}/>
                <p className={styles.imageText}>{img.imgDesc[calculation]}</p>
            </div>
            <Image src={arrowPressed} onClick={prevImg} alt="arrow" width={37.5} height={37.5} className={styles.remain}/> 
            <Image src={arrowPressed} onClick={nextImg} alt="arrow" width={37.5} height={37.5} className={styles.rotate} />
        </div>
    )
   
}


                //USINGREF
/* 
instead of using document.getElementById, we use the useRef.
            EXAMPLE
const reference = useRef;

<button ref={reference}> djskfsdfsdj <button>

console.log(reference.current)

// this will show all the elements in the html tag.
*/