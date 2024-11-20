import Image from 'next/image';
import styles from './Contact.module.css';
import { ContactProps } from './Contact.props';
import { RiQuestionnaireLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { Poppins } from 'next/font/google';
import { HiCursorClick } from "react-icons/hi";
const poppins = Poppins({weight:'500', subsets:['latin']})

const Contact: React.FC<ContactProps> = ()=>{
    return <section className={`${styles.contact} ${poppins.className}`}>
        <div className={styles.contact__leftside}>
            <h2 className={styles.contact__headline}>Contá<span className='text-red-500'>ctanos</span></h2>
            <div className={styles.contact__text}>
                <RiQuestionnaireLine className={styles.contact__icon}/>
                <p className='w-3/5'>¿Tienes alguna pregunta o necesitas ayuda con tu pedido? Estamos aquí para ayudarte. Puedes contactarnos a través de cualquiera de estos medios y con gusto atenderemos tus dudas:</p>
            </div>
            <ul className={styles.contact__information}>
                <li className={styles.item}>
                    <FaPhone className={styles.item__icon}/>
                    <strong>Whatsapp</strong>
                    <p className={styles.contact__btn}>
                        <a href="https://wa.me/526383805280?text=Hola. estoy interesado en su servicio." target='_blank'>638 380 5280</a>
                        <HiCursorClick/>
                    </p>
                </li>
                <li className={styles.item}>
                    <FaClock className={styles.item__icon}/>
                    <strong>Horario de atención</strong>
                    <p>Lunes - Domingo</p>
                    <p>8:00 am - 7:00 pm</p>
                </li>
            </ul>
        </div>
        <div className={styles.contact__rightside}>
            <div className={styles["contact__rightside-image"]}>
                <Image src={"https://res.cloudinary.com/dzqoo2so5/image/upload/v1731538960/rapidines/tobwgdxieddo5ki6afte.png"} alt='contact image' layout='fill' objectFit='cover'/>
            </div>
        </div>
    </section>
}
export default Contact;