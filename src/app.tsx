import './app.scss'
import { Router, Route } from 'wouter';
import Main from "./components/pages/Main/Main.tsx";
import Impressum from "./components/pages/Impressum/Impressum.tsx";

export function App() {
    return (
        <Router>
            <Route path={"/"}>
                <Main />
            </Route>
            <Route path={"/impressum"}>
                <Impressum />
            </Route>
        </Router>
    )
}
