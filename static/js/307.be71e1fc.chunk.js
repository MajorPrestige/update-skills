"use strict";(self.webpackChunkupdate_skills=self.webpackChunkupdate_skills||[]).push([[307],{293:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(433),a=t(165),s=t(861),c=t(439),l=t(791),o=t(243);o.Z.defaults.baseURL="https://json-server-qp0p.onrender.com/api/";var u=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/users");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.put("/users/".concat(n.id),n);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=t(413),d=t(477),p=t.n(d),w=t.p+"static/media/card.2cfaf72cf1b8694dd508.png",h=t.p+"static/media/card@2x.545b0e444f5568dade94.png",_={card:"TweetCard_card__XCvhd",img:"TweetCard_img__s3grz",btn:"TweetCard_btn__RyUJa",active:"TweetCard_active__vx05L",imgWrapper:"TweetCard_imgWrapper__8KwP1",ava:"TweetCard_ava__FgFw+",info:"TweetCard_info__CGXmp",tweets:"TweetCard_tweets__jFpFn"},v=t(184),m=function(e){var n,t,r=e.name,a=e.avatar,s=e.followers,o=e.tweets,u=e.currentUser,d=e.updateUsers,m=e.setLoading,g=e.filter,x=p()("following_".concat(u.id),!1),Z=(0,c.Z)(x,2),j=Z[0],b=Z[1],C=(0,l.useRef)(null);return"show all"===g||"follow"===g&&!j||"followings"===g&&j?(0,v.jsxs)("li",{className:_.card,children:[(0,v.jsxs)("picture",{children:[(0,v.jsx)("source",{srcSet:h,media:"(min-resolution: 2dppx)"}),(0,v.jsx)("img",{className:_.img,src:w,alt:"card chat"})]}),(0,v.jsxs)("div",{className:_.info,children:[(0,v.jsx)("div",{className:_.imgWrapper,children:(0,v.jsx)("img",{height:"62",width:"62",className:_.ava,src:a,alt:r})}),(0,v.jsxs)("p",{className:_.tweets,children:[(0,v.jsx)("span",{className:_.number,children:o.toLocaleString()})," TWEETS"]}),(0,v.jsxs)("p",{className:_.followers,children:[(0,v.jsx)("span",{className:_.number,children:(t=s,t.toLocaleString())})," ","FOLLOWERS"]}),(0,v.jsx)("button",{onClick:function(){j||(m(!0),i((0,f.Z)((0,f.Z)({},u),{},{followers:u.followers+1})).then((function(){return d()})).catch((function(e){return console.log(e)})).finally((function(){return m(!1)}))),j&&(m(!0),i((0,f.Z)((0,f.Z)({},u),{},{followers:u.followers-1})).then((function(){return d()})).catch((function(e){return console.log(e)})).finally((function(){return m(!1)}))),b(!j),C.current.blur()},ref:C,className:(n=j,n?"".concat(_.btn," ").concat(_.active):_.btn),type:"button",children:j?"Following":"Follow"})]})]}):null},g=t(50),x=t(305),Z="SelectStatus_select__93ZPh",j=function(e){var n=e.handleInputChange,t=e.options,r=e.value;return(0,v.jsx)(x.ZP,{options:t,className:Z,onChange:n,value:r()})},b="TweetList_list__7RDyA",C="TweetList_btn__7Y3b1",N=[{value:"show all",label:"Show all"},{value:"follow",label:"Follow"},{value:"followings",label:"Followings"}],T=function(){var e=(0,l.useState)([]),n=(0,c.Z)(e,2),t=n[0],r=n[1],o=(0,l.useState)("show all"),i=(0,c.Z)(o,2),f=i[0],d=i[1],p=(0,l.useState)(12),w=(0,c.Z)(p,2),h=w[0],_=w[1],x=(0,l.useState)(!1),Z=(0,c.Z)(x,2),T=Z[0],S=Z[1];(0,l.useEffect)((function(){S(!0),u().then((function(e){return r(e)})).catch((function(e){return console.log(e)})).finally((function(){return S(!1)}))}),[]);var k=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j,{handleInputChange:function(e){d(e.value)},options:N,value:function(){return f?N.find((function(e){return e.value===f})):""}}),T&&(0,v.jsx)(g.Z,{}),(0,v.jsx)("ul",{className:b,children:t.slice(0,h).map((function(e){return(0,v.jsx)(m,{name:e.user,avatar:e.avatar,followers:e.followers,tweets:e.tweets,currentUser:t[e.id-1],updateUsers:k,loading:T,setLoading:S,filter:f},e.id)}))}),(t.length>h||t.length!==h)&&(0,v.jsx)("button",{type:"button",className:C,onClick:function(){_((function(e){return e+12}))},children:"load more"})]})},S="TweetsPage_colorContainer__4IJcF",k="TweetsPage_container__Tqs0H";console.log(function(e,n,t,a){var s=e.splice(0,n),c=t.splice(0,a);return[].concat((0,r.Z)(s),(0,r.Z)(c)).sort((function(e,n){return e-n}))}([1,2,3,0,0,0],3,[2,5,6],3));var F=function(){return(0,v.jsx)("div",{className:S,children:(0,v.jsx)("div",{className:k,children:(0,v.jsx)(T,{})})})}}}]);
//# sourceMappingURL=307.be71e1fc.chunk.js.map