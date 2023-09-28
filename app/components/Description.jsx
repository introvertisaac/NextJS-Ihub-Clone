import React from 'react';

const Description = () => {
  return (
    <div >
      <p className='text-gray-800 text-sm font-medium'>Job Description: We seek a Django development intern to join our dynamic development team. As a Python Developer, you will be responsible for developing and maintaining robust, scalable, and secure web applications using Django framework and deploying them on GCP infrastructure. You will work closely with cross-functional teams, including product managers, designers, and other developers, to deliver high-quality software solutions.</p>

      <ol className='flex flex-col list-decimal list-inside list'>
        <h3 className='py-3 text-sm font-semibold '>Requirements</h3>
        <li className='px-3 text-sm font-light pb-1 text-gray-800'>Knowledge in Python frameworks like Django</li>
        <li className='px-3 text-sm font-light pb-1 text-gray-800'>Ability to quickly adapt and learn new technologies</li>
        <li className='px-3 text-sm font-light pb-1 text-gray-800'>Qualification: Graduation/ Post Graduation/ Diploma</li>
      </ol>

      <ol className='flex flex-col list-decimal list-inside list'>
        <h3 className='py-3 text-sm font-semibold '>Required Skills</h3>
        <li className='px-3 text-sm font-light pb-1 text-gray-800'>HTML, CSS, JavaScript</li>
        <li className='px-3 text-sm font-light pb-1 text-gray-800'>RDMS</li>
        <li className='px-3 text-sm font-light pb-1 text-gray-800'>Python Basic to Advanced, Django Framework</li>
        <li className='px-3 text-sm font-light pb-1 text-gray-800'>API's</li>
        <li className='px-3 text-sm font-light pb-1 text-gray-800'>Live Projects</li>
      </ol>

      <ol className='flex flex-col list-inside'>
        <h3 className='py-3 font-semibold '>How to Apply</h3>
        <li className='px-3 text-sm font-light pb-1 text-gray-800'>hello@certeon.technology</li>
      </ol>
    </div>
  );
};

export default Description;
