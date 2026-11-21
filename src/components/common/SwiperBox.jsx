import { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import swiperConfigs from '../../data/swiperConfigs';

// <div class="swiper ..."> that initialises Swiper with the matching config
// (brand | project | testi) and cleans up when the page unmounts.
export default function SwiperBox({ swiperName, children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(ref.current, swiperConfigs[swiperName]);
    return () => swiper.destroy(true, true);
  }, [swiperName]);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}
