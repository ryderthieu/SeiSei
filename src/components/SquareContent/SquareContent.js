import './SquareContent.scss'

const SquareContent = ({title, content, tColor, cColor, tBg, cBg, width}) => {
    const style = {
        '--tColor': tColor,
        '--cColor': cColor,
        '--tBg' : tBg,
        '--cBg' : cBg,
        '--width' : width
    }
    return (
        <div className="SquareContent-container"  style={style}>
            <div className='title' >
                {title}
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    )
}

export default SquareContent