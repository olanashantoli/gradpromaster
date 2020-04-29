import React, { Component } from "react";
import {
  View,
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet ,
  ScrollView
} from "react-native";
import {CheckBox } from 'react-native-elements';
import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";



export default class SignUp extends Component {
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      username: '',
      email: '',
      mobile_phone:'',
      password: '',
      confirm_password: '',
    
      errors: [],
      loading: false
 
    }
 
  }

 
 
  handleSignUp() {
    const { navigation } = this.props;
    const { username,email, mobile_phone, password, confirm_password } = this.state;
    const errors = [];

   

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!email) errors.push("email");
    if (!username) errors.push("username");
    if (!password) errors.push("password");
    if (!confirm_password) errors.push("confirm_password");
    if (!mobile_phone) errors.push("mobile_phone");
   

    this.setState({ errors, loading: false });

    fetch('http://192.168.100.113:3000/cusomerADD', {
      method :'POST',

       headers:{
        'Accept':'application/json',
        'Content-Type ': 'application/json',
      },  
       body:JSON.stringify({
         ID:"",
         Name: this.state.username,
        Email: this.state.email,
        Password: this.state.password,
        Phone: this.mobile_phone,
        CustomerVehicles:"",
      }) 
  })
        .then(response => response.json())
       
        .then((res)=>{
          if (res.success===true){
            var email= res.message;
            AsyncStorage.setItem('email',email);
            console.log("sssssss");
            navigation.navigate("Login");////for test put it  profile insted of sallikna

          }
          else{
           console.log("fffffff");
           Alert. alert(res.message);
          }
        })
.done();
    
    if (!errors.length) {

      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Login");
            }
          }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
   
  
    return (
   
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
     
        <Block padding={[0, theme.sizes.base * 2]}>
        <Text bold white center>
             {"\n"} {"\n"}
                </Text>

          <Text h1 bold>
            Sign Up
          </Text>
          <Text bold white center>
             {"\n"} {"\n"}
                </Text>

          <Block middle>
          <ScrollView>
          <Input
              label="Username"
              error={hasErrors("username")}
              style={[styles.input, hasErrors("username")]}
              defaultValue={this.state.username}
              onChangeText={text => this.setState({ username: text })}
            />

            <Input
              email
              label="Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
            
            label="mobile_phone"
            error={hasErrors("mobile_phone")}
            style={[styles.input, hasErrors("mobile_phone")]}
            defaultValue={this.state.mobile_phone}
            onChangeText={text => this.setState({ mobile_phone: text })}
          /> 
            <Input
              secure
              label="Password"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
             <Input
              secure
              label="confirm_password"
              error={hasErrors("confirm_password")}
              style={[styles.input, hasErrors("confirm_password")]}
              defaultValue={this.state.confirm_password}
              onChangeText={text => this.setState({ confirm_password: text })}
            />
            
         
            <Button gradient onPress={() => this.handleSignUp()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Sign Up
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Sallikna")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Back to welcome page
              </Text>
            </Button>
            </ScrollView>
          </Block>
          
        </Block>
       
      </KeyboardAvoidingView>
  
    );
  }
}



const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  },
 
});
