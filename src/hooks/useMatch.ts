// react router dom
import { useLocation } from "react-router-dom";
// routes
import { ShowLayout } from "../routes";

const useMatch = () : boolean => {
    const path = useLocation().pathname.toLowerCase();

    return ShowLayout.includes(path);
}

export default useMatch;