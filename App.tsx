import React from 'react';

import AppNavigator from './src/navigations/AppNavigator';
import AuthProvider from './src/context/AuthContext';
import RequestProvider from './src/context/RequestContext';

export default function App() {

  return (

    <AuthProvider>

      <RequestProvider>

        <AppNavigator />

      </RequestProvider>

    </AuthProvider>
  );
}