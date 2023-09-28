import Image from 'next/image'
import Topbar from './components/Topbar'
import Midcard from './components/Midcard'
import Description from './components/Description'
import Bag from './components/Bag'
import Footer from './components/Footer'
import MainBody from './components/MainBody'

export default function Home() {
  return (
    <div className='bg-gray-100 h-screen w-full '>
      <Topbar />
      <Midcard/>
      <MainBody/>
      <Footer/>
    </div>
  )
}
