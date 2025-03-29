# Projekt fiszek

## Opis projektu

Głównym celem projektu jest stworzenie prostej aplikacji mobilnej do nauki fiszek.

Dokumentację API można znaleźć pod linkiem: https://w2025-demo.deployed.space/api/docs/

Design aplikacji dostępny jest na Figmie: https://www.figma.com/design/ENUxCgDLMl0fnwbr4FdQku/Makiety-warsztaty

Gotowa wersja aplikacji webowej dostępna jest pod adresem: https://w2025-demo.deployed.space

Gotowa wersja aplikacji mobilnej: https://github.com/deployed/flashcards-workshop-mobile

## Technologie

- React Native
- Expo
- Expo Go
- TypeScript

## Dodatkowe biblioteki

- [Tanstack Query](https://tanstack.com/query/latest)
- [expo-router](https://docs.expo.dev/router/introduction/)
- [react-native-reanimated (BONUS)](https://docs.swmansion.com/react-native-reanimated/examples/flipCard/)

## Zadania do wykonania

### 1. **Implementacja ekranów zgodnie z mockupami:**

- **Ekran startowy:** 
  - Stworzenie ekranu startowego aplikacji z podstawowymi informacjami, przyciskiem rozpoczynającym naukę fiszek oraz możliwością tworzenia zestawów fiszek.
  
- **Edycja zestawu fiszek:** 
  - Dodanie ekranu umożliwiającego edytowanie istniejących zestawów fiszek (np. zmiana nazw lub treści fiszek).
  
- **Tworzenie nowego zestawu fiszek:** 
  - Implementacja ekranu oraz popupu pozwalającego na dodawanie nowych zestawów fiszek.
  
- **Ustawienia konkretnego zestawu fiszek:** 
  - Przyciski edytowania, usuwania oraz „ucz się”.
  
- **Ekran nauki:** 
  - Dodanie ekranu do nauki wraz z przyciskami „wiem” i „nie wiem”.
  
- **Podsumowanie nauki:** 
  - Dodanie ekranu podsumowującego proces nauki fiszek, wyświetlającego statystyki, takie jak liczba fiszek oznaczonych jako „umiem” i „nie umiem,” oraz opcje powrotu do listy zestawów.

### 2. **Podłączenie się do backendu:**

- Integracja z backendem w celu przechowywania i pobierania danych dotyczących zestawów fiszek oraz postępów nauki – skorzystanie z Tanstack Query.

### 3. **Stylizacja aplikacji:**

- Zastosowanie dostarczonych komponentów bazowych, takich jak `Button` i `Typography`, do odpowiedniego wystylizowania aplikacji.
- Dopasowanie stylizacji do dostarczonych mockupów.

## Bonus

1. Dodanie animacji do obracającej się fiszki za pomocą `react-native-reanimated`.
2. Dodanie możliwości usuwania konkretnej fiszki.
3. Dodanie scrollview do ekranu listy zestawów fiszek.
