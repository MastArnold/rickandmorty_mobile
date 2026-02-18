import { Link } from "expo-router";
import { Image, Pressable, View } from "react-native";
import ThemedText from "./ThemedText";

type Props = {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
};

export default function Card({ name, status, species, id, image }: Props) {
  return (
    <Link href={{ pathname: "/character/[id]", params: { id: id } }} asChild>
      <Pressable style={cardStyle.container} android_ripple={{ color: "red" }}>
        <View>
          <Image
            source={{
              uri: image,
            }}
            style={cardStyle.photo}
          />
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 4,
          }}
        >
          <ThemedText
            variant="subtitle"
            marginBottom={4}
            addStyles={{ maxWidth: 180 }}
          >
            {name}
          </ThemedText>
          <ThemedText
            variant="body3"
            addStyles={{ textTransform: "capitalize", maxWidth: 180 }}
          >
            {status} - {species}
          </ThemedText>
        </View>
      </Pressable>
    </Link>
  );
}

const cardStyle = {
  container: {
    flex: 1 / 2,
    padding: 10,
  },
  photo: {
    width: 180,
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
};
