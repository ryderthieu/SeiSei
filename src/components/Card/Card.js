import { useState } from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
const BoxContent = ({title, img, content, type, backgroundColor}) => {
    return (
        <div className="boxContent-container" style={{'--bColor': backgroundColor}}>
            <div className="boxContent-imgs">
                <img className = 'boxContent-img' src={img}/>
            </div>
            <div className = 'boxContent-content'>
                <div className="bcContent-title">
                    {title}
                </div>
                <div className="bcContent-content">
                    {content}
                </div>
                <Link className='boxContent-btn' to = '/register'>
                    Đăng ký ngay
                </Link>
            </div>
        </div>
    )
}

const CourseCard = ({data}) => {

    return (
        <div className="card-container" style={{color: data.color}}>
            <div className="card-imgs">
                <img className = 'card-img' src={data.img}/>
            </div>
            <div className = 'card-text'>
                <div className="card-title" >
                    {data.title}
                </div>
                {data.content.map((v, i) => {
                    return (
                        <p className='card-content' key={i}>
                            {v}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

const ExtendableCard = ({ data }) => {
    const [isExtend, setIsExtend]  = useState(false)
    const extendCard = () => {
        document.getElementById('cardContent').style.display = isExtend ? 'none' : 'flex'
        document.getElementById('extendIcon').name = isExtend ? 'chevron-down-outline' : 'chevron-up-outline'
        setIsExtend(!isExtend)
    }
    return (
        <div className='extendableCardContainer' onClick={extendCard}>
            <div className='title'>
                {data.img && (
                    <div className='imgContainer'>
                        <img src={data.img} alt="Card" className='img' />
                    </div>
                )}
                <div className='text'>
                    {data.title.map((v, i) => (
                        <div key={i} className='lineContainer'>
                            <div className='label'>{v.label}:</div>
                            <div className='value'>{v.value}</div>
                        </div>
                    ))}
                </div>
                <div className='extendIcon'>
                    <ion-icon name="chevron-down-outline" id = "extendIcon"></ion-icon>
                </div>
            </div>
            <div className='content' id='cardContent'>
                <div className='contentTitle'>
                    {data.content.title}
                </div>
                <div className='text'>
                    {data.content.content.map((v, i) => (
                            <div key={i} className='lineContainer'>
                                <div className='label'>{v.label}:</div>
                                <div className='value'>{v.value}</div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};


export {BoxContent, CourseCard, ExtendableCard}