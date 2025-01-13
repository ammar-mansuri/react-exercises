import classes from './ContentCard.module.css'
import FlexCard from "./FlexCard/FlexCard";
import data from '../../data'

export const ContentCard = () => {
    return (
        <div className={classes.mainGridContainer}>
            {data.map(element =>
                <FlexCard key={element.id} image={element.img} country={element.country}
                          mapsUrl={element.googleMapsLink}
                          destination={element.title} dates={element.dates} infoText={element.text}/>
            )}
        </div>
    )
}
