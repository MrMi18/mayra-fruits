import Button from '../common/Button';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              🍊 Premium Nagpur Oranges from Warud
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Export Quality Oranges From The Heart of India
            </h1>
            <p className="text-lg md:text-xl text-orange-100">
              We supply premium Nagpur oranges to global markets. Trusted by businesses worldwide for quality, freshness, and reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                Get Quote <FaArrowRight />
              </Button>
              <Button variant="secondary">
                Our Products
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">15+</div>
                <div className="text-orange-100 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-orange-100 text-sm">Export Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-orange-100 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Image - Placeholder */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-96 flex items-center justify-center">
              {/* <div className="text-center"> */}
                {/* <div className="text-8xl mb-4">🍊</div>
                <p className="text-lg">[Your Orange Farm Image Here]</p> */}
                 <img className='w-[90%]' src="https://tajfruitsco.com/assets/images/gellery/3.jpg" alt="" />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Wave Shape Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
