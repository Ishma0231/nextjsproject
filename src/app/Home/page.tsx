"use-client"
import NestedCarousel from "@/components/NestedCarousel.jsx"
import Categorysect from "@/components/Categorysect.jsx"
import TopRated from "@/components/TopRated"

function Home() {
  return (
    <div style={{backgroundColor:"white"}} className="pb-10 pt-20" >
        <NestedCarousel/>
        <div style={{backgroundColor:"white"}} >
            <Categorysect/>
        </div>
       <TopRated/>
        
    </div>
  )
}

export default Home