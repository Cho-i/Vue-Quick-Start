# 05 스타일

## 5.1 스타일 적용

## 5.2 인라인 스타일

인라인 스타일은 `v-bind:style`로 작성. 데이터 속성을 작성할 때 주의 사항은 스타일 속성을 카멜 표기법을 사용해야 함. 또 스타일 속성과 속성을 ; 아닌 , 기호를 이용해 구분.

ex)

```html
<button id="a" v-bind:style="style1">
    테스트
</button>
. . .
<script>
    var vm = new Vue({
        . . .
        data:{
            style1:{backgroundColor:'aqua',border:'solid 1px gray',with:'100px',textAlign:'center'}
        }
        . . . 
    });
</script>
```

## 5.3 CSS 클래스 바인딩

`v-bind:class`를 사용. 이때 개별적인 클래스 단위로 ture가 되면 클래스가 주어짐.

```html
<button id="a" v-bind:class="mystyle">
    <input v-model="mystyle.set1">
</button>
. . .
<script>
    var vm = new Vue({
        . . .
        data:{
        	mystyle:{s1:false, s2:true, s3:false}
        }
        . . . 
    });
</script>
```

## 5.4 계산형 속성, 메서드를 이용한 스타일 적용

## 5.5 컴포넌트에서의 스타일 적용

## 5.6 스타일 예제