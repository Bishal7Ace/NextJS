import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-granite-light text-black-700 py-12">
      <div className="max-container padding-container flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* Logo and Company Name */}
          <div className="flex items-center mb-10">
            <Link href="/" className="flex items-center">
              <Image src="/logo.jpg" alt="logo" width={74} height={29} />
            </Link>
            <div className="ml-4">
              <span className="text-2xl font-bold text-black-700">MADAM BAIRI</span>
              <div className="text-sm text-gray-600">Research Based Education</div>
            </div>
          </div>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((column) => (
              <FooterColumn title={column.title} key={column.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-600">
                  {column.links.map((link) => (
                    <Link href={link.href} key={link.label} className="transition-colors duration-300 hover:text-orange-500">
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <div key={link.label} className="flex gap-4 md:flex-col lg:flex-row transition-colors duration-300 hover:text-orange-500">
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-600">
                  {SOCIALS.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <Image src={link.icon} alt="social logo" width={24} height={24} className="transition-transform duration-300 hover:scale-110" />
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-200" />
        <p className="regular-14 w-full text-center text-gray-600">2023 Hilink | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 text-gray-800">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
