(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{161:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return u}),t.d(a,"_frontmatter",function(){return i});var n=t(86),s=t.n(n),c=t(7),o=t.n(c),l=t(0),r=t.n(l),m=t(174),p=t(179),u=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=p.a,t}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=s()(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:t,components:a},r.a.createElement(m.MDXTag,{name:"h3",components:a},"Why is there a blue outline around my element?"),r.a.createElement(m.MDXTag,{name:"p",components:a},"You may notice a blue outline around your reference element. The blue outline is\ncalled a focus ring; it lets keyboard users know which element on the page is\ncurrently in focus. Tippy adds an attribute to the element so that it can\nreceive focus if it natively cannot, so that keyboard users (e.g. blind users)\ncan access the tooltip without using a mouse."),r.a.createElement(m.MDXTag,{name:"p",components:a},"Recommended: use the ",r.a.createElement("code",{className:"language-text"},"focus-visible")," polyfill:\n",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/WICG/focus-visible"}},"https://github.com/WICG/focus-visible"),". This will remove the outline for mouse\nusers but keep it visible for keyboard users."),r.a.createElement(m.MDXTag,{name:"p",components:a},"If your tooltip is ",r.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"non-essential")," (only acts as enhancement), then you can\ndisable the ",r.a.createElement("code",{className:"language-text"},"a11y")," option:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},r.a.createElement("span",{className:"token function"},"tippy"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'div'"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",r.a.createElement("span",{className:"token definition property"},"a11y"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token boolean"},"false"),r.a.createElement("span",{className:"token punctuation"},","),"\n",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"h3",components:a},"I can't click things inside the tooltip"),r.a.createElement(m.MDXTag,{name:"p",components:a},"To enable interactivity, set the ",r.a.createElement("code",{className:"language-text"},"interactive")," option to ",r.a.createElement("code",{className:"language-text"},"true"),"."),r.a.createElement(m.MDXTag,{name:"h3",components:a},"My tooltip is not working using ",r.a.createElement("code",{className:"language-text"},"data-tippy")),r.a.createElement(m.MDXTag,{name:"p",components:a},"Make sure Tippy's scripts are placed ",r.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"before")," your own scripts, at the very\nbottom of the page, like so:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"html"},r.a.createElement("pre",{className:"language-html"},r.a.createElement("code",{className:"language-html"},r.a.createElement("span",{className:"token doctype"},"<!DOCTYPE html>"),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"html"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"head"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"title"),r.a.createElement("span",{className:"token punctuation"},">")),"My page",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"title"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"head"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"body"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",r.a.createElement("span",{className:"token attr-name"},"data-tippy"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"Created automatically",r.a.createElement("span",{className:"token punctuation"},'"')),r.a.createElement("span",{className:"token punctuation"},">")),"Text",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"button"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",r.a.createElement("span",{className:"token attr-name"},"data-tippy-content"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"Created by function",r.a.createElement("span",{className:"token punctuation"},'"')),r.a.createElement("span",{className:"token punctuation"},">")),"Text",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"button"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","\n","    ",r.a.createElement("span",{className:"token comment"},"\x3c!-- Very end of the body --\x3e"),"\n","    ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"script")," ",r.a.createElement("span",{className:"token attr-name"},"src"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"https://unpkg.com/popper.js@1/dist/umd/popper.min.js",r.a.createElement("span",{className:"token punctuation"},'"')),r.a.createElement("span",{className:"token punctuation"},">")),r.a.createElement("span",{className:"token script language-javascript"}),r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"script"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"script")," ",r.a.createElement("span",{className:"token attr-name"},"src"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"https://unpkg.com/tippy.js@4",r.a.createElement("span",{className:"token punctuation"},'"')),r.a.createElement("span",{className:"token punctuation"},">")),r.a.createElement("span",{className:"token script language-javascript"}),r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"script"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"script"),r.a.createElement("span",{className:"token punctuation"},">")),r.a.createElement("span",{className:"token script language-javascript"},"\n","      ",r.a.createElement("span",{className:"token function"},"tippy"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'button'"),r.a.createElement("span",{className:"token punctuation"},")"),"\n","    "),r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"script"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"body"),r.a.createElement("span",{className:"token punctuation"},">")),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"html"),r.a.createElement("span",{className:"token punctuation"},">"))))),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Can I use the ",r.a.createElement("code",{className:"language-text"},"title")," attribute?"),r.a.createElement(m.MDXTag,{name:"p",components:a},"Yes. The ",r.a.createElement("code",{className:"language-text"},"content")," option can be a function that receives the reference element\nas an argument and returns a string or element."),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},r.a.createElement("span",{className:"token function"},"tippy"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'button'"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",r.a.createElement("span",{className:"token function"},"content"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token parameter"},"reference"),r.a.createElement("span",{className:"token punctuation"},")")," ",r.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",r.a.createElement("span",{className:"token keyword"},"const")," title ",r.a.createElement("span",{className:"token operator"},"=")," reference",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"getAttribute"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'title'"),r.a.createElement("span",{className:"token punctuation"},")"),"\n","    ","reference",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"removeAttribute"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'title'"),r.a.createElement("span",{className:"token punctuation"},")"),"\n","    ",r.a.createElement("span",{className:"token flow keyword"},"return")," title","\n","  ",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},","),"\n",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"p",components:a},"The ",r.a.createElement("code",{className:"language-text"},"title")," attribute should be removed once you have its content so the\nbrowser's default tooltip isn't displayed along with the tippy."),r.a.createElement(m.MDXTag,{name:"p",components:a},'With the beauty of higher-order functions, you can "enhance" the base tippy\nfunction with new functionality. To add this behavior by default, you can do\nsomething like this at the very top of your scripts before any calls to\n',r.a.createElement("code",{className:"language-text"},"tippy()"),":"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},r.a.createElement("span",{className:"token keyword"},"function")," ",r.a.createElement("span",{className:"token function"},"withTitleAttributeContent"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token parameter"},"tippy"),r.a.createElement("span",{className:"token punctuation"},")")," ",r.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",r.a.createElement("span",{className:"token flow keyword"},"return")," ",r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token parameter"},"targets",r.a.createElement("span",{className:"token punctuation"},",")," options ",r.a.createElement("span",{className:"token operator"},"=")," ",r.a.createElement("span",{className:"token punctuation"},"{"),r.a.createElement("span",{className:"token punctuation"},"}")),r.a.createElement("span",{className:"token punctuation"},")")," ",r.a.createElement("span",{className:"token arrow operator"},"=>")," ",r.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",r.a.createElement("span",{className:"token flow keyword"},"return")," ",r.a.createElement("span",{className:"token function"},"tippy"),r.a.createElement("span",{className:"token punctuation"},"("),"targets",r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ",r.a.createElement("span",{className:"token spread punctuation"},"..."),"options",r.a.createElement("span",{className:"token punctuation"},","),"\n","      ",r.a.createElement("span",{className:"token function"},"content"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token parameter"},"reference"),r.a.createElement("span",{className:"token punctuation"},")")," ",r.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",r.a.createElement("span",{className:"token keyword"},"if")," ",r.a.createElement("span",{className:"token punctuation"},"("),"options",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token access property"},"content"),r.a.createElement("span",{className:"token punctuation"},")")," ",r.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ",r.a.createElement("span",{className:"token flow keyword"},"return")," options",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token access property"},"content"),"\n","        ",r.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",r.a.createElement("span",{className:"token keyword"},"const")," title ",r.a.createElement("span",{className:"token operator"},"=")," reference",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"getAttribute"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'title'"),r.a.createElement("span",{className:"token punctuation"},")"),"\n","        ","reference",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token method function"},"removeAttribute"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'title'"),r.a.createElement("span",{className:"token punctuation"},")"),"\n","        ",r.a.createElement("span",{className:"token flow keyword"},"return")," title","\n","      ",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},","),"\n","    ",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",r.a.createElement("span",{className:"token punctuation"},"}"),"\n",r.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n",r.a.createElement("span",{className:"token dom variable"},"window"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token access property"},"tippy")," ",r.a.createElement("span",{className:"token operator"},"=")," ",r.a.createElement("span",{className:"token function"},"withTitleAttributeContent"),r.a.createElement("span",{className:"token punctuation"},"("),"tippy",r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"h3",components:a},"My tooltip is hiding instantly after showing"),r.a.createElement(m.MDXTag,{name:"p",components:a},"If you're using a ",r.a.createElement("code",{className:"language-text"},"focus")," trigger, for example on an ",r.a.createElement("code",{className:"language-text"},"<input>"),", make sure you\nalso set ",r.a.createElement("code",{className:"language-text"},"hideOnClick: false"),"."))},a}(r.a.Component),i={}},173:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=l(t(0)),c=l(t(57)),o=l(t(1));function l(e){return e&&e.__esModule?e:{default:e}}var r=(0,c.default)({}),m=r.Provider,p=r.Consumer;a.withMDXComponents=function(e){return function(a){var t=a.components,c=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["components"]);return s.default.createElement(p,null,function(a){return s.default.createElement(e,n({components:t||a},c))})}};var u=function(e){var a=e.components,t=e.children;return s.default.createElement(m,{value:a},t)};u.propTypes={components:o.default.object.isRequired,children:o.default.element.isRequired},a.default=u},174:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(177);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return c(n).default}});var s=t(173);function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return c(s).default}})},177:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),c=t(0),o=m(c),l=m(t(178)),r=t(173);function m(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},u=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,c.Component),s(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.parentName,s=e.props,c=void 0===s?{}:s,r=e.children,m=e.components,u=void 0===m?{}:m,i=e.Layout,E=e.layoutProps,N=u[t+"."+a]||u[a]||p[a]||a;return i?((0,l.default)(this,i),o.default.createElement(i,n({components:u},E),o.default.createElement(N,c,r))):o.default.createElement(N,c,r)}}]),a}();a.default=(0,r.withMDXComponents)(u)},178:function(e,a,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,o=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=m&&m(Object);e.exports=function e(a,t,u){if("string"!=typeof t){if(p){var i=m(t);i&&i!==p&&e(a,i,u)}var E=o(t);l&&(E=E.concat(l(t)));for(var N=0;N<E.length;++N){var k=E[N];if(!(n[k]||s[k]||u&&u[k])){var g=r(t,k);try{c(a,k,g)}catch(f){}}}return a}return a}}}]);
//# sourceMappingURL=component---src-pages-faq-mdx-501ef4fb86ed369e568f.js.map