import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globalStyles';
import { Wrapper } from 'views/Root.styles';


const Root = () => (
  <ThemeProvider theme={theme}>
  <GlobalStyle />
  <Wrapper>
    <UsersList />
  </Wrapper>

  </ThemeProvider>
)


export default Root;