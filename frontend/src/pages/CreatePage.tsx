import { useLocation } from "react-router-dom";

export default function CreatePage() {
    const location = useLocation()
    console.log(location.search)
    return(<img src={location.state.avatar}></img>)
}
