import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globalStyles';
import { Wrapper } from 'views/Root.styles';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
//import UsersProvider from "providers/UsersProvider";

const Root = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					{/* <UsersProvider> */}
					<Wrapper>
						<Routes>
							<Route
								exact
								path='/'
								element={<Navigate replace to='/group' />}
							/>
							<Route path='/add-user' element={<AddUser />} />
							<Route path='/group' element={<Dashboard />} />
							<Route path='/group/:id' element={<Dashboard />} />
						</Routes>
					</Wrapper>
					{/*  </UsersProvider> */}
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};

export default Root;
