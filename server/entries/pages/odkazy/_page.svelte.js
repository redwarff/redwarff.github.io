import { c as create_ssr_component, e as each, d as add_attribute, f as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-m5axcb.svelte-m5axcb{list-style-type:none;font-size:1.2em}ul.svelte-m5axcb li.svelte-m5axcb{margin-bottom:5px}ul.svelte-m5axcb i.svelte-m5axcb{margin-right:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    {
      name: "Nahl\xED\u017Een\xED do katastru nemovitost\xED",
      href: "https://nahlizenidokn.cuzk.cz/"
    },
    {
      name: "Katastr\xE1ln\xED mapy",
      href: "https://katastralnimapy.cuzk.cz/"
    },
    {
      name: "Katastr\xE1ln\xED \xFA\u0159ady",
      href: "https://www.cuzk.cz/Dokument.aspx?PRARESKOD=998&MENUID=0&AKCE=GEN:SEZNAM_KU"
    },
    {
      name: "\u010Cesk\xFD \xFA\u0159ad zem\u011Bm\u011B\u0159ick\xFD a katastr\xE1ln\xED",
      href: "https://cuzk.cz/"
    },
    {
      name: "Formul\xE1\u0159e katastru nemovitost\xED ke sta\u017Een\xED",
      href: "https://cuzk.cz/formulare"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Odkazy | Geozem</title>`, ""}<meta name="${"description"}" content="${"Geod\xE9zie Zem\xE1nek - rodinn\xE1 geodetick\xE1 kancel\xE1\u0159. Odkazy na extern\xED str\xE1nky t\xFDkaj\xEDc\xED se na\u0161ich slu\u017Eeb, nahl\xED\u017Een\xED do katastru."}" data-svelte="svelte-y895g6">`, ""}



<div class="${"container"}"><h1>Odkazy</h1>

	<ul class="${"svelte-m5axcb"}">${each(links, (link) => {
    return `<li class="${"svelte-m5axcb"}"><a${add_attribute("href", link.href, 0)} target="${"_blank"}"><i class="${"fa-solid fa-arrow-up-right-from-square svelte-m5axcb"}"></i>${escape(link.name)}</a></li>`;
  })}</ul>
</div>`;
});
export {
  Page as default
};
