import { React, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../GloblaStyles";
import { StyleSheet } from "react-native";

function Card(props) {

    const [detalhes, setDetalhes] = useState(false);
    return (
        <View
            style={styles.card}
        >
            <View style={globalStyles.linha}>
                <View
                    style={styles.descricao}
                >
                    <Text
                        style={styles.titulo}
                    >
                        {props.titulo}
                    </Text>
                    <Text
                        style={styles.subTitulo}
                    >
                        {props.subTitulo}
                    </Text>
                </View>
                <View
                    style={styles.botaoDescricao}
                >
                    <TouchableOpacity
                        style={styles.detalhes}
                        onPress={(detalhes) => setDetalhes(true)}
                    >
                        <Text
                            style={styles.detalhesText}
                        >
                            ?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                (detalhes == true) ?
                    <Text
                        style={styles.descricao}
                    >
                        {props.descricao}
                    </Text>
                    : <>
                    </>
            }
            <TouchableOpacity>
                <Text
                    style={styles.acaoPrimaria}
                >
                    {props.acaoPrimaria}
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

    descricao: {
        width: "85%",
        alignItems: "center",
        paddingStart: "15%"
    },
    botaoDescricao: {
        width: "15%",
        alignItems: "center",
    },

    detalhes: {
        width: 24,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#003E52",
    },
    detalhesText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF"
    },

    titulo: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#003E52",
        textAlign: "center"
    },
    subTitulo: {
        fontSize: 10,
        fontWeight: "400",
        color: "#003E52",
        textAlign: "center"
    },
    descricao: {
        fontSize: 14,
        margin: 4,
        fontWeight: "500",
        color: "#003E52",
        textAlign: "center"
    },
    acaoPrimaria: {
        margin: 20,
        fontSize: 20,
        color: "#00B707"
    },

});