(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{341:function(e,n,t){},342:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(21),l=t.n(a),c=t(79),u=t(15),i=t.n(u),s=t(71),m=t.n(s),d=t(72),f=t.n(d),p=t(73),h=t.n(p);function g(e,n,t,o,r,a,l){try{var c=e[a](l),u=c.value}catch(i){return void t(i)}c.done?n(u):Promise.resolve(u).then(o,r)}function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t}function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],o=!0,r=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(o=(l=c.next()).done)&&(t.push(l.value),!n||t.length!==n);o=!0);}catch(u){r=!0,a=u}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(e){return y.apply(this,arguments)}function y(){var e;return e=i.a.mark(function e(n){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new FileReader,e.abrupt("return",new Promise(function(e,o){t.onerror=function(){t.abort(),o(new DOMException("Problem parsing input file."))},t.onloadend=function(){e(t.result)},t.readAsDataURL(n)}));case 2:case"end":return e.stop()}},e)}),(y=function(){var n=this,t=arguments;return new Promise(function(o,r){var a=e.apply(n,t);function l(e){g(a,o,r,l,c,"next",e)}function c(e){g(a,o,r,l,c,"throw",e)}l(void 0)})}).apply(this,arguments)}function C(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35,t=e.length,o=Math.max(0,Math.floor((n-3)/2)),r=Math.max(0,Math.ceil(t-o));return t<n?e:"".concat(e.slice(0,o),"...").concat(e.slice(r))}function O(e){return new Promise(function(n){return setTimeout(n,e)})}function k(){if(window&&window.location.hash&&window.location.hash.length>1){var e=m()(window.location.hash.split("#"));return document.getElementById(e)}return null}function S(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth",t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return window.scrollTo({top:e,behavior:n})};e?t(e.getBoundingClientRect().top):t(0)}function j(e,n){var t=Object(o.useRef)(function(){});Object(o.useEffect)(function(){t.current=e},[e]),Object(o.useEffect)(function(){if(null!==n){var e=setInterval(function(){t.current()},n);return function(){return clearInterval(e)}}},[n])}function P(e){var n=b(Object(o.useReducer)(function(e,n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(t,!0).forEach(function(n){E(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},e,{},n)},e),2);return[n[0],n[1]]}function B(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=b(Object(o.useState)(e),2),t=n[0],r=n[1];return[t,function(){return r(!t)}]}var M=t(365),I=t(32),T=t(367),D=t(368),H=t(361),x=t(74),A=t.n(x),L=function(e){var n=e.children,t=e.code,o=e.title;return r.a.createElement(T.a,{elevation:5,id:A()(o)},r.a.createElement(D.a,{title:o}),r.a.createElement(H.a,null,n),r.a.createElement(M.a,{language:"javascript",style:I.a},t))},U=function(){return r.a.createElement(L,{title:"clipString",code:"\nimport { clipString } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\nreturn (\n  <p>\n    {clipString('Too short to be clipped', 30)}<br />\n    {clipString('Too big to be shown', 17)}\n  </p>\n)\n}"},r.a.createElement("p",null,C("Too short to be clipped",30)),r.a.createElement("p",null,C("Too big to be shown",17)))},q=t(9),J=t(33),N=function(){return r.a.createElement(L,{title:"fileToBase64",code:"\nimport { fileToBase64 } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\n  const onFileChange = async ({ target }) => {\n    if (target.files && target.files.length) {\n      const [file] = target.files\n      const parsed = await fileToBase64(file)\n      console.log(`Parsed file: ${parsed}`)\n    }\n  }\n  return <input type=\"file\" onChange={onFileChange} />\n}"},r.a.createElement("p",null,"Click the button bellow, add a file and check the logs"),r.a.createElement("input",{type:"file",onChange:R}))};function R(e){return W.apply(this,arguments)}function W(){return(W=Object(J.a)(i.a.mark(function e(n){var t,o,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.target.files||!n.target.files.length){e.next=6;break}return t=Object(q.a)(n.target.files,1),o=t[0],e.next=4,w(o);case 4:r=e.sent,console.log("Parsed file: ".concat(r));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var F=t(362),G=function(){return r.a.createElement(L,{title:"getElByHash",code:"\nimport { getElByHash } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => (\n  <Button onClick={() => console.log(getElByHash())}>\n    Get el\n  </Button>\n)"},r.a.createElement("p",null,"Click the button bellow and check the logs."),r.a.createElement(F.a,{onClick:function(){window.location.hash="get-el-by-hash",console.log(k())},color:"primary",variant:"contained"},"Change hash"))},Q=function(){var e,n,t=B(),a=Object(q.a)(t,2),l=a[0],c=a[1];return e="super-class",n=l,Object(o.useEffect)(function(){document.documentElement.classList[n?"add":"remove"](e)},[e,n]),r.a.createElement(L,{title:"useHtmlClass",code:"\nimport {\n  useHtmlClass,\n  useToggle,\n} from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\n  const [enabled, toggle] = useToggle()\n  useHtmlClass('super-class', enabled)\n  return <Button onClick={toggle}>Toggle class</Button>\n}"},r.a.createElement("p",null,"Click the button bellow and inspect the HTML element"),r.a.createElement(F.a,{onClick:c,variant:"contained",color:"primary"},"Toggle class"))},Y=function(){var e=Object(o.useState)(null),n=Object(q.a)(e,2),t=n[0],a=n[1];return j(function(){console.log("Hello world!")},t),r.a.createElement(L,{title:"useInterval",code:"\nimport { useInterval } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\n  useInterval(() => {\n    console.log('foo')\n  }, 1000) // null to disable\n  return null\n}"},r.a.createElement("p",null,"Click the button bellow and check the logs"),r.a.createElement(F.a,{onClick:function(){return a(t?null:1e3)},variant:"contained",color:"primary"},t?"Disable":"Enable"))},z=function(){return r.a.createElement(L,{title:"isIOS",code:"\nimport { isIOS } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\nreturn <p>{JSON.stringify(isIOS())}</p>\n}"},r.a.createElement("p",null,"Am I using an iOS device? ",r.a.createElement("strong",null,JSON.stringify(navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent)))))},V=function(){return r.a.createElement(L,{title:"isDev",code:"\nimport { isDev } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\nreturn <p>{JSON.stringify(isDev())}</p>\n}"},r.a.createElement("p",null,"Am I on DEV environment? ",r.a.createElement("strong",null,JSON.stringify(!1))))},$=t(78),_=t.n($),K=t(366);var X=function(e){var n,t=e.onDelete;return n=function(){console.log("Component did mount")},Object(o.useEffect)(function(){n()},[]),function(e){Object(o.useEffect)(function(){return e},[])}(function(){console.log("Component did unmount")}),r.a.createElement(K.a,{onDelete:t,label:"Hello world!"})},Z=function(){var e=Object(o.useState)(0),n=Object(q.a)(e,2),t=n[0],a=n[1];return r.a.createElement(L,{title:"useOnMount and useOnUnmount",code:"\nimport {\n  useOnMount,\n  useOnUnmount,\n} from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\n  useOnMount(() =>\n    console.log('Component did mount')\n  )\n  useOnUnmount(() =>\n    console.log('Component did unmount')\n  )\n  return null\n}"},r.a.createElement("p",null,"Click the button bellow and check the logs"),r.a.createElement("p",null,r.a.createElement(F.a,{onClick:function(){return a(t+1)},variant:"contained",color:"primary"},"Add element")," "),_()(t,function(e){return r.a.createElement(X,{key:"mount-".concat(e),onDelete:function(){return a(t-1)}})}))},ee=function(){var e=function(){var e=b(Object(o.useState)(!1),2),n=e[0],t=e[1];return Object(o.useEffect)(function(){return t(!0)},[]),n}();return r.a.createElement(L,{title:"useMounted",code:"\nimport { useMounted } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\n  const isMounted = useMounted()\n  return isMounted ? 'Mounted' : 'Loading...'\n}"},r.a.createElement("p",null,"Am I mounted? ",r.a.createElement("strong",null,e?"Yes":"No")))},ne=function(){return r.a.createElement(L,{title:"nl2Br",code:"\nimport { nl2Br } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\nreturn nl2Br(\n        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`\n      )\n}"},r.a.createElement("p",null,"string"===typeof(e="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")?e.replace(/(?:\r\n|\r|\n)/g,"<br />"):""));var e},te=function(){var e,n,t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"home";return Object(o.useMemo)(function(){return f()(e.pathname.split("/")).join("-")},[e.pathname])||n}();return e=t,n=!0,Object(o.useEffect)(function(){document.body.classList[n?"add":"remove"](e)},[e,n]),r.a.createElement(L,{title:"usePageId and useBodyClass",code:"\nimport {\n  usePageId,\n  useBodyClass,\n} from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\n  const pageId = usePageId()\n  // const pageId = usePageId(\n  //   window.location, 'anotherdefault'\n  // )\n  useBodyClass(pageId, true)\n  return null\n}"},r.a.createElement("p",null,"The current pageId is: ",r.a.createElement("strong",null,t),r.a.createElement("br",null),"Inspect the body element to see it working."),r.a.createElement("p",null,"It creates a pageId to apply on body class and so on.",r.a.createElement("br",null),"It will be based on the current"," ",r.a.createElement("strong",null,"window.location.pathname"),"."),r.a.createElement("p",null,"You can also send another location as the first param, like your favorite router custom location object."),r.a.createElement("p",null,"When you are on the root path, it will show the default ('home' by default) which is the second param."))},oe=function(){var e=Object(o.useState)(0),n=Object(q.a)(e,2),t=n[0],a=n[1],l=function(e){var n=Object(o.useRef)();return Object(o.useEffect)(function(){n.current=e}),n.current}(t);return r.a.createElement(L,{title:"usePrevious",code:"\nimport { usePrevious } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\n  const [count, setCount] = useState(0)\n  const prev = usePrevious(count)\n  return (\n    <Button\n      onClick={() => setCount(count + 1)}\n    >\n      +1\n    </Button>\n  )\n}"},r.a.createElement("p",null,"Current value: ",r.a.createElement("strong",null,t),r.a.createElement("br",null),"Previous value: ",r.a.createElement("strong",null,l)),r.a.createElement(F.a,{variant:"contained",color:"primary",onClick:function(){return a(t+1)}},"+1"))},re=t(44),ae=t.n(re),le=[0,1,2,3,4,5,6,7,8,9],ce=function(){var e=Object(o.useState)(0),n=Object(q.a)(e,2)[1],t=function(e,n){var t=b(Object(o.useState)(),2),r=t[0],a=t[1];return Object(o.useEffect)(function(){r||a(e(n))},[]),r||n}(ae.a,le),a=ae()(le);return j(function(){n(function(e){return e+1})},1e3),r.a.createElement(L,{title:"useProcessOnce",code:"\nimport {\n  useProcessOnce,\n  useInterval,\n} from '@seasonedsoftware/utils'\nimport shuffle from 'lodash/shuffle'\n\nconst numbers = [0,1,2,3,4,5,6,7,8,9]\n\nconst MyComponent = () => {\n  const [, setCount] = useState(0)\n  const random = useProcessOnce(shuffle, numbers)\n  const random2 = shuffle(numbers)\n  useInterval(() => {\n    setCount(c => c + 1)\n  }, 1000)\n  // return ...\n}"},r.a.createElement("p",null,"The random value is: ",r.a.createElement("strong",null,JSON.stringify(t))),r.a.createElement("p",null,"Without the hook: ",r.a.createElement("strong",null,JSON.stringify(a))))},ue=function(){return r.a.createElement(L,{title:"useQueryParam",code:"\nimport { useQueryParam } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => (\n  <Button onClick={() =>\n    console.log(useQueryParam('foo'))\n  }>\n    Get param\n  </Button>\n)"},r.a.createElement("p",null,"Add ",r.a.createElement("em",null,'"?foo=bar"')," to the URL, click the button bellow and check the logs."),r.a.createElement(F.a,{onClick:function(){var e;console.log((e="foo",new URLSearchParams(window.location.search).get(e)))},color:"primary",variant:"contained"},"Get param"))},ie=function(){return r.a.createElement(L,{title:"scrollToEl",code:"\nimport { scrollToEl } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => (\n  <>\n    <Button onClick={() => {\n      scrollToEl()\n    }}>\n      Scroll to Top\n    </Button>\n    <Button onClick={() => {\n      const el = document.getElementById('Hooks')\n      scrollToEl(el, 'auto') // default 'smooth'\n    }}>\n      Hard Scroll to Hooks\n    </Button>\n  </>\n)"},r.a.createElement("p",null,"Click the buttons bellow."),r.a.createElement(F.a,{variant:"contained",color:"primary",onClick:function(){S()}},"Scroll to Top")," ",r.a.createElement(F.a,{variant:"contained",color:"primary",onClick:function(){S(document.getElementById("Hooks"),"auto")}},"Hard Scroll to Hooks"))},se=function(){var e=P({first:!1,second:!1}),n=Object(q.a)(e,2),t=n[0],o=n[1];return r.a.createElement(L,{title:"useSetState",code:"\nimport { useSetState } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\n  const [state, setState] = useSetState({\n    first: false,\n    second: false,\n  })\n  return (\n    <>\n      <Button\n        color={state.first ? 'primary' : 'secondary'}\n        onClick={() => {\n          setState({ first: !state.first })\n        }}\n      >\n        First\n      </Button>\n      <Button\n        color={state.second ? 'primary' : 'secondary'}\n        onClick={() => {\n          setState({ second: !state.second })\n        }}\n      >\n        Second\n      </Button>\n    </>\n  )\n}"},r.a.createElement("p",null,"A replacement for the old ",r.a.createElement("em",null,"this.setState"),"."),r.a.createElement("p",null,r.a.createElement("strong",null,"useSafeState")," is the very same but will avoid calling setState when the component is unmounted."),r.a.createElement("p",null,"Good to avoid those warnings when dealing with Promises."),r.a.createElement("p",null,r.a.createElement(F.a,{variant:"contained",color:t.first?"primary":"secondary",onClick:function(){o({first:!t.first})}},"First")," ",r.a.createElement(F.a,{variant:"contained",color:t.second?"primary":"secondary",onClick:function(){o({second:!t.second})}},"Second")))},me=t(363),de=function(){var e=Object(o.useState)(!1),n=Object(q.a)(e,2),t=n[0],a=n[1],l=function(){var e=Object(J.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,O(2e3);case 3:a(!1);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(L,{title:"sleep",code:"\nimport { sleep } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\n  const [clicked, setClicked] = useState(false)\n  return clicked ? (\n    <CircularProgress />\n  ) : (\n    <Button onClick={async () => {\n      setClicked(true)\n      await sleep(2000)\n      setClicked(false)\n    }}>\n      Click\n    </Button>\n  )\n}"},r.a.createElement("p",null,"Click the button bellow"),t?r.a.createElement(me.a,null):r.a.createElement(F.a,{onClick:l,variant:"contained",color:"primary"},"Click"))},fe=t(364),pe=function(){var e=B(!0),n=Object(q.a)(e,2),t=n[0],o=n[1];return r.a.createElement(L,{title:"useToggle",code:"\nimport { useToggle } from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\n  const [on, toggle] = useToggle(true)\n  return <Switch checked={on} onChange={toggle} />\n}"},r.a.createElement(fe.a,{checked:t,onChange:o}))},he=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,n=b(Object(o.useState)({height:0,width:0}),2),t=n[0],r=n[1];return Object(o.useEffect)(function(){var n=function(){return r({height:window.innerHeight,width:window.innerWidth})},t=h()(n,e);return window.addEventListener("resize",t),n(),function(){return window.removeEventListener("resize",t)}},[e]),t}(),n=e.width,t=e.height;return r.a.createElement(L,{title:"useWindowDimensions",code:"\nimport {\n  useWindowDimensions,\n} from '@seasonedsoftware/utils'\n\nconst MyComponent = () => {\n  const { width, height } = useWindowDimensions()\n  return (\n    <p>{width} - {height}</p>\n  )\n}"},r.a.createElement("p",null,"Width: ",r.a.createElement("strong",null,n),r.a.createElement("br",null),"Height: ",r.a.createElement("strong",null,t),r.a.createElement("br",null)),r.a.createElement("p",null,"You can pass a number argument to change the"," ",r.a.createElement("a",{rel:"noopener noreferrer",href:"https://lodash.com/docs/4.17.14#throttle",target:"_blank"},"throttle"),"."))},ge=function(e){var n=e.children;return r.a.createElement("div",{id:n,style:{width:"100%"}},r.a.createElement("h1",null,n))},Ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,null,"Utils"),r.a.createElement(de,null),r.a.createElement(U,null),r.a.createElement(N,null),r.a.createElement(G,null),r.a.createElement(ie,null),r.a.createElement(V,null),r.a.createElement(z,null),r.a.createElement(ne,null),r.a.createElement(ge,null,"Hooks"),r.a.createElement(Q,null),r.a.createElement(he,null),r.a.createElement(oe,null),r.a.createElement(pe,null),r.a.createElement(se,null),r.a.createElement(ce,null),r.a.createElement(ue,null),r.a.createElement(Y,null),r.a.createElement(Z,null),r.a.createElement(ee,null),r.a.createElement(te,null))},ve=(t(341),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{basepath:"/utils"},r.a.createElement(Ee,{path:"/"})))});l.a.render(r.a.createElement(ve,null),document.getElementById("root"))},82:function(e,n,t){e.exports=t(342)}},[[82,1,2]]]);
//# sourceMappingURL=main.618bfa6b.chunk.js.map