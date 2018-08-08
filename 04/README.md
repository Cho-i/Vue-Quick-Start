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

Vue.js의 이벤트 객체는 기존의 순수 자바스크립트에서 사용하던 이벤트 객체의 정보를 거의 대부분 그대로 이용할 수 있음.

*이벤트 객체의 주요 공통 속성

| 속성명           | 설명                                                         |
| ---------------- | ------------------------------------------------------------ |
| target           | 이벤트가 발생한 HTML 요소를 리턴함.                          |
| currentTarget    | 이벤트리스너가 이벤트를 발생시키는 HTML 요소를 리턴함.       |
| path             | 배열값. 이벤트 발생 HTML 요소로부터 document, window 객체로까지 거슬러 올라가는 경로를 나타냄. |
| bubbles          | 현재의 이벤트가 버블링을 일으키는 이벤트인지 여부를 리턴함.  |
| cancelable       | 기본 이벤트를 방지할 수 있는지 여부를 리턴함.                |
| defaultPrevented | 기본 이벤트가 방지되었는지 여부를 나타냄.                    |
| eventPhase       | 이벤트 흐름의 단계를 나타냄.<br />1:포착(CAPTURING_PHASE)<br />2:이벤트 발생(AT_TARGET)<br />3:버블링(BUBBLING_PHASE) |
| srcElement       | IE에서 사용되던 속성으로 target과 동일한 속성.               |

## 4.4 기본 이벤트

기본 이벤트 실행을 중지시킬 수 있는 방법

[ex04-03.html](https://cho-i.github.io/Vue-Quick-Start/03/ex04-03.html)

`confirmFB` 메서드는 사용자에게 확인을 받기 위해서 `confirm()` 함수를 사용. 사용자가 확인 버튼이 아닌 취소 버튼을 클릭하면 `preventDefault()` 메서드가 호출되어 기본 이벤트 실행 중지시킴.

`contextmenu` 이벤트가 발생할 때 `ctxStop` 메서드는 무조건 `preventDefault()` 메서드를 호출.

매번 `preventDefault()`를 작성하기 쉽지 않음. Vue.js에서 이벤트 수식어라는 것을 제공 `v-on:contextmenu.prevent="ctxStop"` 조건 논리식의 결과에 따라서 `preventDefault()` 직접 포출해야 하는 경우도 있음.

## 4.5 이벤트 전파와 버블링

HTML 문서의 이벤트 처리는 3단계를 거침. 

1. 1단계는 문서 내 요소에서 이벤트가 발생했을때 HTML 문서의 밖에서 부터 이벤트를 발생시킨 HTML 요소까지 포착해 들어가는 이벤트 포착 단계
2. 2단계는 이벤트를 발생시킨 요소에 다다르면 요소의 이벤트에 연결된 함수를 직접 호출시키는 이벤트 발생 단계
3. 3단계는 이벤트가 발생한 요소로부터 상위 요소로 거슬러 올라가면서 동일한 이벤트를 호출시키는 버블링 단계

[ex04-04.html](https://cho-i.github.io/Vue-Quick-Start/03/ex04-04.html)

inner만 클릭했지만 outer의 click 이벤트가 실행된 것을 알수 있음. 중요한 것은 currentTarget과 target값이 서로 다름. 버블링 단계에서의 target은 이벤트가 일어난 원본 요소를 가리킴. 이 속성값을 이용해 의도적으로 버블링을 활용. 하지만 일반적으로는 이벤트 버블링은 막아야함. inner를 클릭했을 때 상위요소로의 이벤트의 전파를 막아야 하는 것. 이를 위해 이벤트 객체 `stopPropagation()` 메서드를 호출.

이벤트수식어로 대체할 수 있음.

- .stop:이벤트 전파를 중단


- .capture:CAPTURING_PHASE 단계에서만 이벤트가 발생


- .self:RAISING_PHASE 단계일 때만 이벤트가 발생

## 4.6 이벤트 수식어

once 수식어는 한 번만 이벤트를 발생 `@click.once`

키코드 수식어는 키보드의 키를 누를 때 고유의 키코드 값을 가질 때만 이벤트를 발생 `@keyup`

마우스 버튼 수식어는 마우스 왼쪽, 오른쪽 클릭해서 `@mouseup.left`