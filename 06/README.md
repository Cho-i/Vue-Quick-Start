# 06 컴포넌트 기초

컴포넌트를 작성하고 사용할 때의 장점

1. 뛰어난 재사용성
2. 테스트가 용이
3. 디버깅이 편함

## 6.1 컴포넌트 조합

vue.js는 컴포넌트들을 조합해 전체 애플리케니션을 작성. 컴포넌트들은 부모-자식 관계로 트리 구조를 형성. 부모 컴포넌트가 자식 컴포넌트를 포함하는 형태. 컴포넌트들은 속성(Props)을 통해서 자식 컴포넌트로 정보를 전달 할 수 있음.  주로 부모에서 자식으로 단방향 전달. 양방향 할 수 있으나 비추.

자식 컴포넌트는 부모 컴포넌트로 이벤트를 발신할 수 있음. 자식 컴포넌트에서 사용자 정의 이벤트를 정의하고 이벤트를 발생시키면 부모 컴포넌트에서 이벤트 핸들러 메서드를 호출하도록 작성.

속성 전달과 이벤트 발신이 부모-자식 컴포넌트 간의 상호 작용을 일으키는 방법.

**컴포넌트 기반으로 개발할 때 data 옵션은 각 컴포넌트의 로컬 상태를 관리하기 위한 용도로만 사용. 반드시 함수로 작성하고 함수 내부에서 객체를 리턴하도록 작성.**

## 6.2 컴포넌트의 작성

컴포넌트를 작성하는 메서드

`Vue.component(tagname, option)`

tagname : 컴포넌트를 사용할 태그명.

options : 컴포넌트에서 렌더링할 templet 등을 지정.

[ex06-01.html](https://cho-i.github.io/Vue-Quick-Start/06/ex06-01.html)

## 6.3 DOM 템플릿 구문 작성 시 주의 사항

컴포넌트를 이용해 개발하면서 템플릿 문자열을 사용할 때 주의할 점이 있음. HTML 요소들은 자식 요소로 포함시킬 수 있는 요소들이 정해져 있는 경우가 있고, 이 사항을 브라우저가 구문 분석을 수행. 이 경우에 Vue 컴포넌트가 사용되면 때때로 오류가 발생.

[ex06-02.html](https://cho-i.github.io/Vue-Quick-Start/06/ex06-02.html)

코드가 `<script type="text/x-template">` 태그 안에서 사용되거나 .vue 확장자를 사용하는 단일 컴포넌트를 작성하는 경우에는 굳이 is 특성을 사용하지 않아도 됨. template 태그를 사용할 때는  is 특성을 사용해야 하므로 주의.

템플릿 문자열 안에서 루트 요소는 하나여야 함. 만일 템플릿 내부에 여러 요소를 작성해야 한다면 div요소 등을 이용해 감싸주어 하나의 루트 요소가 되게끔 해주어야 함.

```html
<template id="helloTemplate">
	<div>
        <div>hello</div>
        <div>hello</div>
    </div>
</template>
```

## 6.4 컴포넌트에서의 data 옵션

컴포넌트 내부의 로컬 상태 정보를 저장하기 위해 data 옵션을 사용할 수 있음.

[ex06-03.html](https://cho-i.github.io/Vue-Quick-Start/06/ex06-03.html)

data 옵션에 함수를 지정하는 이유는 동일한 컴포넌트가 여러번 사용되더라도 동일한 객체를 가리키는 것이 아니라 함수가 호출될 때마다 만들어진 객체가 리턴되기 때문. 매번 만들어진 객체가 리턴되기 때문에 서로 다른 객체를 참조.

## 6.5 props와 event

Vue 컴포넌트들이 부모 - 자식 관계로 형성되었을 때 각 컴포넌트 내부의 데이터는 캡슐화되기 때문에 다른 컴포넌트나 앱에서 접근할 수 없음. 따라서 부모 컴포넌트에서 자식 컴포넌트로 필요한 정보를 전달하기 위해서는 속성(props)을 이용해야 함. 주의할 점은 부모에서 자식으로 단방향으로만 전달할 수 있음.

반대로 자식 컴포넌트에서 부모 컴포넌트로의 전달은 이벤트를 이용함. 자식 컴포넌트에서 사용자 정의 이벤트를 필요하나 정보와 함께 발신(emit)하면 부모 컴포넌트에서 v-on 디렉티브를 이용해서 이벤트를 처리.

### 6.5.1 props를 이용한 정보 전달

vue 컴포넌트를 정의할 때 props라는 옵션을 작성하고 props명을 배열로 나열하면 됨.

[ex06-04.html](https://cho-i.github.io/Vue-Quick-Start/06/ex06-04.html)

- contacts라는 이름의 속성을 정의.


- contactlist-component에 v-bind 디렉티브를 이용해 각각 list1, list2 배열 데이터를 전달.


- contactlist-component는 전달받은 contacts 속성값을 이용해 v-for 디렉티브를 활용해 반복하며 렌더링함.

컴포넌트를 잘 만들고 활용하면 반복되는 코드를 줄이고 재사용성을 크게 높일 수 있음.

### 6.5.2 event를 이용한 정보 전달

event를 이용해서 전달하는 방법은 사용자 정의 이벤트를 활용.

자식 컴포넌트에서는 이벤트를 발신(emit)하고 부모 컴포넌트에서 v-on 디렉티브를 이용해 이벤트를 수신

[ex06-05.html](https://cho-i.github.io/Vue-Quick-Start/06/ex06-05.html)

- buttonInfo 속성을 정의하고 부모 컴포넌트로부터 값을 전달받으며 전달받은 값을 이용해 버튼 리스트를 생성.


- 버튼을 만들 때마다 text 값을 찍어주고, data-lang 특성에 value 값을 바인딩.


- 자식 컴포넌트를 사용하는 부모 컴포넌트는 buttons 속성과 msg 데이터 옵션을 포함하고 있음.
- 데이터 옵션은 해당 컴포넌트 내에서만 사용하기 위해 정의.
- buttons 속성은 vm Vue 인스턴스의 buttons 데이터를 전달받아 v-for 디렉티브를 사용해 반복적으로 생성되는 자식 컴포넌트에 각각의 배열값을 바인딩.
- 자식 컴포넌트 내부에서 버튼이 클릭되면 $emit() 메서드를 이용해 timeclick 이벤트를 발신.
- 부모 컴포넌트에서는 v-on 디렉티브를 이용해 timeclick 이벤트를 처리하는것.
- $emit()을 이용해 이벤트를 발신할 때 필요한 정보들을 인자로 전달할 수 있음.
- buttonInfo.text와 buttonInfo.value 두개의 인자는 부모 컴포넌트의 timeclickEvent 메서드의 k, v 인자로 전달되어 처리됨.

### 6.5.3 props와 event 예제

[ex06-06.html](https://cho-i.github.io/Vue-Quick-Start/06/ex06-06.html)

search-contact-component 부모 컴포넌트 내부에 자식 컴포넌트로써 search-component와 contactlist-component가 포함된 구조. 부모와 자식 컴포넌트 사이에 props와 event로 상호작용하도록 작성.

search-component에서 keyup 이벤트가 발생하면 search-contact-component로 이벤트를 발신. 이때 텍스트 박스에 입력된 문자열을 인자로 담아 부모 컴포넌트로 전달. 전달받은 데이터를 이용해 연락처 서비스API에 요청하여 이름이 포함된 연락처 목록을 받아옴.

받아온 연락처 목록은 부모 컴포넌트의 내부 상태로서 contactlist 데이터 옵션에 저장되고, 이것을 contacts 속성(props)을 통해 contactlist-component 컴포넌트로 전달.

## 6.6 이벤트 버스 객체를 이용한 통신

부모-자식 관계의 컴포넌트들은 props와 events를 사용. 하지만 부모-자식 관계가 아닌 경우는 이벤트 버스(Event Bus) 객체를 만듦. 비어 있는 Vue 인스턴스를 만들어서 사용.

이벤트를 수신하는 컴포넌트는 미리 이벤트 핸들러를 등록해두어야 함. Vue 인스턴스 생명주기의 created 이벤트 훅을 이용하여 Vue 인스턴스가 만들어질 때 $on 메서드를 사용해 이벤트 수신 정보를 등록. 

이벤트를 발신하는 컴포넌트에서는 $emit 메서드를 호출.

[ex06-07.html](https://cho-i.github.io/Vue-Quick-Start/06/ex06-07.html)

## 6.7 Todolist 실전 예제

[ex06-08.html](https://cho-i.github.io/Vue-Quick-Start/06/ex06-08.html)



