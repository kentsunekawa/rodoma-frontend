import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Wrapper } from 'stories/StyledElements';
import CircleButton from 'components/elements/buttons/CircleButton';
import RoundButton from 'components/elements/buttons/RoundButton';
import TextButton from 'components/elements/buttons/TextButton';
import { IconFollow, IconAdd, IconRight } from 'components/elements/icons';

export default {
  title: 'Elements/Buttons',
  component: CircleButton,
} as Meta;

const Component: React.FC = () => (
  <Wrapper>
    <div className="component">
      <p className="label">CircleButton</p>
      <div className="row">
        <div className="item">
          <CircleButton types={['gradient', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_dark', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_midium', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_light', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['primary', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['secondary', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['posi', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item -nega">
          <CircleButton types={['outline', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <CircleButton types={['gradient', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_dark', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_midium', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_light', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['primary', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['secondary', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['posi', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item -nega">
          <CircleButton types={['outline', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <CircleButton types={['gradient', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_dark', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_midium', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_light', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['primary', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['secondary', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['posi', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item -nega">
          <CircleButton types={['outline', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <CircleButton types={['gradient', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_dark', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_midium', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_light', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['primary', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['secondary', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['posi', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item -nega">
          <CircleButton types={['outline', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <CircleButton types={['gradient', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_dark', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_midium', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_light', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['primary', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['secondary', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['posi', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item -nega">
          <CircleButton types={['outline', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
      </div>
    </div>
    <div className="component">
      <p className="label">RoundButton</p>
      <div className="row">
        <div className="item">
          <RoundButton types={['gradient', 'l']}>??????????????????</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_dark', 'l']}>??????????????????</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_midium', 'l']}>??????????????????</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_light', 'l']}>??????????????????</RoundButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <RoundButton types={['gradient', 'm']}>??????????????????</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_dark', 'm']}>??????????????????</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_midium', 'm']}>??????????????????</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_light', 'm']}>??????????????????</RoundButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <RoundButton types={['gradient', 's']}>??????????????????</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_dark', 's']}>??????????????????</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_midium', 's']}>??????????????????</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_light', 's']}>??????????????????</RoundButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <RoundButton types={['gradient', 'l']} disabled>
            ??????
          </RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gradient', 's', 'withIcon']} icon={<IconAdd />}>
            ???????????????
          </RoundButton>
        </div>
      </div>
    </div>
    <div className="component">
      <p className="label">TextButton</p>
      <div className="row">
        <div className="item">
          <TextButton>????????????????????????????????????</TextButton>
        </div>
        <div className="item">
          <TextButton types={['withIconRight']}>
            ?????????????????????
            <div className="icon">
              <IconRight />
            </div>
          </TextButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <TextButton types={['primary', 'l']}>?????????????????????</TextButton>
        </div>
        <div className="item">
          <TextButton types={['gray_midium', 'l']}>?????????????????????</TextButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <TextButton types={['primary', 'm']}>?????????????????????</TextButton>
        </div>
        <div className="item">
          <TextButton types={['gray_midium', 'm']}>?????????????????????</TextButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <TextButton types={['primary', 's']}>?????????????????????</TextButton>
        </div>
        <div className="item">
          <TextButton types={['gray_midium', 's']}>?????????????????????</TextButton>
        </div>
      </div>
    </div>
  </Wrapper>
);

export const All: Story = () => <Component />;
