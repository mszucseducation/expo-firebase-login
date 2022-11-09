import {View, Text, Button, Image, TextInput} from 'react-native';
import React from 'react';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebase/firebaseConfig.js';

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const CreateUser = async () => {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log("created user", user);
    }

    const SignIn = async () => {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
    }

    return <View>
        <Text>Login</Text>
        <TextInput onChangeText={(text) => setEmail(text)} placeholder="Email..."/>
        <TextInput onChangeText={(text) => setPassword(text)} placeholder="Password..."/>
    
        <Button onPress={() => {
            CreateUser();
            navigation.navigate("Camera");
        }} title="Register"/>

        <Button onPress={() => {
            SignIn();
            navigation.navigate("Camera");
        }} title="Sign In"/>

        <Button title="Go to Camera page" onPress={()=> navigation.navigate('Camera')}/>
    </View>
}