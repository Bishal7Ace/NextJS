import { PAST_WORK } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden py-24 shadow-lg">
      <div className="max-container padding-container relative w-full">
        <div className="z-20 flex flex-col w-full">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold lg:text-6xl text-gray-800">Past Work</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our significant contributions and research findings in soil and rock sciences.
            </p>
          </div>
          <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PAST_WORK.map((work) => (
              <FeatureItem 
                key={work.title}
                title={work.title} 
                icon={work.icon}
                description={work.description}
                link={work.link} // Pass link prop
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
  link: string; // Add link prop
}

const FeatureItem = ({ title, icon, description, link }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105">
      <Link href={link} className="flex flex-col items-start no-underline">
        <div className="flex items-center justify-center h-16 w-16 bg-green-100 rounded-full mb-4">
          <Image src={icon} alt={title} width={40} height={40} />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 capitalize">
          {title}
        </h3>
        <p className="mt-3 text-gray-700">
          {description}
        </p>
      </Link>
    </li>
  )
}

export default Features
