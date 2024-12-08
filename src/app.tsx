import './app.scss'
import {Route, Switch} from 'wouter';
import Main from "./components/pages/Main/Main.tsx";
import Impressum from "./components/pages/Impressum/Impressum.tsx";
import PageNotFound from "./components/pages/404/404.tsx";

export function App() {
    return (
        <Switch>
            <Route path={"/"}  component={Main} />
            <Route path={"/impressum"} component={Impressum} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    )
}