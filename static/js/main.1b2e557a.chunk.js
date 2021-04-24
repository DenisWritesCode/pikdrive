(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(27),a=c.n(r),i=(c(33),c(8)),o=(c(34),c(5)),j=c(2),d=(c(35),c(12)),l=c.n(d),u=c(15),h=c(37),p="https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/";function b(e){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=p+t,e.next=3,h.get(c).then((function(e){n=e.data.data})).catch((function(e){console.log(e)}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(l.a.mark((function e(t,c){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p+t,e.next=3,h.post(n,c).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=c(0);var v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=function(){b("orders").then((function(e){s(e)}))};return Object(n.useEffect)((function(){r()}),[]),Object(f.jsx)("div",{className:"orders",children:c.length>0?c.map((function(e){return Object(f.jsxs)("div",{className:"order",children:[Object(f.jsxs)("section",{className:"text",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Order:"})," ",e.orderNumber]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"No. of items:"})," ",e.count]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Created on:"})," ",(t=e.created_at,new Date(t).toDateString())]})]}),Object(f.jsx)("section",{children:Object(f.jsxs)("button",{className:"delete",onClick:function(){x("delete-order",{id:e.id}).then((function(e){s([]),r()})).catch((function(e){console.log(e)})),alert("Confirm Deletion of ".concat(e.orderNumber))},children:["Delete",Object(f.jsx)("i",{className:"fas fa-trash"})]})})]},e.id);var t})):Object(f.jsx)("p",{children:"Loading Orders ..."})})};c(57);var y=function(e){var t=e.setProducts,c=e.fetchProducts;return Object(f.jsxs)("div",{className:"newProduct",children:[Object(f.jsx)("h1",{className:"title",children:"Add New Product"}),Object(f.jsxs)("form",{action:"#",onSubmit:function(e){e.preventDefault();var n=document.querySelector("#productName"),s=document.querySelector("#productDescription"),r=document.querySelector("#productQuantity");alert("Confirm addition of product: ".concat(n.value)),x("new-product",{name:n.value,description:s.value,quantity:r.value}).then((function(e){t([]),c("products"),console.log(e)})).catch((function(e){console.log(e)})),n.value="",s.value="",r.value=""},className:"form",children:[Object(f.jsxs)("label",{htmlFor:"productName",children:["Name:",Object(f.jsx)("input",{type:"text",name:"productName",id:"productName",maxLength:"45",required:!0})]}),Object(f.jsxs)("label",{htmlFor:"productDescription",children:["Description:",Object(f.jsx)("input",{type:"text",name:"productDescription",id:"productDescription",maxLength:"45"})]}),Object(f.jsxs)("label",{htmlFor:"productQuantity",children:["Quantity:",Object(f.jsx)("input",{type:"number",name:"productQuantity",id:"productQuantity"})]}),Object(f.jsx)("button",{type:"submit",children:"Create New Product"})]})]})};c(58);var N=function(e){var t=e.cart,c=e.displayDate,s=Object(n.useState)([]),r=Object(i.a)(s,2),a=r[0],j=r[1],d=function(){b("products").then((function(e){j(e)}))};return Object(n.useEffect)((function(){d()}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"title",children:"Products"}),Object(f.jsx)("div",{className:"products",children:a.length>0?a.map((function(e){return Object(f.jsxs)("div",{className:"product",children:[Object(f.jsxs)("section",{className:" text",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Name: "}),e.name]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Description: "}),e.description]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Quantity: "}),e.quantity]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Created: "}),c(e.created_at)]})]}),Object(f.jsx)("section",{children:Object(f.jsx)("button",{className:"orderButton",onClick:function(){!function(e,c){var n=!1;t.forEach((function(t){t.id===e&&(t.quantity++,n=!0)})),n||t.push({id:e,name:c,quantity:1})}(e.id,e.name),function(e){var t=document.querySelector(".products"),c=document.createElement("p");t.appendChild(c),c.innerText="Added ".concat(e," to cart"),c.classList.add("cartAlert"),c.style.display="block",setTimeout((function(){c.style.display="none"}),1500)}(e.name)},children:"Add To Cart"})})]},e.id)})):Object(f.jsx)("p",{className:"empty",children:"Fetching Products..."})}),Object(f.jsxs)("p",{className:"plug",children:["Check out our ",Object(f.jsx)(o.b,{to:"/top-sales",children:"Top-Sales"}),"."]}),Object(f.jsx)("hr",{}),Object(f.jsx)(y,{setProducts:j,fetchProducts:d})]})};c(64);var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){b("suppliers/").then((function(e){s(e)})).catch((function(e){console.log(e)}))}),[]),Object(f.jsx)("div",{className:"suppliers",children:c.length>0?c.map((function(e){return Object(f.jsxs)("div",{className:"fetchedSupplier",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Name: "}),e.name]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Created: "}),(t=e.created_at,new Date(t).toDateString())]}),Object(f.jsx)("hr",{})]},e.id);var t})):Object(f.jsx)("p",{className:"empty",children:"Fetching Suppliers ..."})})};c(65);var D=function(e){var t=e.cart,c=e.setCart,s=Object(n.useState)(t),r=Object(i.a)(s,2),a=r[0],j=r[1],d=a.reduce((function(e,t){return e+t.quantity}),0);return Object(f.jsx)("div",{className:"cart-parent",children:d>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"cart",children:a.map((function(e){return Object(f.jsxs)("div",{className:"item",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Product:"})," ",e.name]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Quantity:"})," ",e.quantity]})]},e.id)}))}),Object(f.jsx)("button",{className:"checkout",onClick:function(){alert("Confirm ordering of ".concat(d," item(s) from your account")),x("new-order",{items:t}).then((function(e){c([]),j([])})).catch((function(e){console.log(e)}))},children:"Checkout"})]}):Object(f.jsxs)("section",{className:"empty",children:[Object(f.jsx)("p",{children:"Your cart is currently empty..."}),Object(f.jsxs)("p",{children:["Go back to ",Object(f.jsx)(o.b,{to:"/products",children:"Products"})," to shop."]})]})})};c(66);var S=function(e){var t=e.displayDate,c=Object(n.useState)([]),s=Object(i.a)(c,2),r=s[0],a=s[1];return Object(n.useEffect)((function(){b("top-sales").then((function(e){a(e)})).catch((function(e){console.log(e)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"title",children:"Top-Sales"}),Object(f.jsx)("div",{className:"top-sales",children:r.length>0?r.map((function(e){return Object(f.jsxs)("div",{className:"sale",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Order: "}),e.orderNumber," "]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Quantity: "}),e.count," "]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:"Created: "}),t(e.created_at)]}),Object(f.jsx)("hr",{})]},e.id)})):Object(f.jsx)("p",{className:"empty",children:"Fetching Top Sales..."})}),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("hr",{}),Object(f.jsxs)("p",{className:"linkBack",children:["Check out our ",Object(f.jsx)(o.b,{to:"/products",children:"Products"}),"."]})]})]})};var k=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=function(e){return new Date(e).toDateString()};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("nav",{children:[Object(f.jsx)("h1",{children:"PikDrive"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{to:"/",children:"Orders"})}),Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{to:"/products",children:"Products"})}),Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{to:"/suppliers",children:"Suppliers"})}),Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{to:"/cart",children:Object(f.jsx)("i",{className:"fas fa-shopping-cart"})})})]})]}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{exact:!0,path:"/",children:Object(f.jsx)(v,{displayDate:r})}),Object(f.jsx)(j.a,{path:"/products",children:Object(f.jsx)(N,{displayDate:r,cart:c})}),Object(f.jsx)(j.a,{path:"/suppliers",children:Object(f.jsx)(g,{displayDate:r})}),Object(f.jsx)(j.a,{path:"/top-sales",children:Object(f.jsx)(S,{displayDate:r})}),Object(f.jsx)(j.a,{path:"/cart",children:Object(f.jsx)(D,{cart:c,setCart:s})})]})}),Object(f.jsxs)("footer",{children:[Object(f.jsx)("p",{className:"copyright",children:"\xa9 2021"}),Object(f.jsxs)("p",{className:"link",children:["Designed By"," ",Object(f.jsx)("a",{href:"https://denismutinda.com",target:"blank",children:"DenisWritesCode"})]})]})]})};a.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(o.a,{children:Object(f.jsx)(k,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.1b2e557a.chunk.js.map