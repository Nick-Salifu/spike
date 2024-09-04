import BestSeller from "./BestSeller"
import Category from "./Category"
import Collections from "./Collections"
import Hero from "./Hero"
import NewsLetter from "./NewsLetter"
import Products from "./Products"

function Home() {
    return (
        <div>
            <Hero />
            <Category />
            <Products />
            <Collections />
            <BestSeller />
            <NewsLetter />
        </div>
    )
}

export default Home
