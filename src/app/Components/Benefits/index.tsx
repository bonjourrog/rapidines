import Image from 'next/image'
import styles from './styles.module.css'

export function Benefits(){
    return <section className={styles.benefits}>
        <Image src="https://res.cloudinary.com/dzqoo2so5/image/upload/v1731346105/rapidines/vnwypd4k9u7kzo45nwkl.png" alt='benefits background image' layout='fill' objectFit='cover'/>
        <section className={styles.benefits__leftside}>
            <div className='relative w-[35em] h-[35em] z-20'>
                <Image src="https://res.cloudinary.com/dzqoo2so5/image/upload/v1731346438/rapidines/c8l3wivqjjk8nsqdil7i.png" alt='deliver man image' layout='fill' objectFit='contain'/>
            </div>
        </section>
        <section className={styles.benefits__text}>
            <h2 className={styles.benefits__headline}>BENEFICIOS</h2>
            <ul className={styles.benefits__list}>
                <li className={styles.benefit}>
                    <h3 className={styles.benefit__headline}>Rapidez en la Entrega</h3>
                    <p className={styles.benefit__description}>Con nuestro servicio de entrega ágil, tus pedidos llegan justo cuando los necesitas.</p>
                </li>
                <li className={styles.benefit}>
                    <h3 className={styles.benefit__headline}>Variedad de Opciones</h3>
                    <p className={styles.benefit__description}>Desde restaurantes hasta farmacias, te ofrecemos una amplia gama de negocios para que elijas.</p>
                </li>
                <li className={styles.benefit}>
                    <h3 className={styles.benefit__headline}>Comodidad al Alcance de tu Mano</h3>
                    <p className={styles.benefit__description}>Olvídate de las largas filas y del tráfico. Con solo un par de clics, puedes realizar tu pedido y nosotros nos encargamos del resto.</p>
                </li>
            </ul>
        </section>
        <div className={styles.decoration}>
            <Image src={"https://res.cloudinary.com/dzqoo2so5/image/upload/v1731519955/rapidines/q69wsnghcjmpxewo3cg0.png"} alt='background decoration' layout='fill' objectFit='contain'/>
        </div>
    </section>
}