import { Text, TextProps, TextStyle } from "react-native";
import { useColorScheme } from "react-native";

type ThemedTextProps = TextProps & {
  type?: "title" | "body" | "link";
  style?: TextStyle | TextStyle[];  
};

export function ThemedText({ type = "body", style, ...rest }: ThemedTextProps) {
  const theme = useColorScheme();
  
  const getTextStyle = (): TextStyle => {
    switch (type) {
      case "title":
        return { fontSize: 24, fontWeight: "bold" };
      case "link":
        return { color: theme === "dark" ? "#4DA6FF" : "#007AFF" };
      default:
        return { fontSize: 16 };
    }
  };

  return <Text style={[getTextStyle(), ...(Array.isArray(style) ? style : [style])]} {...rest} />;
}
