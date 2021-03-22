import React from 'react';
import NavMenu from './components/NavMenu'
import Photo from './components/Photo';
import Skills from './components/Skills';
import Pitch from './components/Pitch';
import Testimonies from './components/Testimonies';
import { OuterWrapper, NavMenuWrapper, FaceWrapper, SkillsWrapper, PitchWrapper, TestimonyWrapper } from './HomeScreen.styled';
import ProfileImage from './assets/images/profile-image.jpg'

// todo: move literals to constants

function HomeScreen() {
  return (
    <OuterWrapper>
      <NavMenuWrapper>
        <NavMenu />
      </NavMenuWrapper>
      <FaceWrapper>
        <Photo image={ProfileImage} alt="photo" height={240} />
      </FaceWrapper>
      <PitchWrapper>
        <Pitch text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
      </PitchWrapper>
      <SkillsWrapper>
        <Skills />
      </SkillsWrapper>
      <TestimonyWrapper>
        <Testimonies />
      </TestimonyWrapper>
    </OuterWrapper>
  );
}

export default HomeScreen;
