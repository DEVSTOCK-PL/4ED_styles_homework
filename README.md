PRACA DOMOWA: useContext, obsługa formularza, asynchroniczność

TERMIN: 7 LISTOPADA

Celem pracy domowej będzie wykorzystanie w praktyce useContext oraz obsługa formularzy i komunikacji asynchronicznej z BE.

1. Stwórz nowy branch context_homework_imię_nazwisko, oraz po zakończonej pracy dodaj PR do main
2. Dodaj jasny i ciemny motyw aplikacji, który będzie globalny. Do tego celu użyj useContext, oraz funkcjonalności creatGlobalStyles, która zawarta jest w bibliotece styled-components (dokonaj samodzielnego researchu).
3. Samodzielnie zaproponuj motyw kolorystyczny, zaprojektuj przycisk toggle, oraz umieść go w pasku nawigacji, w wybranym przez Ciebie miejscu.
4. Dodaj logikę do formularza kontaktowego, która prześle wpis użytkownika do lokalnej bazy stworzonej w json-server, np. db.json
   - użyj formika lub react hook form do obsługi, oraz yup lub zod do walidacji formularza
   - użyj axiosa oraz dla chętnych - react query do obsługi logiki
   - spróbuj przechować logikę w custom hooku
5. Dodaj powiadomienie w formie snackbara z informacją o tym, czy przesłanie danych z formularza się powiodło, spróbuj użyć do tego paczki npm notistack
6. Dodaj następującą strukturę w pliku db.json, do której będziesz dodawać wpisy z formularza kontaktowego
   {
   "contact": [],
   }

Dla chętnych i ambitnych, po ukończeniu punktów 1-6 - stwórz system logowania i rejestracji
Widok: https://www.figma.com/file/v6ia15KchK6JX0vZb6lTni/styles_homework?type=design&node-id=1171-2334&mode=design&t=D21cApXU8wSlpy49-0

7. Dodaj podstrony logowania, rejestracji oraz widok profilu po zalogowaniu
8. Dodaj w pliku db.json dodatkowe tablice:
   {
   "contact": [],
   "users": [],
   "books": [
   {
   "id": 1,
   "title": "Tajemnice przeszłości",
   "description": "Podróż w głąb historii starożytnej cywilizacji, pełna zagadek i nieodkrytych tajemnic.",
   "author": "Jan Kowalski",
   "image": "https://via.placeholder.com/150?text=Book+1"
   },
   {
   "id": 2,
   "title": "Podróże po nieznanych lądach",
   "description": "Odkryj nieznane zakątki świata wraz z Anną, która przemierza dżungle, pustynie i oceany.",
   "author": "Anna Nowak",
   "image": "https://via.placeholder.com/150?text=Book+2"
   },
   {
   "id": 3,
   "title": "Nauka i technologia przyszłości",
   "description": "Spojrzenie na przyszłość nauki i technologii. Jak wyglądać będzie świat za 50 lat?",
   "author": "Piotr Zięba",
   "image": "https://via.placeholder.com/150?text=Book+3"
   },
   {
   "id": 4,
   "title": "Magia w codziennym życiu",
   "description": "Czy magia istnieje naprawdę? Poznaj fascynujący świat Magdy i jej niezwykłych zdolności.",
   "author": "Magda Lis",
   "image": "https://via.placeholder.com/150?text=Book+4"
   },
   {
   "id": 5,
   "title": "Tajniki kosmosu",
   "description": "Podróż w głąb wszechświata. Poznaj tajniki czarnych dziur, galaktyk i gwiazd.",
   "author": "Marek Dąb",
   "image": "https://via.placeholder.com/150?text=Book+5"
   }
   ]
   }
9. Formularz rejestracji powinien sprawdzać po mailu czy użytkownik istnieje, jeśli mail nie został użyty, dodaj do tablicy obiekt z nowo zarejestrowanym użytkownikiem, oraz przekieruj usera na stronę logowania.
10. Na podstronie logowania dodaj obsługę formularza, która sprawdzi mail i zgodność hasła - jeśli użytkownik zaloguje się poprawnie przekieruj go na stronę profilu. Uwagi:

- spróbuj przechowywać dane o zalogowanym użytkowniku w kontekście
- zwróć uwagę że pasek nawigacji zmieni swój wygląd po zalogowaniu, możesz wyświetlać warunkowo nowy wygląd paska pobierając dane o użytkowniku z kontekstu
- zalogowany użytkownik powinien swobodnie klikać na różne zakładki bez zmiany wyglądu paska nawigacji. Dopiero podczas wylogowania pasek powinien zmienić swój wygląd z powrotem na ten "wylogowany"
- na stronie profilu możesz sprawdzić czy użytkownik jest zalogowany i pobrać tablicę BOOKS z dokumentu db.json, żeby wyświetlić ją na stronie profilu.
  Kliknięcie wylogowania powinno czyścić nasz kontekst z danych o użytkowniku

11. DLA MEGA AMBITNYCH - spróbuj użyć localstorage do przechowania danych o użytkowniku aby odświeżenie apki nie powodowało wylogowania
12. :smiling_imp: DLA TOTALNYCH KOZAKÓW - dodaj użytkownikom role - user lub admin i w zależności od roli dodaj dodatkowe uprawnienia lub funkcjonalności :slightly_smiling_face: (np. dodawanie i ususwanie użytkowników z bazy json)

----------------------------\*\*\*--------------------------------

PRACA DOMOWA : ROUTING & CUSTOM HOOKS

1. Zadanie wykonaj na tym samym repozytorium tworząc branch o nazwie routing_homework_imie_nazwisko a następnie tworząc nowy PR do brancha main
2. Dodaj routing i zmień strukturę - nawigacja w layoucie musi działać i przenosić użytkownika do opisanych podstron. Użyj react-router-dom.
3. Pamiętaj o tym, aby stworzyć komponent layout, który będzie obejmować nawigację i stopkę, oraz przyjmie treść strony jako props children
4. Dla chętnych. Stwórz też oddzielny komponent przechowujący router
5. Logika przechowywana w custom hooku - napisz reużywalny custom hook useDonationLogic, który obsłuży działanie przycisku DONATE NOW na komponentach renderowanych na podstronie EVENTS.
   Niech kliknięcie Donate now dodaje do puli uzyskanych środków np. 1000$ oraz powoduje proporcjonalne poszerzanie paska postępu.
6. Pamiętaj aby odpowiednio przechowywać stan komponentu. Dodanie donacji nie powinno wpływać na sąsiednie komponenty
7. Spróbuj wyłączyć przycisk donacji gdy cel zostanie osiągnięty, lub dodaj samodzielnie wymyślony widok prezentujący nadwyżkę zebranej kwoty.
8. Dla chętnych osób, które po ukończeniu zadania będą się nudzić - dodaj podstronę z listą postaci z Rick&Morty API https://rickandmortyapi.com/api,
   dodając paginację opartą na przyciskach oraz ścieżce url, czyli wejście na path /list/5 sprawi że wyświetli się piąta strona listy (pamiętamy o hooku useParams)

WIDOKI DO PRACY DOMOWEJ: https://www.figma.com/file/v6ia15KchK6JX0vZb6lTni/styles_homework?type=design&node-id=522-1427&mode=design&t=RR1Kq5gCpeSMtPUI-0

TERMIN: 23 października 2023r. (daję późny termin bo dużo osób nie oddało pracy a są one powiązane. Pamiętajcie że teraz opóźnienia będą się nawarstwiać, więc zachęcam do działania :slightly_smiling_face: )

---------------------------\*\*\*-----------------------------------

PRACA DOMOWA : STYLES

Komponent App jest stylowany przez css.module
Inne komponenty przez 'styled-components'

Termin: 9 października 2023

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Praca domowa - Stylowanie w React

Setup:
Adres repozytorium - https://github.com/DEVSTOCK-PL/4ED_styles_homework
Widoki - https://www.figma.com/file/v6ia15KchK6JX0vZb6lTni/styles_homework?type=design&node-id=0-1&mode=design&t=QXcFg7hVOuTAADIl-0
dokumentacja styled-components - https://styled-components.com/docs

Merging Strategy:

1. klonujemy repozytorium za pomocą 'git clone' i pamiętamy o przejściu do naszego katalogu z projektem 'cd twoje-repo', lub otwieramy folder visualem
2. tworzymy własny branch, możemy zrobić to klikając w menu branchy w lewym dolnym rogu visuala lub za pomocą konsoli 'git checkout -b nazwa-brancha', nazwa brancha według templatki 'styles_homework_imię_nazwisko'
3. w folderze z projektem używamy terminala do instalacji zależności i paczek za pomocą komendy'npm i'
4. wprowadzamy zmiany w kodzie, które potem są widoczne w source control (git ikonka w menu po lewej)
5. wysyłamy zmmiany na serwer przyciskiem "publish branch" w source control lub w konsoli za pomocą 'git push origin nazwa-brancha'
6. jeśli kontynuujemy pracę, możemy commitować kolejne zmiany na nasz opublikowany branch przyciskiem Sync Changes lub w konsoli za pomocą 'git commit -m "opis zmian"'
7. Gdy skończymy musimy wejść na repozytorium i zrobić pull request do maina: - otwórz repo na GH i kliknij Pull requests na pasku - kliknij New pull request i wybierz base: main i compare: nazwa-brancha - kliknij Create pull request

   Założenia zadania:

8. Celem zadania jest odwzorowanie widoków z linku - jest to landing page organizacji ekologicznej.
9. założenia:
   - metodologia stylowania jaką przyjmujemy to styled-components
   - trzeba we własnym zakresie zrobić research dotyczący użycia media queries
   - widok musi być responsywny i uwzględniać urządzenia mobilne - przykładowe breakpointy:
     - 640px
     - 768px
     - 1024px
     - 1280px
     - 1536px
   - osoby chętne mogą wybrać sobie komponenty dla których zastosują inną metodologię, np. modules.css lub tailwind
   - praca musi być napisana zgodnie z najważniejszymi konwencjami React
     - każdy komponent powinien mieć jedno zadanie - jeśli się rozrasta, warto go podzielić
     - porządek w folderach - nie ma sensu przechowywać kilkudziesięciu plików JSX w folderze components, rozdzielaj sekcje w katalogu
     - kolejność importów - zachowuj spójność w kolejności importów. Na przykład, najpierw importuj biblioteki zewnętrzne, potem komponenty, a na końcu style.
     - reużywalność - staraj się tworzyć reużywalne komponenty. Każda sekcja może mieć ten sam layout, ale przyjmować inną zawartość jako children
   - elementy wektorowe, takie jak ikony zaimportuj do projektu jako tag svg
   - możesz stworzyć strukturę danych jako tablice obiektów których wartości są przekazywane do komponentów, oraz przekazywać treści do reużywalnych komponentów jako propsy
   - jest to single page app, więc nie musimy dodawać elementów nawigacji - to dodamy na kolejnej lekcji :)
   - DLA CHĘTNYCH\* - możesz dodać działanie nawigacji, które będzie po kliknięciu scrollować do danej sekcji strony
