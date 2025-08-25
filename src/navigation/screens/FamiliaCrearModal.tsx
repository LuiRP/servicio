import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { PaperSelect } from "react-native-paper-select";

const FamiliaCrearModal = () => {
  const navigation = useNavigation();

  const [numeroCasa, setNumeroCasa] = React.useState("");
  const [jefeFamilia, setJefeFamilia] = React.useState("");
  const [numeroPersonas, setNumeroPersonas] = React.useState("");
  const [bombonas1, setBombonas1] = React.useState({
    value: "",
    list: [
      { _id: "1", value: "Ninguna" },
      { _id: "2", value: "10 Kg" },
      { _id: "3", value: "18 Kg" },
      { _id: "4", value: "32 Kg" },
    ],
    selectedList: [],
    error: "",
  });
  const [bombonas2, setBombonas2] = React.useState({
    value: "",
    list: [
      { _id: "1", value: "Ninguna" },
      { _id: "2", value: "10 Kg" },
      { _id: "3", value: "18 Kg" },
      { _id: "4", value: "32 Kg" },
    ],
    selectedList: [],
    error: "",
  });

  return (
    <View style={styles.viewContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Número de Casa"
          value={numeroCasa}
          onChangeText={(numeroCasa) => setNumeroCasa(numeroCasa)}
        />

        <TextInput
          label="Jefe de Familia"
          value={jefeFamilia}
          onChangeText={(jefeFamilia) => setJefeFamilia(jefeFamilia)}
        />

        <TextInput
          label="Número de personas en la Familia"
          value={numeroPersonas}
          onChangeText={(numeroPersonas) => setNumeroPersonas(numeroPersonas)}
          keyboardType="numeric"
        />

        <View style={{ gap: 3 }}>
          <PaperSelect
            label="Tipo de la Primera Bombona"
            value={bombonas1.value}
            onSelection={(value: any) => {
              setBombonas1({
                ...bombonas1,
                value: value.text,
                selectedList: value.selectedList,
                error: "",
              });
            }}
            arrayList={[...bombonas1.list]}
            selectedArrayList={bombonas1.selectedList}
            errorText={bombonas1.error}
            multiEnable={false}
          />
          <PaperSelect
            label="Tipo de la Segunda Bombona "
            value={bombonas2.value}
            onSelection={(value: any) => {
              setBombonas2({
                ...bombonas2,
                value: value.text,
                selectedList: value.selectedList,
                error: "",
              });
            }}
            arrayList={[...bombonas2.list]}
            selectedArrayList={bombonas2.selectedList}
            errorText={bombonas2.error}
            multiEnable={false}
          />
        </View>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Crear Familia")}
      >
        Añadir familia
      </Button>
    </View>
  );
};

export default FamiliaCrearModal;

const styles = StyleSheet.create({
  viewContainer: {
    padding: 16,
    marginBottom: 48,
    flex: 1,
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  inputContainer: {
    gap: 16,
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
