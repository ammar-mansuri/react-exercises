import classes from './Header.module.css'
import globe from "../../assets/globe.png"

export const Header = () => {
    return (
        <div className={classes.header}>
            <img className={classes.headerImage} src={globe} alt={'headerImage'}/>
            <h1 className={classes.headerText}>my travel journal.</h1>
        </div>
    )
}