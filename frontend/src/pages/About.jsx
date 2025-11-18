import AboutHero from '../components/about/AboutHero';
import CompanyStory from '../components/about/CompanyStory';
import MissionVision from '../components/about/MissionVision';
import Timeline from '../components/about/Timeline';
import CoreValues from '../components/about/CoreValues';
import Certifications from '../components/about/Certifications';
import CTA from '../components/home/CTA';

const About = () => {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <Timeline />
      <CoreValues />
      <Certifications />
      <CTA />
    </>
  );
};

export default About;
