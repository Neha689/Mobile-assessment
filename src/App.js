import React, { useState } from 'react';

const WelcomeScreen = ({ setPage }) => {
  return (
    <div style={styles.screenBodyContainer}>
      <div style={styles.contentFlexSpacer} />
      <div>
        <h1 style={styles.brandTitle}>Welcome to PopX</h1>
        <p style={styles.brandSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
       
        <button 
          onClick={() => setPage('signup')} 
          style={styles.primaryActionButton}
        >
          Create Account
        </button>
        
        
        <button 
          onClick={() => setPage('signin')} 
          style={{ ...styles.primaryActionButton, backgroundColor: '#cbcbd9', color: '#1d2226', marginTop: '12px' }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

const SignInScreen = ({ setPage }) => {
  return (
    <div style={styles.screenBodyContainer}>
      <h1 style={styles.brandTitle}>Signin to your PopX account</h1>
      <p style={styles.brandSubtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div style={styles.formInputGroup}>
        <div style={styles.inputFloatingContainer}>
          <label style={styles.floatingLabelText}>Email Address</label>
          <input type="email" placeholder="Enter email address" style={styles.formInputField} />
        </div>

        <div style={{ ...styles.inputFloatingContainer, marginTop: '20px' }}>
          <label style={styles.floatingLabelText}>Password</label>
          <input type="password" placeholder="Enter password" style={styles.formInputField} />
        </div>
      </div>

     
      <button 
        onClick={() => setPage('profile')} 
        style={{ ...styles.primaryActionButton, backgroundColor: '#6c5ce7', color: '#fff', marginTop: '30px' }}
      >
        Login
      </button>
      
      <button onClick={() => setPage('welcome')} style={{ ...styles.devResetNavigationButton, marginTop: '20px' }}>
        ← Go Back
      </button>
    </div>
  );
};

const SignUpScreen = ({ setPage }) => {
  const [isAgency, setIsAgency] = useState('yes');

  return (
    <div style={styles.screenBodyContainer}>
      <h1 style={styles.brandTitle}>Create your PopX account</h1>
      
      <div style={{ ...styles.formInputGroup, marginTop: '30px' }}>
        {['Full Name', 'Phone number', 'Email address', 'Password', 'Company name'].map((field, idx) => (
          <div key={idx} style={{ ...styles.inputFloatingContainer, marginTop: idx === 0 ? '0px' : '20px' }}>
            <label style={styles.floatingLabelText}>{field}<span style={{ color: '#ec5b5b' }}>*</span></label>
            <input type="text" defaultValue="Marry Doe" style={styles.formInputField} />
          </div>
        ))}
      </div>

      <div style={styles.radioControlSection}>
        <label style={styles.radioGroupLabel}>Are you an Agency?<span style={{ color: '#ec5b5b' }}>*</span></label>
        <div style={styles.radioOptionsFlexRow}>
          <label style={styles.radioOptionLabel}>
            <input 
              type="radio" 
              name="agency" 
              checked={isAgency === 'yes'} 
              onChange={() => setIsAgency('yes')}
              style={styles.nativeRadioCircle}
            />
            Yes
          </label>
          <label style={{ ...styles.radioOptionLabel, marginLeft: '20px' }}>
            <input 
              type="radio" 
              name="agency" 
              checked={isAgency === 'no'} 
              onChange={() => setIsAgency('no')}
              style={styles.nativeRadioCircle}
            />
            No
          </label>
        </div>
      </div>

      <div style={{ flex: 1 }} />

    
      <button 
        onClick={() => setPage('profile')} 
        style={{ ...styles.primaryActionButton, marginTop: '30px' }}
      >
        Create Account
      </button>

      <button onClick={() => setPage('welcome')} style={{ ...styles.devResetNavigationButton, marginTop: '15px' }}>
        ← Go Back
      </button>
    </div>
  );
};

const ProfileScreen = ({ setPage }) => {
  return (
    <div style={{ ...styles.screenBodyContainer, padding: '0px' }}>
      <div style={styles.profileHeaderBanner}>
        <h2 style={styles.profileHeaderTitle}>Account Settings</h2>
      </div>

      <div style={{ padding: '20px' }}>
        <div style={styles.profileIdentityRow}>
          <div style={styles.avatarImageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120" 
              alt="Marry Doe Avatar" 
              style={styles.avatarImageGraphic}
            />
            <div style={styles.avatarCameraBadgeIcon}>📷</div>
          </div>
          <div style={styles.profileIdentityTextMeta}>
            <h3 style={styles.profileUserDisplayName}>Marry Doe</h3>
            <p style={styles.profileUserEmailAddress}>Marry@Gmail.Com</p>
          </div>
        </div>

        <p style={styles.profileBioParagraphDescription}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div style={{ borderBottom: '1px dashed #e3e3e3', marginTop: '10px' }} />
      
      <div style={{ padding: '20px' }}>
        <button onClick={() => setPage('welcome')} style={styles.devResetNavigationButton}>
          ← Logout & Return to Welcome Screen
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState('welcome');

  return (
    <div style={styles.mobileArtboardContainerDevice}>
      {page === 'welcome' && <WelcomeScreen setPage={setPage} />}
      {page === 'signin' && <SignInScreen setPage={setPage} />}
      {page === 'signup' && <SignUpScreen setPage={setPage} />}
      {page === 'profile' && <ProfileScreen setPage={setPage} />}
    </div>
  );
}

const styles = {
  mobileArtboardContainerDevice: {
    width: '375px',
    height: '812px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 12px 46px rgba(0, 0, 0, 0.12)',
    borderRadius: '24px',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    border: '1px solid #e3e3e3'
  },
  screenBodyContainer: {
    padding: '40px 24px 24px 24px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#f7f8fa',
  },
  contentFlexSpacer: {
    flex: 1,
  },
  brandTitle: {
    fontSize: '26px',
    fontWeight: '700',
    color: '#1d2226',
    margin: '0px 0px 10px 0px',
    lineHeight: '1.2',
  },
  brandSubtitle: {
    fontSize: '14px',
    color: '#828693',
    margin: '0px 0px 30px 0px',
    lineHeight: '1.5',
  },
  primaryActionButton: {
    width: '100%',
    backgroundColor: '#6c5ce7',
    color: '#ffffff',
    border: 'none',
    padding: '14px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center',
  },
  formInputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputFloatingContainer: {
    position: 'relative',
    backgroundColor: '#f7f8fa',
    border: '1px solid #cbcbd9',
    borderRadius: '8px',
    padding: '14px 16px 6px 16px',
  },
  floatingLabelText: {
    position: 'absolute',
    top: '-8px',
    left: '12px',
    backgroundColor: '#f7f8fa',
    padding: '0px 6px',
    fontSize: '12px',
    color: '#6c5ce7',
    fontWeight: '500',
  },
  formInputField: {
    width: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    color: '#1d2226',
    padding: '4px 0px',
    backgroundColor: 'transparent',
  },
  radioControlSection: {
    marginTop: '24px',
  },
  radioGroupLabel: {
    fontSize: '14px',
    color: '#1d2226',
    fontWeight: '500',
    display: 'block',
    marginBottom: '10px',
  },
  radioOptionsFlexRow: {
    display: 'flex',
    alignItems: 'center',
  },
  radioOptionLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#1d2226',
    cursor: 'pointer',
  },
  nativeRadioCircle: {
    marginRight: '8px',
    accentColor: '#6c5ce7',
  },
  profileHeaderBanner: {
    backgroundColor: '#ffffff',
    padding: '24px 20px',
    borderBottom: '1px solid #eaeaea',
  },
  profileHeaderTitle: {
    margin: '0px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#1d2226',
  },
  profileIdentityRow: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  avatarImageWrapper: {
    position: 'relative',
    width: '76px',
    height: '76px',
  },
  avatarImageGraphic: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  avatarCameraBadgeIcon: {
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    backgroundColor: '#6c5ce7',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    color: '#ffffff',
    border: '2px solid #ffffff',
  },
  profileIdentityTextMeta: {
    marginLeft: '20px',
  },
  profileUserDisplayName: {
    margin: '0px 0px 4px 0px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#1d2226',
  },
  profileUserEmailAddress: {
    margin: '0px',
    fontSize: '13px',
    color: '#828693',
  },
  profileBioParagraphDescription: {
    fontSize: '14px',
    color: '#1d2226',
    lineHeight: '1.6',
    marginTop: '24px',
    marginBottom: '0px',
  },
  devResetNavigationButton: {
    background: 'none',
    border: 'none',
    color: '#6c5ce7',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '0px',
  },
};