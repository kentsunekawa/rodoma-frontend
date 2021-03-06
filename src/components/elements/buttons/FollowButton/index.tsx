import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Styled from 'styled-components';

import { RESPONSE_MESSAGES } from 'utils/messages';
import User from 'utils/request/User';
import { setMessage } from 'state/modules/app';
import { userSelector } from 'state/modules/user';

import CircleButton from 'components/elements/buttons/CircleButton';
import { IconFollow, IconDisFollow, IconLoading } from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'FollowButton';

// declare types

interface ComponentProps {
  targetUserId: number;
  className?: string;
}

interface Props extends ComponentProps {
  localRelationId: number | null;
  isLoading: boolean;
  toggleFollow: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {props.localRelationId ? (
      <CircleButton
        types={['l', 'gradient_midiumGray']}
        onClick={props.toggleFollow}
        disabled={props.isLoading}
      >
        {props.isLoading ? <IconLoading /> : <IconDisFollow />}
      </CircleButton>
    ) : (
      <CircleButton
        types={['l', 'gradient']}
        onClick={props.toggleFollow}
        disabled={props.isLoading}
      >
        {props.isLoading ? <IconLoading /> : <IconFollow />}
      </CircleButton>
    )}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { targetUserId } = componentProps;

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [localRelationId, setLocalRelationId] = useState<number | null>(null);
  const user = useSelector(userSelector);

  const putRelation = async (userId: number) => {
    try {
      const result = await User.putRelation(userId, targetUserId);
      if (result.data?.relation) {
        setLocalRelationId(result.data?.relation.id);
        dispatch(
          setMessage({
            isShow: true,
            type: 'success',
            message: RESPONSE_MESSAGES.success_follow,
          })
        );
      } else {
        setLocalRelationId(null);
        dispatch(
          setMessage({
            isShow: true,
            type: 'success',
            message: RESPONSE_MESSAGES.success_unfollow,
          })
        );
      }
      setIsLoading(false);
    } catch (error) {
      dispatch(
        setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.error,
        })
      );
    }
  };

  const getRelationId = useCallback(async () => {
    if (user) {
      try {
        const result = await User.getRelation(user.id, targetUserId);
        if (result.data?.relation) {
          setLocalRelationId(result.data?.relation.id);
        } else {
          setLocalRelationId(null);
        }
        setIsLoading(false);
      } catch (error) {
        dispatch(
          setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.error,
          })
        );
      }
    }
  }, [targetUserId, user, dispatch]);

  const toggleFollow = () => {
    if (!isLoading) {
      setIsLoading(true);
      if (user) {
        putRelation(user.id);
      }
    }
  };

  useEffect(() => {
    getRelationId();
  }, [getRelationId]);

  const props = { localRelationId, isLoading, toggleFollow };

  return user && user.id !== targetUserId ? (
    <StyeldComponent {...componentProps} {...props}></StyeldComponent>
  ) : null;
};
export default Container;
