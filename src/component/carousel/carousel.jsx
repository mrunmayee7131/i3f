import React from 'react';
import { Link } from 'react-router-dom';
import Training from '../components/assets/Animation - 1712353973184.gif';
import IMG1 from '../carousel/assets/cisco.webp';
import IMG2 from '../carousel/assets/Dhruv.webp';

function Carousel() {
  const data = [
    {
      IMGUrl: IMG1,
      Details:
        'The online CIC meeting of COHORT-6 startups was held on 6th February 2024. All the13 startups presented their last 3 months progress report along with the financial details of the company. Based on their progress and revenue, the committee recommended 9 startups for the final funding.',
    },
    {
      IMGUrl: IMG2,
      Details:
        'The virtually 2nd RIC meeting of COHORT-6 startups was organized on 23rd January 2024. The startups presented their progress that they had done after 1st RIC. The committee members examined their progress and based on that they shortlisted 13 startups for CIC. The progress review meeting of 4 startups of previous COHORTs was also organized.',
    },
    {
      IMGUrl: IMG1,
      Details:
        'It is a great pleasure to inform that RKVY-RAFTAAR Agribusiness Incubator, IIT BHU, Varanasi is launching the virtual Agripreneurship Orientation Program (AOP) from Monday, 4th December, 2023 to Friday, 12th January, 2024 for the shortlisted startups of COHORT-6. ',
    },
  ];

  let columnCount = 3; // Default column count
  let singleCard = false;
  let cardHeight = 'h-600';
  let imgHeight = 'h-350';

  if (data.length === 1 || data.length === 2) {
    columnCount = data.length;
    cardHeight = 'h-900';
    imgHeight = 'h-450';
  }

  if (data.length === 1) {
    singleCard = true;
  } else if (data.length === 2) {
    columnCount = 2;
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="xl:container m-auto px-6 text-gray-600 xl:px-1">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-fuchsia-800">Current Happenings</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-[25px]">
          {data.map((element, index) => (
            <div key={index} className="p-4 md:h-[500px] md:p-6 bg-white dark:border-gray-700 dark:bg-white-200 w-full md:w-[calc(50%-20px)] lg:w-[350px] xl:w-[350px]  shadow-md mb-8 md:mb-0">
              <div className="relative overflow-hidden flex justify-center">
                <img src={Training} alt="Training" height={200} />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-md font-light text-gray-500 dark:gray-800 pb-8 text-center">{element.Details}</h3>
              </div>
              <div className="flex justify-center">
                <button className="bg-gray-800 w-[150px] h-[40px] rounded-md">
                  <Link className="text-lg font-medium text-white" target="_parent" to="/Blog">
                    Read more
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
