import styles from './Button.module.scss'
const Button = ({title, type = 'primary'}) => {
    return (
        <div className={`${styles.button} ${styles[type]}`}>
            {title}
        </div>
    )
}

export default Button