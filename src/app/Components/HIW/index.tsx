import styles from './HIW.module.css';
import Image from "next/image";
import {Poppins} from 'next/font/google';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiListCheck3 } from "react-icons/ri";
import { MdOutlineDeliveryDining } from "react-icons/md";
const poppins = Poppins({weight:'900', subsets:['latin']})
export default function Howitworks(){
    return <div className={styles.hiw}>
        <h2 className={`${styles.hiw__headline} ${poppins.className}`}>¿Cómo <span className="text-red-400">funciona?</span></h2>
        <ul>
            <li className={styles.step}>
                <div className={styles["step__img-container"]} data-aos="fade-right">
                    <Image src='https://res.cloudinary.com/dzqoo2so5/image/upload/v1730768808/rapidines/ojplmk4lbgu9lkizkrza.jpg' alt='Online ordering image' layout="fill" objectFit="cover"/>
                </div>
                <div className={styles["step__text-container"]} data-aos="fade-left">
                    <div className={styles.step__header}>
                        <IoPhonePortraitOutline className={styles.step__icon}/>
                        <h3 className={`${styles.step__headline} ${poppins.className}`}>CONTACTÁNOS</h3>
                    </div>
                    <p className={styles.step__caption}>Empieza por explorar la variedad de servicios que ofrecemos para repartidores. Cuando estés listo para hacer tu pedido, contáctanos a través de los números que proporcionamos</p>
                    <button className={styles["contact-btn"]}>Contacto</button>
                </div>
            </li>
            <li className={`${styles.step} ${styles["step--reverse"]}`}>
                <div className={styles["step__text-container"]} data-aos="fade-right">
                    <div className={styles.step__header}>
                        <RiListCheck3 className={styles.step__icon}/>
                        <h3 className={`${styles.step__headline} ${poppins.className}`}>HAZ TU PEDIDO</h3>
                    </div>
                    <p className={styles.step__caption}>Cuéntanos exactamente qué necesitas. Ya sea que busques un platillo específico de un restaurante, artículos de una tienda, o cualquier otro producto, estamos aquí para atenderte y asegurarnos de que recibas justo lo que deseas. Simplemente indícanos los detalles y estaremos listos para procesar tu pedido rápidamente. ¡Déjanos ayudarte a obtener lo que necesitas!.</p>
                </div>
                <div className={styles["step__img-container"]} data-aos="fade-left">
                    <Image src='https://res.cloudinary.com/dzqoo2so5/image/upload/v1730770646/rapidines/pa2hp4l1nphqb3ltrze7.jpg' alt='Online ordering image' layout="fill" objectFit="cover"/>
                </div>
            </li>
            <li className={styles.step}>
                <div className={styles["step__img-container"]}  data-aos="fade-right">
                    <Image src='https://res.cloudinary.com/dzqoo2so5/image/upload/v1730770763/rapidines/ql04atup3xrdhihil16o.jpg' alt='Online ordering image' layout="fill" objectFit="cover"/>
                </div>
                <div className={styles["step__text-container"]} data-aos="fade-left">
                    <div className={styles.step__header}>
                        <MdOutlineDeliveryDining className={styles.step__icon}/>
                        <h3 className={`${styles.step__headline} ${poppins.className}`}>ESPERA TU PEDIDO</h3>
                    </div>
                    <p className={styles.step__caption}>Nuestro equipo comprará los artículos que solicitaste y se asegurará de entregártelos rápidamente. ¡Tu satisfacción es nuestra prioridad!</p>
                </div>
            </li>
        </ul>
    </div>
}