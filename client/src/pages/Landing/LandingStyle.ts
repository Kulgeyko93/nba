import styled from "styled-components";
import { stylesConstants } from "../../constants/styles/styles";

export const LandingPageWrapper = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  height: calc(100 - ${stylesConstants.headerHeight}px);
`