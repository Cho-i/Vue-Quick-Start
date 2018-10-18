# 07 ECMAScript 2015

## 7.2 let과 const

변수 선언을 위해 var 키워드를 주로 사용했음. var 키워드는 호이스팅한데 호이스팅이란 실행 컨텍스트가 만들어진 후 var키워드가 부여된 변수를 미리 생성하는 것. var 키워드로 변수를 중복 선언해도 오류가 발생하지 않음.

또한 블록 단위의 스코프를 지원하지 않음. var 키워드는 함수 단위의 스코프만 지원. {}로 묶어진 블록 내에서 선언한 변수는 별도의 스코프를 만들지 않는다는 것을 의미.

ES2015에서는 이러한 문제를 해결하기 위해 let 키워드를 지원. 블록 단위의 스코프도 해결했고, 변수의 중복 선언을 방지할 수 있음.

const는 상수 기능을 제공. 즉 한번 값이 주어지면 다시 변경할 수 없음. const 또한 블록 스코프를 제공.

기존 var는 변수의 중복 선언을 허용해 오류를 일으키지 않음.

반면 let과 const는 중복 선언을 허용하지 않음. 

[ex07-02.js](https://cho-i.github.io/Vue-Quick-Start/07/src/ex07-02.js)

## 7.3  기본 파라미터와 가변 파라미터

기본 파라미터를 이용해 함수 파라미터의 기본값을 지정할 수 있음.

가변 파라미터는 여러 개의 파라미터 값을 배열로 받을 수 있음. 파라미터 앞 부분이 ...으로 시작하는게 가변 파라미터.

## 7.4 구조분해 할당

ES2015에서는 배열, 객체의 값들을 추출하여 여러 변수에 할당할 수 있는 기능을 제공. 

[ex07-05.js](https://cho-i.github.io/Vue-Quick-Start/07/src/ex07-05.js)

arr의 배열 값을 순서대로 a1, a2, a3 변수에 각각 10, 20, 30이 할당. p1객체의 name 속성을 변수 n에 할당하고 p1.age를 변수 a에 할당. p1 객체의 속성과 할당하려는 변수의 이름이 동일할 때는 변수명을 생략할 수 있음.

구조분해 할당은 함수의 파라미터에서도 사용할 수 있음.

[ex07-06.js](https://cho-i.github.io/Vue-Quick-Start/07/src/ex07-06.js)

addContact 함수를 호출할 때 자바스크립트 객체를 파라미터 값으로 전달. 전달된 객체는 구조분해 할당을 수행. 객체의 속성이 존재하지 않는 경우 '이메일 없음', 0을 기본값으로 할당.

## 7.5 화살표 함수

화살표 함수는 기존 함수 표현식에 비해 간결함을 제공. 또한 함수를 정의하는 영역의 this를 그대로 전달받을 수 있음.

[ex07-07.js](https://cho-i.github.io/Vue-Quick-Start/07/src/ex07-07.js)

주의할 점은 화살표 함수와 전통적인 함수는 서로 다른 this 값이 바인딩됨.

[ex07-08.js](https://cho-i.github.io/Vue-Quick-Start/07/src/ex07-08.js)

Person 함수를 생성자로 이용해서 객체를 생성하면 Person 함수 안에서의 this는 객체 p1을 가리킴. incrAge 함수는 Person 함수 안에 정의되어 있고, 반복적으로 호출되고 있음. 자바스크립트에서 this는 호출하는 문맥에 의해 좌우됨. 문맥을 넘어서서 this를 연결하려면 bind, apply, call 등의 함수 수준의 메서드를 이용해야 함. 이 메서드들은 직접 this를 연결할 수 있는 기능을 제공.

함수 수준의 apply 메서드를 이용해 incrAge 함수를 둘러싸고 있는 영역의 this를 incrAge 함수 내부의 this로 강제 지정하는 것. 또는 바깥쪽 영역의 this를 다른 변수에 할당하고 참조하는 방법을 사용할 수도 있음.

```javascript
var outerThis = this;
var incrAge = function(){
    outerThis.age++;
}
for (var i=1; i <= yearCount; i++){
    incrAge();
}
```

하지만 화살표 함수는 함수를 둘러싸고 있는 영역의 this를 화살표 함수 내부에서 this로 그대로 사용.

```javascript
function Person(name, yearCount){
    this.name = name;
    this.age = 0;
    var incrAge = ()=> {
        this.age++;
    }
    for(var i=1; i <= yearCount; i++){
        incrAge();
    }
}
var p1 = new Person("홍길동", 20);
//this.age는 20이 출력.
console.log(p1.name + "님의 나이 : "+p1.age);
```



## 7.6 새로운 객체 리터럴

객체의 속성을 작성할 때 변수명과 동일하다면 생략할 수 있음.

```javascript
var name = "홍길동";
var age = 20;
var email = "gdhong@test.com"

//var obj = {name:name, age:age, email:email};
var obj = {name, age, email};
console.log(obj);
```

또한 새로운 메서드 표기법도 제공.

```javascript
let p1 = {
    name : "아이패드",
    price : 200000,
    quantity : 2,
    order : function(){
        if(!this.amount){
            this.amount = this.quantity * this.price;
        }
        console.log("주문금액 : " + this.amount);
    },
    discount(rate){
        if(rate > 0 && rate < 0.8){
            this.amount = (1-rate) * this.price * this.quantity;
        }
        console.log((100*rate) + "% 할인된 금액으로 구매합니다.");
    }
}
p1.discount(0.2);
p1.order();
```



## 7.7 템플릿 리터럴

 템플릿 리터럴은 역따옴표(`)로 묶어진 문자열에서 템플릿 대입문(${})을 이용해 동적으로 문자열을 끼워넣어 구성할 수 있는 방법을 제공. 템플릿 대입문에는 수식 구문, 변수, 함수 호출 구문 등 대부분의 표현식을 사용할 수 있음. 또한 개행 문자를 포함하여 여러 줄로 작성할 수 있음.

```javascript
var d1 = new Date();
var name = "홍길동";
var r1 = `${name} 님에게 ${d1.toDateString()}에 연락했다.`
console.log(r1);

var product = "갤럭시S7";
var price = 199000;
var str = `${product}의 가격은
			${price}원 입니다.`;
console.log(str);
```



## 7.8 컬렉션

자바스크립트의 배열도 List 형태의 컬렉션이기는 하지만 집합(set)이나 맵(map) 형식의 데이터로 사용하기에는불편함이 있음.ES2015에서는 Set, Map, WeakSet, WeakMap과 같은 집합, 맵을 제공하여 이런 불편함을 해소할 수 있음.

Set은 중복을 허용하지 않으며 합집합, 교집합과 같은 다양한 집합 연산을 제공.

```javascript
var s1 = new Set();
s1.add("사과"); s1.add("배");
s1.add("사과"); s1.add("포도");
//Set {'사과','배','포도'}
console.log(s1);

var john = new Set(["사과","포도","배"]);
var susan = new Set(["파인애플","키위","배"]);

//합집합:Set{'사과','포도','배','파인애플','키위'}
var union = new Set([...john.values(), ...susan.values()]);
console.log(union);

//교집합:Set{'배'}
var intersection = new Set([...john.values()].filter(e => susan.has(e)));
console.log(intersection);

//차집합:Set{'사과','포도'}
var diff = new Set([...john.values()].filter(e => !susan.has(e)));
console.log(diff);
```

여러 개의 요소를 가진 집합을 초기화할 때는 Set생성자 함수에 배열값을 인자롤 전달하면 됨. 또한 교집합, 합집합, 차집합를 연산하기 위해서는 배열의 기능을 활용. 교집합, 차집합의 경우는 배열의 filter 메서드를 이용.

맵은 키-값 쌍의 집합체이며, 키는 고유한 값이어야 함.

```javascript
let teams = new Map();
teams.set('LG','트윈스');
teams.set('삼성','라이온스');
teams.set('NC','다이노스');
teams.set('기아','타이거스');
teams.set('한화','이글스');
teams.set('롯데','자이언츠');

console.log(teams.has("SK"));//false
console.log(teams.get("LG"));//트윈스
```



## 7.9 클래스

```javascript
class Person{
    constructor(name, tel, address){
        this.name = name;
        this.tel = tel;
        this.address = address;
        if(Person.count){Person.count++;} else{Person.count = 1;}
    }
    static getPersonCount(){
        return Person.count;
    }
    toString(){
        return `name=${this.name}, tel=${this.tel}, address=${this.address}`
    }
}

var p1 = new Person('이몽룡','010-222-3332','경기도');
var p2 = new Person('홍길동','010-222-3333','서울');
console.log(p1.toString());
console.log(Person.getPersonCount());
```

정적 메서드, 인스턴스 메서드, 생성자 모두 지원. 상속도 지원.

```javascript
class Person{
    constructor(name, tel, address){
        this.name = name;
        this.tel = tel;
        this.address = address;
        if(Person.count){Person.count++;} else{Person.count = 1;}
    }
    static getPersonCount(){
        return Person.count;
    }
    toString(){
        return `name=${this.name}, tel=${this.tel}, address=${this.address}`
    }
}

var p1 = new Person('이몽룡','010-222-3332','경기도');
var p2 = new Person('홍길동','010-222-3333','서울');
console.log(p1.toString());
console.log(Person.getPersonCount());

class Employee extends Person{
    constructor(name, tel, address, empno, dept){
        super(name, tel, address);
        this.empno = empno;
        this.dept = dept;
    }
    toString(){
        return super.toString() + `, empno=${this.empno}, dept=${this.dept}`;
    }
    getEmpInfo(){
        return `${this.empno} : ${this.name}은 ${this.dept} 부서입니다.`;
    }
}

let e1 = new Employee("이몽룡","010-222-2121","서울시","A12311","회계팀");
console.log(e1.getEmpInfo());
console.log(e1.toString());
console.log(Person.getPersonCount());
```





