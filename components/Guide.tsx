import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col py-12 lg:py-16">
      {/* Research Introduction */}
      <div className="padding-container max-container w-full text-center pb-12 lg:pb-16">
        <p className="uppercase text-green-50 mb-2 text-xl lg:text-2xl">
          Our Research Focus
        </p>
        <h2 className="bold-32 lg:bold-48 xl:max-w-[700px] mx-auto">
          Advancing Soil and Rock Research for a Sustainable Future
        </h2>
        <p className="regular-16 text-gray-30 mt-4 xl:max-w-[800px] mx-auto">
          Our mission is to drive forward the understanding of soil and rock sciences. 
          From soil health and nutrient mapping to rock formation analysis, we are dedicated 
          to uncovering the secrets beneath the Earth's surface. Join us in our quest for 
          knowledge and contribute to impactful research that shapes our world.
        </p>
      </div>

      {/* Media Section */}
      <div className="relative max-container w-full">
        {/* Scrollable Image Section */}
        <div className="overflow-x-auto whitespace-nowrap pb-4">
          <div className="inline-block w-full min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px]">
            <Image 
              src="/soil-mustang.jpg" 
              alt="rock formation 1"
              width={600} 
              height={450} 
              className="w-full object-cover rounded-xl"
            />
            <p className="mt-4 text-center text-gray-600">Rock Formation Analysis 1</p>
          </div>
          <div className="inline-block w-full min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px]">
            <Image 
              src="/upper-mustang.jpg" // Replace with your second rock formation image
              alt="rock formation 2"
              width={600} // Reduced width
              height={450} // Reduced height
              className="w-full object-cover rounded-xl"
            />
            <p className="mt-4 text-center text-gray-600">Rock Formation Analysis 2</p>
          </div>
        </div>

        {/* Scrollable Video Section */}
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="inline-block w-full min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px]">
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl">
              <video 
                src="/video-2.mp4" // Replace with your local video file path
                title="Research Video 1"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                controls
              />
            </div>
            <p className="mt-4 text-center text-gray-600">Video Overview 1</p>
          </div>
          <div className="inline-block w-full min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px]">
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl">
              <video 
                src="/video-1.mp4" // Replace with your second local video file path
                title="Research Video 2"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                controls
              />
            </div>
            <p className="mt-4 text-center text-gray-600">Video Overview 2</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
