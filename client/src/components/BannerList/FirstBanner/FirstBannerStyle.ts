import styled from "styled-components";
import { stylesConstants } from "../../../constants/styles/styles";
import firstImage from './../../../assets/landing-page.jpg';

export const FirstBannerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 2000px;
  color: red;
  background: url('${firstImage}');
  background-size: cover;
`;
// height: calc(100vh);
