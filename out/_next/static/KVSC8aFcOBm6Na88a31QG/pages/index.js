(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"16Al":function(e,t,i){"use strict";var s=i("WbBG");function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,t,i,n,r,a){if(a!==s){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var i={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:n};return i.PropTypes=i,i}},"17x9":function(e,t,i){e.exports=i("16Al")()},"3niX":function(e,t,i){"use strict";t.__esModule=!0,t.flush=function(){var e=r.cssRules();return r.flush(),e},t.default=void 0;var s,n=i("q1tI");var r=new(((s=i("SevZ"))&&s.__esModule?s:{default:s}).default),a=function(e){var t,i;function s(t){var i;return(i=e.call(this,t)||this).prevProps={},i}i=e,(t=s).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,s.dynamic=function(e){return e.map((function(e){var t=e[0],i=e[1];return r.computeId(t,i)})).join(" ")};var n=s.prototype;return n.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},n.componentWillUnmount=function(){r.remove(this.props)},n.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&r.remove(this.prevProps),r.add(this.props),this.prevProps=this.props),null},s}(n.Component);t.default=a},"8oxB":function(e,t){var i,s,n=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(i===setTimeout)return setTimeout(e,0);if((i===r||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"===typeof setTimeout?setTimeout:r}catch(e){i=r}try{s="function"===typeof clearTimeout?clearTimeout:a}catch(e){s=a}}();var u,l=[],c=!1,m=-1;function d(){c&&u&&(c=!1,u.length?l=u.concat(l):m=-1,l.length&&p())}function p(){if(!c){var e=o(d);c=!0;for(var t=l.length;t;){for(u=l,l=[];++m<t;)u&&u[m].run();m=-1,t=l.length}u=null,c=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===a||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];l.push(new h(e,t)),1!==l.length||c||o(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},"9kyW":function(e,t,i){"use strict";e.exports=function(e){for(var t=5381,i=e.length;i;)t=33*t^e.charCodeAt(--i);return t>>>0}},Aeec:function(e,t){e.exports=[{id:1,name:"Guillermo Rauch",position:"Founder",company:"Zeit",imageUrl:"./static/images/speakers/speaker.png",twitter:"https://twitter.com/rauchg",github:"https://github.com/rauchg",site:"https://rauchg.com/"},{id:2,name:"Liran Tal",position:"Engineering Manager",company:"Marketing Cloud, Nielsen",imageUrl:"./static/images/speakers/speaker.png",twitter:"https://twitter.com/liran_tal",github:"https://github.com/lirantal",site:"https://medium.com/@liran.tal"},{id:3,name:"Martin Splitt",position:"Senior Software Engineer",company:"Archilogic",imageUrl:"./static/images/speakers/speaker.png",twitter:"https://twitter.com/g33konaut",github:"https://github.com/avgp",site:"http://50linesofco.de/"},{id:4,name:"Gautam Arora",position:"Developer Evangelist",company:"Conde Nast",imageUrl:"./static/images/speakers/speaker.png",twitter:"https://twitter.com/gautam",github:"https://github.com/gautamarora",site:"http://www.gautamarora.com/"},{id:5,name:"Mark Dalgleish",position:"DesignOps Lead",company:"SEEK",imageUrl:"./static/images/speakers/speaker.png",twitter:"https://twitter.com/markdalgleish",github:"https://github.com/markdalgleish"},{id:6,name:"Alex Moldovan",position:"Full Stack Developer",company:"Fortech",imageUrl:"./static/images/speakers/speaker.png",twitter:"https://twitter.com/alexnmoldovan",github:"https://github.com/alexnm",site:"https://medium.com/@alexnm"},{id:7,name:"Tudor Gergely",position:"Fullstack developer",company:"Catalysts",imageUrl:"./static/images/speakers/speaker.png",github:"https://github.com/tudorgergely"},{id:8,name:"Xavier Cazalot",position:"Javascript Engineer",company:"Consultant",imageUrl:"./static/images/speakers/speaker.png",twitter:"https://twitter.com/xav_cz",github:"https://github.com/xavcz",site:"http://xav.cz/"}]},MX0m:function(e,t,i){e.exports=i("3niX")},RNiq:function(e,t,i){"use strict";i.r(t);var s=i("q1tI"),n=i.n(s),r=i("8Kt/"),a=i.n(r),o=i("YFqc"),u=i.n(o),l=(i("nOHt"),i("MX0m")),c=i.n(l),m=n.a.createElement,d=function(){return m(c.a,{id:"1332130884"},[".button{margin:20px;border-style:solid;border-width:3px;padding:10px 30px;font-size:1.5rem;-webkit-transition:all 0.35s ease-in-out;transition:all 0.35s ease-in-out;cursor:pointer;}",".button.light{background-color:transparent;color:#eee;border-color:#eee;}",".button.light:hover{background-color:#f1c40f;color:#333;border-color:#f1c40f;}",".button.dark{background-color:transparent;color:#333;border-color:#333;}",".button.dark:hover{background-color:#333;color:#eee;border-color:#333;}",".container{width:1024px;margin:auto;}",".header{position:fixed;width:100%;z-index:10;}",".main{padding-top:59px;}",".navlink{padding:20px 30px;color:#eee;-webkit-text-decoration:none;text-decoration:none;background-color:#333;-webkit-transition:all 0.7s ease-out;transition:all 0.7s ease-out;cursor:pointer;}",".navlink.highlight{color:#f1c40f;}",".navlink:hover{background-color:#f1c40f;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;color:#333;}",".section{padding:20px;}",".section.dark{background-color:#333;color:#eee;}",".section.color{background-color:#f1c40f;color:#333;}",".section.light{background-color:#eee;color:#333;}","body{margin:0;font-family:'Roboto',sans-serif;text-align:center;}","h1,h2,h3,h4{margin:0;}","p{font-weight:300;font-size:1.2rem;}"])},p=n.a.createElement,h=function(e){var t=e.children,i=e.title,s=void 0===i?"RSD-IITP":i;return p("div",null,p(a.a,null,p("title",null,s),p("meta",{name:"viewport",content:"width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"}),p("meta",{charSet:"utf-8"}),p("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400",rel:"stylesheet"}),p("link",{href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet"})),p("header",{className:"header section dark"},p("nav",null,p(u.a,{href:"./index.html"},p("a",{className:"navlink"},"Home")),p(u.a,{href:"./index.html#about"},p("a",{className:"navlink"},"About")),p(u.a,{href:"./index.html#speakers"},p("a",{className:"navlink"},"Speakers")),p(u.a,{href:"./index.html#agenda"},p("a",{className:"navlink"},"Agenda")),p(u.a,{href:"./index.html#sponsors"},p("a",{className:"navlink"},"Sponsors and Partners")),p(u.a,{href:"./index.html#register"},p("a",{className:"navlink"},"Register")),p(u.a,{href:"./index.html#gallery"},p("a",{className:"navlink"},"Gallery")),p(u.a,{href:"./index.html#contact"},p("a",{className:"navlink"},"Contact"))),p(d,null)),t)},f={name:"Research Scholar Day",period:"March 7, 2020",place:"Indian Institute Of Technology, Patna"},v=n.a.createElement,g=function(){return v("div",{id:"home",className:"jsx-2643631376 above-the-fold"},v(c.a,{id:"2643631376"},['.above-the-fold.jsx-2643631376{background-image:url( "./static/images/cover.jpg" );background-size:100%;background-repeat:no-repeat;background-size:cover;height:100vh;position:relative;color:#eee;}',".above-the-fold.jsx-2643631376 .centered-text.jsx-2643631376{position:absolute;height:200px;top:0;bottom:0;left:0;right:0;margin:auto;}",".above-the-fold.jsx-2643631376 h1.jsx-2643631376{color:#f1c40f;font-size:3rem;margin:30px;}",".overlay.jsx-2643631376{background:-webkit-radial-gradient(circle,rgba(0,0,0,0.5),#2F2727);position:absolute;top:0;bottom:0;left:0;right:0;}"]),v("div",{className:"jsx-2643631376 overlay"}),v("div",{className:"jsx-2643631376 centered-text"},v("h1",{className:"jsx-2643631376"},f.name),v("h2",{className:"jsx-2643631376"},f.period),v("p",{className:"jsx-2643631376"},f.place)))},b=i("17x9"),y=i.n(b),_="#f1c40f",w="#333333",x=n.a.createElement,k=(y.a.shape,y.a.string,function(e){var t=e.details;return x("div",{className:c.a.dynamic([["1802516644",[_,w]]])+" speaker-pic"},x(c.a,{id:"1802516644",dynamic:[_,w]},[".speaker-pic.__jsx-style-dynamic-selector{display:inline-block;width:25%;margin-bottom:30px;}",".rounded.__jsx-style-dynamic-selector{border-radius:200px;height:200px;width:200px;overflow:hidden;margin:auto;position:relative;cursor:pointer;}",".speaker-pic.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:200px;}",".rounded.__jsx-style-dynamic-selector:hover .social.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:translateY( 0 );-ms-transform:translateY( 0 );transform:translateY( 0 );}",".rounded.__jsx-style-dynamic-selector:hover .overlay.__jsx-style-dynamic-selector{opacity:0.5;}",".social.__jsx-style-dynamic-selector{position:absolute;margin:auto;-webkit-transition:all 0.2s;transition:all 0.2s;top:45%;opacity:0;width:100%;-webkit-transform:translateY( 100px );-ms-transform:translateY( 100px );transform:translateY( 100px );}",".overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;background-color:".concat(_,";-webkit-transition:all 1s;transition:all 1s;}"),".social.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{margin:10px;border:1px solid black;padding:5px 7px;border-radius:100%;-webkit-text-decoration:none;text-decoration:none;color:".concat(w,";}")]),x("div",{className:c.a.dynamic([["1802516644",[_,w]]])+" rounded"},x("img",{src:t.imageUrl,alt:t.name,className:c.a.dynamic([["1802516644",[_,w]]])}),x("div",{className:c.a.dynamic([["1802516644",[_,w]]])+" overlay"}),x("div",{className:c.a.dynamic([["1802516644",[_,w]]])+" social"},x("a",{href:t.twitter,target:"_blank",rel:"noopener noreferrer",className:c.a.dynamic([["1802516644",[_,w]]])},x("i",{className:c.a.dynamic([["1802516644",[_,w]]])+" fa fa-twitter"})),x("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:c.a.dynamic([["1802516644",[_,w]]])},x("i",{className:c.a.dynamic([["1802516644",[_,w]]])+" fa fa-github"})),x("a",{href:t.site,target:"_blank",rel:"noopener noreferrer",className:c.a.dynamic([["1802516644",[_,w]]])},x("i",{className:c.a.dynamic([["1802516644",[_,w]]])+" fa fa-link"})))),x("p",{className:c.a.dynamic([["1802516644",[_,w]]])},x("strong",{className:c.a.dynamic([["1802516644",[_,w]]])},t.name)),x("p",{className:c.a.dynamic([["1802516644",[_,w]]])},t.position),x("p",{className:c.a.dynamic([["1802516644",[_,w]]])},t.company))}),S=n.a.createElement,q=(y.a.shape,y.a.string,function(e){var t=e.details;return S("div",{className:c.a.dynamic([["3084377935",[_,w]]])+" speaker-pic"},S(c.a,{id:"3084377935",dynamic:[_,w]},[".speaker-pic.__jsx-style-dynamic-selector{display:inline-block;width:25%;margin-bottom:30px;}",".rounded.__jsx-style-dynamic-selector{border-radius:200px;height:200px;width:200px;margin:auto;position:relative;cursor:pointer;}",".speaker-pic.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:200px;}",".rounded.__jsx-style-dynamic-selector:hover .social.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:translateY( 0 );-ms-transform:translateY( 0 );transform:translateY( 0 );}",".rounded.__jsx-style-dynamic-selector:hover .overlay.__jsx-style-dynamic-selector{opacity:0.5;}",".social.__jsx-style-dynamic-selector{position:absolute;margin:auto;-webkit-transition:all 0.2s;transition:all 0.2s;top:45%;opacity:0;width:100%;-webkit-transform:translateY( 100px );-ms-transform:translateY( 100px );transform:translateY( 100px );}",".overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;background-color:".concat(_,";-webkit-transition:all 1s;transition:all 1s;}"),".social.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{margin:10px;border:1px solid black;padding:5px 7px;border-radius:100%;-webkit-text-decoration:none;text-decoration:none;color:".concat(w,";}")]),S("div",{className:c.a.dynamic([["3084377935",[_,w]]])+" rounded"},S("a",{target:"_blank",rel:"noopener noreferrer",href:t.linkUrl,className:c.a.dynamic([["3084377935",[_,w]]])},S("img",{src:t.logoUrl,alt:t.name,className:c.a.dynamic([["3084377935",[_,w]]])}),S("div",{className:c.a.dynamic([["3084377935",[_,w]]])+" overlay"}))),S("p",{className:c.a.dynamic([["3084377935",[_,w]]])},S("strong",{className:c.a.dynamic([["3084377935",[_,w]]])},t.name)))}),N=n.a.createElement,C=i("Aeec"),j=i("d79k"),R=i("wx+a");t.default=function(e){var t=C.map((function(e){return N(k,{details:e,key:e.id})})),i=j.map((function(e){return N(q,{details:e,key:e.id})}));return N(h,null,N(g,null),N("div",{className:"section light",id:"about"},N("div",{className:"container"},N("h2",null,"About the event"),N("p",null,R.aboutPara1),N("p",null,"We kick-started the Cluj JavaScripters community in August 2015. Since then we\u2019ve grown to 900+ members and formed one of the most active knowledge sharing groups worldwide. We organized more than 42 Meetups and Trainings for the JS community in Cluj. So far we partnered with technical conferences to deliver high-quality JS knowledge and held an entire conference track for CodeCamp. What can we say, it was a full-house track and it was brilliant!"),N("p",null,"JSHeroes is one of our dreams and the high point of an active community; we\u2019re truly engaged to see it come true. We know it\u2019s a stretch and it might seem crazy to organize an event of this international scale. We\u2019ve considered all the risks and each of us decided to take personal ownership for it so that our local Cluj JavaScripters community evolves into a global JSHeroes community."))),N("div",{className:"section dark"},N("div",{className:"container"},N("h2",null,"Why next?"),N("p",null,"Mauris placerat nunc sit amet turpis pulvinar, nec iaculis massa posuere. Aenean orci tortor, aliquet sed neque eu, dictum suscipit nisi. Morbi interdum vitae nunc sit amet varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam non enim orci. Suspendisse mauris quam, porttitor vel lorem nec, malesuada suscipit velit. Duis lacinia cursus mattis. Vestibulum vel nisl vestibulum neque tincidunt fringilla at a dui. Nam nisi lacus, viverra vitae eros quis, maximus vehicula nisi. Phasellus euismod, tortor et rutrum tempus, libero risus vestibulum nisi, non malesuada eros orci quis sem. Quisque iaculis pharetra placerat. Integer ut urna sit amet dui pretium pharetra at sit amet nisl. Aliquam rutrum velit ipsum, scelerisque pretium purus ultrices nec."),N("p",null,"Mauris placerat nunc sit amet turpis pulvinar, nec iaculis massa posuere. Aenean orci tortor, aliquet sed neque eu, dictum suscipit nisi. Morbi interdum vitae nunc sit amet varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam non enim orci. Suspendisse mauris quam, porttitor vel lorem nec, malesuada suscipit velit. Duis lacinia cursus mattis. Vestibulum vel nisl vestibulum neque tincidunt fringilla at a dui. Nam nisi lacus, viverra vitae eros quis, maximus vehicula nisi. Phasellus euismod, tortor et rutrum tempus, libero risus vestibulum nisi, non malesuada eros orci quis sem. Quisque iaculis pharetra placerat. Integer ut urna sit amet dui pretium pharetra at sit amet nisl. Aliquam rutrum velit ipsum, scelerisque pretium purus ultrices nec."))),N("div",{className:"section color",id:"speakers"},N("h2",null,"Our Heroes"),N("div",null,t)),N("div",{className:"section light",id:"agenda"},N("div",{className:"container"},N("h2",null,"Agenda"),N("p",null,"Curabitur vestibulum ante maximus maximus consectetur. Morbi elementum nisl nec risus varius volutpat. Sed vehicula, odio at gravida feugiat, urna lectus cursus metus, in molestie lorem purus ut risus. In ac volutpat metus, id iaculis est. Phasellus in nisi pharetra, ultricies est non, accumsan mauris. Suspendisse vel consequat quam. Aenean interdum lectus eget magna pellentesque, at posuere dui egestas. Morbi at lectus nulla. Nunc tristique, leo eget tincidunt iaculis, turpis nulla semper dolor, a molestie justo lacus id nulla."),N("p",null,"Fusce dignissim quam aliquam orci bibendum dignissim. Nunc vehicula ante non diam consequat, sed mattis nibh dictum. Proin est nisl, placerat at lectus quis, eleifend ultrices nisi. Donec ac interdum lectus, nec consectetur erat. Suspendisse eget libero at nisl consectetur viverra. Quisque sit amet mauris ac nibh rhoncus bibendum id eu sapien. Vestibulum a urna non nisl vehicula hendrerit. Vivamus id odio vel leo consequat rhoncus a in diam. Quisque rhoncus vulputate lacus ac luctus. Curabitur leo orci, mattis pellentesque augue nec, hendrerit faucibus nulla. Vestibulum a efficitur nisl."))),N("div",{className:"section dark",id:"sponsors"},N("div",{className:"container"},N("h2",null,"Sponsors"),N("p",null,"Curabitur vestibulum ante maximus maximus consectetur. Morbi elementum nisl nec risus varius volutpat. Sed vehicula, odio at gravida feugiat, urna lectus cursus metus, in molestie lorem purus ut risus. In ac volutpat metus, id iaculis est. Phasellus in nisi pharetra, ultricies est non, accumsan mauris. Suspendisse vel consequat quam. Aenean interdum lectus eget magna pellentesque, at posuere dui egestas. Morbi at lectus nulla. Nunc tristique, leo eget tincidunt iaculis, turpis nulla semper dolor, a molestie justo lacus id nulla."),N("p",null,"Fusce dignissim quam aliquam orci bibendum dignissim. Nunc vehicula ante non diam consequat, sed mattis nibh dictum. Proin est nisl, placerat at lectus quis, eleifend ultrices nisi. Donec ac interdum lectus, nec consectetur erat. Suspendisse eget libero at nisl consectetur viverra. Quisque sit amet mauris ac nibh rhoncus bibendum id eu sapien. Vestibulum a urna non nisl vehicula hendrerit. Vivamus id odio vel leo consequat rhoncus a in diam. Quisque rhoncus vulputate lacus ac luctus. Curabitur leo orci, mattis pellentesque augue nec, hendrerit faucibus nulla. Vestibulum a efficitur nisl.")),i),N("div",{className:"section color",id:"register"},N("div",{className:"container"},N("h2",null,"Register"),N("p",null,"Curabitur vestibulum ante maximus maximus consectetur. Morbi elementum nisl nec risus varius volutpat. Sed vehicula, odio at gravida feugiat, urna lectus cursus metus, in molestie lorem purus ut risus. In ac volutpat metus, id iaculis est. Phasellus in nisi pharetra, ultricies est non, accumsan mauris. Suspendisse vel consequat quam. Aenean interdum lectus eget magna pellentesque, at posuere dui egestas. Morbi at lectus nulla. Nunc tristique, leo eget tincidunt iaculis, turpis nulla semper dolor, a molestie justo lacus id nulla."),N("p",null,"Fusce dignissim quam aliquam orci bibendum dignissim. Nunc vehicula ante non diam consequat, sed mattis nibh dictum. Proin est nisl, placerat at lectus quis, eleifend ultrices nisi. Donec ac interdum lectus, nec consectetur erat. Suspendisse eget libero at nisl consectetur viverra. Quisque sit amet mauris ac nibh rhoncus bibendum id eu sapien. Vestibulum a urna non nisl vehicula hendrerit. Vivamus id odio vel leo consequat rhoncus a in diam. Quisque rhoncus vulputate lacus ac luctus. Curabitur leo orci, mattis pellentesque augue nec, hendrerit faucibus nulla. Vestibulum a efficitur nisl."))),N("div",{className:"section light",id:"gallery"},N("div",{className:"container"},N("h2",null,"Gallery"),N("p",null,"Curabitur vestibulum ante maximus maximus consectetur. Morbi elementum nisl nec risus varius volutpat. Sed vehicula, odio at gravida feugiat, urna lectus cursus metus, in molestie lorem purus ut risus. In ac volutpat metus, id iaculis est. Phasellus in nisi pharetra, ultricies est non, accumsan mauris. Suspendisse vel consequat quam. Aenean interdum lectus eget magna pellentesque, at posuere dui egestas. Morbi at lectus nulla. Nunc tristique, leo eget tincidunt iaculis, turpis nulla semper dolor, a molestie justo lacus id nulla."),N("p",null,"Fusce dignissim quam aliquam orci bibendum dignissim. Nunc vehicula ante non diam consequat, sed mattis nibh dictum. Proin est nisl, placerat at lectus quis, eleifend ultrices nisi. Donec ac interdum lectus, nec consectetur erat. Suspendisse eget libero at nisl consectetur viverra. Quisque sit amet mauris ac nibh rhoncus bibendum id eu sapien. Vestibulum a urna non nisl vehicula hendrerit. Vivamus id odio vel leo consequat rhoncus a in diam. Quisque rhoncus vulputate lacus ac luctus. Curabitur leo orci, mattis pellentesque augue nec, hendrerit faucibus nulla. Vestibulum a efficitur nisl."))),N("div",{className:"section dark",id:"contact"},N("div",{className:"container"},N("h2",null,"Team-RSD-IITP-2020"),N("p",null,"Curabitur vestibulum ante maximus maximus consectetur. Morbi elementum nisl nec risus varius volutpat. Sed vehicula, odio at gravida feugiat, urna lectus cursus metus, in molestie lorem purus ut risus. In ac volutpat metus, id iaculis est. Phasellus in nisi pharetra, ultricies est non, accumsan mauris. Suspendisse vel consequat quam. Aenean interdum lectus eget magna pellentesque, at posuere dui egestas. Morbi at lectus nulla. Nunc tristique, leo eget tincidunt iaculis, turpis nulla semper dolor, a molestie justo lacus id nulla."),N("p",null,"Fusce dignissim quam aliquam orci bibendum dignissim. Nunc vehicula ante non diam consequat, sed mattis nibh dictum. Proin est nisl, placerat at lectus quis, eleifend ultrices nisi. Donec ac interdum lectus, nec consectetur erat. Suspendisse eget libero at nisl consectetur viverra. Quisque sit amet mauris ac nibh rhoncus bibendum id eu sapien. Vestibulum a urna non nisl vehicula hendrerit. Vivamus id odio vel leo consequat rhoncus a in diam. Quisque rhoncus vulputate lacus ac luctus. Curabitur leo orci, mattis pellentesque augue nec, hendrerit faucibus nulla. Vestibulum a efficitur nisl.")),t),N("div",{className:"section color"},N("div",{className:"container"},N("p",null,"Join us on 7th, March 2020."))))}},SevZ:function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;var s=r(i("9kyW")),n=r(i("bVZc"));function r(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,i=t.styleSheet,s=void 0===i?null:i,r=t.optimizeForSpeed,a=void 0!==r&&r,o=t.isBrowser,u=void 0===o?"undefined"!==typeof window:o;this._sheet=s||new n.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),s&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var i=this.getIdAndRules(e),s=i.styleId,n=i.rules;if(s in this._instancesCounts)this._instancesCounts[s]+=1;else{var r=n.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[s]=r,this._instancesCounts[s]=1}},t.remove=function(e){var t=this,i=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var s=this._fromServer&&this._fromServer[i];s?(s.parentNode.removeChild(s),delete this._fromServer[i]):(this._indices[i].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[i]),delete this._instancesCounts[i]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return i[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,i){if(!i)return"jsx-"+t;var n=String(i),r=t+n;return e[r]||(e[r]="jsx-"+(0,s.default)(t+"-"+n)),e[r]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(i,s){this._isBrowser||(s=s.replace(/\/style/gi,"\\/style"));var n=i+s;return t[n]||(t[n]=s.replace(e,i)),t[n]}},t.getIdAndRules=function(e){var t=this,i=e.children,s=e.dynamic,n=e.id;if(s){var r=this.computeId(n,s);return{styleId:r,rules:Array.isArray(i)?i.map((function(e){return t.computeSelector(r,e)})):[this.computeSelector(r,i)]}}return{styleId:this.computeId(n),rules:Array.isArray(i)?i:[i]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},WbBG:function(e,t,i){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},YFqc:function(e,t,i){e.exports=i("cTJO")},bVZc:function(e,t,i){"use strict";(function(e){function i(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}t.__esModule=!0,t.default=void 0;var s="undefined"!==typeof e&&e.env&&!0,n=function(e){return"[object String]"===Object.prototype.toString.call(e)},r=function(){function e(e){var t=void 0===e?{}:e,i=t.name,r=void 0===i?"stylesheet":i,o=t.optimizeForSpeed,u=void 0===o?s:o,l=t.isBrowser,c=void 0===l?"undefined"!==typeof window:l;a(n(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",a("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var m=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=m?m.getAttribute("content"):null}var t,r,o,u=e.prototype;return u.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,i){return"number"===typeof i?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(a(n(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();"number"!==typeof t&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch(o){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var i=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch(r){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),i.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];a(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,i){return i?t=t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,i){t&&a(n(t),"makeStyleTag acceps only strings as second parameter");var s=document.createElement("style");this._nonce&&s.setAttribute("nonce",this._nonce),s.type="text/css",s.setAttribute("data-"+e,""),t&&s.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return i?r.insertBefore(s,i):r.appendChild(s),s},t=e,(r=[{key:"length",get:function(){return this._rulesCount}}])&&i(t.prototype,r),o&&i(t,o),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=r}).call(this,i("8oxB"))},cTJO:function(e,t,i){"use strict";var s=i("/HRN"),n=i("WaGi"),r=i("ZDA2"),a=i("/+P4"),o=i("N9n2"),u=i("5Uuq"),l=i("KI45");t.__esModule=!0,t.default=void 0;var c,m=l(i("LX0d")),d=i("QmWs"),p=u(i("q1tI")),h=(l(i("17x9")),l(i("nOHt"))),f=(i("P5f7"),i("g/15"));function v(e){return e&&"object"===typeof e?(0,f.formatWithValidation)(e):e}var g=new m.default,b=window.IntersectionObserver;function y(){return c||(b?c=new b((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){function t(e){var i;return s(this,t),(i=r(this,a(t).call(this,e))).p=void 0,i.cleanUpListeners=function(){},i.formatUrls=function(e){var t=null,i=null,s=null;return function(n,r){if(s&&n===t&&r===i)return s;var a=e(n,r);return t=n,i=r,s=a,a}}((function(e,t){return{href:v(e),as:t?v(t):t}})),i.linkClicked=function(e){var t=e.currentTarget,s=t.nodeName,n=t.target;if("A"!==s||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=i.formatUrls(i.props.href,i.props.as),a=r.href,o=r.as;if(function(e){var t=(0,d.parse)(e,!1,!0),i=(0,d.parse)((0,f.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===i.protocol&&t.host===i.host}(a)){var u=window.location.pathname;a=(0,d.resolve)(u,a),o=o?(0,d.resolve)(u,o):a,e.preventDefault();var l=i.props.scroll;null==l&&(l=o.indexOf("#")<0),h.default[i.props.replace?"replace":"push"](a,o,{shallow:i.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},i.p=!1!==e.prefetch,i}return o(t,e),n(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var i=y();return i?(i.observe(e),g.set(e,t),function(){try{i.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()})))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,i=(0,d.resolve)(e,t);h.default.prefetch(i)}}},{key:"render",value:function(){var e=this,t=this.props.children,i=this.formatUrls(this.props.href,this.props.as),s=i.href,n=i.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var r=p.Children.only(t),a={ref:function(t){e.handleRef(t),r&&"object"===typeof r&&r.ref&&("function"===typeof r.ref?r.ref(t):"object"===typeof r.ref&&(r.ref.current=t))},onMouseEnter:function(t){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),e.prefetch()},onClick:function(t){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(a.href=n||s),p.default.cloneElement(r,a)}}]),t}(p.Component);_.propTypes=void 0;var w=_;t.default=w},d79k:function(e,t){e.exports=[{id:1,name:"ABC",logoUrl:"./static/images/sponsors/abc.png",linkUrl:"http://www.fortech.ro"},{id:2,name:"ABC",logoUrl:"./static/images/sponsors/abc.png",linkUrl:"http://www.fortech.ro"},{id:3,name:"ABC",logoUrl:"./static/images/sponsors/abc.png",linkUrl:"http://www.fortech.ro"},{id:4,name:"ABC",logoUrl:"./static/images/sponsors/abc.png",linkUrl:"http://www.fortech.ro"},{id:5,name:"ABC",logoUrl:"./static/images/sponsors/abc.png",linkUrl:"http://www.fortech.ro"},{id:6,name:"ABC",logoUrl:"./static/images/sponsors/abc.png",linkUrl:"http://www.fortech.ro"},{id:7,name:"ABC",logoUrl:"./static/images/sponsors/abc.png",linkUrl:"http://www.fortech.ro"},{id:8,name:"ABC",logoUrl:"./static/images/sponsors/abc.png",linkUrl:"http://www.fortech.ro"}]},vlRD:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])},"wx+a":function(e,t){e.exports={aboutPara1:"We\u2019re planning for JSHeroes to be the biggest tech Conference in Romania, dedicated solely to JavaScript. We\u2019ll get our engine going with 20 international JavaScript experts and we\u2019ve chosen a venue that allows a crowd of up to 500 attendees."}}},[["vlRD",0,1]]]);