import Header from "../../layout/Header/Header.tsx";
import "./404.scss";
import {Link} from "wouter";
import {HouseChimneyBlank} from "dazzle-icons/src";

const PageNotFound = () => {
    return (
        <>
            <Header />
            <main class="pageNotFound">
                <h2>Page Not found</h2>
                <p>
                    The page you are looking for does not exist.
                </p>
                <Link to={"/"} className={"button"}>
                    <HouseChimneyBlank />
                    Home
                </Link>
            </main>
        </>
    )
}

export default PageNotFound;