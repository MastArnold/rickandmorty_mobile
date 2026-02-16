import ThemedText from "@/components/ThemedText";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={style.container}>
      <ThemedText variant="title">Rick et Morty</ThemedText>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 20,
    flex: 1,
  },
});
