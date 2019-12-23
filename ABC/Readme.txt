How to use

1. 크롬 익스플로러를 연다.
2. 검색창에 'Chrome://extensions'를 입력해 확장프로그램 관리자로 이동한다.
3. '압축해제된 확장프로그램을 로드합니다.' 버튼을 클릭한다.
4. 해당 폴더를 선택 후 로드한다.

구성

1. popup.html -> 팝업 아이콘을 클릭하면 나오는 메뉴 구성
2. menu.html, menu_categorize.html, menu_about.html -> 각각 Home, Categorize, About 화면 구성
3. show_{$category}.html -> show 하위 항목의 카테고리별 url 리스트를 출력하는 화면 구성
4. display_bookmarks.js -> categorize 항목에서 분류가 필요한 북마크 리스트 출력
5. transmit_list.js -> 서버로 categorize에서 선택한 북마크 리스트 전송
6. show_print.js -> show 하위 항목의 카테고리별 url 리스트를 서버로부터 받아서 출력