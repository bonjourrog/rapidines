import Image from 'next/image';
import style from './style.module.css';
import { Link } from 'react-scroll';

export const Hero = ()=>{
    return <main className={`${style.hero}`}>
        <div className={`${style["hero__headline-section"]}`}>
            <h1 className={`${style.hero__headline}`}>¡Lo que necesitas, <br />cuando lo necesitas!</h1>
            <p className={`${style.hero__caption}`}>Siempre a tu lado, listo para ofrecerte lo que necesitas, cuando lo necesitas. No más esperas, solo soluciones al instante</p>
            <div className={style.buttons}>
                <button className={`${style.hero__button}`}><Link to='services' smooth spy>Ver servicios</Link></button>
                <button className={`${style.hero__button}`}><a href="https://wa.me/526383805280?text=Hola. estoy interesado en su servicio." target='_blank'>Contáctanos</a></button>
            </div>
        </div>
        <div className={`${style["hero__headline-section--right"]}`} data-aos="fade-left">
            <Image className={`${style.hero__image}`} src={"https://res.cloudinary.com/dzqoo2so5/image/upload/v1730311960/rapidines/mka5q9gplazjf0mpwm8q.png"} alt='hero image' layout='fill' objectFit="contain"/>
        </div>
    </main>
}