import React, { Component } from "react";
import {
  ScrollView,
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet ,
  TouchableWithoutFeedback,
  TextInput
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";



const VALID_EMAIL = "lll";

export default class Join_our_team extends Component {
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      username: '',
      email: '',
      comment:'',
     
    
      errors: [],
      loading: false
 
    }
 
  }
  handlejoin() {
    const { navigation } = this.props;
    const { email , username, comment } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push("email");
    }
    if (!username) errors.push("username");
    if (!comment) errors.push("comment");
    this.setState({ errors, loading: false });


    this.setState({ errors, loading: false });

    fetch('http://192.168.100.113:3000/join', {
      method :'POST',

     /*   headers:{
        'Accept':'application/json',
        'Content-Type ': 'application/json',
      }, */  
       body:JSON.stringify({
         ID:"1",
         name: this.state.username,
        email: this.state.email,
        comment: this.state.password,
      
      }) 
  })
        .then(response => response.json())
       
        .then((res)=>{
          if (res.success===true){
            var email= res.message;
            AsyncStorage.setItem('email',email);
            console.log("sssssss");
           // navigation.navigate("Profile");////for test put it  profile insted of sallikna

          }
          else{
           console.log("fffffff");
           Alert. alert(res.message);
          }
        })
.done();
    

    if (!errors.length) {
      Alert.alert(
        "you your comment was send !","",
        
        [
          {
            text: "OK",
           
          }
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Error",
        "Please check you Email address.",
        [{ text: "Try again" }],
        { cancelable: false }
      );
    }
  }
  

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    
    return (
      <TouchableWithoutFeedback onpress={()=>{Keyboard.dismiss}}>
      <KeyboardAvoidingView style={styles.Join_our_team} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
        <ScrollView>
          <Text h2 bold>
          {"    \n  \n\n"}
            Fill out the comment and our team
             will contaact you after reviewing
          </Text>
        {/* //  {"    \n  \n  \n  \n\n"} */}
        <Input
                label="Your Name"
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
              label="  your comment :
               " 
              multiline={true}
          
            
            />
     <Text h4 bold>
         {"    \n\n \n\n"}
       
          </Text>
            
         
            <Button gradient onPress={() => this.handlejoin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Submit
                </Text>
              )}
            </Button>
            </ScrollView>
        </Block>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  Join_our_team: {
    flex: 1,
    alignContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
