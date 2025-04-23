import Hero from '../components/LandingPage/Hero';
import ActivityShowcase from '../components/LandingPage/ActivityShowcase';
import ClientPartners from '../components/LandingPage/ClientPartners';
import SolutionsShowcase from '../components/LandingPage/SolutionsShowcase';
import SolwayRecruitment from '../components/LandingPage/SolwayRecruitment';
import InnovationOptions from '../components/LandingPage/InnovationOptions';

function LandingPage() {
  return (
    <>
    <Hero/>
    <ActivityShowcase />
    <InnovationOptions />
    <SolutionsShowcase />
    <ClientPartners />
    <SolwayRecruitment />
  </>
    
  );
}

export default LandingPage;