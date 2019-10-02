import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from './styles.js';
import { LoginManager,   AccessToken } from 'react-native-fbsdk';
export default class Register extends Component {

  constructor(props){
    super(props);
    this.state = { 
      name:'',
      cls:'',
      city:'',
      mobile : '',
      age:'',
      confirmPasswordError:'',
      passwordError:'',
      emailFormatError:'',
      mobileError:'',
      emailFormatError:'',
      loading: false,
      cardheight:300,
      email : ""
    }
    
  }

  fbSignIn = () =>{
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      result => {
        console.log(result, 'rest')
        this.props.navigation.navigate('Profile');
       //  if(result.isCancelled == false)
       //  {
       //  AccessToken.getCurrentAccessToken().then(
       //    (data) => {
       //      console.log('userDATA', data)
            
       //       //   this.getUserProfile(data.accessToken);
       //  });
       // }
      },
      error => {
        alert('Login fail with error: ' + error);
      }
    );
  }

    openMenu = () => {
    this.props.navigation.openDrawer()
  }

   submit = () => {
       if (this.state.name && this.state.email && this.state.mobile )
       {
           alert("registered SuccessFully")
           this.props.navigation.navigate('Otp');
           // this.props.navigation.navigate('Profile')
       }
       else
       {
           alert("please enter all details both")
       }
   }

  signUp = () =>{
    this.setState(() => ({ cardheight:370}));
    if ( !service.validateEmail(this.state.email)) {
      this.setState(() => ({ emailFormatError: "Proper Email Format is Required"}));
    } 
    else{
      this.setState(() => ({ emailFormatError: ''}));
    }
    if (this.state.email.trim() === "") {
      this.setState(() => ({ emailError: " Email is required."}));
      this.setState(() => ({ emailFormatError: null}));
    } else {
      this.setState(() => ({ emailError: null})); 
    }
    if (this.state.password.trim() === "") {
      this.setState(() => ({ passwordError: " Password is required."}));
    } else {
      this.setState(() => ({ passwordError: null}));
    }
    if (this.state.mobile.trim() === "") {
      this.setState(() => ({ mobileError: " Mobile Number is required."}));
    } else {
      this.setState(() => ({ mobileError: null}));
    }
    if (this.state.confirmPassword.trim() === "") {
      this.setState(() => ({ confirmPasswordError: " Confirm Password is required."}));
    } else {
      this.setState(() => ({ confirmPasswordError: null}));
    }
    if(this.state.email && this.state.mobile && this.state.password && this.state.confirmPassword)
    {
      this.setState(() => ({ cardheight:300}));
    }

    if(this.state.email && this.state.password && this.state.mobile && this.state.confirmPassword && service.validateEmail(this.state.email))
    {
      
     this.setState ({ loading: true});
      setTimeout(() => 
      {this.setState({loading: false})
      this.refs.defaultToastBottom.ShowToastFunction('SignUp SuccessFully');
      this.props.navigation.navigate('Login')
       }, 3000)
      }

  
   // alert(this.state.password)
   }

  
   goBack = () =>{
    this.props.navigation.pop()
   }
  render() {
     const  NewImage =   <Image style={{width:250, height:150, marginLeft:5, marginTop:20, alignSelf:'center'}}source={require('../images/splash2.png')}></Image>
    return (
    
      <View style={{flex:1}}>
         <View style={styles.toolbar}>
         <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>Register</Text>
                        <Text style={styles.toolbarButton}></Text>
                </View>
               
<ScrollView>
                 <View style={{alignItems: 'center'}}>
      {NewImage}
      </View>
  <View style={{ marginTop:20, alignItems:'center' }}>
                 <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/name.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Name"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                />
                </View>

                

     <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:20}}>
     <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/email1.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email Address"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                </View>


                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:20}}>
     <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/email1.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(mobile) => this.setState({mobile})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Phone Number"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                />
                </View>

 


               

               
                  
 
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={() => this.submit()}>Submit</Text>
                </TouchableOpacity>
<Text style={{marginTop:10, alignSelf:'center', fontSize:20}}>    OR </Text>
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={() => this.fbSignIn()}>Login With FaceBook</Text>
                </TouchableOpacity>
                </View>
               </ScrollView>

      
      
      </View>
      
    );
}


}