export default function GoogelMapSec() {
  return (
    <section className="googel-map-sec space-bottom">
      <h2>googel map</h2>
      <div className="carousel-container">
        <div className="googel-map" data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
          <iframe src={"https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"} />
        </div>
      </div>
    </section>
  );
}
