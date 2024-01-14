
import NotificationBar from '../components/NotificationBar'
import Navbar from '../components/Navbar'
import HompageCarousel from '../components/HompageCarousel'
import SimplyUnique from '../components/SimplyUnique'
import BannerGrid from '../components/BannerGrid'

const HomePage = () => {
  return (
    <div>
        <NotificationBar/>
        <Navbar/>
        <HompageCarousel/>
        <SimplyUnique/>
        <BannerGrid/>
    </div>
  )
}

export default HomePage