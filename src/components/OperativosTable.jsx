import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { DataTable, IconButton } from "react-native-paper";

const OperativosTable = ({ index = 0 }) => {
  const navigation = useNavigation();

  return (
    <DataTable style={styles.tableData}>
      <DataTable.Row onPress={() => navigation.navigate("Crear Operativos")}>
        <DataTable.Cell>
          <View>
            <Text style={styles.cellText}>Nombre del Operativo</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell>
          <View style={styles.rowContent}>
            <Text style={styles.titleText}>Fecha</Text>
            <IconButton
              icon="delete"
              size={20}
              iconColor="rgb(186, 26, 26)"
              onPress={() => console.log("Sexito")}
            />
          </View>
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default OperativosTable;

const styles = StyleSheet.create({
  tableData: {
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: "rgb(240, 219, 255)",
  },
  cellText: {
    fontWeight: "bold",
  },
  rowContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    flex: 1,
  },
});
