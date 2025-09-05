import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js Image component
import ChangePassword from './ChangePassword'; // Import your ChangePassword component
import TermsAndConditions from './TermsAndConditions'; // Import your Terms and Conditions component
import PrivacyPolicy from './PrivacyPolicy'; // Import your Privacy Policy component
import DeleteAccount from '@/components/Modal/DeleteAccount'; // Import your Delete Account component
import Link from 'next/link';

const Settings = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Handler to change the active section
  const handleSectionsClick = (section) => {
    setActiveSection(section);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle section click
  const handleSectionClick = () => {
    setIsModalOpen(true); // Open modal
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='w-100 md:w-200 bg-white p-6 md:mt-2 rounded-lg'>
     
        <>
          <Link href='/profile/settings/change-password' className='flex ml-5 md:ml-0 w-80 md:w-200 items-center justify-between bg-[#FFF0E6] hover:bg-[#FFD0B0] py-2 px-5 my-2 rounded-lg' onClick={() => handleSectionsClick('changePassword')}>
            <div className='flex items-center gap-2'>
              <Image
                src="/changePass.png"
                width={18}
                height={18}
                sizes="100vw" alt=''
              />
              <p>Change Password </p>
            </div>
            <Image
              src="/rightArrow.png"
              width={5}
              height={5}
              sizes="100vw" alt=''
            />
          </Link>
          <Link href='/profile/settings/terms-condition' className='flex ml-5 md:ml-0 w-80 md:w-200 items-center justify-between bg-[#FFF0E6] hover:bg-[#FFD0B0] py-2 px-5 my-2 rounded-lg' onClick={() => handleSectionsClick('terms')}>
            <div className='flex items-center gap-2'>
              <Image
                src="/terms.png"
                width={18}
                height={18}
                sizes="100vw" alt=''
              />
              <p>Terms & Condition </p>
            </div>
            <Image
              src="/rightArrow.png"
              width={5}
              height={5}
              sizes="100vw" alt=''
            />
          </Link>
          <Link href='/profile/settings/privacy-policy'  className='flex ml-5 md:ml-0 w-80 md:w-200 items-center justify-between bg-[#FFF0E6] hover:bg-[#FFD0B0] py-2 px-5 my-2 rounded-lg' onClick={() => handleSectionsClick('privacy')}>
            <div className='flex items-center gap-2'>
              <Image
                src="/privacy.png"
                width={18}
                height={18}
                sizes="100vw" alt=''
              />
              <p>Privacy Policy </p>
            </div>
            <Image
              src="/rightArrow.png"
              width={5}
              height={5}
              sizes="100vw" alt=''
            />
          </Link>
          <div className='flex ml-5 md:ml-0 w-80 md:w-200 items-center justify-between bg-[#FFC4C4] hover:bg-[#f78f8f] py-2 px-5 my-2 rounded-lg' onClick={() => handleSectionClick()}>
            <div className='flex items-center gap-2'>
              <Image
                src="/delete.png"
                width={18}
                height={18}
                sizes="100vw" alt=''
              />
              <p>Delete Account </p>
            </div>
            <Image
              src="/rightArrow.png"
              width={5}
              height={5}
              sizes="100vw" alt=''
            />
          </div>
        </>
      
      <DeleteAccount isOpen={isModalOpen} close={handleCloseModal} />
    </div>
  );
};

export default Settings;
