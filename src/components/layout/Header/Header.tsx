import "./Header.scss";
import {Link} from "wouter";

const Header = () => {
    return (
        <header>
            <Link to={"/"} className={"logo"}>
                <img
                    src={"/img/logo.svg"}
                    alt={"logo"}
                />
            </Link>
        </header>
    );
}

export default Header;