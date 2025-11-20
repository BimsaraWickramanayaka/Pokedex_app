import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text } from "react-native";



export default function Details() {
    const params = useLocalSearchParams();
    console.log(params.name);

    useEffect(() => {
        //fetch pokemon details by name
        fetchPokemonByName(params.name as string);
    }, []);

    async function fetchPokemonByName(name: string) {
        try {
            // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            // const data = await response.json();
            // console.log(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Error fetching pokemon details:", error);
        }
    }

  return (
    <>
    <Stack.Screen
      options={{
        title: params.name as string,
      }}
    />
    <ScrollView
    contentContainerStyle={{
      gap: 16,
      padding: 16,
    }}
    >
      <Text>Details Screen for {params.name}</Text>

    </ScrollView>
    </>
  );
}


