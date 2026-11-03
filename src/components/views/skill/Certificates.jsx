import Slider from 'react-slick';
import Image from '@/components/elements/Image';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 960, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const Certificates = ({ certificates }) => {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section className="p-6">
      <Slider {...settings}>
        {certificates.map((certificate, index) => (
          <div key={certificate.id} className="p-2">
            <Image
              rounded="rounded-md bg-container"
              alt={certificate.name}
              width={1000}
              height={750}
              src={certificate.image_url}
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Certificates;
