import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, StyleSheet, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback, TouchableHighlight} from 'react-native';
import firebase from 'react-native-firebase';
const advert = firebase.admob().interstitial('ca-app-pub-2457999726327943/4450394052')

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');
export default class Apply extends Component {

  constructor(props){
    super(props);
    this.state = { 
      email:'',
      password:'',
      mobile:'',
      confirmPassword:'',
      confirmPasswordError:'',
      passwordError:'',
      emailFormatError:'',
      mobileError:'',
      emailFormatError:'',
      loading: false,
      cardheight:300
    }
    
  }

   goToPage = (val) => {
    this.props.navigation.navigate(val)
  }
componentDidMount = ()  =>
{
  advert.loadAd(request.build());
 

advert.on('onAdLoaded', () => {
console.log('Advert ready to show.');
});

setTimeout(() => {
if (advert.isLoaded()) {
  console.log('working')
  advert.show();
} else {
  console.log('error occured')
}
}, 1000);
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
    return (
    
      <View style={{flex:1}}>
         <View style={styles.toolbar}>
         <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>About</Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
                <ScrollView>
                 <View style={styles.content}>

 
                    <View style={styles.messageBox}>
                    <Text style={styles.messageBoxBodyText}>Atomy, the company is working from last 50 years but it started as a network marketing in 2006. This korean company started working in U.S.A, Japan and now launching in India And China. The company has several labourates and huge number of patents. They incorporates wseveral scientists. If we talk about products, they cover health, skincare, personal care, clothes and laundry. The company is expected to launch 1 lakh products in 2020. If you want to earn upto 1 lakh per day in your future, join today. (एटॉमी, कंपनी पिछले 50 वर्षों से काम कर रही है, लेकिन 2006 में नेटवर्क मार्केटिंग के रूप में शुरू हुई। इस कोरियाई कंपनी ने U.S.A, जापान में काम करना शुरू किया और अब भारत और चीन में लॉन्च हो रही है। कंपनी के पास कई लैबोरेटरीज और भारी संख्या में पेटेंट हैं। वे छद्म वैज्ञानिकों को शामिल करते हैं। अगर हम उत्पादों के बारे में बात करते हैं, तो वे स्वास्थ्य, स्किनकेयर, व्यक्तिगत देखभाल, कपड़े और कपड़े धोने को कवर करते हैं। कंपनी को 2020 में 1 लाख उत्पाद लॉन्च करने की उम्मीद है।अगर आप अपने भविष्य में प्रति दिन 1 लाख तक कमाना चाहते हैं, तो आज ही ज्वाइन करें।)</Text>
                      <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.goToPage('Login')}>
            <Text style={styles.fullWidthButtonText}>Join Now (अब सम्मिलित हों)</Text>
            </TouchableHighlight>
                    </View>

                    </View>
                    </ScrollView>

      
      
      </View>
      
    );
}


}

const styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#8e44ad',
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    margintop: {
      marginTop:20
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        fontSize:20                //Step 3
    },
    mainContainer:{
      flex:1                  //Step 1
  },
  content:{
      backgroundColor:'#ebeef0',
      flex:1                //Step 2
  },
  messageBox:{
    alignItems : 'center'
  },
  messageBoxBodyText:{
    margin:10,
    fontSize:18
  },
  messageBoxBodyText2:{
    margin:10,
    fontSize:18,
    fontWeight : 'bold'
  },
  topText:{
    fontSize:25,
    marginTop : 10,
    fontWeight : 'bold'
  },
  topText2:{
    fontSize:20,
    marginTop : 10,
    marginLeft:10
  },
  inputsContainer: {
    flex: 1,
    alignItems : 'center'
  },
  fullWidthButton: {
    backgroundColor: '#8e44ad',
    height:40,
    width:'95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius : 25,
    marginBottom:20,
    marginTop:10
  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'white'
  },
  footer:{
    position:'absolute',
    bottom : 20,
    width : '100%'
  }
  });