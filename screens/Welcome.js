import {Platform, StyleSheet, TouchableOpacity, Share,ScrollView,   Image, Text, View, StatusBar, TouchableHighlight} from 'react-native';

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
import { LoginManager,   AccessToken } from 'react-native-fbsdk';
import { InterstitialAdManager, NativeAdsManager,  BannerView, AdSettings  } from 'react-native-fbads';
const advert2 = firebase.admob().rewarded('ca-app-pub-2457999726327943/6156914316')
const advert = firebase.admob().interstitial('ca-app-pub-2457999726327943/1707367568')
const request = new AdRequest();
request.addKeyword('foobar');
export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:["Akash","djsd","djskd"],
      statusArray:[],
      loading:true
    };
  }
  componentDidMount = () => {
  //  AdSettings.addTestDevice(AdSettings.currentDeviceHash);
    advert.loadAd(request.build());
    advert2.loadAd(request.build())

    advert2.on('onAdLoaded', () => {
       console.log('Advert2 ready to show.')
    })
    
    advert2.show()

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
  static navigationOptions = {
    title: "Welcome"
  }
  goToPage = (val) => {
    this.props.navigation.navigate(val)
  }


  share = () => {
    Share.share({
      message: 'Checkout Vestige Products - https://play.google.com/store/apps/details?id=com.vestigeproductslist',
      url: 'https://play.google.com/store/apps/details?id=com.vestigeproductslist',
      title: 'Start Your Own Business'
    }, {
      // Android only:
      dialogTitle: 'Share the app',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }


  fbSignIn = () =>{
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      result => {
        if(result.isCancelled == false)
        {
        AccessToken.getCurrentAccessToken().then(
          (data) => {
            console.log('userDATA', data)
                this.getUserProfile(data.accessToken);
        });
       }
      },
      error => {
        console.log('Login fail with error: ' + error);
      }
    );
  }

  render() {
    const { navigate } = this.props.navigation
    return (
        <View style={styles.mainContainer}>
               <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>Welcome (स्वागत हे)</Text>
                    <TouchableOpacity style={styles.toolbarButton}onPress={() => this.share()}>
                    <Image style={{width:30,marginLeft:5,  height:30}} source={require('../images/share.png')}></Image>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                <View style={styles.content}>

 
                    <View style={styles.messageBox}>
                       
                            <Text style={styles.topText}>Welcome Mesage (स्वागत संदेश)</Text>
                       
                            <Text style={styles.messageBoxBodyText}>Hello, This application provides all details about fastest growing network marketing company i.e. ATOMY. Through this company, you can earn upto 1 crore per day. So, Lets start (नमस्कार, यह एप्लिकेशन सबसे तेजी से बढ़ती नेटवर्क मार्केटिंग कंपनी यानी ATOMY के बारे में सभी विवरण प्रदान करता है। इस कंपनी के माध्यम से, आप प्रति दिन 1 करोड़ तक कमा सकते हैं। चलिए, शुरू करते हैं)</Text>
                           
                            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.goToPage('Login')}>
            <Text style={styles.fullWidthButtonText}>Lets Get Started (आएँ शुरू करें) </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.goToPage('Apply')}>
            <Text style={styles.fullWidthButtonText}>About company (कम्पनी के बारे में)</Text>
            </TouchableHighlight>
            <Text style={styles.messageBoxBodyText2}>If you any query related to atomy, call me 9646407363 (यदि आप किसी भी परीक्षा से संबंधित हैं, तो मुझे 9646407363 पर कॉल करें)</Text>
            <Text style={styles.messageBoxBodyText2}>If you want to join atomy, whatsapp your info - 8837826904 (यदि आप एटॉमी में शामिल होना चाहते हैं, तो अपनी जानकारी को व्हाट्सएप करें - 8837826904)</Text>
            
            
          
                    </View>

                </View>
                <Banner
       style={{alignSelf:'center',marginLeft:10}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-2457999726327943/6959694240"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
                </ScrollView>
                
               
            </View>
            
    );
  }
};
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