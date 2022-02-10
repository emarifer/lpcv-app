var A=Object.defineProperty,N=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(r,a,i)=>a in r?A(r,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[a]=i,g=(r,a)=>{for(var i in a||(a={}))k.call(a,i)&&f(r,i,a[i]);if(x)for(var i of x(a))F.call(a,i)&&f(r,i,a[i]);return r},y=(r,a)=>N(r,D(a));import{u as C,c as b,j as e,L as v,a as t,M,b as T,G as q,d as R,r as p,F as m,A as j,B as I,I as z,e as P,C as B,f as _,W as S,g as E,m as L,R as w,l as G,h as V,q as H,i as W,S as $,k as O,n as U,v as K,o as Y}from"./vendor.b1a81f5c.js";const J=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}};J();const h=r=>{const[a]=C(r.href),i=b({[r.className]:!0,[r.activeStyle]:a});return e(v,{href:r.href,children:e("a",{className:i,children:r.children})})},Q="_buttonLink_1do5o_1";var X={buttonLink:Q};const Z=()=>{const{buttonLink:r}=X;return t(v,{className:r,href:"cv-page",children:["Revisa mi CV",e(M,{})]})},ee="_toTop_7d43c_1";var re={toTop:ee};const ae=({scrollToTop:r})=>{const{toTop:a}=re;return e("button",{onClick:r,className:a,children:e(T,{})})},ie="_navStyles_1y2mo_1",te="_menuIcon_1y2mo_19",ne="_titleStyles_1y2mo_34",oe="_separator_1y2mo_41",se="_navLinkStyles_1y2mo_53",le="_active_1y2mo_62",ce="_anchorsStyles_1y2mo_66";var de={navStyles:ie,menuIcon:te,titleStyles:ne,separator:oe,navLinkStyles:se,active:le,anchorsStyles:ce};const ue=({showSidebar:r,setShowSidebar:a})=>{const{navStyles:i,menuIcon:s,titleStyles:n,separator:o,navLinkStyles:l,anchorsStyles:u,active:c}=de;return t("nav",{className:i,children:[r?e("div",{className:s,children:e(q,{onClick:()=>a(!r)})}):e("div",{className:s,children:e(R,{onClick:()=>a(!r)})}),e(v,{to:".",children:e("small",{className:n,children:"Mi Landing Page"})}),t("div",{className:o,children:[e(h,{activeStyle:c,className:l,href:"",children:"Inicio"}),e(h,{activeStyle:c,className:l,href:"cv-page",children:"Mi CV"})]}),t("div",{className:u,children:[e("a",{href:"https://www.laserrania.org/autor/enrique-marin-fernandez/",target:"_blank",rel:"noopener noreferrer",children:"Mis Libros"}),e("a",{href:"https://github.com/emarifer/",target:"_blank",rel:"noopener noreferrer",children:"Mi GitHub"}),e("a",{href:"https://emarifer-pwa.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"Mi Web Site"})]})]})},pe="_overlay_gnl5c_1",me="_sidebarStyles_gnl5c_12",he="_sidebarVisible_gnl5c_27",ge="_siteList_gnl5c_31",ye="_siteLink_gnl5c_42",ve="_active_gnl5c_63",xe="_websiteList_gnl5c_69";var d={overlay:pe,sidebarStyles:me,sidebarVisible:he,siteList:ge,siteLink:ye,active:ve,websiteList:xe};const fe=b.bind(d),be=({showSidebar:r,setShowSidebar:a})=>{p.exports.useEffect(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]);const i=()=>{window.innerWidth>768&&a(!1)},s=fe({[d.sidebarStyles]:!0,[d.sidebarVisible]:r});return t(m,{children:[t("div",{className:s,children:[t("ul",{className:d.siteList,children:[t("li",{children:[e(j,{}),e(h,{activeStyle:d.active,className:d.siteLink,href:"",children:"Inicio"})]}),t("li",{children:[e(I,{}),e(h,{activeStyle:d.active,className:d.siteLink,href:"cv-page",children:"Mi CV"})]})]}),t("ul",{className:d.websiteList,children:[t("li",{children:[e(z,{}),e("a",{href:"https://www.laserrania.org/autor/enrique-marin-fernandez/",target:"_blank",rel:"noopener noreferrer",children:"Mis Libros"})]}),t("li",{children:[e(P,{}),e("a",{href:"https://github.com/emarifer/",target:"_blank",rel:"noopener noreferrer",children:"Mi GitHub"})]}),t("li",{children:[e(B,{}),e("a",{href:"https://emarifer-pwa.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"Mi Web Site"})]})]})]}),r&&e("div",{className:d.overlay,onClick:()=>a(!r)})]})};var _e="/lpcv-app/img/avatar.jpeg";const Se="_wrapper_naqig_1",Ee="_avatar_naqig_57";var Le={wrapper:Se,avatar:Ee};const we={transition:{duration:.5},initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30}},Ae=({path:r})=>{const[a]=_(),{avatar:i,wrapper:s}=Le;return t(m,{children:[e(S,{children:e("title",{children:"Home | Mi Landing Page"})}),e(E,{children:a===r&&t(L.div,y(g({className:s},we),{children:[t("header",{children:[e("img",{className:i,src:_e,alt:"avatar"}),e("h1",{children:"Mi Landing Page"}),e("p",{children:"\xBFEn qu\xE9 puede ayudarte?"}),e(Z,{})]}),e("hr",{}),t("main",{children:[e("h3",{children:"\xA1\xA1\xA1Saludos!!!"}),e("p",{children:"Te presento mi landing page para que sepas algo sobre m\xED. Cualquier duda que se te ofrezca te la resolver\xE9 si te pones en contacto conmigo atrav\xE9s de e-mail o tel\xE9fono. \xA1Te espero!"})]}),e("hr",{}),t("footer",{children:["MIT Licensed | Copyright \xA9 ",new Date().getFullYear()," Enrique Mar\xEDn"]})]}),"1")})]})},Ne=`<p><img src="img/avatar.jpeg" alt="avatar" /></p>
<h2>Datos Personales</h2>
<hr />
<ul>
<li><strong>Nombre</strong>: Enrique Antonio Mar\xEDn Fern\xE1ndez</li>
<li><strong>Fecha de Nacimiento</strong>: 04/02/1964</li>
<li><strong>Nombre</strong>: Enrique Antonio Mar\xEDn Fern\xE1ndez</li>
<li><strong>Fecha de Nacimiento</strong>: 04/02/1964</li>
<li><strong>Nacido en</strong>: Sevilla</li>
<li><strong>Vivienda Habitual</strong>: C/. Cruz, 1 - 2\xBA H, 41013 Sevilla</li>
<li><strong>Estado Civil</strong>: soltero</li>
<li><strong>DNI</strong>: 28699159-N</li>
<li><strong>Aficiones</strong>: Senderismo, Inform\xE1tica, Leer</li>
<li><strong>e-mail</strong>: enriquemarin_sierra@hotmail.com</li>
<li><strong>Tfno</strong>: 615 26 93 82</li>
</ul>
<h2>Datos Acad\xE9micos</h2>
<hr />
<ul>
<li><strong>Titulaci\xF3n</strong>: Ingenier\xEDa T\xE9cnica Agr\xEDcola (1988, Universidad de Sevilla)</li>
<li><strong>Lenguajes de Programaci\xF3n</strong>: HTML, CSS, JavaScript, TypeScript, React.js, Vue.js, Node.js, Python, Java, Kotlin, Desarrollo Frontend &amp; Backend, Curso \xABReact Pro: Lleva tus bases al siguiente nivel\xBB (Udemy), Curso Deusto de Desarrollo de Aplicaciones M\xF3viles en Android</li>
<li><strong>Tratamiento de Im\xE1genes y Dibujo</strong>: Adobe Illustrator, Adobe PhotoShop, Gimp, Inkscape</li>
<li><strong>Cartograf\xEDa Digital</strong>: ArcGIS, gvSIG</li>
<li><strong>Maquetaci\xF3n y Edici\xF3n Digital</strong>: Adobe InDesign, QuarkXPress</li>
<li><strong>Medio Ambiente</strong>: Monitor de Granja Escuela</li>
<li><strong>Cerficado de Carretillero</strong>: Carretillas Frontales y Retr\xE1ctiles</li>
</ul>
<h2>Experiencia Laboral</h2>
<hr />
<h4><strong>Vida Laboral: 35 a\xF1os.</strong> Desde 1985 a 2008 trabajando en mi propio negocio, LA CATALANA, establecimiento dedicado a la venta de sombreros, efectos militares y uniformes. Desde 2008 a 2011 trabajando en la Editorial LA SERRAN\xCDA, editorial l\xEDder en Andaluc\xEDa en la publicaci\xF3n de libros y gu\xEDas de Naturaleza, excursionismo, otnitolog\xEDa, micolog\xEDa y otras actividades ligadas al medio ambiente desarrolladas en los espacios naturales andaluces. Durante los a\xF1os 2019, 2020 y 2021, en el Real Club Labradores de Sevilla al cuidado del servicio de piscina y vestuario. <strong>Detalle del Trabajo</strong> Maquetaci\xF3n y dise\xF1o interior de publicaciones. Dise\xF1o y maquetaci\xF3n do publicaciones electr\xF3nicas (ebooks). Dise\xF1o, Maquetaci\xF3n y Desarrollo Web. Tratamiento de im\xE1genes y dibujo. Elaboraci\xF3n de cartograf\xEDas (topogr\xE1fica, tem\xE1tica, 3D, etc.) y manejo de Sistemas de Informaci\xF3n Geogr\xE1fica. Correcci\xF3n de textos (ortograf\xEDa y estilo). Correcci\xF3n y verificaci\xF3n de los contenidos de los textos en materia de geograf\xEDa y medio natural. En el Club Labradores, cuidado y atencion al p\xFAblico en las instalaciones de la piscina y vestuario.</h4>
<h2>Autor de Libros</h2>
<hr />
<ul>
<li><strong><a href="https://www.laserrania.org/autor/enrique-marin-fernandez/">Autor</a> de Libros relacionados con el Excursionismo:</strong></li>
<li><a href="https://www.laserrania.org/producto/sierras-de-cazorla-segura-y-las-villas-guia-del-excursionista/">Parque Natural Sierras de Cazorla, Segura y Las Villas. Gu\xEDa del Excursionista. Ed. La Serran\xEDa, Ronda, 2010</a></li>
<li><a href="https://www.laserrania.org/producto/parque-natural-sierra-de-aracena-y-picos-de-aroche-guia-del-excursionista/">Parque Natural Sierra de Aracena y Picos de Aroche. Gu\xEDa del Excursionista. Ed. La Serran\xEDa, Ronda, 2009</a></li>
<li><a href="https://www.laserrania.org/producto/sierras-andaluzas-itinerarios-senderistas-y-ascensiones-2a-ed/">Sierras Andaluzas. Itinerarios Senderistas y Ascensiones. Ed. La Serran\xEDa, Ronda, 2006
</a></li>
</ul>
<h2>Aptitudes</h2>
<hr />
<h4><strong>Aptitudes:</strong> Me considero una persona honesta y muy responsable y trabajadora, con dedicaci\xF3n plena a mi trabajo adem\xE1s de buena capacidad para comunicar y trabajar en equipo.</h4>
`;function De(r){return w.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:Ne}})}const ke=`
    @page {
        size: 210mm 297mm;
    }

    @media print {
        .printSection{
            padding: 10px 20px;
            background-color: #282c34;
        }
        
        .printSection header {
            font-size: 1.2rem;
        }
        
        .printSection main img {
            width: 100px;
        }
        
        .printSection main h2 {
            font-size: 13px;
        }
        
        .printSection main ul {
            font-size: 10px;
            line-height: 14px;
            margin: 1rem 2rem;
            padding: 0.7rem;
        }
        
        .printSection main h4 {
            font-size: 10px;
            line-height: 14px;
            margin: 1rem 2rem;
            padding: 0.7rem;
        }
        
        .printSection main h2:nth-of-type(4) {
            padding-top: 2rem;
        }
        
        .printSection main li {
            margin: 6px 0 6px 1rem;
        }
        
        .printSection main h4 strong {
            margin: 9px 0;
        }
    }
`,Fe="_printButton_1x3jq_1",Ce="_title_1x3jq_30",Me="_markdownStyles_1x3jq_43",Te="_separator_1x3jq_106",qe="_customFooter_1x3jq_112";var Re={printButton:Fe,title:Ce,markdownStyles:Me,separator:Te,customFooter:qe};const je={transition:{duration:.5},initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30}},Ie=({path:r})=>{const[a]=_(),{customFooter:i,separator:s,markdownStyles:n,title:o,printButton:l}=Re,u=p.exports.useRef(null),c=G.exports.useReactToPrint({content:()=>u.current,pageStyle:ke,suppressErrors:!0});return t(m,{children:[e(S,{children:e("title",{children:"Curriculum | Mi Landing Page"})}),e(E,{children:a===r&&t(m,{children:[e("button",{onClick:c,className:l,title:"Imprimir",children:e(V,{})},"1"),e(L.div,y(g({},je),{children:t("div",{ref:u,className:"printSection",children:[e("header",{className:o,children:"Mi Curriculum Vitae"}),t("main",{className:n,children:[e(De,{}),e("hr",{className:s})]}),t("footer",{className:i,children:["MIT Licensed | Copyright \xA9 ",new Date().getFullYear()," Enrique Mar\xEDn"]})]})}),"2")]})})]})},ze="_container_raln6_1";var Pe={container:ze};const Be=()=>{scrollTo({behavior:"smooth",top:0})},Ge=()=>{const[r,a]=p.exports.useState(!1),[i,s]=p.exports.useState(!1);p.exports.useEffect(()=>(window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)),[]);const n=()=>{const l=window.scrollY||window.document.documentElement.scrollTop;a(l>300)},{container:o}=Pe;return t(H,{children:[t(W,{base:"/lpcv-app/",children:[e(ue,{showSidebar:i,setShowSidebar:s}),e(be,{showSidebar:i,setShowSidebar:s}),e("div",{className:o,children:t($,{children:[e(Ae,{path:"/"},"1"),e(Ie,{path:"cv-page"},"2"),e(O,{path:":anything*",children:e(U,{to:"."})})]})})]}),r&&e(ae,{scrollToTop:Be})]})};function Ve(r={}){const{immediate:a=!1,onNeedRefresh:i,onOfflineReady:s,onRegistered:n,onRegisterError:o}=r;let l;const u=async(c=!0)=>{};return"serviceWorker"in navigator&&(l=new K("/lpcv-app/sw.js",{scope:"/lpcv-app/",type:"classic"}),l.addEventListener("activated",c=>{c.isUpdate?window.location.reload():s==null||s()}),l.register({immediate:a}).then(c=>{n==null||n(c)}).catch(c=>{o==null||o(c)})),u}Y.render(e(w.StrictMode,{children:e(Ge,{})}),document.getElementById("root"));Ve();
