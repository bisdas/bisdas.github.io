import React, { useState } from 'react';
import NavMenu from './components/NavMenu'
import Photo from './components/Photo';
import Skills from './components/Skills';
import Pitch from './components/Pitch';
import Testimonies from './components/Testimonies';
import ScrollUpNavigation from './components/ScrollUpNavigation'
import Resume from './components/Resume';
import Modal from './components/Modal';
import Contact from './components/Contact';
import { OuterWrapper, NavMenuWrapper, FaceWrapper, SkillsWrapper, PitchWrapper, TestimonyWrapper, ScrollNavigationWrapper } from './HomeScreen.styled';
import ProfileImage from './assets/images/profile-image.jpg'

import { Pages } from './constants';
import { scrollToTop, sendMessage } from './utils';


// todo: move literals to constants

function HomeScreen() {
  const [activePage, setActivePage] = useState(Pages.HOME);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <OuterWrapper>
      {
        activePage === Pages.HOME && (
          <>
            <NavMenuWrapper>
              <NavMenu
                onSetActivePage={setActivePage}
                onShowContact={() => setShowContactForm(true)}
              />
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
            <ScrollNavigationWrapper>
              <ScrollUpNavigation showText={false} onClick={scrollToTop} />
            </ScrollNavigationWrapper>
            <TestimonyWrapper>
              <Testimonies />
            </TestimonyWrapper>
            <ScrollNavigationWrapper>
              <ScrollUpNavigation showText={true} text="Go to Top" onClick={scrollToTop} />
            </ScrollNavigationWrapper>
          </>
        )
      }
      {
        activePage === Pages.RESUME && (
          <Resume
            onBackNavigation={() => setActivePage(Pages.HOME)}
            onDownloadResume={null}
          />
        )
      }

      {showContactForm && (
        <Modal onClose={() => setShowContactForm(false)} >
          <Contact
            onClose={() => setShowContactForm(false)}
            onSendMessage={(message) => sendMessage(message)}
          />
        </Modal>
      )}
    </OuterWrapper>
  );
}

export default HomeScreen;
