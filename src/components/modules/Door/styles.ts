import { css } from 'styled-components';
import { Gradient, LogoDraw } from 'components/style/Mixins';

export const base = css`
  /* position: fixed;
  left: 0;
  top: 0;
  z-index: 300; */
  width: 100%;
  height: 100%;
  ${Gradient}
  & > .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    svg {
      fill: none;
      stroke: #fff;
      stroke-width: 2px;
      stroke-dasharray: 317;
      animation: ${LogoDraw} 3s linear infinite;
    }
  }
`;
