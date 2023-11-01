import { StyleSheet, Text, View, FlatList, TouchableOpacity} from "react-native";
import BannerFilmes from "../../components/bannerFilmes";
import Filmes from "../../data/movies"
import Header from "../../components/header";
import SearchBar from "../../components/searchbar";
import CardMovies from "../../components/cardFilmes";
import CardItens from "../../components/cardSeries/index";
import Series from "../../data/series"
import React,{useState,useEffect} from "react";
import {useNavigation} from '@react-navigation/native';




export default function App() {
      const navigation = useNavigation();

      const [movies,setMovies] = useState([]);


      useEffect(()=> {
         
            async function getMovies(){

                  try{
                  const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6eb989e820d6b3fd6db74ae54f7c5c2e&language=pt-BR");
                  const data = await response.json();

                  console.log(data.results)
                  setMovies(data.results)
                  }
                  catch(error){
                    console.error("REQUISIÇÂO FALHOU",error)
                  }
            }

            getMovies();
      },[] )

      const [series,setSeries] = useState([]);


      useEffect(()=> {
         
            async function getSeries(){

                  try{
                  const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=6eb989e820d6b3fd6db74ae54f7c5c2e&language=pt-BR");
                  const data = await response.json();

                  console.log(data.results)
                  setSeries(data.results)
                  }
                  catch(error){
                    console.error("REQUISIÇÂO FALHOU",error)
                  }
            }

            getSeries();
      },[] )

  return (
    <View style={styles.container}>

      

      <Header></Header>
<TouchableOpacity onPress={ () => navigation.navigate('Delete')} style={{backgroundColor: '#fff', width: 60, fontSize: 20, marginLeft: 250, marginTop: -23, borderRadius: 10, padding:5}}>Renda</TouchableOpacity>

      <SearchBar></SearchBar>

      <BannerFilmes></BannerFilmes>




      <View style={{width:"90%"}}>

      <Text style = {{fontSize:25,
                    color: 'white',
                    fontWeight:'bold',
                     textAlign:'center'}}> Filmes</Text>

      <FlatList
      horizontal ={true}
      showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id}
        
      renderItem={ ({item}) => (

        

        <CardMovies
      imagem = {item.poster_path}        
      titulo = {item.title}
      nota = {item.vote_average}
      sinopse = {item.overview}
        />

        )}

      />

      </View>

      <View style={{width:"90%"}}>

      <Text style = {{fontSize:25,
                    color: 'white',
                    fontWeight:'bold',
                     textAlign:'center'}}> Séries</Text>


      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={series}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        
           


        <CardItens

        

        imagem = {item.poster_path}        
      titulo = {item.name}
      nota = {item.vote_average}
      sinopse = {item.overview}

        />

        )}

      />

      </View>


    </View>

  );

}




const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#141a29",

    alignItems: "center",

  },

});