import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultsShow", {id: item.id})}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
