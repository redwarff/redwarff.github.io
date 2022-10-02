import { c as create_ssr_component, b as subscribe, d as add_attribute, e as each, f as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const logo = "/_app/immutable/assets/svelte-logo-87df40b8.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".nav-link.svelte-1d88hye.svelte-1d88hye{font-size:1em;margin-right:15px;text-transform:uppercase;letter-spacing:2px}.nav-link.nav-item.svelte-1d88hye.svelte-1d88hye{color:rgba(255, 255, 255, 0.8);text-underline-offset:5px;transition:text-decoration 0.15s ease-in;padding-top:10px;padding-bottom:10px}.nav-link.nav-item.svelte-1d88hye.svelte-1d88hye:not(.dropdown){text-decoration:underline;text-decoration-color:rgba(255, 255, 255, 0)}.nav-link.nav-item.active.svelte-1d88hye.svelte-1d88hye,.nav-link.nav-item.svelte-1d88hye.svelte-1d88hye:hover{color:rgba(255, 255, 255, 0.8);text-decoration-color:rgba(255, 255, 255, 0.8);text-decoration:underline}.navbar.svelte-1d88hye.svelte-1d88hye{padding-left:40px;padding-right:40px}.navbar-brand.svelte-1d88hye.svelte-1d88hye{text-transform:uppercase;font-size:1.2em;letter-spacing:4px;margin-right:auto;color:rgba(255, 255, 255, 0.8)}.navbar-brand.svelte-1d88hye.svelte-1d88hye:hover{color:rgba(255, 255, 255, 0.8)}.logo.svelte-1d88hye.svelte-1d88hye{margin-right:20px}.collapse.navbar-collapse.svelte-1d88hye.svelte-1d88hye{flex-grow:0;margin-right:50px}i.svelte-1d88hye.svelte-1d88hye{color:rgba(255, 255, 255, 0.5);margin-right:5px}.contact-link.svelte-1d88hye.svelte-1d88hye{color:rgba(255, 255, 255, 0.5)}.dropdown-menu.svelte-1d88hye.svelte-1d88hye{margin:0;padding-top:20px}.dropdown-menu.svelte-1d88hye .dropdown-item.svelte-1d88hye{color:rgba(255, 255, 255, 0.8);text-decoration:underline;text-decoration-color:rgba(255, 255, 255, 0);transition:text-decoration 0.15s ease-in}.dropdown-menu.svelte-1d88hye .dropdown-item.svelte-1d88hye:hover,.dropdown-menu.svelte-1d88hye .dropdown-item.active.svelte-1d88hye{background-color:#222;text-decoration:underline;text-decoration-color:rgba(255, 255, 255, 0.8)}@media(max-width: 1500px){.brand.svelte-1d88hye.svelte-1d88hye{display:none}}.phone.svelte-1d88hye.svelte-1d88hye{margin-right:25px}@media(max-width: 991px){.phone.svelte-1d88hye.svelte-1d88hye{margin-top:20px;margin-bottom:20px}}.last.svelte-1d88hye.svelte-1d88hye{margin-right:25px}@media(max-width: 1260px){.contact-detail.svelte-1d88hye.svelte-1d88hye{display:none}}@media(max-width: 991px){.contact-detail.svelte-1d88hye.svelte-1d88hye{display:inline}}.dropdown-item.svelte-1d88hye.svelte-1d88hye{padding-top:10px;padding-bottom:10px;white-space:break-spaces}.dropdown-menu.svelte-1d88hye.svelte-1d88hye{padding-bottom:8px;width:calc(100vw - 80px);max-width:640px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navigation = [
    { name: "O n\xE1s", href: "/o-nas" },
    {
      name: "Slu\u017Eby",
      subnav: [
        {
          name: "Zam\u011B\u0159en\xED budovy / p\u0159\xEDstavby - geometrick\xFD pl\xE1n",
          href: "/sluzby/zamereni-budovy"
        },
        {
          name: "Rozd\u011Blen\xED pozemku - geometrick\xFD pl\xE1n",
          href: "/sluzby/rozdeleni-pozemku"
        },
        {
          name: "Zam\u011B\u0159en\xED pozemku pro projekt",
          href: "/sluzby/zamereni-pozemku"
        },
        {
          name: "Vyty\u010Den\xED stavby dle projektu",
          href: "/sluzby/vytyceni-stavby"
        },
        {
          name: "V\u011Bcn\xE9 b\u0159emeno - vyzna\u010Den\xED rozsahu",
          href: "/sluzby/vecne-bremeno"
        },
        {
          name: "Vyty\u010Den\xED hranice pozemku podle katastr\xE1ln\xEDch p\u0159edpis\u016F",
          href: "/sluzby/vytyceni-pozemku"
        }
      ]
    },
    {
      name: "Online popt\xE1vka",
      href: "/poptavka"
    },
    { name: "Cen\xEDk", href: "/cenik" },
    { name: "Odkazy", href: "/odkazy" },
    { name: "Kontakt", href: "/kontakt" }
  ];
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header><nav class="${"navbar navbar-expand-lg navbar-dark bg-dark d-flex svelte-1d88hye"}"><a class="${"navbar-brand svelte-1d88hye"}" href="${"/"}"><img class="${"logo svelte-1d88hye"}"${add_attribute("src", logo, 0)} alt="${"Geozem logo"}" height="${"50"}"><span class="${"brand svelte-1d88hye"}">Geod\xE9zie Zem\xE1nek</span></a>
		<button class="${"navbar-toggler"}" type="${"button"}" data-toggle="${"collapse"}" data-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Otev\xEDr\xE1n\xED navigace"}"><span class="${"navbar-toggler-icon"}"></span></button>

		<div class="${"collapse navbar-collapse svelte-1d88hye"}" id="${"navbarSupportedContent"}"><div class="${"navbar-nav"}">${each(navigation, (item) => {
    return `${!item.subnav ? `<a class="${[
      "nav-link nav-item svelte-1d88hye",
      ($page.url.pathname === item.href ? "active" : "") + " " + (item.name === "Kontakt" ? "last" : "")
    ].join(" ").trim()}"${add_attribute("href", item.href, 0)}>${escape(item.name)}
					${$page.url.pathname === item.href ? `<span class="${"sr-only"}">(current)</span>` : ``}
				</a>` : `<div class="${"nav-link nav-item dropdown svelte-1d88hye"}"><a class="${"dropdown-toggle"}" id="${"navbarDropdown"}" role="${"button"}" data-toggle="${"dropdown"}" aria-haspopup="${"true"}" aria-expanded="${"false"}">${escape(item.name)}</a>
					<div class="${"dropdown-menu bg-dark svelte-1d88hye"}" aria-labelledby="${"navbarDropdown"}">${each(item.subnav, (subitem) => {
      return `<a class="${[
        "dropdown-item svelte-1d88hye",
        $page.url.pathname === subitem.href ? "active" : ""
      ].join(" ").trim()}"${add_attribute("href", subitem.href, 0)}>${escape(subitem.name)}</a>`;
    })}</div>
				</div>`}`;
  })}</div>
			<div class="${"phone svelte-1d88hye"}"><a class="${"contact-link svelte-1d88hye"}" href="${"tel:+420725957711"}"><i class="${"fa-solid fa-phone fa-sm svelte-1d88hye"}" title="${"725 95 77 11"}"></i>
					<span class="${"contact-detail svelte-1d88hye"}">725 95 77 11</span></a></div>
			<div><a class="${"contact-link svelte-1d88hye"}" href="${"mailto:zemanek@geozem.cz"}"><i class="${"fa-regular fa-envelope svelte-1d88hye"}" title="${"zemanek@geozem.cz"}"></i>
					<span class="${"contact-detail svelte-1d88hye"}">zemanek@geozem.cz</span></a></div></div></nav>
</header>`;
});
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-5207z6{flex:1;display:flex;flex-direction:column;width:100%;box-sizing:border-box}.main-wrapper.svelte-5207z6{min-height:100vh;display:flex;flex-direction:column}@media(min-width: 480px){}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<script src="${"https://kit.fontawesome.com/a5412f0f16.js"}" crossorigin="${"anonymous"}" data-svelte="svelte-1idbfr5"><\/script>`, ""}

<div class="${"main-wrapper svelte-5207z6"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-5207z6"}">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
