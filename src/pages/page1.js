import {View, Text, StyleSheet} from 'react-native'

export default function Page1(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Primeira página</Text>
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