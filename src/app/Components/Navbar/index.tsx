"use client"
import styles from './styles.module.css';
import {Fuzzy_Bubbles} from 'next/font/google'
import { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
const fuzzy_Bubbles = Fuzzy_Bubbles({weight:"700", subsets:["latin"]})
import { IoMdClose } from "react-icons/io";

export default function Navbar(){
    const [showHeader, handleShowHeader] = useState<boolean>(false)
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

    const handleScreenWith = ()=>{
        setScreenWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize', handleScreenWith)
        return ()=>window.removeEventListener('resize', handleScreenWith)
    }, [])
    useEffect(()=>{
        if(screenWidth<1300){
            handleShowHeader(true)
        }else{
            handleShowHeader(false)
        }
    }, [screenWidth])
    return <nav className={`${styles.navbar} ${showHeader?'left-full':'left-0'}`}>
        <IoMdMenu onClick={()=>handleShowHeader(false)} className={`absolute top-6 -left-16 text-white text-3xl cursor-pointer`}/>
        <IoMdClose onClick={()=>handleShowHeader(true)} className={`absolute top-6 left-10 text-zinc-700 text-3xl cursor-pointer`}/>
        <span className={`${styles.navbar__logo}`}>Rapidinez</span>
        <ul className={`${styles.navbar__list}`}>
            <li>
                <ul className={`${styles.navbar__items}`}>
                    <li>Servicios</li>
                    <li>Como funciona</li>
                </ul>
            </li>
            <li>
                <ul className={`${styles.navbar__rest} ${fuzzy_Bubbles.className}`}>
                    <li>El comedero</li>
                    <li>La fat burger</li>
                    <li>Birria</li>
                </ul>
            </li>
            <li>
                <ul className={`${styles.navbar__items}`}>
                    <li>Beneficios</li>
                    <li>Contacto</li>
                </ul>
            </li>
        </ul>
    </nav>
}