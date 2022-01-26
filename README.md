# blog  스터디 블로그

* vscode
* node.js
* vue3
* bootstrap

### Vue router
라우팅 기능을 구현할 수 있도록 지원하는 라이브러리  ( 라우팅은 웹페이지간의 이동방법을 말함 )
```
npm i vue-router@4
```
* router 4버전이 Vue3이랑 호환됨, 라이브러리 설치할 때 호환되는 버전인지 확인★

### router.js 파일 생성
```
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: '/', 
    component: Home
  },
  {
    path: "/Post",
    component: List,
  },
  {
    path: "/home",
    component: Home,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 

```

### history
* createWebHistory 
Html5 mode로 누군가 /detail 이라고 Url란에 입력하면 서버에 /detail 페이지를 요청해주세요 라는 의미로,
누군가 Url로 다른 페이지 접근을 방지를 위해 미리 기능개발이 필요

* createWebHashHistory 
Hash mode로 Url에 #이 붙은 채로 시작 github.com/#/ 이게 메인페이지가 됨  
#을 붙이는 이유는 # 뒤에 내용들은 서버로 전달되지 않아 router에게 온전히 라우팅을 맡길 수 있게 됨


### nested routes 
특정 페이지 내에서 또 라우트를 나누는 경우에 사용 (children 항목 생성)
* ex) /detail/0/authour 
```
const routes = [
  { path: '/detail/:id', 
    component: Detail,
    children : [
      {path : 'author', component:Author}
    ]
  },
]
```

### 라우터 개발시 주의 사항
라우터관련 문법들은 터미널에 표기되지 않고 개발자도구 콘솔창에 warning으로 표기됨,   
꼭 개발자도구 콘솔창 확인 필수★

### 페이지 이동
```
<router-view></router-view> : 라우터로 구분된 페이지를 보여주는 자리 지정
<router-link to="list"></router-link> : 페이지 이동 링크
$rounter/push('detail/0') 
```

### Navigation guards
특정 Url로 접속할 때 코드를 실행하고 싶은 경우에 사용 
> Vue 컴포넌트안에서도 create(), mounted() 와 같이 사용 가능
> beforeRouteEnter(), beforeRouteUpdate() 사용

beforeEnter를 이용하여 함수 작성, checkLogin 이 false면 로그인 페이지로 이동
```
const routes = [
  {
    path: "/detail",
    component: Detail,
    beforeEnter : () => {
      if( CheckLogin == false ) {
         return '/login'
       }
    }
  },
];
```

### beforeEnter()
beforeEnter의 파라미터는 두세개 작명이 가능, 첫번째 파라미터는 목적지 페이지, 두번째 파라미터는 출발 페이지 
* to.fullPath : 전체 경로
* to.params.id : id파라미터
* return false : 라우팅 중단 
```
beforeEnter(to, from) => {
  return to.fullpath
}
```

