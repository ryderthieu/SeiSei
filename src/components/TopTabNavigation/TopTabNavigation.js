import { useState } from 'react'
import style from './TopTabNavigation.module.scss'


const NavItem = ({title, active, onClick}) => {
    return (
        <div 
            className={[style.navItem, active&&style.navItem__active].join(' ')}
            onClick = {onClick}
        >
            {title}
        </div>
    )
}
const TopTabNavigation = ({data}) => {
    const [active, setActive] = useState(0)
    return (
        <div className={style.container}>
            {data.map((v, i) => {
                return <NavItem 
                            title={v} 
                            active = {active === i} 
                            key = {i} 
                            onClick={() => setActive(i)}
                        />
            })}
        </div>
    )
}
export default TopTabNavigation