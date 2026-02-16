import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ProductView() {
  const params = useLocalSearchParams();

  return (
    <View>
      <Text>Identifiant du produit {params.id}</Text>
    </View>
  );
}
