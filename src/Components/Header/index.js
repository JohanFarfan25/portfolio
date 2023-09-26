import { Link } from "@mui/material";
import "./Header.css";
import Logo from "../Logo";
import { HeaderItems } from "./HeaderItems";

const Header = () => {
    return (
        <header className="head">
            <Logo />
            <nav>
                <ul className="menu__lista">
                    {
                        HeaderItems.map((item,index) => (
                            <li className={item.className} key={index}>
                                <Link style={{color:"#464646", fontWeight:"700"}} href={item.href} underline="none" >{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header