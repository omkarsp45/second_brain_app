import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Brainspace } from '../components/Brainspace';
import { BrandIcon } from '../../src/assets/icons/Icons';
import '../../styles/hamburger.css';

export function Dashboard(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [type, setType] = useState('all');

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-y-0 left-0 z-50 transform bg-white shadow-lg transition-transform duration-500 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-40'
          }`}
      >
        <Sidebar setType={setType} />
      </div>
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}

      <div className="md:w-44 lg:w-52 xl:w-72 2xl:w-80"></div>
      <div className="flex-1 bg-card-space overflow-auto">
        <div className='md:hidden'>
          <input
            type="checkbox"
            id="menu"
            checked={isSidebarOpen}
            onChange={toggleSidebar}
          />
          <label htmlFor="menu" className="icon">
            <div className="menu"></div>
          </label>
          <div
            className={`flex flex-row items-center justify-center h-16 text-md font-bold text-zinc-700 md:hidden cursor-pointer`}
            onClick={() => setType('all')}
          >
            <BrandIcon className={`aspect-square w-10`} />
            <span className="ml-5 text-2xl">Second Brain</span>
          </div>
        </div>
        <Brainspace share={props.share} type={type} />
      </div>
    </div>
  );
}
