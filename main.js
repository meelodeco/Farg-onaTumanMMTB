(function(){
var $=function(s){return document.querySelector(s)},esc=function(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML};
function st(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
var NEWS=[{t:"2025/2026 o‘quv yili boshiga umumiy o‘rta ta’lim statistikasi e’lon qilindi",c:"Statistika",d:"2026-03-31",s:"Farg‘ona tumanida 68 ta umumta’lim tashkiloti (3 tasi nodavlat) faoliyat yuritgan, 38,3 ming o‘quvchi tahsil olgan. Manba: Farg‘ona viloyati statistika boshqarmasi."}];
var DOCS=[{t:"Farg‘ona viloyatida umumiy o‘rta ta’lim — statistik press-reliz (2025/2026)",d:"2026-03-31",f:"PDF",u:"https://farstat.uz/uploads/press25/UT-PR-12-2025.pdf"},{t:"PF-19: Maktabgacha ta’lim va tarbiya tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida",d:"2026-02-05",f:"Lex.uz",u:"https://lex.uz/uz/docs/-8037353"},{t:"Farg‘ona tumani hokimining qarorlari",f:"Rasmiy portal",u:"https://gov.uz/oz/fargonatuman/pages/tuman-hokimi-qarorlari"},{t:"Farg‘ona tumani hokimining farmoyishlari",f:"Rasmiy portal",u:"https://gov.uz/oz/fargonatuman/pages/tuman-hokimi-farmoyishlari"}];
var ORGS=[{n:"15-umumiy o‘rta ta’lim maktabi",k:"Maktab",m:"Zilol",a:"Zilol ko‘chasi, 122-uy"},{n:"22-umumiy o‘rta ta’lim maktabi",k:"Maktab",m:"Yangiobod",a:"Vikorli ko‘chasi, 15-uy"}];
var PAGES=[["index.html","Bosh sahifa"],["yangiliklar.html","Yangiliklar"],["hujjatlar.html","Hujjatlar"],["tashkilotlar.html","Ta’lim tashkilotlari"],["statistika.html","Statistika"],["murojaat.html","Murojaat"]];
var cur=location.pathname.split("/").pop()||"index.html";
var R=document.documentElement,auto=st("auto")==="1";
function theme(t,save){R.setAttribute("data-theme",t);var b=$("#th");if(b)b.textContent=t==="dark"?"☀️ Kun":"🌙 Tun";if(save)st("theme",t)}
function byTime(){var h=new Date().getHours();return h>=19||h<6?"dark":"light"}
theme(auto?byTime():(st("theme")||"light"),false);
// qobiq: sarlavha, menyu, pastki qism
var title=document.body.dataset.title||"Farg‘ona tumani MMTB";
document.body.insertAdjacentHTML("afterbegin",'<header><div class="tools"><button id="fs">A+</button><button id="au">Avto</button><button id="th"></button></div><h1>'+(cur==="index.html"?"Farg‘ona tumani MMTB":title)+'</h1><p>'+(cur==="index.html"?"Rasmiy axborot portali":"Farg‘ona tumani MMTB")+'</p></header><nav>'+PAGES.map(function(p){return '<a href="'+p[0]+'"'+(p[0]===cur?' class="on"':'')+'>'+p[1]+'</a>'}).join("")+'</nav>');
document.body.insertAdjacentHTML("beforeend",'<footer>Farg‘ona tumani Maktabgacha va maktab ta’limi bo‘limi<br>Rasmiy axborot portali</footer><button id="top" aria-label="Yuqoriga">↑</button><div id="wipe"></div>');
theme(R.getAttribute("data-theme"),false);
function paint(){$("#au").style.background=auto?"rgba(255,255,255,.45)":""}paint();
$("#th").onclick=function(){auto=false;st("auto","0");paint();theme(R.getAttribute("data-theme")==="dark"?"light":"dark",true)};
$("#au").onclick=function(){auto=!auto;st("auto",auto?"1":"0");paint();if(auto)theme(byTime(),false)};
var fz=[100,115,130],fi=+(st("fs")||0);function sz(){document.body.style.zoom="";R.style.fontSize=fz[fi]+"%"}if(fi>0)sz();
$("#fs").onclick=function(){fi=(fi+1)%3;sz();st("fs",fi)};
// sahifalar orasida animatsiyali o‘tish
document.addEventListener("click",function(e){var a=e.target.closest("a[href]");if(!a||a.target||e.ctrlKey||e.metaKey)return;var h=a.getAttribute("href");if(!h||h[0]==="#"||/^(https?:|mailto:|tel:)/.test(h))return;e.preventDefault();document.body.classList.add("leaving");setTimeout(function(){location.href=h},matchMedia("(prefers-reduced-motion:reduce)").matches?0:420)});
addEventListener("pageshow",function(){document.body.classList.remove("leaving")});
// tugmada to‘lqin effekti
document.addEventListener("click",function(e){var b=e.target.closest(".btn");if(!b)return;var r=b.getBoundingClientRect(),s=document.createElement("span"),d=Math.max(r.width,r.height);s.className="rip";s.style.cssText="width:"+d+"px;height:"+d+"px;left:"+(e.clientX-r.left-d/2)+"px;top:"+(e.clientY-r.top-d/2)+"px";b.appendChild(s);setTimeout(function(){s.remove()},600)});
// ko‘rinishga kelganda ketma-ket paydo bo‘lish
var io="IntersectionObserver" in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12}):null;
function reveal(root){(root||document).querySelectorAll(".rv:not(.in)").forEach(function(el,i){el.style.transitionDelay=Math.min(i,8)*70+"ms";io?io.observe(el):el.classList.add("in")})}
function fmt(d){var p=d.split("-");return p[2]+"."+p[1]+"."+p[0]}
// yangiliklar
if($("#newsList")){var cat="Hammasi",cats=["Hammasi"].concat(NEWS.map(function(n){return n.c}).filter(function(v,i,a){return a.indexOf(v)===i}));
 function rn(){$("#chips").innerHTML=cats.map(function(c){return '<button class="chip'+(c===cat?' on':'')+'" data-c="'+esc(c)+'">'+esc(c)+'</button>'}).join("");
  var s=$("#nq").value.toLowerCase(),l=NEWS.filter(function(n){return(cat==="Hammasi"||n.c===cat)&&(n.t+n.s).toLowerCase().indexOf(s)>-1}).sort(function(a,b){return b.d.localeCompare(a.d)});
  $("#newsList").innerHTML=l.length?l.map(function(n){return '<article class="card lift rv"><div class="item"><div><h3>'+esc(n.t)+'</h3><p>'+esc(n.s)+'</p><small>'+fmt(n.d)+'</small></div><span class="tag">'+esc(n.c)+'</span></div></article>'}).join(""):'<div class="card empty rv">Hech narsa topilmadi.</div>';reveal($("#newsList"))}
 $("#chips").onclick=function(e){if(e.target.dataset.c){cat=e.target.dataset.c;rn()}};$("#nq").oninput=rn;rn()}
// hujjatlar
if($("#docList")){function rd(){var s=$("#dq").value.toLowerCase(),l=DOCS.filter(function(d){return d.t.toLowerCase().indexOf(s)>-1});
 $("#docList").innerHTML=l.length?l.map(function(d){return '<div class="card lift rv item"><div><h3>'+esc(d.t)+'</h3><small>'+(d.d?fmt(d.d)+' · ':'')+d.f+'</small></div><a class="btn" href="'+esc(d.u)+'" target="_blank" rel="noopener">Ochish</a></div>'}).join(""):'<div class="card empty rv">Hujjat topilmadi.</div>';reveal($("#docList"))}
 $("#dq").oninput=rd;rd()}
// tashkilotlar
if($("#orgList")){function ro(){var s=$("#oq").value.toLowerCase(),t=$("#ot").value,l=ORGS.filter(function(o){return(o.n+" "+o.m).toLowerCase().indexOf(s)>-1&&(!t||o.k===t)});
 $("#orgList").innerHTML=l.length?l.map(function(o){return '<div class="card lift rv"><span class="tag">'+o.k+'</span><h3>'+esc(o.n)+'</h3><small>Mahalla: '+esc(o.m)+'</small>'+(o.a?'<br><small>'+esc(o.a)+'</small>':'')+'</div>'}).join(""):'<div class="card empty rv">Tashkilot topilmadi.</div>';reveal($("#orgList"))}
 $("#oq").oninput=ro;$("#ot").onchange=ro;ro()}
// raqamlar sanash
document.querySelectorAll("[data-n]").forEach(function(el){var to=+el.dataset.n,go=function(){var t0=null;(function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1400,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3))).toLocaleString("ru-RU");if(p<1)requestAnimationFrame(f)})(performance.now())};
 io?new IntersectionObserver(function(e,o){if(e[0].isIntersecting){go();o.disconnect()}}).observe(el):go()});
// murojaat
if($("#send"))$("#send").onclick=function(){var a=$("#cn").value.trim(),b=$("#cp").value.trim(),c=$("#cm").value.trim(),ok=a&&b&&c.length>=10;
 $("#cs").textContent=ok?"Murojaatingiz qabul qilindi (namuna rejim: serverga ulanmagan).":"Ism, aloqa va kamida 10 belgidan iborat matn kiriting.";if(ok)$("#cn").value=$("#cp").value=$("#cm").value=""};
var tp=$("#top");addEventListener("scroll",function(){tp.classList.toggle("show",scrollY>400)});tp.onclick=function(){scrollTo({top:0})};
reveal();
})();
