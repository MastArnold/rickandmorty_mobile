import { Image, TextInput, View, ViewStyle } from "react-native";

export default function SearchInput() {
  return (
    <View style={inputStyles.container}>
      <Image
        source={require("@/assets/icons/search.png")}
        style={inputStyles.ico}
      ></Image>
      <TextInput style={inputStyles.input}></TextInput>
    </View>
  );
}

const inputStyles = {
  container: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: "auto",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
  } satisfies ViewStyle,
  input: {
    width: 100,
    paddingHorizontal: 10,
  } satisfies ViewStyle,
  ico: {
    width: 20,
    height: 20,
  } satisfies ViewStyle,
};
