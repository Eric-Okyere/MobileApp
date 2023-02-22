import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import pic from "./Images/my.jpg"

 function App() {
  return (
   <View style={styles.All}>
     <Image source={pic} style={styles.image} />
<View style={styles.textlabels}>
     <Text style={styles.label}>Name</Text>
<Text  style={[styles.label, styles.labels]}>Eric Okyere</Text>
</View>
<View style={styles.textlabels}>
     <Text style={styles.label}>Email</Text>
<Text  style={[styles.label, styles.labels]}>ericokyere018@gmail.com</Text>
</View>
<View style={styles.textlabels}>
     <Text style={styles.label}>Gender</Text>
<Text  style={[styles.label, styles.labels]}>Male</Text>
</View>
    </View>
  );
}
{/*2.85 376*/}
const styles = StyleSheet.create({
  All:{
    backgroundColor:"pink",
    flex:1,
    display:"flex",
    
    alignItems:"center"
  },
image:{
  width:100,
  height:100,
  borderRadius:45,
  marginTop:80,
  marginBottom:40
 
},

textlabels:{
flexDirection:"row",
margin:1,
marginLeft:6
},

label:{
  borderColor:"black",
  borderWidth:1,
  paddingHorizontal:5,
  fontSize: 20,
  fontWeight:"bold",
  flex:2.5,
 
},
labels:{
  flex:7.5,
  textAlign:"center"
}

})





export default App

