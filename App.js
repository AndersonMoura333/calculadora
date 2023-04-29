import { Pressable, StyleSheet, Text, View } from "react-native";

export function Row({ ButtonArray }) {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 10,
      }}
    >
      {ButtonArray.map((item) => (
        <Pressable
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#272b34",
            marginHorizontal: 10,
            borderRadius: 10,
          }}
          key={item.text}
        >
          <Text
            style={{ fontSize: 26, fontFamily: "monospace", color: item.color }}
          >
            {item.text}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 3,
          backgroundColor: "#22252e",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 24 }}>
          308{" "}
          <Text style={{ fontSize: 20, color: "#a16a71", marginVertical: 10 }}>
            ×
          </Text>{" "}
          42
        </Text>
        <Text style={{ fontSize: 48, marginBottom: 30 }}>12936</Text>
      </View>
      <View
        style={{
          flex: 4,
          backgroundColor: "#292d36",
          paddingTop: 30,
          paddingBottom: 10,
          borderTopStartRadius: 36,
          borderTopEndRadius: 36,
        }}
      >
        <Row
          ButtonArray={[
            { text: "AC", color: "#52baa8" },
            { text: "+/-", color: "#52baa8" },
            { text: "%", color: "#52baa8" },
            { text: "÷", color: "#a16a71" },
          ]}
        ></Row>
        <Row
          ButtonArray={[
            { text: "7", color: "#fff" },
            { text: "8", color: "#fff" },
            { text: "9", color: "#fff" },
            { text: "×", color: "#a16a71" },
          ]}
        ></Row>
        <Row
          ButtonArray={[
            { text: "4", color: "#fff" },
            { text: "5", color: "#fff" },
            { text: "6", color: "#fff" },
            { text: "-", color: "#a16a71" },
          ]}
        ></Row>
        <Row
          ButtonArray={[
            { text: "1", color: "#fff" },
            { text: "2", color: "#fff" },
            { text: "3", color: "#fff" },
            { text: "+", color: "#a16a71" },
          ]}
        ></Row>
        <Row
          ButtonArray={[
            { text: "R", color: "#fff" },
            { text: "0", color: "#fff" },
            { text: ".", color: "#fff" },
            { text: "=", color: "#a16a71" },
          ]}
        ></Row>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22252e",
  },
});
