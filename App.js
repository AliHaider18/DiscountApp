import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground } from 'react-native';

export default function App() {
  const [getPrice, setPrice] = useState(0);
  const [getDiscount, setDiscount] = useState(0);
  const [getFinal, setFinal] = useState(0);
  const [getSaving, setSaving] = useState(0);




  const Originalfunc = (original) => {
    let regex= /^\d*[1-9]\d*$/;
    regex.test(original) ? setPrice(original): alert("Please enter a positive number ")
       
  }

  const Discountfunc = (discount) => {
    var a = (getPrice/100)*discount;
    setDiscount(a);       
  }

   
  const pricefunc = () => {
    
    // console.log({getFinal})
    let b = getPrice-getDiscount;
    
    setFinal(b);
    
    let c = getPrice-b;
    
    setSaving(c);
    

    
  }

    return (

  
    <View style={styles.container}>
      
      <ImageBackground
      source={{ uri: 'https://digitalnomadgirls.com/wp-content/uploads/2018/09/Watercolour-background.jpg' }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text2} >Discount App</Text>

      <TextInput style={styles.TextInput} placeholder="Original Price" onChangeText={Originalfunc}></TextInput>

      <TextInput style={styles.TextInput}  placeholder="%Discount" onChangeText={Discountfunc}></TextInput>

      <Text style={styles.text1} >Saving: {getSaving}</Text>
      <Text style={styles.text1} >Final Price: {getFinal} </Text>

      <Button title="Calculate" color="black" onPress={()=>pricefunc()} />


      <StatusBar style="auto" />
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  TextInput:{
    marginBottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',

  },
  text1:{
    marginBottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'maroon',


  },
  text2:{
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'green',
    fontSize: 20,
    borderWidth: 1,



  }
});
