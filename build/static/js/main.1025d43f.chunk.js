(this.webpackJsonprtk=this.webpackJsonprtk||[]).push([[0],{245:function(e,t,n){"use strict";n.r(t);n(31);var c=n(28),s=n(7),i=(n(43),n(12)),r=function(){return"".concat(i.faker.word.adjective()," ").concat(i.faker.word.noun())},a=function(){return i.faker.music.songName()},o=n(10),u=Object(o.b)("app/reset"),d=Object(o.c)({name:"song",initialState:[],reducers:{addSong:function(e,t){e.push(t.payload)},removeSong:function(e,t){var n=e.indexOf(t.payload);e.splice(n,1)}},extraReducers:function(e){e.addCase(u,(function(e,t){return[]}))}}),l=d.actions,j=l.addSong,b=l.removeSong,O=d.reducer,v=Object(o.c)({name:"movie",initialState:[],reducers:{addMovie:function(e,t){e.push(t.payload)},removeMovie:function(e,t){var n=e.indexOf(t.payload);e.splice(n,1)}},extraReducers:function(e){e.addCase(u,(function(e,t){return[]}))}}),f=v.actions,h=f.addMovie,m=f.removeMovie,x=v.reducer,p=Object(o.a)({reducer:{songs:O,movies:x}}),N=n(4);var g=function(){var e=Object(s.c)((function(e){return e.movies})),t=Object(s.b)(),n=e.map((function(e){return Object(N.jsxs)("li",{children:[e,Object(N.jsx)("button",{onClick:function(){return function(e){t(m(e))}(e)},className:"button is-danger",children:"X"})]},e)}));return Object(N.jsxs)("div",{className:"content",children:[Object(N.jsxs)("div",{className:"table-header",children:[Object(N.jsx)("h3",{className:"subtitle is-3",children:"Movie Playlist"}),Object(N.jsx)("div",{className:"buttons",children:Object(N.jsx)("button",{onClick:function(){return e=r(),void t(h(e));var e},className:"button is-link",children:"+ Add Movie to Playlist"})})]}),Object(N.jsx)("ul",{children:n})]})};var k=function(){var e=Object(s.c)((function(e){return e.songs})),t=Object(s.b)(),n=e.map((function(e){return Object(N.jsxs)("li",{children:[e,Object(N.jsx)("button",{onClick:function(){return function(e){t(b(e))}(e)},className:"button is-danger",children:"X"})]},e)}));return Object(N.jsxs)("div",{className:"content",children:[Object(N.jsxs)("div",{className:"table-header",children:[Object(N.jsx)("h3",{className:"subtitle is-3",children:"Song Playlist"}),Object(N.jsx)("div",{className:"buttons",children:Object(N.jsx)("button",{onClick:function(){return e=a(),void t(j(e));var e},className:"button is-link",children:"+ Add Song to Playlist"})})]}),Object(N.jsx)("ul",{children:n})]})};function y(){var e=Object(s.b)();return Object(N.jsxs)("div",{className:"container is-fluid",children:[Object(N.jsx)("button",{onClick:function(){e(u())},className:"button is-danger",children:"Reset Both Playlists"}),Object(N.jsx)("hr",{}),Object(N.jsx)(g,{}),Object(N.jsx)("hr",{}),Object(N.jsx)(k,{})]})}var S=document.getElementById("root");Object(c.createRoot)(S).render(Object(N.jsx)(s.a,{store:p,children:Object(N.jsx)(y,{})}))},43:function(e,t,n){}},[[245,1,2]]]);
//# sourceMappingURL=main.1025d43f.chunk.js.map