import Image from 'next/image';
import styles from './styles.module.css';
import { BiStore } from "react-icons/bi";
import { IoRestaurant } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { TbNotebook } from "react-icons/tb";
import { RiFlowerFill } from "react-icons/ri";
import { LuShoppingBasket } from "react-icons/lu";
import {Poppins} from 'next/font/google'
const poppins = Poppins({subsets:['latin'], weight:'900'})
export default function Services(){
    return (
        <section id='services' className={styles.services}>
            <h2 className={`${styles.services__healine} ${poppins.className}`}>SERVI<span>CIOS</span></h2>
            <ul className={styles.services__list}>
                <li className={styles.service} data-aos="zoom-in-up">
                    <div className={styles.service__header}>
                        <BiStore className={styles.service__icon}/>
                        <h3 className={styles.service__headline}>Tiendas de  Auto servicio</h3>
                        <Image src={'https://res.cloudinary.com/dzqoo2so5/image/upload/v1730679193/rapidines/bgk3k0vng1fyom768qgw.jpg'} alt='Image' fill objectFit='cover' style={{opacity:'.2'}}/>
                    </div>
                    <p className={styles.service__caption}>encargos desde tiendas como OXXO y abarrotes locales, llevándote productos básicos.</p>
                </li>
                <li className={styles.service} data-aos="zoom-in-up">
                    <div className={styles.service__header}>
                        <FaHandHoldingMedical className={styles.service__icon}/>
                        <h3 className={styles.service__headline}>Farmacias</h3>
                        <Image src={'https://res.cloudinary.com/dzqoo2so5/image/upload/v1730679897/rapidines/wmewvegx8ge1wkzqcsj7.jpg'} alt='Image' fill objectFit='cover' style={{opacity:'.2'}}/>
                    </div>
                    <p className={styles.service__caption}>Aseguramos la entrega de tus medicamentos y productos de salud.</p>
                </li>
                <li className={styles.service} data-aos="zoom-in-up">
                    <div className={styles.service__header}>
                        <IoRestaurant className={styles.service__icon}/>
                        <h3 className={styles.service__headline}>Restaurantes</h3>
                        <Image src={'https://res.cloudinary.com/dzqoo2so5/image/upload/v1730679994/rapidines/qgnow3ha6chcooijxzux.jpg'} alt='Image' fill objectFit='cover' style={{opacity:'.2'}}/>
                    </div>
                    <p className={styles.service__caption}>Disfruta de tus platillos favoritos sin salir de casa. Recogemos tu comida y la llevamos.</p>
                </li>
                <li className={styles.service} data-aos="zoom-in-up">
                    <div className={styles.service__header}>
                        <TbNotebook className={styles.service__icon}/>
                        <h3 className={styles.service__headline}>Papelerias</h3>
                        <Image src={'https://res.cloudinary.com/dzqoo2so5/image/upload/v1730680155/rapidines/qc5dtsrg2u1owop8f4wk.jpg'} alt='Image' fill objectFit='cover' style={{opacity:'.2'}}/>
                    </div>
                    <p className={styles.service__caption}>Desde útiles escolares y material de oficina hasta productos especiales para tus proyectos, recogemos lo que necesitas</p>
                </li>
                <li className={styles.service} data-aos="zoom-in-up">
                    <div className={styles.service__header}>
                        <RiFlowerFill className={styles.service__icon}/>
                        <h3 className={styles.service__headline}>Florerías</h3>
                        <Image src={'https://res.cloudinary.com/dzqoo2so5/image/upload/v1730681836/rapidines/wul5ksq4aklekwyxcnqj.jpg'} alt='Image' fill objectFit='cover' style={{opacity:'.2'}}/>
                    </div>
                    <p className={styles.service__caption}>Ideal para envíos especiales de flores y arreglos en ocasiones especiales.</p>
                </li>
                <li className={styles.service} data-aos="zoom-in-up">
                    <div className={styles.service__header}>
                        <LuShoppingBasket className={styles.service__icon}/>
                        <h3 className={styles.service__headline}>Y mucho más</h3>
                        <Image src={'https://res.cloudinary.com/dzqoo2so5/image/upload/v1730681952/rapidines/t28ettnzv5h2of1xd4fh.jpg'} alt='Image' fill objectFit='cover' style={{opacity:'.2'}}/>
                    </div>
                    <p className={styles.service__caption}>Cualquiera que sea tu necesidad, estamos aquí para ayudarte. Si necesitas algo especial o tienes un pedido específico.</p>
                </li>
            </ul>
        </section>
    )
}