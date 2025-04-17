import Navbar from '../components/LandingPage/Navbar';
import ActivityShowcase from '../components/LandingPage/ActivityShowcase';
import ClientPartners from '../components/LandingPage/ClientPartners';
import SolutionsShowcase from '../components/LandingPage/SolutionsShowcase';
import SolwayRecruitment from '../components/LandingPage/SolwayRecruitment';
import InnovationOptions from '../components/LandingPage/InnovationOptions';

function LandingPage() {
  return (
    <>

    <ActivityShowcase />
    <InnovationOptions />
    <SolutionsShowcase />
    <ClientPartners />
    <SolwayRecruitment />
  </>
    
  );
}

export default LandingPage;