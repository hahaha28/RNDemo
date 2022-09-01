/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState } from "react";
import {
  Animated,
  Button, FlatList, NativeModules, StatusBar,
  StyleSheet,
  Text, TextInput,
  View,
} from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PagerView } from "react-native-pager-view";
import { launchImageLibrary } from "react-native-image-picker";


class TestComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  clickBtn(e) {
    this.props.navigation.navigate('Pager')
  }

  async clickPickImage() {
    let result = await NativeModules.SwiftBridge.test('hhh','lll')
    console.log(result)
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'pink'}}>
        <StatusBar animated={true} backgroundColor={'transparent'} />
        <Text  onPress={()=>{this.clickBtn()}} style={{marginTop:50}} >hhh</Text>
        <Text style={{backgroundColor:'blue', color:'#00000000'}}>
          1111
        </Text>
        <Button title={'pick image'} onPress={()=>{this.clickPickImage()}} />
      </View>
    )
  }

}


const TestViewPager = ()=> {

  const listData = [1,2,3]
  for (let i=0;i<100;++i) {
    listData.push(i)
  }

  return (
    <PagerView style={{flex:1}}>
      <View>
        <FlatList data={listData} renderItem={(item)=>(<Text>{item.index}</Text>)}/>
      </View>
      <View>
        <AnimTest/>
      </View>
    </PagerView>
  )
}

const AnimTest = () => {
  const xAnim = useRef(new Animated.Value(0)).current

  const start = () => {
    Animated.timing(xAnim, {
      toValue:100,
      duration:1000
    }).start();
  }

  return (
    <View>
      <Animated.View style={{paddingLeft: xAnim}}>
        <Text>hhh</Text>
      </Animated.View>
      <Button title={'anim'} onPress={()=>{start()}} />
      <Button title={'reset'} onPress={()=>{xAnim.setValue(0)}} />
    </View>
  )
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

class App extends React.Component {

  constructor() {
    super();
  }



  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TestComponent} options={{headerShown:false}} />
          <Stack.Screen name="Pager" component={TestViewPager} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({

});

export default App;

