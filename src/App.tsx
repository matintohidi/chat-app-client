import React from "react";
// react router
import { useRoutes } from "react-router-dom";
// routes
import { AppRoutes } from "./routes";
// hooks
import { useMatch } from "./hooks";
// components
import { NavbarLanding , Footer } from "./components";

const App : React.FC = () => {
    let element = useRoutes(AppRoutes);
    const match = useMatch();

    return (
        <div>
            { match && <NavbarLanding /> }
            { element }
            { match && <Footer /> }
        </div>
    )
}

export default App;