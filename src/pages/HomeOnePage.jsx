import useOnePage from '../hooks/useOnePage';
import MainSec from '../sections/home/MainSec';
import BrandSec from '../sections/shared/BrandSec';
import AboutUsSec from '../sections/home/AboutUsSec';
import HomeServiceSec from '../sections/home/HomeServiceSec';
import ChooseUsSec from '../sections/home/ChooseUsSec';
import HomeServiceSec2 from '../sections/home/HomeServiceSec2';
import ProjectSec from '../sections/home/ProjectSec';
import HomeTeamSec from '../sections/home/HomeTeamSec';
import MainSec2 from '../sections/home/MainSec2';
import TestimonialSec from '../sections/home/TestimonialSec';
import HomeBlogSec from '../sections/home/HomeBlogSec';

export default function HomeOnePage() {
  useOnePage();
  return (
    <>
      <MainSec />
      <BrandSec />
      <AboutUsSec id="About" />
      <HomeServiceSec />
      <ChooseUsSec className="choose-us-sec space-top" />
      <HomeServiceSec2 className="service-sec2 space-top" id="Solutions" />
      <ProjectSec className="project-sec space" id="Works" />
      <HomeTeamSec />
      <MainSec2 id="Pricing" />
      <TestimonialSec className="testimonial-sec space-top" />
      <HomeBlogSec className="blog-sec space" id="Resources" />
    </>
  );
}
