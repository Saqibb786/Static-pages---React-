import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"



export default function App() {
    return (
        <>
            <NavBar />
            <MainContent />
        </>
    )
}


