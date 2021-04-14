import React, { useState, useEffect, useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';

import { RELEASE_STATUS } from 'utils';

import UserSearch from 'components/blocks/UserSearch';
import Paragraph from 'components/elements/Paragraph';
import RoundButton from 'components/elements/buttons/RoundButton';
import CheckBox from 'components/blocks/CheckList/CheckBox';

import { PostEditContext } from '../../';
import * as styles from './styles';
import { UserData_overview } from 'types';

// component root class name
const CLASSNAME = 'Release';

// declare types

interface ComponentProps {
  className?: string;
  deside: (
    releaseStatus: keyof typeof RELEASE_STATUS,
    allowedUsers: UserData_overview[]
  ) => void;
}

interface Props extends ComponentProps {
  isLimited: boolean;
  followings: UserData_overview[];
  allowedUsers: UserData_overview[];
  maxLength: number;
  selectUser: (allowedUsers: UserData_overview[]) => void;
  deside: () => void;
  toggleIsLimited: (valud: number | string) => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className='row'>
      <Paragraph>公開しますか？</Paragraph>
    </div>
    <div className='row'>
      <CheckBox
        types={['outline']}
        isChecked={props.isLimited}
        value={2}
        label='限定公開する'
        onChange={props.toggleIsLimited}
      />
    </div>
    {
      props.isLimited && (
        <>
          <div className='row'>
            <UserSearch
              maxLength={5}
              users={props.followings!}
              selectedUsers={props.allowedUsers}
              onChange={props.selectUser}
              className='userSearch'
            />
          </div>
        </>
      )
    }
    <div className='row'>
      <RoundButton
        disabled={props.isLimited && props.allowedUsers.length < 1}
        onClick={props.deside}
        types={['l', 'gradient']}
      >
        公開する
      </RoundButton>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const maxLength = 5;
  const { state, contextDispatch } = useContext(PostEditContext);

  const [isLimited, setIsLimited] = useState<boolean>(false);
  const [allowedUsers, setAllowedUsers] = useState<UserData_overview[]>([]);

  const toggleIsLimited = (value: number | string) => {
    if(isLimited) setAllowedUsers([]);
    setIsLimited(isLimited ? false : true);
  }

  const deside = () => {
    const releaseStatus = isLimited ? 2 : 1;
    componentProps.deside(releaseStatus, allowedUsers);
  }

  const selectUser = (allowedUsers: UserData_overview[]) => {
    setAllowedUsers(allowedUsers);
  }

  useEffect(() => {
    setIsLimited(state.post!.release_status === 2);
    setAllowedUsers(state.post!.allowedUsers);
  }, []);

  const props = { isLimited, allowedUsers, followings: state.followings!, maxLength, toggleIsLimited, deside, selectUser };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;