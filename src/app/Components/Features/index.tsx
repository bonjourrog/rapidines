import styles from './styles.module.css';
import Image from "next/image";

export default function Features(){
    return <div className={`${styles.features}`}>
        <Image src='https://res.cloudinary.com/dzqoo2so5/image/upload/v1730397651/rapidines/p5ctygkqgbcgslwo4qwi.png' alt='Pattern' fill objectFit='cover' style={{transform:'scale(1.1)'}}/>
        <div className={`${styles.fcontent}`}>
            <h2 className={`${styles.features__headline}`}>Patroci<span className="text-red-500">nadores</span></h2>
            <ul className={`${styles.restaurants}`}>
                <li className={`${styles.restaurant} ${styles["restaurant--burger"]}`}>
                    <a href="https://lafatburger.com" target="_blank" rel="noopener noreferrer">
                        <Image src='https://res.cloudinary.com/dzqoo2so5/image/upload/v1730419317/rapidines/dejpc10mlu4hmwabdt4q.png' alt='la fat burger logo' layout="fill" objectFit="contain"/></a>
                </li>
                <li className={`${styles.restaurant} ${styles["restaurant--birria"]}`}>
                    <a href="https://www.facebook.com/profile.php?id=61565797590287" target="_blank" rel="noopener noreferrer">
                        <Image src='https://res.cloudinary.com/dzqoo2so5/image/upload/v1730420111/rapidines/pl8qlpcg3vzfnuveoqfk.png' alt='Birria el estacionamiento logo' layout="fill" objectFit="contain"/>
                    </a>
                </li>
                <li className={`${styles.restaurant} ${styles["restaurant--comedero"]}`}>
                    <a href="https://elcomedero.com.mx" target="_blank" rel="noopener noreferrer">
                        <Image src='https://res.cloudinary.com/dzqoo2so5/image/upload/v1730420299/rapidines/jumtb8yacgrqixrrhkdk.png' alt='El comedero logo' layout="fill" objectFit="contain"/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
}