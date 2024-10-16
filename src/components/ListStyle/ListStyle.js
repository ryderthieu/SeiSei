import './ListStyle.scss'

const ListStyle = ({stt, content, direction = 'left', color}) => {
    const flexDirection = direction === 'right' ? 'row-reverse' : 'row'
    return (
        <div className="LS-container" 
            style={{'--align' : direction,
                '--flexDirection': flexDirection,
                '--color': color
            }}
        >
            <div className="LS-title">
                {stt}
            </div>
            <div className="LS-content">
                {content}
            </div>
        </div>
    )
}

export default ListStyle