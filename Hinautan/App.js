import { View, Text, TextInput, Button, StyleSheet, Image, KeyboardAvoidingView, Platform} from "react-native";

import { useState } from "react";

export default function App () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState ({});

const validateForm=() => {
  let errors = {};

  if(!username) errors.username = "Username is required";
  if(!password) errors.password = "password is required";

  setErrors(errors);
  return Object.keys(errors).length ===0;
};

const handleSubmit = () => {
  if(validateForm()) {
    console.log("Submitted", username, password);
    setUsername("");
    setPassword("");
    setErrors({});
  }
};

return(
  <KeyboardAvoidingView behavior="padding" 
  keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} style={styles.container}>
   <Image source={require("./assets/snack-icon.png")} style={styles.image}/>
   <View style={styles.form}>
     <Text style={styles.label}>Username</Text>
     <TextInput style={styles.input} placeholder="Enter your username" value={username} onChangeText=     {setUsername}/>
    {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
       <Text style={styles.label}>password</Text>
     <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry value={password} onChangeText= {setPassword}/>
    {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
    <Button title="Login" onPress={handleSubmit}/>
   </View>
   </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create ({
 container: {
   flex:1,
   justifyContent: "center",
   paddingHorizontal: 20,
   backgroundColor: "#f5f5f5",
 },
 form: {
   backgroundColor: "white",
   padding: 20,
   borderRadius: 10,
   shadowColor: "black",
   shadowOffset: {height: 2, width: 0},
   shadowOpacity: 0.25,
   shadowRadius: 4,
   elevation: 5
 },
 label: {
   fontSize: 16,
   paddingBottom: 5,
   fontWeight: "bold"
 },
 input: {
   height: 40,
   borderColor: "#ddd",
   borderWidth: 1,
   marginBottom: 15,
   padding:10,
   borderRadius: 5
 },
 image: {
   height: 400,
   width: 200,
   alignSelf: "center",
   marginBottom: 50
 },
 errorText: {
   color: "red",
   marginBottom: 10
 },
});