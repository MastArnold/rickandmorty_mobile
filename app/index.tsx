import Card from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import { UseInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import UseThemedColors from "@/hooks/useThemeColors";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colors = UseThemedColors();
  const { data, isFetching, fetchNextPage, status } =
    UseInfiniteFetchQuery("/");
  console.log("STATUS : ", status);

  const characters = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <SafeAreaView style={[style.container, { backgroundColor: colors.bg }]}>
      <ThemedText variant="title">Rick et Morty</ThemedText>

      <View style={style.gridContainer}>
        <FlatList
          numColumns={2}
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Card {...item}></Card>}
          ListFooterComponent={
            isFetching ? (
              <ActivityIndicator size={32} color={colors.text} />
            ) : null
          }
          onEndReached={() => {
            if (!isFetching) {
              fetchNextPage();
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 20,
    flex: 1,
  },
  gridContainer: {
    paddingVertical: 32,
  },
});
