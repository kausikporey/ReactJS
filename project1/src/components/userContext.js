import React from 'react';
const UserContext = React.createContext('Sayan') //we can add the default value when creating an context. deafaultvalue='sayan'

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}