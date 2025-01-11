import reactLogo from '../../assets/react.svg'
import "./Header.module.css";

export default function Header() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="React logo"/>
                <span>React Header</span>
            </nav>
        </header>
    )
}