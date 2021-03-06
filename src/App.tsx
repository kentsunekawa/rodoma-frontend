import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import GuestRoute from 'pages/GuestRoute';
import MemberRoute from './pages/MemberRoute';
import Auth from 'components/modules/Auth';
import Home from 'pages/Posts';
import Users from 'pages/Users';
import User from 'pages/Users/_id';
import UserEdit from 'pages/Users/Edit';
import About from 'pages/About';
import Intro from 'pages/Intro';
import SignInOrUp from 'pages/SignInOrUp';
import SignupComplete from 'pages/SignupComplete';
import EmailVerify from 'pages/EmailVerify';
import ForgetPass from 'pages/ForgetPass';
import ResetPass from 'pages/ResetPass';
import NotFound from 'pages/NotFound';
import Post from 'pages/Posts/_id';
import PostEdit from 'pages/Posts/_id/Edit';
import Modal from 'components/modules/Modal';
import { setIsDoorShow, requestCategoryTree, requestSnsList } from 'state/modules/app';
import { isInitCheckedSelector } from 'state/modules/user';
import Header from 'components/modules/Header';
import Menu from 'components/modules/Menu';
import SearchPanel from 'components/modules/SearchPanel';
import FixWindow from 'components/modules/FixWindow';
import Message from 'components/modules/Message';
import Door from 'components/modules/Door';
import Loading from 'components/modules/Loading';
import WelcomeModal from 'components/modules/WelcomeModal';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isInitChecked = useSelector(isInitCheckedSelector);
  const isInitRender = useRef<boolean>(false);

  useEffect(() => {
    if (isInitRender.current) {
      dispatch(setIsDoorShow(false));
      dispatch(requestCategoryTree());
      dispatch(requestSnsList());
    }
  }, [dispatch, isInitChecked]);

  useEffect(() => {
    isInitRender.current = true;
  }, []);

  return (
    <>
      <Auth>
        <Door />
        <Loading />
        <FixWindow>
          <Message />
          <Menu />
          <SearchPanel />
          <Header />
          <Modal modalName="signUpComplete" types={['light', 'wide']}>
            <WelcomeModal />
          </Modal>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/roadmaps" exact>
              <Redirect to="/" />
            </Route>

            <MemberRoute path="/roadmaps/:id/edit" to="/">
              <PostEdit />
            </MemberRoute>

            <MemberRoute path="/roadmaps/create" to="/signInOrUp">
              <PostEdit />
            </MemberRoute>

            <Route path="/roadmaps/:id">
              <Post />
            </Route>

            <MemberRoute path="/users/:id/edit" to="/">
              <UserEdit />
            </MemberRoute>

            <Route path="/users/:id" exact>
              <User />
            </Route>

            <Route path="/users" exact>
              <Users />
            </Route>

            <GuestRoute path="/intro" to="/">
              <Intro />
            </GuestRoute>

            <GuestRoute path="/signInOrUp" to="/">
              <SignInOrUp />
            </GuestRoute>

            <MemberRoute path="/signupComplete" to="/signInOrUp">
              <SignupComplete />
            </MemberRoute>

            <GuestRoute path="/forgetPass" to="/">
              <ForgetPass />
            </GuestRoute>

            <Route path="/emailVerify">
              <EmailVerify />
            </Route>

            <GuestRoute path="/resetPass" to="/signInOrUp">
              <ResetPass />
            </GuestRoute>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/notFound">
              <NotFound />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </FixWindow>
      </Auth>
    </>
  );
};

export default App;
