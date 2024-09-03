import Category from "./Category"
import Collections from "./Collections"
import Hero from "./Hero"
import Products from "./Products"

function Home() {
    return (
        <div>
            <Hero />
            <Category />
            <Products />
            <Collections />
        </div>
    )
}

export default Home
