import { View, ViewProps } from "react-native";
import { useColorScheme } from "react-native";

export function ThemedView({ style, ...rest }: ViewProps) {
  const theme = useColorScheme();
  const backgroundColor = theme === "dark" ? "#1E1E1E" : "#FFFFFF";

  return <View style={[{ backgroundColor, flex: 1 }, style]} {...rest} />;
}
