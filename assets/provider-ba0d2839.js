var d=Object.defineProperty;var o=(i,e,t)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var r=(i,e,t)=>(o(i,typeof e!="symbol"?e+"":e,t),t);import{H as p}from"./provider-35de48f9.js";import"./register-5c713608.js";import"./app-0f31106f.js";class P extends p{constructor(){super(...arguments);r(this,"$$PROVIDER_TYPE","AUDIO")}get type(){return"audio"}setup(t){super.setup(t),this.type==="audio"&&t.delegate.U("provider-setup",{detail:this})}get audio(){return this.n}}export{P as AudioProvider};