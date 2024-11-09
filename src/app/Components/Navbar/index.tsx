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
    const [scroll, setScroll] = useState<number>(window.scrollY);

    const handleScreenWith = ()=>{
        setScreenWidth(window.innerWidth)
    }

    const handleScroll = ()=>{
        setScroll(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener('resize', handleScreenWith)
        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener('resize', handleScreenWith)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    useEffect(()=>{
        if(screenWidth<1300){
            handleShowHeader(true)
        }else{
            handleShowHeader(false)
        }
    }, [screenWidth])
    return <nav className={`${styles.navbar} ${scroll>100&&screenWidth>1300?'bg-gradient-to-r from-red-500 via-red-400 to-red-400 text-white z-20 shadow-lg':''} ${showHeader?'left-full bg-white':'left-0'}`}>
        <IoMdMenu onClick={()=>handleShowHeader(false)} className={`absolute top-6 -left-16 text-white text-3xl cursor-pointer`}/>
        <IoMdClose style={{display:screenWidth>1300?'none':'block'}} onClick={()=>handleShowHeader(true)} className={`absolute top-6 left-10 text-zinc-700 text-3xl cursor-pointer`}/>
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