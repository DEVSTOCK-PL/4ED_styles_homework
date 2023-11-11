import { useContext } from 'react';

import { LoginUserContext } from '../hooks/useLoginUserContext';

import { ProfileList } from '../components/profile/ProfileList';
import { Layout } from '../components/Layout';
import { ContactContainer } from '../components/main/contact/ContactContainer';
import { Heading } from '../components/main/contact/Heading';

function Profile() {
  const { user } = useContext(LoginUserContext);

  return (
    <Layout>
      <ContactContainer>
        <Heading
          h2="Witaj User!"
          p={
            user.isLogin
              ? `jesteś aktualnie zalogowany jako ${user.name} ${user.secondName}, a Twój mail to ${user.email}`
              : null
          }
        />
        {user.isLogin && <Heading h2="Lista e-booków w Twojej biblioteczce!" />}
        <ProfileList />
      </ContactContainer>
    </Layout>
  );
}

export default Profile;
