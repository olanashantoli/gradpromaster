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



export default class Add_vehicle extends Component {
 
  state = {
    
    type: null,
    model: null,
    year:null,
    plate: null,
    reg: null,
  
    errors: [],
    loading: false
  };
 
  handleAdd_vehicle() {
    const { navigation } = this.props;
    const { type,model, year, plate, reg } = this.state;
    const errors = [];

   

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!type) errors.push("type");
    if (!model) errors.push("model");
    if (!year) errors.push("year");
    if (!plate) errors.push("plate");
    if (!reg) errors.push("reg");
   

    this.setState({ errors, loading: false });

    if (!errors.length) {

      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
          
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
   
      <KeyboardAvoidingView style={styles.Add_vehicle} behavior="padding">
     
        <Block padding={[0, theme.sizes.base * 2]}>
        <ScrollView>
        <Text bold white center>
             {"\n"} {"\n"}
                </Text>

          <Text h1 bold>
            Add_vehicle
          </Text>
          <Text bold white center>
             {"\n"} {"\n"}
                </Text>

          <Block middle>
       
          <Input
              placeholder="ex:Saloon"
              label="Vehicle Type"
              error={hasErrors("type")}
              style={[styles.input, hasErrors("type")]}
              defaultValue={this.state.type}
              onChangeText={text => this.setState({ type: text })}
            />

            <Input
              email
              label=" Vehicle Model"
              error={hasErrors("model")}
              style={[styles.input, hasErrors("model")]}
              defaultValue={this.state.model}
              onChangeText={text => this.setState({ model: text })}
            />
            <Input
            
            label="Year Of Manufacture"
            error={hasErrors("year")}
            style={[styles.input, hasErrors("year")]}
            defaultValue={this.state.year}
            onChangeText={text => this.setState({ year: text })}
          /> 
            <Input
             
              label="Plate Number"
              error={hasErrors("plate")}
              style={[styles.input, hasErrors("plate")]}
              defaultValue={this.state.plate}
              onChangeText={text => this.setState({ plate: text })}
            />
             <Input
             
              label="Registration Number"
              error={hasErrors("reg")}
              style={[styles.input, hasErrors("reg")]}
              defaultValue={this.state.reg}
              onChangeText={text => this.setState({ reg: text })}
            />
            
         
            <Button gradient onPress={() => this.handleAdd_vehicle()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Add_vehicle
                </Text>
              )}
            </Button>

     
          </Block>
               
          </ScrollView>
        </Block>
       
      </KeyboardAvoidingView>
  
    );
  }
}



const styles = StyleSheet.create({
  Add_vehicle: {
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
