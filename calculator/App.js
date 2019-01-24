/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView} from 'react-native';

var p='';
type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      process : ''
    }
    this.calculate = this.calculate.bind(this);
  }
  calculate(process_unit){
    var tokens;
    if(process_unit!='=' && process_unit!='C'){
      p+=process_unit;
      this.setState({process:p});
    }else if(process_unit=='C'){
      p='';
      this.setState({process:p});
    }else if(process_unit=='='){
      var separators = [ '\\\+', '-', '\\\(', '\\\)', '\\*', '/'];
      tokens = p.split(new RegExp(separators.join('|'), 'g'));
      var counter=0;
      var operators='';
      var girdimi=false;
      while(counter<p.length){

        if(p[counter]=='/' || p[counter]=='*' || p[counter]=='-' || p[counter]=='+' )
          operators+=p[counter];
        counter++;
      }
      var counter_process=1;
      var result=parseInt(tokens[0]);
      var val=0;
      var counter_operator=0;
      while(counter_process<tokens.length){
        switch(operators[counter_operator]) {
          case '/':
            result/=parseInt(tokens[counter_process]);
            break;
          case '*':
            result*=parseInt(tokens[counter_process]);
            break;
          case '-':
            result-=parseInt(tokens[counter_process]);
            break;
          case '+':
            result+=parseInt(tokens[counter_process]);
            break;
        }
        //result+=val;
        //tokens[counter_process+1]=result;
      //  val=result;
        counter_process++;
        counter_operator++;
      }
      p=String(result);
      this.setState({process:String(result)});
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.topArea}>
              <TextInput value={this.state.process} style={styles.edittext}>

              </TextInput>
          </View>
          <View style={styles.numberButtonsC}>
            <View style={styles.numberButtonsR}>
              <TouchableOpacity onPress={() => this.calculate("1")} style={styles.button}>
                <Text  style={styles.buttonText}>
                1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.calculate("2")} style={styles.button}>
                <Text  style={styles.buttonText}>
                2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.calculate("3")} style={styles.button}>
                <Text style={styles.buttonText}>
                3
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.calculate("C")} style={styles.button}>
                <Text style={styles.buttonText}>
                C
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numberButtonsR}>
              <TouchableOpacity style={styles.button}>
                <Text onPress={() => this.calculate("4")} style={styles.buttonText}>
                4
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.calculate("5")} style={styles.button}>
                <Text style={styles.buttonText}>
                5
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.calculate("6")} style={styles.button}>
                <Text testID="6" style={styles.buttonText}>
                6
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.calculate("+")} style={styles.button}>
                <Text style={styles.buttonText}>
                +
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numberButtonsR}>
              <TouchableOpacity onPress={() => this.calculate("7")} style={styles.button}>
                <Text style={styles.buttonText}>
                7
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.calculate("8")} style={styles.button}>
                <Text style={styles.buttonText}>
                8
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.calculate("9")} style={styles.button}>
                <Text style={styles.buttonText}>
                9
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.calculate("-")} style={styles.button}>
                <Text style={styles.buttonText}>
                -
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numberButtonsR}>
              <TouchableOpacity onPress={() => this.calculate("0")} style={styles.button}>
                <Text style={styles.buttonText}>
                0
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.calculate("/")} style={styles.button}>
                <Text style={styles.buttonText}>
                /
                </Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => this.calculate("*")} style={styles.button}>
                <Text style={styles.buttonText}>
                *
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.calculate("=")} style={styles.button}>
                <Text style={styles.buttonText}>
                =
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    flexDirection:'column'
  },
  edittext: {
    flex:1,
    backgroundColor: 'white',
    borderRadius:10,
    margin:10
  },
  topArea: {
    flex:1,
    backgroundColor: '#434343',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    margin:10
  },
  numberButtonsC: {
    justifyContent:'center',
    backgroundColor:'rgba(255, 255, 255, 0.5)',
    alignItems:'center',
    flexDirection:'column'
  },
  numberButtonsR: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    backgroundColor:'rgba(255, 255, 255, 0.5)',
    flexDirection:'row'
  },
  button: {
    height:55,
    width:55,
    backgroundColor:'rgba(0,0,0, 0.2)',
    borderRadius:10,
    margin:10,
    borderWidth: 5,
    borderColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText: {
    fontSize:16,
    color:'black',
    fontWeight:'900'
  }

});
