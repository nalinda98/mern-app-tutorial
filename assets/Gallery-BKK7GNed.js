import{j as e}from"./index-BTXduf1z.js";const p=["IMG-20250804-WA0020.jpg","IMG-20250804-WA0021.jpg","IMG-20250804-WA0023.jpg","IMG-20250804-WA0024.jpg","IMG-20250804-WA0025.jpg","IMG-20250804-WA0027.jpg","IMG-20250804-WA0028.jpg","IMG-20250804-WA0029.jpg","IMG-20250804-WA0030.jpg","IMG-20250804-WA0031.jpg","IMG-20250804-WA0032.jpg","IMG-20250810-WA0014.jpg","IMG-20250810-WA0015.jpg","IMG-20250810-WA0017.jpg","IMG-20250810-WA0018.jpg","IMG-20250810-WA0019.jpg","IMG-20250810-WA0020.jpg","IMG-20250810-WA0021.jpg","IMG-20250810-WA0022.jpg","IMG-20250810-WA0023.jpg","IMG-20250810-WA0024.jpg","IMG-20250810-WA0025.jpg","IMG-20250810-WA0026.jpg","IMG-20250810-WA0027.jpg","IMG-20250810-WA0028.jpg","IMG-20250810-WA0029.jpg","IMG-20250810-WA0030.jpg","IMG-20250810-WA0031.jpg","IMG-20250810-WA0032.jpg","IMG-20250810-WA0033.jpg","IMG-20250810-WA0034.jpg","IMG-20250810-WA0035.jpg","IMG-20250810-WA0036.jpg","IMG-20250810-WA0037.jpg","IMG-20250810-WA0038.jpg","IMG-20250810-WA0039.jpg","IMG-20250810-WA0040.jpg","IMG-20250810-WA0041.jpg","IMG-20250810-WA0042.jpg","IMG-20250810-WA0043.jpg","IMG-20250810-WA0044.jpg","IMG-20250810-WA0045.jpg","IMG-20250810-WA0046.jpg","IMG-20250810-WA0047.jpg","IMG-20250810-WA0048.jpg","IMG-20250810-WA0049.jpg","IMG-20250810-WA0050.jpg","IMG-20250810-WA0051.jpg","IMG-20250810-WA0052.jpg","IMG-20250810-WA0054.jpg","wa011.jpeg","wa012.jpeg","wa013.jpeg","wa014.jpeg","wa016.jpeg","wa017.jpeg","wa018.jpeg","wa019.jpeg","wa0111.jpeg","wa0112.jpeg","wa0113.jpeg","wa0115.jpeg","wa0117.jpeg","wa0118.jpeg","wa0119.jpeg","wa0120.jpeg","wa0121.jpeg","wa0122.jpeg","wa0123.jpeg","wa0125.jpeg","wa0126.jpeg","wa0127.jpeg"];function r(){return e.jsxs("div",{className:"container py-4",children:[e.jsx("style",{children:j}),e.jsx("div",{className:"row justify-content-center pb-3",children:e.jsxs("div",{className:"col-md-12 heading-section text-center",children:[e.jsx("span",{className:"subheading",children:"Gallery"}),e.jsx("h2",{className:"mb-4",children:"Moments from Sri Lanka"}),e.jsx("p",{className:"",children:"Explore our favorite travel memories and breathtaking sights from across the island."})]})}),e.jsx("div",{className:"row",children:p.map((g,a)=>e.jsx("div",{className:"col-6 col-md-4 col-lg-3 mb-4",children:e.jsx("div",{className:"gallery-item shadow-sm rounded overflow-hidden",children:e.jsx("img",{src:`/images/gallery/${g}`,alt:`Photo ${a+1}`,loading:"lazy"})})},a))})]})}const j=`
.gallery-item {
  transform: translateY(15px);
  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
}
.gallery-item img {
  display: block;
  width: 100%;
  height: 200px; /* fixed height for all images */
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.4s ease;
}
.gallery-item:hover img {
  transform: scale(1.05);
  filter: brightness(1.05);
}
@keyframes fadeUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
`;export{r as default};
