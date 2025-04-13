import Navbar from '../components/VerifdsnPage/Navbar'
import Footer from '../components/LandingPage/Footer';
import PayrollSettings from '../components/VerifdsnPage/PayrollSettings';
import PayrollSlider from '../components/VerifdsnPage/PayrollSlider';
import SolwayRecruitment from '../components/VerifdsnPage/SolwayRecruitment';





function VerifdsnPage() {
  return (
      <div>
        <Navbar/>
        <PayrollSettings/>
        < PayrollSlider/>
        <SolwayRecruitment/>
        <Footer/>
      </div>
        
  );}
      
      
export default VerifdsnPage;