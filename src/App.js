import './App.css';
import firebase from './firebase'

function App() {
  const messaging = firebase.messaging()
  Notification.requestPermission().then((permission) => {
    messaging.getToken().then((token) => {
      console.log(token)
    }).catch((err) => {
      console.log('Error!')
      console.log(err)
    })
  })
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <h3>Hello, World!</h3>
    </div>
  );
}

export default App;
