import AboutPageBanner from '../sections/about/AboutPageBanner';
import AboutUsSec2 from '../sections/about/AboutUsSec2';
import AboutServiceSec from '../sections/about/AboutServiceSec';
import FunfactSec from '../sections/about/FunfactSec';
import AboutTeamSec from '../sections/about/AboutTeamSec';
import BrandSec from '../sections/shared/BrandSec';

export default function About() {
  return (
    <>
      <AboutPageBanner />
      <AboutUsSec2 />
      <AboutServiceSec />
      <FunfactSec />
      <AboutTeamSec />
      <BrandSec className="brand-sec v2 space-bottom" />
    </>
  );
}
