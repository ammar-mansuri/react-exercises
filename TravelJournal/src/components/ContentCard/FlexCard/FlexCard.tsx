import classes from "./FlexCard.module.css";
import marker from "../../../assets/marker.png"

interface Image {
    src: string;
    alt: string;
}

interface FlexCardProps {
    image: Image;
    country: string;
    mapsUrl: string;
    destination: string;
    dates: string;
    infoText: string;
}

const FlexCard = (props: FlexCardProps) => {
    const {image, country, mapsUrl, destination, dates, infoText} = props
    return (
        <div className={classes.cardFlexContainer}>
            <div className={classes.imageContainer}>
                <img src={image.src} alt={image.alt}/>
            </div>
            <div className={classes.textContainer}>
                <img src={marker} alt={'marker-img'}/> <span> {country}</span>
                <a target={'_blank'} href={mapsUrl}>View on Google Maps</a>
                <h2> {destination} </h2>
                <p>{dates} </p>
                <p> {infoText} </p>
            </div>
        </div>
    )
}

export default FlexCard