import classes from './Content.module.css'

export default function Content() {
    return (
        <main>
            <h1> React Content </h1>
            <ul className={classes.contentList}>
                <li> Content row 1</li>
                <li> Content row 2</li>
                <li> Content row 3</li>
                <li> Content row 4</li>
                <li> Content row 5</li>
            </ul>
        </main>
    )
}