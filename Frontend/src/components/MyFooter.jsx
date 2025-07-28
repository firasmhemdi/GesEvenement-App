import React from 'react';
import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const MyFooter = () => {
  const accounts = [
   
    {
      name: "Firas Mhemdi",
      github: "https://github.com/firasmhemdi",
      linkedin: "https://www.linkedin.com/in/firas-mhemdi-730260255/"
    },
  ];

  return (
    <Footer bgDark className="mt-20 rounded-tl-md">
      <div className="w-full px-4 lg:px-24">
        <div className="w-full bg-blue-300 px-4 py-2 sm:flex sm:items-center sm:justify-between left-0">
          <Footer.Copyright href="#" by="Online Events™ " year={2024} />
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-6 sm:mt-0 sm:justify-center">
            {accounts.map((account, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Icônes en ligne */}
                <div className="flex space-x-4">
                  {/* Icône GitHub */}
                  <a
                    href={account.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    <BsGithub className="h-6 w-6" />
                  </a>
                  {/* Icône LinkedIn */}
                  <a
                    href={account.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition"
                  >
                    <BsLinkedin className="h-6 w-6" />
                  </a>
                </div>
                {/* Nom du compte */}
                <p className="text-sm text-gray-300 mt-2">{account.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
