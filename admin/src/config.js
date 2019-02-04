import 'firebase/auth';

import firebase from 'firebase/app';

export const appName = "react-f6302";

const config = {
	apiKey: "AIzaSyAnCBrlD-iyMYQIJnET9XCklDTQO-Ro41g",
	authDomain: `${appName}.firebaseapp.com`,
	databaseURL: `https://${appName}.firebaseio.com`,
	projectId: appName,
	storageBucket: `${appName}.appspot.com`,
	messagingSenderId: "193024882666"
};

firebase.initializeApp(config);
