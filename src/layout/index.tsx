import React from 'react';
import { Link } from 'react-router';
import { useRoutes } from 'react-router';
import { routes } from '@/route';
import TimelineComponent from '@/components/time-component';

const Layout: React.FC = () => {
  const element = useRoutes(routes);
  return (
    <div className="w-full h-full bg-[#001620] flex flex-col overflow-hidden text-[#63ECFF]">
      <header
        className="flex justify-between items-center bg-gray-100 h-[110px] bg-contain px-16 py-10"
        style={{ backgroundImage: 'url("/images/header-bg.svg")' }}
      >
        <TimelineComponent></TimelineComponent>
        <div className="flex items-center gap-4 font-bold text-[#63ECFF] text-[40px] mt-[-16px]">
          {/* <Link className="text-white-700" to={'/home'}>
            Home
          </Link>
          <Link className="text-white-700" to={'/about'}>
            About
          </Link> */}
          AI焊接实践教学平台
        </div>
        <div className="flex-1 text-[13px] font-[400] flex items-center h-full mt-[-1%]">
          <div className="ml-[75%] text-nowrap cursor-pointer">您好，Admin</div>
          <div className="ml-[12%] text-nowrap cursor-pointer">退出</div>
        </div>
      </header>
      <main className="flex-1">{element}</main>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
