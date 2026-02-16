import { Colors } from "@/constants/Colors";
import useThemeColors from "@/hooks/useThemeColors";
import { StyleSheet, Text, TextProps } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body3: {
    fontSize: 14,
    fontWeight: "bold",
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 12,
  },
});

type Props = TextProps & {
  variant?: keyof typeof styles;
  color?: keyof (typeof Colors)["light"];
};

export default function ThemedText({ variant, color, ...rest }: Props) {
  const colors = useThemeColors();
  return (
    <Text
      style={[styles[variant ?? "body3"], { color: colors[color ?? "text"] }]}
      {...rest}
    />
  );
}
