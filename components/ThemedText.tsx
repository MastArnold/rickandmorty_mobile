import { Colors } from "@/constants/Colors";
import useThemeColors from "@/hooks/useThemeColors";
import { StyleSheet, Text, TextProps } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  body3: {
    fontSize: 14,
    fontWeight: "semibold",
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 13,
  },
  namesOnView: {
    fontSize: 32,
    fontWeight: "bold",
  },
  formLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  formValue: {
    fontSize: 28,
    fontWeight: "semibold",
  },
});

type Props = TextProps & {
  variant?: keyof typeof styles;
  color?: keyof (typeof Colors)["light"];
  marginBottom?: number;
  addStyles?: {};
};

export default function ThemedText({
  variant,
  color,
  marginBottom,
  addStyles,
  ...rest
}: Props) {
  const colors = useThemeColors();
  return (
    <Text
      style={[
        styles[variant ?? "body3"],
        { color: colors[color ?? "text"], marginBottom: marginBottom ?? 0 },
        addStyles,
      ]}
      {...rest}
    />
  );
}
