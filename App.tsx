import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import RootNavigations from "./src/navigation/RootNavigation";
import mocktest from "./src/mocks/mockServer";
import { RecoilRoot } from "recoil";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  mocktest();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RecoilRoot>
          <RootNavigations colorScheme={colorScheme} />
        </RecoilRoot>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
