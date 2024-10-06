import './style.scss'

const Button = ({title, type, onClick}) => {
    return <button 
        onClick={onClick}
        className='button-container'
        >
        {title}
    </button>
}

export default Button