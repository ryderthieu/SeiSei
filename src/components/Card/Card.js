import { useState } from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
const BoxContent = ({ title, img, content, type = 'left', backgroundColor = '#ffffff', color = '#5e93bb' }) => {
    const isLeft = type === 'left';
    console.log(isLeft);

    return (
        <div
            className={`boxContent-container ${isLeft ? 'left' : 'right'}`}
            style={{ '--bColor': backgroundColor, '--mainColor': color }}
        >
            <div className="boxContent-imgs">
                <img className="boxContent-img" src={img} alt={title || 'Image'} />
            </div>

            <div className="boxContent-content">
                <div className="bcContent-title">{title}</div>
                <div className="bcContent-desc">{content}</div>
                <Link className="boxContent-btn" to="/register">
                    Đăng ký ngay
                </Link>
            </div>
        </div>
    );
};


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
                        <div className='card-content' key={i}>
                           <b>{v.label}</b> {v.label ? ':' : ''}  {Array.isArray(v.value) && v.value.join(', ')}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const ExtendableCard = ({ data, cardId, onChoose }) => {
    const [isExtend, setIsExtend] = useState(false);

    const toggleExtend = () => {
        setIsExtend(!isExtend);
    };

    return (
        <div className={`extendableCardContainer ${isExtend ? 'extended' : ''}`} onClick={toggleExtend}>
            <div className="header">
                <div className="title">
                    {data.img && (
                        <div className="imgContainer">
                            <img src={data.img} alt="Card" className="img" />
                        </div>
                    )}
                    <div className="text">
                        {data.title.map((v, i) => (
                            <div key={i} className="lineContainer">
                                <div className="label">{v.label}:</div>
                                <div className="value">{v.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="extendIcon">
                    <ion-icon
                        name={isExtend ? 'chevron-up-outline' : 'chevron-down-outline'}
                        id={`extendIcon-${cardId}`}
                    ></ion-icon>
                </div>
            </div>
            {isExtend && (
                <div className="content" id={`cardContent-${cardId}`}>
                    <div className="contentTitle">{data.content.title}</div>
                    <div className="text">
                        {data.content.content.map((v, i) => (
                            <div key={i} className="lineContainer">
                                <div className="label">{v.label}:</div>
                                    <div
                                        className="value"
                                    >
                                        {v.value.join(', ')}
                                    </div>
                            </div>
                        ))}
                    </div>
                    {data.button && (
                        <div className='button' onClick={() => onChoose(true)}>
                            <Button title={data.button.title} />
                        </div>

                    )}
                </div>
            )}
        </div>
    );
};


const FullContentCard = ({ data }) => {
    return (
        <div className="fullContentCardContainer">
            <div className="header">
                <div className="title">
                    {data.img && (
                        <div className="imgContainer">
                            <img src={data.img} alt="Card" className="img" />
                        </div>
                    )}
                    <div className="text">
                        {data.title.map((v, i) => (
                            <div key={i} className="lineContainer">
                                <div className="label">{v.label}:</div>
                                <div className="value">{v.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="contentTitle">{data.content.title}</div>
                <div className="text">
                    {data.content.content.map((v, i) => (
                        <div key={i} className="lineContainer">
                            <div className="label">{v.label}:</div>
                            <div className="value">{v.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



export {BoxContent, CourseCard, ExtendableCard, FullContentCard }