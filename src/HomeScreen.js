import React from 'react';
import NavMenu from './components/NavMenu'
import Photo from './components/Photo';
import { OuterWrapper, NavMenuWrapper, FaceWrapper } from './HomeScreen.styled';
import ProfileImage from './assets/images/profile-image.jpg'


function HomeScreen() {
  return (
    <OuterWrapper>
      <NavMenuWrapper>
        <NavMenu />
      </NavMenuWrapper>
      <FaceWrapper>
        <Photo image={ProfileImage} alt="photo" height={300} />
      </FaceWrapper>
    </OuterWrapper>
  );
}

export default HomeScreen;
