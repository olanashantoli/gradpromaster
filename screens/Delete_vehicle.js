import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet ,
  TouchableWithoutFeedback
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

//const VALID_EMAIL = "olahantoli@gmail.com";

export default class Delete_vehicle extends Component {
  state = {
    plate_num: null,
    errors: [],
    loading: false
  };

  handledelete() {
    const { navigation } = this.props;
    const { plate_num } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
   

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "vehicle deleted!","",
   
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
      <KeyboardAvoidingView style={styles.Delete_vehicle} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
        <Text bold white center>
             {"\n"} {"\n"}
                </Text>

          <Text h1 bold>
            Delete_vehicle
          </Text>
          <Block middle>
            <Input
              label="Plate Number"
              error={hasErrors("plate_num")}
              style={[styles.input, hasErrors("plate_num")]}
              defaultValue={this.state.plate_num}
              onChangeText={text => this.setState({ plate_num: text })}
            />
             <Text bold white center>
             {"\n"} {"\n"}
                </Text>

            <Button gradient onPress={() => this.handledelete()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Delete_vehicle
                </Text>
              )}
            </Button>

           
          </Block>
        </Block>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  Delete_vehicle: {
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
  }
});
