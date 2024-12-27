import React, { useEffect } from 'react';
import { FaCogs, FaDigitalTachograph } from 'react-icons/fa';
import { LuSettings } from 'react-icons/lu';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    icon: <FaCogs className='text-4xl text-blue-500 mr-4 h-24 w-20' />,
    title: 'IT Solutions',
    description:
      'CodeThinker is your ultimate partner in navigating the complexities of IT challenges. This feature is designed to offer tailored solutions,',
    link: '#0',
  },
  {
    icon: (
      <FaDigitalTachograph className='text-4xl text-blue-500 mr-4 h-24 w-20' />
    ),
    title: 'Digital Solutions',
    description:
      'CodeThinker is your gateway to innovative digital solutions that drive progress and efficiency in a rapidly evolving technological.',
    link: '#0',
  },
];

const ServicesCategory = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className='services-category-area pt-16 font-ui-sans-serif '>
      <div className='container mx-auto px-6 md:px-6 '>
        <div className='flex flex-wrap'>
          <div className='w-full'>
            <div className='section-title text-center mb-8'>
              <h6 className='text-black text-lg'>Our Core Services</h6>
              <h2 className='text-3xl text-black font-bold  mt-2'>
                Explore IT Solutions
              </h2>
            </div>
          </div>
        </div>
        <div
          className='flex space-x-3 md:flex-nowrap flex-wrap items-center'
          data-aos='fade-right'
        >
          {services.map((service, index) => (
            <div key={index} className='w-full lg:w-1/2 md:w-full mb-8 '>
              <a
                href={service.link}
                className='block p-6 border border-[#008bd0] rounded-lg hover:shadow-lg  transition duration-300  '
              >
                <div className='flex items-center gap-5'>
                  <LuSettings className='text-8xl text-[#008bd0]' />
                  <div className='services-single-category-info'>
                    <h3 className='text-2xl font-semibold text-white'>
                      {service.title}
                    </h3>
                    <p className='mt-2 text-gray-600'>{service.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCategory;
