
import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Footer,Header } from 'components/theme';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      <Header />
        {children}
      <Footer />
    </>
  );
};
