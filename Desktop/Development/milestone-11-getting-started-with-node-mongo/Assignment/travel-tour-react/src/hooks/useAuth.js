import { useContext } from "react"
import { TravelContext } from "../Context/AuthProvider"

const useAuth = () => {
    return useContext(TravelContext);
};

export default useAuth;