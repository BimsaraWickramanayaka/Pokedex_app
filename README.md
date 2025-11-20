# Pokédex App 🚀

A React Native Pokémon app built with [Expo](https://expo.dev) to practice mobile app development. This app fetches Pokémon data from the [PokéAPI](https://pokeapi.co/) and displays a list of Pokémon with their details.

## Features

- Browse the first 10 Pokémon
- View Pokémon front and back sprites
- Display Pokémon type with color-coded backgrounds
- Navigate to detailed view for each Pokémon
- File-based routing with Expo Router

## Tech Stack

- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform and runtime
- **TypeScript** - Type safety
- **Expo Router** - Navigation and routing
- **PokéAPI** - Pokémon data source

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Open the app using one of these options:
   - [Expo Go](https://expo.dev/go) on your mobile device
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

## Project Structure

```
app/
├── index.tsx       - Home screen with Pokémon list
├── details.tsx     - Individual Pokémon details
└── _layout.tsx     - Navigation layout
```

## Learning Outcomes

This project demonstrates:
- Fetching data from REST APIs
- Managing state with React hooks
- Parallel data fetching with `Promise.all()`
- TypeScript interfaces for type safety
- React Native styling and layouts
- Navigation between screens

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
