import react from 'react';
import {View, Text, Image, TextInput, Button,Linking,ScrollView} from 'react-native';


const instagram = 'https://www.instagram.com/audiimuth_/';
const figma1 = 'https://www.figma.com/file/g8godWiLFbSDTM3KqBIXN8/KURIR?type=design&node-id=0-1&mode=design&t=DvT52cJvIK1fkKEv-0' ;
const figma2 = 'https://www.figma.com/file/OYy4RU9XbXL8nh9jDU8Fqi/Audi-Muthiah-A(Desain-apk-Wisata)?type=design&mode=design&t=ERJ9hrJExTvQLeJO-0' ;
const figma3 = 'https://www.figma.com/file/m3AIDgpAVKYNvXRTQXhj9N/Web-LandingPage?type=design&node-id=302-1213&mode=design&t=qwWkbfrfwWoW18jc-0';


const  Portoo= () => {
  return(
    <ScrollView>
    <View style={{backgroundColor: '', flex:1 }}>
    
    <View style={{backgroundColor:'#FFE87C', alignItems:'center',padding:30,}}>
    <Image style={{width:160, height:160, borderRadius:100 }} source={require('../assets/audii.jpg')}/>
    <Text style={{fontSize: 15, padding : 5, fontWeight:'bold', textAlign: 'center', color:'white'}}>Audi Muthiah Arrasyid</Text>

    <Text style={{fontSize: 11, textAlign: 'center', color:'white'}}>Saya merupakan siswi SMK Telkom Purwokerto, Kelas XII, Jurusan Rekaya Perangkat Lunak </Text>

    <Text style={{fontSize: 11, textAlign: 'center', color:'white'}}>"Tuhan Tidak Membiarkanmu Bertahan Sejauh Ini Hanya Untuk Gagal"</Text>

    <Text style={{fontSize: 11, textAlign: 'center', color:'white', fontWeight:'bold'}}>Purwokerto, 16 Oktober 2023</Text>
    </View>
    

    <View style ={{marginTop:3, padding:3, borderRadius:50, marginTop:15, marginLeft:100, marginRight:100}}>
    <Button title="Contact Me" color="#FFDEAD" onPress = {() => Linking.openURL(instagram)} />
      </View>
      <Text style={{fontSize: 15, fontWeight:'bold', marginTop:10, textAlign: 'center', color:'Black'}}>My Recent Project</Text>
<Image style={{width:330, height:180, marginTop:15, borderRadius:9, marginLeft:15, marginRight:15}} source={require('../assets/Frame26.png')}/>

     <View style ={{marginTop:3, padding:3, borderRadius:100, marginTop:10, marginLeft:100, marginRight:100}}> 
     

    <Button title="VIEW" color="#FFDEAD" onPress = {() => Linking.openURL(figma1)} />  
      </View>
    
    <Image style={{width:330, height:160, marginTop:15, borderRadius:15, marginLeft:15, marginRight:15}} source={require('../assets/Frame8.png')}/>

     <View style ={{marginTop:3, padding:3, borderRadius:50, marginTop:10, marginLeft:100, marginRight:100}}> 
    <Button title="VIEW" color="#FFDEAD" onPress = {() => Linking.openURL(figma2)} />  
      </View>

    <Image style={{padding:50, width:200, height:300, marginTop:20, borderRadius:15, marginLeft:80, marginRight:100}} source={require('../assets/Frame1.png')}/>
      <View style ={{marginTop:3, padding:3, borderRadius:50, marginTop:10, marginLeft:100, marginRight:100}}> 
    <Button title="VIEW" color="#FFDEAD" onPress = {() => Linking.openURL(figma3)} />  
      </View>


    <TextInput placeholder="Masukan" style={{backgroundColor:'#DEB887', padding:22, borderRadius:10, marginTop:20, marginLeft: 10, marginRight:10}} />
    </View>

    </ScrollView>

  );
};

export default Portoo;