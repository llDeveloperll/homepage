import styles from './styles/style-letter.module.css'

export default function home(){
    let date = new Date();
    return <div className={styles.letter}>welcome Eder, 
    today is: {date.toLocaleDateString()}
    </div>
}