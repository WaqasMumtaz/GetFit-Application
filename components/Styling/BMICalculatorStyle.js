import React from 'react';
import { Alert, StyleSheet,Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHight =Dimensions.get('window').height;

const styles =StyleSheet.create({
    mainContainer:{
        flex:1,
        marginHorizontal:20,
        // width:screenWidth,
        // height:screenHight,
       // backgroundColor:'red'
    },
    
    headingContainer:{
        flex:0.5,
        //height:'7%',
        //backgroundColor:'pink'
    },
    headingStyle:{
        fontSize:20,
        color:'#4f4f4f',
        fontFamily: "MontserratExtraBold",
    },
    textContainer:{
        flex:0.5,
        //height:'8%',
        //backgroundColor:'green',
        //marginTop:25
    },
    textStyle:{
        color:'#4f4f4f',
        fontFamily:'MontserratLight'
    },
    inputMainContainer:{
        flex:0.4,
        flexDirection:'row',
        //backgroundColor:'yellow'
    },
    leftContainer:{
          flex:1,
          //backgroundColor:'green',
          marginRight:10,
    },
    rightContainer:{
        flex:1,
        //backgroundColor:'blue',
        marginLeft:10
    },
    touchableOpacityOne:{
        flex: 1,
        padding: 5,
        marginVertical: 5,
        backgroundColor:'#e5e5e5',
        paddingLeft:10,
        height:40 ,
        borderTopLeftRadius:3,
        borderBottomLeftRadius:3,
        // opacity:0.6
    },
    textInputStyleParent:{
        flex:1,
        height: 40,
        textAlign: 'center', 
        backgroundColor: '#e5e5e5',
        //opacity:0.3
    },
    touchableOpacityTwo:{
        flex: 1,
        padding: 5, 
        marginVertical: 5,
        alignItems:'flex-end',
        backgroundColor:'#e5e5e5',
        paddingRight:10,
        marginRight:12,
        height:40 ,
        borderTopRightRadius:3,
        borderBottomRightRadius:3,
        //marginLeft:15
       // opacity:0.6
    },
    pickerStyle:{
        width: 160,
        height: 40,
        // marginTop: 45,
        color: '#4f4f4f',
        backgroundColor: '#e5e5e5',
        borderRadius:5,
       // marginLeft:16,
        fontFamily: 'MontserratLight',
    },
    pickerContainerOne:{
        borderRadius: 3,
         borderWidth: 0.5, 
         borderColor: '#e5e5e5', 
         overflow: 'hidden',
         width:160,
        // marginLeft:10
    },
    pickerContainerTwo:{
        marginTop:5,
        borderRadius: 3,
         borderWidth: 0.5, 
         borderColor: '#e5e5e5', 
         overflow: 'hidden',
         width:160,
         //marginLeft:10
    },
    inputOne:{
    //   marginLeft:10
    },
    inputTwo:{
        marginTop:15,
        //marginLeft:10
    },
    nuitTextStyleOne:{
        color:'#4f4f4f',
        fontFamily:'MontserratLight',
        marginBottom:5,
        //marginLeft:10,
        
    },
    nuitTextStyleTwo:{
        color:'#4f4f4f',
        fontFamily:'MontserratLight',
        marginTop:20,
        //marginLeft:10,
    },
    bmiInputContainer:{
        flexDirection:'row',
        flex:5,
        //backgroundColor:'white',
        marginTop:5
    },
    bmiTextStyle:{
        color:'#4f4f4f',
        fontFamily:'MontserratLight'
    },
    inputStyle:{
        // flex: 0.10,
    fontFamily: 'MontserratLight',
    // marginLeft: 20,
    height: 40,
    borderColor: '#e5e5e5',
    borderRadius:2,
    backgroundColor: '#e5e5e5',
    //backgroundColor: '#1a1a1a',
    borderWidth: 1,
    //marginRight: 20,
    paddingLeft: 16,
    width:'95%'
    
    }
})

export default styles;
