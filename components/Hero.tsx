import Image from 'next/image';
import Button from './Button';

const AboutUs = () => {
  return (
    <section className="relative w-full max-w-full flex flex-col lg:flex-row py-10 pb-32 md:gap-28 lg:py-20 bg-cover bg-center" style={{ backgroundImage: "url('/Mustang.webp')" }}>
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      
      {/* Introduction and Research Highlights */}
      <div className="relative z-20 flex flex-col lg:flex-row w-full lg:w-auto px-4 lg:px-8 py-8 lg:py-12 rounded-xl mx-4 lg:mx-8">
        {/* Introduction */}
        <div className="flex flex-col lg:w-1/2 px-4 lg:px-8 py-8">
          <h1 className="bold-52 lg:bold-88 text-gray-900">About Our Soil Research</h1>
          <p className="regular-16 mt-6 text-gray-100 xl:max-w-[520px]">
            At our organization, we are dedicated to advancing the science of soil research to improve agricultural practices and environmental sustainability. Our team of experts conducts cutting-edge research to better understand soil properties and promote healthy ecosystems.
          </p>

          <div className="my-11 flex flex-wrap gap-5">
            {/* <div className="flex items-center gap-2">
              {Array(5).fill(1).map((_, index) => (
                <Image src="/star.svg" key={index} alt="star" width={24} height={24} />
              ))}
            </div>

            <p className="bold-16 lg:bold-20 text-blue-70">
              120k
              <span className="regular-16 lg:regular-20 ml-1">Successful Projects</span>
            </p> */}
          </div>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" title="Learn More" variant="btn_green" href="#" />
            <Button type="button" title="Contact Us" variant="btn_green" href="#" />
          </div>
        </div>

        {/* Research Highlights */}
        <div className="flex flex-col lg:w-1/2 px-4 lg:px-8 py-8">
          <div className="relative flex flex-col gap-8 bg-white bg-opacity-80 rounded-xl p-8 z-20">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="regular-16 text-gray-700">Research Focus</p>
                {/* Optional: You can add an icon here if needed */}
                {/* <Image src="/research.svg" alt="research focus" width={24} height={24} /> */}
              </div>
              <p className="bold-20 text-gray-900">Soil Health & Fertility</p>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col bg-gray-100 p-4 rounded-lg">
                <p className="regular-16 block text-gray-600">Key Findings</p>
                <p className="bold-20 text-gray-900">Nutrient Optimization</p>
              </div>
              <div className="flex flex-col bg-gray-100 p-4 rounded-lg">
                <p className="regular-16 block text-gray-600">Ongoing Projects</p>
                <p className="bold-20 text-gray-900">Sustainable Agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
