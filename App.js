//Example to make Step by Step App Introduction in React Native
import React, { useState } from 'react';
//Import React

import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Switch,
  Button,
  Picker,
  ScrollView,TextInput,ActivityIndicator
} from 'react-native';
//Import basic required components 
import { copilot, walkthroughable, CopilotStep } from 'react-native-copilot';
const WalkthroughableText = walkthroughable(Text); //Making a WalkthroughableText
const WalkthroughableImage = walkthroughable(Image); //Making a WalkthroughableImage


 function App(props){
  const [count, setCount] = useState(0);
  const [secondStepActive,setSecondStepActive]=useState(true)
  const [chosenLabel,setChoosenLabel]=useState('mks')
  const [chosenText,setChoosenText]=useState('sharma')
  const [username,setUsername]=useState('')
  const [switchValue,setSwitchValue]=useState(true)
  const [sho,setSho]=useState(false)

  function componentDidMount() {
    props.copilotEvents.on('stepChange', handleStepChange);
    //setting a function to handle the step change event
    props.start();
    //To start the step by step Walk through
  }

  const handleStepChange = (step) => {
    //Handler, in case we want to handle the step change
    console.log(`Current step is: ${step.name}`);
  };
  function set(i,a){
    setChoosenLabel(i);
    setChoosenText(a);
  }
  function onPressLearnMore(){
    //For generating alert on buttton click
    alert('Hello');
  }
	return (
    
    <View style={styles.container}>
    <ScrollView style={styles.container3}>
   
			<Text>You clicked {count} times.</Text>
			<Button
				onPress={() => setCount(count + 1)}
				title="Click me"
				color="red"
				accessibilityLabel="Click this button to increase count"
      />
      <CopilotStep
          text="This is the heading with some style"
          order={1}
          name="firstUniqueKey">
          <WalkthroughableText style={styles.title}>
            Example of App Introduction Tour in React Native
          </WalkthroughableText>
        </CopilotStep>

        <CopilotStep text="This is a image" order={3} name="thirdUniqueKey">
        <WalkthroughableImage
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png',
          }}
          style={styles.profilePhoto}
        />
      </CopilotStep>
      <View style={styles.activeSwitchContainer}>
      <CopilotStep
        active={secondStepActive}
        text="This is simple text without style"
        order={2}
        name="SecondUniqueKey">
        <WalkthroughableText>
          Default text without style which can be skiped after disabling the
          switch
        </WalkthroughableText>
      </CopilotStep>
      <View style={{ flexGrow: 1 }} />
      <Switch
        onValueChange={secondStepActive1 =>
          setSecondStepActive( secondStepActive1 )
        }
        value={secondStepActive}
      />
    </View>
    <View style={styles.middleView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.start()}>
            <Text style={styles.buttonText}>START APP INTRODUCTION TOUR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <Text style = {styles.text}>{chosenLabel}</Text>
        <Text style = {styles.text}>{chosenText}</Text>
        <Picker selectedValue={chosenLabel}
          onValueChange={
          (itemValue, itemIndex) => set(itemValue, itemIndex)
        }>
            <Picker.Item label = "Hello" value = "word1" />
            <Picker.Item label = "React" value = "word2" />
            <Picker.Item label = "Native" value = "word3" />
            <Picker.Item label = "How" value = "word4" />
            <Picker.Item label = "are" value = "word5" />
            <Picker.Item label = "you" value = "word6" />
        </Picker>
        </View>
        <View style={styles.container2}>
        <Button
         onPress={onPressLearnMore}
         title="Click Me"
         color="#841584"
        />
        </View>
        <View style={styles.container4}>
        <Image
          style={{ width: 66, height: 58 }}
          source={{
            uri:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        {/* If you want to show image from local directory
        <Image 
          source={require('./your-img.png')}  
          style={{width: 400, height: 400}} 
        />*/}
        <Image
          source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',}}
          style={{ width: 400, height: 400, margin: 16 }}
        />
      </View>
       <View style={styles.container5}>
       <Text style={{color: 'cyan'}}>{username}</Text>
       <TextInput
         value={username}
         onChangeText={(username1) => setUsername( username1 )}
         placeholder={'Username'}
         style={styles.input}
       />
     </View>
     <View style={styles.container6}>
        {/*Text to show the text according to switch condition*/}
        <Text>{switchValue?'Switch is ON':'Switch is OFF'}</Text>
        {/*Switch with value set in constructor*/}
        {/*onValueChange will be triggered after switch condition changes*/}
        <Switch
          style={{marginTop:30}}
          onValueChange = {secondStepActive1=>{setSwitchValue(secondStepActive1)}}
          value = {switchValue}/>
      </View>
      <View>{sho==false?<ActivityIndicator size="large" color="#0000ff" />:<Button onPress={setSho(true)} title='Click to see Indicator' />}
      </View>
        </ScrollView>
		</View>
  );}
  // export default App;
  export default copilot({
  animated: true, // Can be true or false
  overlay: 'view', // Can be either view or svg
})(App);
  const styles = StyleSheet.create({
    container6: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container5: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#ecf0f1'
    },
    container4: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
      backgroundColor: '#ecf0f1',
    },
    container: {
      flex: 1,

      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    //   flex: 1,
    // justifyContent: 'center',
    // flexDirection: 'column'
    },
    container3: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      },
    container1: {
      // flex: 1,

      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#F5FCFF'
      flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      flexDirection: 'column'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
      title: {
        fontSize: 24,
        textAlign: 'center',
        margin: 20,
      },
      
  activeSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
    profilePhoto: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginVertical: 20,
      },
      middleView: {
        flex: 1,
        alignItems: 'center',
      },
      button: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        paddingHorizontal: 15,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
      text: {
        fontSize: 20,
        alignSelf: 'center',
     },
     container2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

  });