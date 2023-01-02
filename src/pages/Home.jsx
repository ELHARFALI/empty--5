import { Navbar, Header, Featured, PropertyList, FeaturedProperties, MailList } from "../components"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className=" mt-[50px] flex flex-col items-center gap-[30px] ">
          <Featured />
          <h1 className='homeTitle w-[1024px] font-semibold text-[20px]'>Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle w-[1024px] font-semibold text-[20px]">Homes guests love</h1>
          <FeaturedProperties/>
          <MailList />
        </div>
    </div>
  )
}

export default Home