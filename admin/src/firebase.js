import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDN8LqgLYQtvEO18JVLiJjVMKIiKnArxa4',
	authDomain: 'netflix-clone-482c8.firebaseapp.com',
	projectId: 'netflix-clone-482c8',
	storageBucket: 'netflix-clone-482c8.appspot.com',
	messagingSenderId: '1055013739598',
	appId: '1:1055013739598:web:cc6710e319dd9fd10d371f',
	measurementId: 'G-EK7VH46HM7',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
