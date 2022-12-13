import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { globalStyles } from "../GloblaStyles";
import { StyleSheet } from "react-native";

function Card(props) {

    return (
        <View
            style={styles.card}
        >
            <View style={globalStyles.linha}>
                <View
                    style={globalStyles.center}
                >
                    <Text>
                        {props.titulo}
                    </Text>
                    <Text>
                        {props.subTitulo}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.detalhes}
                >
                    <Text
                    >
                        ?
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text>
                    Continuar
                </Text>
            </TouchableOpacity>
        </View>
    );

} export default Card;

const styles = StyleSheet.create({

    card: {
        alignItems: "center",
        margin: 30,
        padding: 10,
        minHeight: 100,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
    },
    detalhes:{
        width: 20,
        height:20,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#003E52",
    }


});