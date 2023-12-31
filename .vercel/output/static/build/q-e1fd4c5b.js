import{A as i,Q as d,n as u,C as t,I as c,v as s,S as h,_ as a,H as _}from"./q-cd53cf30.js";const g=()=>{const[e]=i();return e.value++},n=[{message:"Press and hold the <b>ALT</b> key to activate 'Click-to-Source' mode"},{message:"Select the title of this page while keeping the <b>ALT</b> key pressed",hint:'Edit the title and save the changes. If your editor does not open, have a look at <a href="https://github.com/yyx990803/launch-editor#supported-editors" target="_blank">this page</a> to set the correct <code>LAUNCH_EDITOR</code> value.'},{message:"<b>Update</b> now the <code>routeLoader$</code> defined in the <code>src/routes/layout.tsx</code> file",hint:"Instead of returning the current date, you could return any possible string.<br />The output is displayed in the footer."},{message:"Create a <b>new Route</b> called <code>/me</code>",hint:'Create a new directory called <code>me</code> in <code>src/routes</code>. Within this directory create a <code>index.tsx</code> file or copy the <code>src/routes/index.tsx</code> file. Your new route is now accessible <a href="/me" target="_blank">here</a> ✨'},{message:"Time to have a look at <b>Forms</b>",hint:'Open <a href="/demo/todolist" target="_blank">the TODO list App</a> and add some items to the list. Try the same with disabled JavaScript 🐰'},{message:"<b>Congratulations!</b> You are now familiar with the basics! 🎉",hint:"If you need further info on how to use qwik, have a look at <a href='https://qwik.builder.io' target='_blank'>qwik.builder.io</a> or join the <a href='https://qwik.builder.io/chat' target='_blank'>Discord channel</a>."}],p="_gettingstarted_vcles_1",b="_intro_vcles_27",v="_hint_vcles_37",l={gettingstarted:p,intro:b,hint:v},m=()=>{const e=d(0);return u("keydown",s(()=>a(()=>Promise.resolve().then(()=>r),void 0),"s_UxlJFslpf0s",[e])),t("div",null,{class:"container container-purple container-center"},[t("h2",null,null,["Time for a",t("br",null,null,null,3,null),t("span",null,{class:"highlight"},"qwik intro",3,null),"?"],3,null),t("div",null,{class:l.gettingstarted},[t("div",{dangerouslySetInnerHTML:c(n[e.value],"message")},{class:l.intro},null,3,null),t("span",{dangerouslySetInnerHTML:c(n[e.value],"hint")},{class:l.hint},null,3,null)],1,null),e.value+1<n.length?t("button",null,{class:"button-dark",onClick$:s(()=>a(()=>Promise.resolve().then(()=>r),void 0),"s_gRRz00JItKA",[e])},["Continue with Step ",h(o=>o.value+2,[e])," of"," ",n.length],3,"W5_0"):t("button",null,{class:"button-dark",onClick$:s(()=>a(()=>Promise.resolve().then(()=>r),void 0),"s_NYEDprtA0Lw",[e])},"Re-Start",3,null)],1,"W5_1")},f=()=>{const[e]=i();return e.value=0},k=e=>{const[o]=i();e.key==="Alt"&&(o.value=1)},r=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_NYEDprtA0Lw:f,s_UxlJFslpf0s:k,s_gRRz00JItKA:g,s_kJCtKbc9zbk:m},Symbol.toStringTag,{value:"Module"}));export{_ as _hW,f as s_NYEDprtA0Lw,k as s_UxlJFslpf0s,g as s_gRRz00JItKA,m as s_kJCtKbc9zbk};