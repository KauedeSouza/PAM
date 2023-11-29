import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Table from '../../components/tabela';




export default function Delete() {

 return(

    <View style={styles.container}>

<TouchableOpacity style={{backgroundColor: '#fff', width: 90, fontSize: 20, marginLeft: 10, marginTop: 23, borderRadius: 10, padding:5}}>Adicionar</TouchableOpacity>

    <Table></Table>

    </View>

);

}




const styles=StyleSheet.create({

container:{

 flex:1,

 backgroundColor:"#141a29",

 alignItems:"center",
},

});