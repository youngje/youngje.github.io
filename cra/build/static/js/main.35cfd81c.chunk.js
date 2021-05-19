(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var c=o(1),n=o.n(c),l=o(7),d=o.n(l),a=(o(13),o(2)),r=(o(14),o(0)),s=[{key:"all",path:"#/",display:"All"},{key:"active",path:"#/active",display:"Active"},{key:"completed",path:"#/completed",display:"Completed"}];function i(e){var t=e.todos,o=void 0===t?[]:t,c=e.clearCompletedTodo,n=e.filter,l=e.setFilter,d=o.filter((function(e){return!e.completed})),a=1===d.length?"item":"items";return Object(r.jsxs)("footer",{className:"footer",children:[Object(r.jsxs)("span",{className:"todo-count",children:[Object(r.jsx)("strong",{children:d.length})," ",a," left"]}),Object(r.jsx)("ul",{className:"filters",children:s.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:e.key===n?"selected":"",href:e.path,onClick:function(){return l(e.key)},children:e.display})},e.key)}))}),Object(r.jsx)("button",{className:"clear-completed",onClick:c,children:"Clear completed"})]})}function u(e){var t=e.addTodo,o=Object(c.useState)(""),n=Object(a.a)(o,2),l=n[0],d=n[1];return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{children:"todos"}),Object(r.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",value:l,onChange:function(e){return d(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&l&&(t(l),d(""))},autoFocus:!0})]})}function j(){return Object(r.jsxs)("footer",{className:"info",children:[Object(r.jsx)("p",{children:"Double-click to edit a todo"}),Object(r.jsxs)("p",{children:["Template by ",Object(r.jsx)("a",{href:"http://sindresorhus.com",children:"Sindre Sorhus"})]}),Object(r.jsxs)("p",{children:["Created by ",Object(r.jsx)("a",{href:"https://github.com/youngje",children:"\uc724\uc601\uc81c"})]}),Object(r.jsxs)("p",{children:["Part of ",Object(r.jsx)("a",{href:"http://todomvc.com",children:"TodoMVC"})]})]})}function m(e){var t=e.todo,o=e.toggleTodo,n=e.deleteTodo,l=e.updateTodo,d=t.id,s=t.name,i=t.completed,u=Object(c.useState)(!1),j=Object(a.a)(u,2),m=j[0],b=j[1],p=Object(c.useState)(s),h=Object(a.a)(p,2),f=h[0],O=h[1],x=Object(c.useRef)(null),g=i?"completed":"",T=m?"editing":"";return Object(r.jsxs)("li",{className:"".concat(g," ").concat(T),children:[Object(r.jsxs)("div",{className:"view",children:[Object(r.jsx)("input",{className:"toggle",type:"checkbox",checked:i,onChange:function(){o(d)}}),Object(r.jsx)("label",{onDoubleClick:function(){b(!0)},children:s}),Object(r.jsx)("button",{className:"destroy",onClick:function(){n(d)}})]}),Object(r.jsx)("input",{className:"edit",ref:x,value:f,onChange:function(e){O(e.target.value)},onBlur:function(){b(!1),l({id:d,name:f})},onKeyUp:function(e){"Enter"===e.key&&s&&x.current.blur()}})]})}function b(e){var t=e.todos,o=void 0===t?[]:t,c=e.toggleTodo,n=e.deleteTodo,l=e.updateTodo;return o.length<1?null:Object(r.jsx)("ul",{className:"todo-list",children:o.map((function(e){return Object(r.jsx)(m,{todo:e,toggleTodo:c,deleteTodo:n,updateTodo:l},e.id)}))})}function p(e){var t=e.todos,o=e.completAllTodo,c=e.resetAllTodo,n=t.length&&t.every((function(e){return e.completed}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",checked:n,readOnly:!0}),Object(r.jsx)("label",{htmlFor:"toggle-all",onClick:function(){return n?c():o()},children:"Mark all as complete"})]})}var h=o(3),f=o(8),O=o(18);var x=[{id:"some-random-value-0",name:"Make todos with React",completed:!1},{id:"some-random-value-1",name:"try fetch api",completed:!0},{id:"some-random-value-2",name:"\uc548\ub155~",completed:!1}];var g=function(){var e=function(){var e=Object(c.useState)(x),t=Object(a.a)(e,2),o=t[0],n=t[1];return{todos:o,addTodo:function(e){var t={id:Object(O.a)(),name:e,completed:!1};n([].concat(Object(f.a)(o),[t]))},toggleTodo:function(e){var t=o.map((function(t){return t.id!==e?t:Object(h.a)(Object(h.a)({},t),{},{completed:!t.completed})}));n(t)},deleteTodo:function(e){var t=o.filter((function(t){return t.id!==e}));n(t)},updateTodo:function(e){var t=o.map((function(t){return t.id===e.id?Object(h.a)(Object(h.a)({},t),e):t}));n(t)},completAllTodo:function(){n(o.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{completed:!0})})))},resetAllTodo:function(){n(o.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{completed:!1})})))},clearCompletedTodo:function(){n(o.filter((function(e){return!e.completed})))}}}(),t=e.todos,o=e.addTodo,n=e.toggleTodo,l=e.deleteTodo,d=e.updateTodo,s=e.completAllTodo,m=e.resetAllTodo,g=e.clearCompletedTodo,T=Object(c.useState)("all"),v=Object(a.a)(T,2),y=v[0],k=v[1],N="active"===y?function(e){return!e.completed}:function(e){return e.completed},C="all"===y?t:t.filter(N);return Object(c.useEffect)((function(){var e=window.location.hash.replace("#/","");k(e||"all")}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"todoapp",children:[Object(r.jsx)(u,{addTodo:o}),Object(r.jsxs)("section",{className:"main",children:[Object(r.jsx)(p,{todos:t,completAllTodo:s,resetAllTodo:m}),Object(r.jsx)(b,{todos:C,toggleTodo:n,deleteTodo:l,updateTodo:d})]}),(null===t||void 0===t?void 0:t.length)>0&&Object(r.jsx)(i,{todos:t,clearCompletedTodo:g,filter:y,setFilter:k})]}),Object(r.jsx)(j,{})]})};d.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.35cfd81c.chunk.js.map