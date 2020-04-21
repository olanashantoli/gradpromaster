import React, { Component } from "react";
import {
 
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



const VALID_EMAIL = "olahantoli@gmail.com";

export default class Join_our_team extends Component {
  state = {
    email: VALID_EMAIL,
    errors: [],
    loading: false
  };

  handlejoin() {
    const { navigation } = this.props;
    const { email } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push("email");
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "you your comment was send !",
        "Please check you email.",
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

          <Text h2 bold>
          {"    \n  \n\n"}
            Fill out the comment and our team
             will contaact you after reviewing
          </Text>
        {/* //  {"    \n  \n  \n  \n\n"} */}

        
          <Input
              label="  your comment : " 
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
