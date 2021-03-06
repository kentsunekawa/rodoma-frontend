import { css } from 'styled-components';
import { mq } from 'components/style/AppTheme';

export const base = css`
  & > .wrapper {
    & > .inner {
      & > .main {
        width: 100%;
        display: flex;
        padding: 20px 0;
        & > .nameArea {
          width: 40%;
          padding: 0 10px 0 20px;
          border-right: 1px solid #fff;
          & > .nameList {
            & > .item {
              display: flex;
              align-content: center;
              align-items: center;
              height: 48px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
              &:last-child {
                border: none;
              }
              & > .button {
                font-size: 1.4rem;
                line-height: 1.4em;
                color: #fff;
                text-align: left;
                display: flex;
                align-content: center;
                align-items: center;
                width: 100%;
                height: 2.8em;
                padding: 0;
                span {
                  display: -webkit-box;
                  overflow: hidden;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                }
              }
              & > .alert {
                display: block;
                width: 100%;
                padding: 0.2em 0;
              }
              & > .CircleButton {
                margin: 0 auto;
              }
            }
          }
        }
        & > .barArea {
          width: 60%;
          overflow-x: scroll;
          padding-left: 10px;
          & > .bar {
            position: relative;
            transition: width 0.5s ease-in-out, padding-right 0.5s ease-in-out;
            & > .list {
              position: relative;
              z-index: 1;
              width: 100%;
              & > .item {
                display: flex;
                width: 100%;
                align-content: center;
                align-items: center;
                height: 48px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                &:last-child {
                  border: none;
                }
                & > .Bar {
                  width: 100%;
                }
              }
            }
            & > .lines {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              z-index: 0;
              span {
                position: absolute;
                display: block;
                width: 1px;
                height: 100%;
                top: 0;
                background: rgba(225, 225, 225, 0.4);
                &:nth-child(1) {
                  left: 10%;
                }
                &:nth-child(2) {
                  left: 20%;
                }
                &:nth-child(3) {
                  left: 30%;
                }
                &:nth-child(4) {
                  left: 40%;
                }
                &:nth-child(5) {
                  left: 50%;
                }
                &:nth-child(6) {
                  left: 60%;
                }
                &:nth-child(7) {
                  left: 70%;
                }
                &:nth-child(8) {
                  left: 80%;
                }
                &:nth-child(9) {
                  left: 90%;
                }
              }
            }
          }
        }
      }
    }
  }
  @media ${mq.tbMin_gt} {
    & > .wrapper {
      & > .inner {
        & > .main {
          padding: 32px 0;
          & > .nameArea {
            padding: 0 16px 0 32px;
          }
          & > .barArea {
            padding-left: 16px;
          }
        }
      }
    }
  }
`;

export const fixed = css`
  & > .wrapper {
    & > .inner {
      & > .main {
        & > .barArea {
          padding-right: 20px;
          & > .bar {
            width: 100%;
          }
        }
      }
    }
  }
  @media ${mq.tbMin_gt} {
    & > .wrapper {
      & > .inner {
        & > .main {
          & > .barArea {
            padding-right: 32px;
          }
        }
      }
    }
  }
`;

export const over = css`
  & > .wrapper {
    & > .inner {
      & > .main {
        & > .barArea {
          & > .bar {
            width: 300%;
            padding-right: 20px;
          }
        }
      }
    }
  }
  @media ${mq.tbMin_gt} {
    & > .wrapper {
      & > .inner {
        & > .main {
          & > .barArea {
            & > .bar {
              padding-right: 32px;
            }
          }
        }
      }
    }
  }
`;
