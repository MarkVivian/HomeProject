import Homepage from '@/components/Homepage/Homepage'
import { Inter } from '@next/font/google'
import styles from "@/styles/Home.module.css"
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
    
        <Homepage data={data}/>
     
    </>
  )
}

export async function getStaticProps(){
  const {slider_images} = await import("@/Data/Data.json")
  
  return{props : {
    data : slider_images
  }}
}