import React from "react";
// react router
import { useRoutes } from "react-router-dom";
// routes
import { AppRoutes } from "./routes";
// hooks
import { useAppSelector , useMatch } from "./hooks";
// components
import { NavbarLanding , Footer , Loading } from "./components";

const App : React.FC = () => {
    const { loading } = useAppSelector(state => state);
    let element = useRoutes(AppRoutes);
    const match = useMatch();

    return (
        loading.loading
            ? <Loading/>
            : <div>
                { match && <NavbarLanding/> }
                { element }
                { match && <Footer/> }
             </div>
    )
}

export default App;