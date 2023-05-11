import { StatusBar } from "react-native";
import Routes from '../src/routes/app.routes'
import {View} from 'react-native'

export default function App(){
  return(
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <Routes/>
    </View>
  )
}