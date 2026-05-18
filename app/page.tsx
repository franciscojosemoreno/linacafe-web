import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import SignatureDrinks from '@/components/SignatureDrinks'
import Gallery from '@/components/Gallery'
import PetFriendly from '@/components/PetFriendly'
import Reviews from '@/components/Reviews'
import Location from '@/components/Location'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <SignatureDrinks />
        <Gallery />
        <PetFriendly />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  )
}
