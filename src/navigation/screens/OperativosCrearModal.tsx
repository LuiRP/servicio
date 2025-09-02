import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { PaperSelect } from "react-native-paper-select";

const OperativosCrearModal = () => {
  const navigation = useNavigation();

  const [nombreOperativo, setNombreOperativo] = React.useState("");
  const [fechaOperativo, setFechaOperativo] = React.useState("");
  const [tipoOperativo, setTipoOperativo] = React.useState("");
  const [descripcionOperativo, setDescripcionOperativo] = React.useState("");
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
          label="Nombre del Operativo"
          value={nombreOperativo}
          onChangeText={(nombreOperativo) =>
            setNombreOperativo(nombreOperativo)
          }
        />

        <TextInput
          label="Fecha del Operativo"
          value={fechaOperativo}
          onChangeText={(fechaOperativo) => setFechaOperativo(fechaOperativo)}
        />

        <TextInput
          label="Tipo de Operativo"
          value={tipoOperativo}
          onChangeText={(tipoOperativo) => setTipoOperativo(tipoOperativo)}
          keyboardType="numeric"
        />

        <TextInput
          label="Descripción del Operativo"
          value={descripcionOperativo}
          onChangeText={(descripcionOperativo) =>
            setDescripcionOperativo(descripcionOperativo)
          }
          keyboardType="numeric"
        />

        <View style={{ gap: 3 }}>
          <PaperSelect
            label="Familias"
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
        </View>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Crear Operativo")}
      >
        Crear Operativo
      </Button>
    </View>
  );
};

export default OperativosCrearModal;

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
