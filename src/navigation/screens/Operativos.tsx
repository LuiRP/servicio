import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useTheme, FAB, Searchbar } from "react-native-paper";
import OperativosTable from "../../components/OperativosTable";

export function Operativos() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Searchbar
          style={styles.searchbar}
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Buscar"
        />
        <FAB
          label="Crear"
          style={styles.fab}
          onPress={() => navigation.navigate("Crear Operativos")}
          icon={"notebook"}
        />
        <FAB
          label="Exportar"
          style={styles.fab}
          onPress={() => console.log("Export PDF")}
          icon={"file-export"}
          variant="tertiary"
        />
      </View>
      <OperativosTable></OperativosTable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  searchbar: {
    flex: 1,
  },
  fab: {
    marginLeft: 8,
  },
});
