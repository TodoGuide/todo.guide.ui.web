(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},154:function(e,t,n){e.exports=n(352)},159:function(e,t,n){},173:function(e,t,n){},352:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(7),r=n.n(l),c=(n(159),n(10)),s=n(11),i=n(18),u=n(8),d=n(16),h=n(58),p=n(151),m=n(59),f=n.n(m),v=n(57),g=(n(173),n(175),n(177),n(149)),O=n.n(g),b=n(9),E=n.n(b),j=function(){function e(t){var n=t.title,a=t.estimate,o=t.start,l=t.done;Object(c.a)(this,e),this.title=n||"",this.estimate=a||60,this.start=o||Date.now(),this.done=l||!1}return Object(s.a)(e,[{key:"end",get:function(){return E()(this.start).add(this.estimate,"minutes").toDate()},set:function(e){this.estimate=E.a.duration(E()(this.end).diff(this.start)).asMinutes()}}]),e}(),y=JSON.parse(localStorage.getItem("todos"));console.log("storedTodos",y);var C=(y||[{title:"Host on GitHub static sites",start:20,estimate:90},{title:"Ability to view completed todos",start:30,estimate:240},{title:"Ability to quickly add highest and lowest priority todos",start:40,estimate:240}]).map(function(e){return new j(e)}),S=n(152),w=n(153),k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).update(),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"push",value:function(e){var n=Object(S.a)(Object(u.a)(t.prototype),"push",this).call(this,e);return this.update(),n}},{key:"notDone",value:function(){return[].concat(this).filter(function(e){return!e.done})}},{key:"update",value:function(){console.log("Updating schedule",this),this.sort(function(e,t){return e.start-t.start});var e=this.notDone(),t=e.length-1;if(-1===t)return this;console.log("Rescheduling incomplete todos",e);var n=E()().add(1,"day").startOf("day").toDate();console.log("Adjusting first item start",e[0]),e[0].start=new Date,console.log("Adjusted first item start",e[0]);for(var a=0;a<=t;a++){var o=e[a];o.end>n&&o.start<n&&(o.start=n),a<t&&(e[a+1].start=o.end)}return console.log("Updated schedule",this),this}}]),t}(Object(w.a)(Array)),A=n(96),D=n.n(A),x=n(150),T=n.n(x),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).inputValueChange=function(e){var t=e.target,a=n.state.todo;a[t.name]=t.value,n.setState({todo:a})},n.state={todo:e.todo},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.todo;return e?o.a.createElement("div",null,o.a.createElement("h2",null,"What needs to get done?"),o.a.createElement("p",null,"Title:\xa0",o.a.createElement("input",{name:"title",type:"text",value:e.title,placeholder:"This, that, and the other...",onChange:this.inputValueChange.bind(this),style:{width:"80%"},autoFocus:!0})),o.a.createElement("p",null,"Estimate: About\xa0",o.a.createElement("input",{name:"estimate",type:"text",value:e.estimate,onChange:this.inputValueChange,style:{width:30,textAlign:"center"}}),"\xa0minutes remaining"),o.a.createElement("p",null,o.a.createElement("label",{htmlFor:"done"},o.a.createElement("input",{name:"done",type:"checkbox",checked:e.done,onChange:this.inputValueChange}),"\xa0 Done"))):null}}]),t}(a.Component);z.defaultProps={todo:null};var V=z,N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).inputValueChange=function(e){var t=e.target,a=n.state.todo;a[t.name]=t.value,n.setState({todo:a})},n.state={todo:e.todo},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo;return o.a.createElement("span",null,o.a.createElement("label",{htmlFor:"done"},o.a.createElement("input",{name:"done",type:"checkbox",checked:e.done,onChange:this.inputValueChange}),e.title))}}]),t}(a.Component);N.defaultProps={todo:null};var R=D.a.momentLocalizer(E.a),I=T()(D.a),J={content:{top:"25%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",zIndex:"1000 !important"}},M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).calendarOnEventResize=function(e){var t=e.event,a=e.start,o=e.end;console.log("Calling calendarOnEventResize: ",t,{start:a,end:o}),t.estimate=E.a.duration(E()(o).diff(E()(a))).asMinutes(),t.start=a,n.callOnScheduleChanged()},n.calendarOnEventDrop=function(e){var t=e.event,a=e.start;console.log("Calling calendarOnEventDrop: ",t,{start:a}),t.start=a,console.log("Calling OnScheduleChanged event ",t),n.callOnScheduleChanged()},n.callOnScheduleChanged=function(){console.log("Calling callOnScheduleChanged"),(0,n.props.onScheduleChanged)()},n.calendarOnSelectSlot=function(e){var t=e.start,a=e.end,o=n.state,l=o.currentTodo,r=o.schedule;if(!l){var c=new j({start:t,estimate:E.a.duration(E()(a).diff(E()(t))).asMinutes()});r.push(c),n.setState({currentTodo:c,schedule:r})}},n.calendarOnSelectEvent=function(e){n.setState({currentTodo:e})},n.todoOnCloseClick=function(){var e=n.state,t=e.currentTodo,a=e.schedule;t.title||a.splice(a.indexOf(t),1),n.callOnScheduleChanged(),n.setState({currentTodo:null})},n.state={currentTodo:null,schedule:e.schedule},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currentTodo,n=e.schedule,a=this.props.increment;return console.log("Schedule.jsx render",n),o.a.createElement("div",null,o.a.createElement(f.a,{isOpen:!!t,contentLabel:"Example Modal",style:J},o.a.createElement(V,{todo:t}),o.a.createElement("button",{type:"button",onClick:this.todoOnCloseClick},"Close")),o.a.createElement(I,{defaultDate:new Date,defaultView:"day",events:n.filter(function(e){return!e.done}),titleAccessor:function(e){return o.a.createElement(N,{todo:e})},onEventDrop:this.calendarOnEventDrop,onEventResize:this.calendarOnEventResize,onSelectEvent:this.calendarOnSelectEvent,onSelectSlot:this.calendarOnSelectSlot,localizer:R,step:a,selectable:!0,resizable:!0,style:{height:"100vh"}}))}}]),t}(a.Component);M.defaultProps={increment:15,onScheduleChanged:function(){}};var F=M;var P=n(60).b(function(e,t){return e});f.a.setAppElement("#root");var W=Object(h.a)(k,Object(p.a)(C)),B=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={schedule:W},n.handleScheduleChange=function(){var e=n.state.schedule;localStorage.setItem("todos",JSON.stringify(e.update())),n.setState({schedule:e})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.schedule;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:O.a,className:"App-logo",alt:"logo",style:{display:"none"}}),o.a.createElement("h1",{className:"App-title"},"Todo Guide!")),o.a.createElement(v.a,{store:P},o.a.createElement(F,{schedule:e,onScheduleChanged:this.handleScheduleChange})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[154,2,1]]]);
//# sourceMappingURL=main.351cf007.chunk.js.map