import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface OurMissionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const OurMissionSite = ({ backgroundImage, title, subtitle, peopleJoined }: OurMissionProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-white p-4">
            <Image
              src="/rock.png" // Updated icon related to soil research
              alt="soil research"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image 
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const OurMission = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        {/* Rock Research */}
        <OurMissionSite
          backgroundImage="bg-bg-rock-research-1"
          title="Rock Formation Analysis"
          subtitle="Mountainous Regions"
          peopleJoined="10+ Geologists Involved"
        />
        <OurMissionSite 
          backgroundImage="bg-bg-soil-research-2"
          title="Soil Nutrient Mapping"
          subtitle="Global Agricultural Fields"
          peopleJoined="20+ Scientists Involved"
        />

      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Facing Challenges</strong> In Soil Sustainability?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Our mission is to combat soil degradation and ensure sustainable agricultural practices. From soil nutrient mapping to erosion control, we're here to support global efforts in maintaining healthy soils.
          </p>
          {/* <Image 
            src="/soil-quote.svg" // Updated image related to soil research
            alt="soil research"
            width={186}
            height={219}
            className="ourmission-quote"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
