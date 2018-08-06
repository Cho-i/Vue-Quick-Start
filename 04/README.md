# 04  이벤트 처기

## 4.1 인라인 이벤트 처리

vue.js에서 이벤트는 v-on 디렉티브를 이용해서 처리할 수 있음.

[ex04-01.html](https://cho-i.github.io/Vue-Quick-Start/03/ex04-01.html)

amount 데이터 속성을v-model로 양방향 바인딩하였음. 사용자가 입력하는 값음 amount에 즉시 반영됨.

## 4.2 이벤트 핸들러 메서드

Vue 인스턴스에 등록한 메서드를 이벤트 처리 함수로 연결.

[ex04-02.html](https://cho-i.github.io/Vue-Quick-Start/03/ex04-02.html)

복잡한 기능은 메서드를 미리 작성해두고, v-on 디렉티브로 참조해서 이벤트 처리를 수행.

## 4.3 이벤트 객체

Vue.js의 이벤트 객체는 