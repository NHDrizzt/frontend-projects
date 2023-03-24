import React from "react"
import HeaderComponent from "./components/header.component";
import InputComponent from "./components/input.component";
import TitleComponent from "./components/title.component";
import DescriptionComponent from "./components/description.component";
import FooterComponent from "./components/footer.component";

const App = () => {
    return (
        <>
            <div className="content">
                <HeaderComponent />
                <InputComponent />
                <TitleComponent />
                <DescriptionComponent />
                <FooterComponent />
            </div>
        </>
    )
}

export default App
