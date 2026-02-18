import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import UseFetchQuery from "@/hooks/useFetchQuery";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, Text, View, ViewStyle } from "react-native";

export default function ProductView() {
  const params = useLocalSearchParams();
  const id = params.id;
  const colors = Colors;

  const res = UseFetchQuery(`/${id}`);
  const { data, isFetching } = res;
  const { name, status, species, image, gender, location, origin } = data ?? {
    name: "",
    status: "",
    species: "",
    image: "",
    gender: "",
    location: "",
    origin: "",
  };

  return isFetching ? (
    <View>
      <View style={styles.header}>
        {/* background */}
        <View
          style={{
            position: "absolute",
            zIndex: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: 200,
            backgroundColor: "black",
            opacity: 0.3,
          }}
        ></View>

        <ThemedText variant="title">Flèche</ThemedText>

        <View>
          <ThemedText variant="namesOnView" color="bg">
            {name}
          </ThemedText>
          <View style={{ flexDirection: "row", gap: 8, paddingVertical: 6 }}>
            <Text style={styles.status}>{status}</Text>
            <Text
              style={[
                styles.species,
                { backgroundColor: colors.type["human"] },
              ]}
            >
              {species}
            </Text>
          </View>
        </View>

        <Image
          source={{
            uri: image,
          }}
          style={{
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
            height: 500,
            padding: 0,
            margin: 0,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: 22,
        }}
      >
        <View style={styles.group}>
          <ThemedText variant="formLabel">Sexe</ThemedText>
          <ThemedText variant="formValue">{gender}</ThemedText>
        </View>
        <View style={styles.group}>
          <ThemedText variant="formLabel">Situation</ThemedText>
          <ThemedText variant="formValue">{location.name}</ThemedText>
        </View>
        <View style={styles.group}>
          <ThemedText variant="formLabel">Origine</ThemedText>
          <ThemedText variant="formValue">{origin.name}</ThemedText>
        </View>
      </View>
    </View>
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={48} color="black" />
    </View>
  );
}

const styles = {
  header: {
    position: "relative",
    height: 500,
    justifyContent: "space-between",
    paddingVertical: 64,
    paddingHorizontal: 16,
  } satisfies ViewStyle,
  status: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    borderRadius: 4,
    textAlign: "center",
  } satisfies ViewStyle,
  species: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    fontWeight: "bold",
    color: "black",
  } satisfies ViewStyle,
  group: {
    width: 200,
    paddingVertical: 18,
    paddingHorizontal: 10,
  },
};
