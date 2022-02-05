import{j as h,u as _,c as f,L as g,M as S,a as E,G as L,b as w,r as u,A,B as N,I as D,d as k,C as F,W as y,R as b,l as C,e as M,q as T,f as j,S as q,g as x,h as R,v as I,i as z}from"./vendor.456345aa.js";const B=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};B();const e=h.exports.jsx,t=h.exports.jsxs,v=h.exports.Fragment,p=r=>{const[n]=_(r.href),o=f({[r.className]:!0,[r.activeStyle]:n});return e(g,{href:r.href,children:e("a",{className:o,children:r.children})})},P="_buttonLink_1do5o_1";var G={buttonLink:P};const V=()=>{const{buttonLink:r}=G;return t(g,{className:r,href:"cv-page",children:["Revisa mi CV",e(S,{})]})},H="_toTop_7d43c_1";var W={toTop:H};const $=({scrollToTop:r})=>{const{toTop:n}=W;return e("button",{onClick:r,className:n,children:e(E,{})})},O="_navStyles_meil4_1",U="_menuIcon_meil4_19",K="_titleStyles_meil4_34",Y="_separator_meil4_41",J="_navLinkStyles_meil4_53",Q="_active_meil4_60",X="_anchorsStyles_meil4_64";var Z={navStyles:O,menuIcon:U,titleStyles:K,separator:Y,navLinkStyles:J,active:Q,anchorsStyles:X};const ee=({showSidebar:r,setShowSidebar:n})=>{const{navStyles:o,menuIcon:s,titleStyles:a,separator:i,navLinkStyles:l,anchorsStyles:m,active:d}=Z;return t("nav",{className:o,children:[r?e("div",{className:s,children:e(L,{onClick:()=>n(!r)})}):e("div",{className:s,children:e(w,{onClick:()=>n(!r)})}),e(g,{to:".",children:e("small",{className:a,children:"Mi Landing Page"})}),t("div",{className:i,children:[e(p,{activeStyle:d,className:l,href:"",children:"Inicio"}),e(p,{activeStyle:d,className:l,href:"cv-page",children:"Mi CV"})]}),t("div",{className:m,children:[e("a",{href:"https://www.laserrania.org/autor/enrique-marin-fernandez/",target:"_blank",rel:"noopener noreferrer",children:"Mis Libros"}),e("a",{href:"https://github.com/emarifer/",target:"_blank",rel:"noopener noreferrer",children:"Mi GitHub"}),e("a",{href:"https://emarifer-pwa.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"Mi Web Site"})]})]})},re="_overlay_gnl5c_1",ae="_sidebarStyles_gnl5c_12",te="_sidebarVisible_gnl5c_27",ne="_siteList_gnl5c_31",ie="_siteLink_gnl5c_42",se="_active_gnl5c_63",oe="_websiteList_gnl5c_69";var c={overlay:re,sidebarStyles:ae,sidebarVisible:te,siteList:ne,siteLink:ie,active:se,websiteList:oe};const le=f.bind(c),ce=({showSidebar:r,setShowSidebar:n})=>{u.exports.useEffect(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[]);const o=()=>{window.innerWidth>768&&n(!1)},s=le({[c.sidebarStyles]:!0,[c.sidebarVisible]:r});return t(v,{children:[t("div",{className:s,children:[t("ul",{className:c.siteList,children:[t("li",{children:[e(A,{}),e(p,{activeStyle:c.active,className:c.siteLink,href:"",children:"Inicio"})]}),t("li",{children:[e(N,{}),e(p,{activeStyle:c.active,className:c.siteLink,href:"cv-page",children:"Mi CV"})]})]}),t("ul",{className:c.websiteList,children:[t("li",{children:[e(D,{}),e("a",{href:"https://www.laserrania.org/autor/enrique-marin-fernandez/",target:"_blank",rel:"noopener noreferrer",children:"Mis Libros"})]}),t("li",{children:[e(k,{}),e("a",{href:"https://github.com/emarifer/",target:"_blank",rel:"noopener noreferrer",children:"Mi GitHub"})]}),t("li",{children:[e(F,{}),e("a",{href:"https://emarifer-pwa.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"Mi Web Site"})]})]})]}),r&&e("div",{className:c.overlay,onClick:()=>n(!r)})]})};var de="/lpcv-app/img/avatar.jpeg";const ue="_wrapper_naqig_1",pe="_avatar_naqig_57";var me={wrapper:ue,avatar:pe};const he=()=>{const{avatar:r,wrapper:n}=me;return t(v,{children:[e(y,{children:e("title",{children:"Home | Mi Landing Page"})}),t("div",{className:n,children:[t("header",{children:[e("img",{className:r,src:de,alt:"avatar"}),e("h1",{children:"Mi Landing Page"}),e("p",{children:"\xBFEn qu\xE9 puede ayudarte?"}),e(V,{})]}),e("hr",{}),t("main",{children:[e("h3",{children:"\xA1\xA1\xA1Saludos!!!"}),e("p",{children:"Te presento mi landing page para que sepas algo sobre m\xED. Cualquier duda que se te ofrezca te la resolver\xE9 si te pones en contacto conmigo atrav\xE9s de e-mail o tel\xE9fono. \xA1Te espero!"})]}),e("hr",{}),t("footer",{children:["MIT Licensed | Copyright \xA9 ",new Date().getFullYear()," Enrique Mar\xEDn"]})]})]})},ge=`
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
`,xe=`<p><img src="img/avatar.jpeg" alt="avatar" /></p>
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
`;function ve(r){return b.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:xe}})}const fe="_printButton_1x3jq_1",ye="_title_1x3jq_30",be="_markdownStyles_1x3jq_43",_e="_separator_1x3jq_106",Se="_customFooter_1x3jq_112";var Ee={printButton:fe,title:ye,markdownStyles:be,separator:_e,customFooter:Se};const Le=()=>{const{customFooter:r,separator:n,markdownStyles:o,title:s,printButton:a}=Ee,i=u.exports.useRef(null),l=C.exports.useReactToPrint({content:()=>i.current,pageStyle:ge,suppressErrors:!0});return t(v,{children:[e(y,{children:e("title",{children:"Curriculum | Mi Landing Page"})}),e("button",{onClick:l,className:a,title:"Imprimir",children:e(M,{})}),t("div",{ref:i,className:"printSection",children:[e("header",{className:s,children:"Mi Curriculum Vitae"}),t("main",{className:o,children:[e(ve,{}),e("hr",{className:n})]}),t("footer",{className:r,children:["MIT Licensed | Copyright \xA9 ",new Date().getFullYear()," Enrique Mar\xEDn"]})]})]})},we="_container_raln6_1";var Ae={container:we};const Ne=()=>{scrollTo({behavior:"smooth",top:0})},De=()=>{const[r,n]=u.exports.useState(!1),[o,s]=u.exports.useState(!1);u.exports.useEffect(()=>(window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)),[]);const a=()=>{const l=window.scrollY||window.document.documentElement.scrollTop;n(l>300)},{container:i}=Ae;return t(T,{children:[t(j,{base:"/lpcv-app/",children:[e(ee,{showSidebar:o,setShowSidebar:s}),e(ce,{showSidebar:o,setShowSidebar:s}),e("div",{className:i,children:t(q,{children:[e(x,{path:"/",component:he}),e(x,{path:"cv-page",component:Le}),e(x,{path:":anything*",children:e(R,{to:"."})})]})})]}),r&&e($,{scrollToTop:Ne})]})};function ke(r={}){const{immediate:n=!1,onNeedRefresh:o,onOfflineReady:s,onRegistered:a,onRegisterError:i}=r;let l;const m=async(d=!0)=>{};return"serviceWorker"in navigator&&(l=new I("/lpcv-app/sw.js",{scope:"/lpcv-app/",type:"classic"}),l.addEventListener("activated",d=>{d.isUpdate?window.location.reload():s==null||s()}),l.register({immediate:n}).then(d=>{a==null||a(d)}).catch(d=>{i==null||i(d)})),m}z.render(e(b.StrictMode,{children:e(De,{})}),document.getElementById("root"));ke();
