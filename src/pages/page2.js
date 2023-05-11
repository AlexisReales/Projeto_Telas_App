import {View, Text, StyleSheet} from 'react-native'

export default function Page2(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Segunda Página</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 30,
    }
})