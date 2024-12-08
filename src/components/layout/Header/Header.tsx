import "./Header.scss";
import {Link} from "wouter";
import GitHub from "../../common/icons/GitHub.tsx";
import Discord from "../../common/icons/Discord.tsx";

const Header = () => {
    return (
        <header>
            <Link to={"/"} className={"logo"}>
                <img
                    src={"/img/logo.svg"}
                    alt={"logo"}
                />
            </Link>

            <div className="links">
                <a
                    className={"icon"}
                    href={"https://strassburger.org/discord"}
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                >
                    <Discord />
                    Discord
                </a>
                <a
                    className={"icon"}
                    href={"https://github.com/KartoffelChipss/qr-creator"}
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                >
                    <GitHub />
                    GitHub
                </a>
            </div>
        </header>
    );
}

export default Header;