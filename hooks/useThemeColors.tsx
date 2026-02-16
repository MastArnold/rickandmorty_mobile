import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

export default function UseThemedColors() {
  const theme = useColorScheme() ?? "light";
  return Colors[theme];
}
