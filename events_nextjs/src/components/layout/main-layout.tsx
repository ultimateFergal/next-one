import { Footer } from "../footer/footer"
import { Header } from "../header/header"


const MainLayout = ({ children }: any) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default MainLayout