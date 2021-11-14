import React from 'react';
import FirstBanner from '../../components/BannerList/FirstBanner/FirstBanner';
import { Team } from '../Team/Team';
import { LandingPageWrapper } from './LandingStyle';

const Landing = () => {
  return (
    <LandingPageWrapper>
      {/* <FirstBanner /> */}
      <Team />
    </LandingPageWrapper>
    
  )
}

export default Landing;