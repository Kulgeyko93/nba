import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { logoTeams } from '../../../mockData/teams';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Pagination } from 'swiper/core';
import { routes } from '../../../constants/routes';

// install Swiper modules
SwiperCore.use([Pagination]);

// spaceBetween={50}
// slidesPerView={3}
// navigation
// pagination={{ clickable: true }}
// scrollbar={{ draggable: true }}

export const SubHeader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Swiper
        initialSlide={Math.round(Math.random() * logoTeams.length)}
        slidesPerView={10}
        loop={true}
        spaceBetween={2}
        className="mySwiper"
      >
        {logoTeams.map((logo, index) => (
          <SwiperSlide key={index}>
            <NavLink to={`${routes.TEAM_PAGE}/${logo.alt}`}>
              <Avatar src={logo.img} alt={logo.alt} />
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
