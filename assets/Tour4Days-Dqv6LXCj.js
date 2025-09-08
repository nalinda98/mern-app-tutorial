import{j as e}from"./index-BTXduf1z.js";const t=[{day:1,title:"Arrival in Negombo",description:["Arrive at Bandaranaike International Airport (CMB) near Colombo.","Transfer to Negombo, a coastal town known for its fishing industry and beaches.","Relax on the beach and explore the local area."],imageAlt:"Negombo Beach",imagesrc:"/images/negombo.avif"},{day:2,title:"Pinnawala Elephant Orphanage & Dambulla",description:["Visit the Pinnawala Elephant Orphanage to see rescued elephants.","Continue to Dambulla and explore the famous Golden Temple (cave temples).","Overnight stay near Sigiriya or Dambulla."],imageAlt:"Pinnawala Elephant Orphanage",imagesrc:"/images/pinnawala.jpg"},{day:3,title:"Sigiriya Rock Fortress & Kandy",description:["Climb the iconic Sigiriya Rock Fortress, a UNESCO World Heritage site.","Travel to Kandy, the cultural capital of Sri Lanka.","Visit the Temple of the Tooth Relic in Kandy."],imageAlt:"Sigiriya Rock Fortress",imagesrc:"/images/seegiriya.webp"},{day:4,title:"Kandy & Departure",description:["Explore the Peradeniya Royal Botanical Gardens.","Enjoy a city tour of Kandy or shop for souvenirs.","Transfer to the airport or your next destination."],imageAlt:"Temple of the Tooth Relic",imagesrc:"/images/kandy.avif"}],s=()=>e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
        .itinerary-photo-container {
          transition: box-shadow 0.4s cubic-bezier(.4,2,.6,1), transform 0.4s cubic-bezier(.4,2,.6,1);
        }
        .itinerary-photo-container:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          transform: scale(1.04) rotate(-2deg);
          z-index: 2;
        }
        .itinerary-photo-container img {
          transition: filter 0.4s cubic-bezier(.4,2,.6,1);
        }
        .itinerary-photo-container:hover img {
          filter: brightness(1.08) saturate(1.2);
        }
        `}),e.jsx("div",{className:"row justify-content-center pb-3",children:e.jsxs("div",{className:"col-md-12 heading-section text-center",children:[e.jsx("span",{className:"subheading",children:"Itinerary"}),e.jsx("h2",{className:"mb-4",children:"4-Day Sri Lanka Tour"}),e.jsx("p",{children:"Discover the highlights of Sri Lanka in just four days, from golden beaches to ancient wonders and cultural treasures."})]})}),t.map(a=>e.jsx("div",{className:"mb-5 p-4 shadow rounded bg-white",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-md-4 mb-3 mb-md-0",children:e.jsxs("div",{className:"itinerary-photo-container",style:{width:"100%",aspectRatio:"1 / 1",background:"#eee",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",overflow:"hidden",position:"relative"},children:[e.jsx("img",{src:a.imagesrc||"",alt:a.imageAlt,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}),!a.imagesrc&&e.jsxs("span",{style:{color:"#aaa",zIndex:1},children:["Image for ",a.title]})]})}),e.jsxs("div",{className:"col-md-8",children:[e.jsxs("h4",{children:["Day ",a.day,": ",a.title]}),e.jsx("ul",{children:a.description.map((i,r)=>e.jsx("li",{children:i},r))})]})]})},a.day))]});export{s as default};
