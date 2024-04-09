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
        'Workshop to guide graduate from product MVP to business soft launch.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip lorem ipsum nisi ut.',
    },
    {
      IMGUrl: IMG2,
      Details:
        'Workshop to guide graduate from product MVP to business soft launch.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip lorem ipsum nisi ut.',
    },
    {
      IMGUrl: IMG1,
      Details:
        'Workshop to guide graduate from product MVP to business soft launch.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip lorem ipsum nisi ut.',
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
    <div className="py-12 bg-gray-200">
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
