import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import Login from "./components/Login";

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD5gfkC8iTRAPbPnrN-l4gpfOdvOKXoT4E",
      authDomain: "login-892d0.firebaseapp.com",
      databaseURL: "https://login-892d0.firebaseio.com",
      projectId: "login-892d0",
      storageBucket: "login-892d0.appspot.com",
      messagingSenderId: "1005958044664"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <Login />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
