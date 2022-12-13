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
                    <Text
                        style={styles.cardTitulo}
                    >
                        {props.titulo}
                    </Text>
                    <Text 
                        style={styles.cardSubTitulo}
                    >
                        {props.subTitulo}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.detalhes}
                >
                    <Text
                    style={styles.detalhesText}
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
        width: 24,
        height:24,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#003E52",
    },
    detalhesText:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF"
    },

    cardTitulo:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#003E52",
    },
    cardSubTitulo:{
        fontSize: 8,
        fontWeight: "600",
        color: "#003E52",
    },

});