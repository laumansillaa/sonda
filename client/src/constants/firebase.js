// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyCBdTGIRVkWbSH97-_arpDTWNELHHIxF2M',
	authDomain: 'sonda-srl.firebaseapp.com',
	projectId: 'sonda-srl',
	storageBucket: 'sonda-srl.appspot.com',
	messagingSenderId: '522795627032',
	appId: '1:522795627032:web:e172a874faa3f92c3a496d',
	measurementId: 'G-VP57FCVH00',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
