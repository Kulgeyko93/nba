import React, { useState } from 'react'
import { stylesConstants } from '../../../constants/styles/styles';
import { FirstBannerWrapper } from './FirstBannerStyle';

const FirstBanner = () => {
  const [opacity, setOpacity] = useState<number>(1);

  const handlerScrollValue = (e: any) => {
    // console.log(e);
    const valueScroll = window.scrollY;

    if (valueScroll <= stylesConstants.headerHeight) {
      console.log('stylesConstants.headerHeight', stylesConstants.headerHeight)
      console.log('scroll', window.scrollY)
      const value = (stylesConstants.headerHeight - valueScroll) / stylesConstants.headerHeight;
      setOpacity(value)
    } else {
      setOpacity(0)
    }

  }
  // console.log(scroll)
  React.useEffect(() => {
    window.addEventListener("scroll", handlerScrollValue);
    return () => window.removeEventListener("scroll", handlerScrollValue);
  }, []);

  return (
    <div style={{opacity: opacity}}>
      <FirstBannerWrapper>
        <div>
          <div>
            Miami heat
          </div>
          <div>
            logo
          </div>
        </div>
      </FirstBannerWrapper>
    </div>

  )
}

export default FirstBanner
