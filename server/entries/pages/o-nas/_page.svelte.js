import { c as create_ssr_component, e as each, f as escape, d as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1xsjx9y.svelte-1xsjx9y{margin-bottom:80px}section.svelte-1xsjx9y.svelte-1xsjx9y{display:flex;justify-content:center;flex-wrap:wrap}section.svelte-1xsjx9y .photo.svelte-1xsjx9y{display:flex;flex-direction:column;max-width:360px;margin-right:80px;margin-bottom:60px}section.svelte-1xsjx9y .photo .label.svelte-1xsjx9y{font-size:1.2em;margin-bottom:10px;font-weight:bold}section.svelte-1xsjx9y img.svelte-1xsjx9y{flex-grow:0;max-width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const photos = [
    {
      name: "Ing. Jan Zem\xE1nek",
      imgurl: "Jan_Zemanek.jpg"
    },
    {
      name: "Ing. Anna Zahradn\xEDkov\xE1",
      imgurl: "empty.webp"
    },
    {
      name: "Martin Zem\xE1nek, DiS",
      imgurl: "Martin_Zemanek.png"
    },
    {
      name: "Bc. Marie Vyslou\u017Eilov\xE1",
      imgurl: "empty.webp"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>O n\xE1s | Geozem</title>`, ""}<meta name="${"description"}" content="${"Geod\xE9zie Zem\xE1nek - rodinn\xE1 geodetick\xE1 kancel\xE1\u0159. Poskytujeme komplexn\xED geodetick\xE9 slu\u017Eby od roku 2011. D\u016Fraz na vysokou kvalitu slu\u017Eeb a dodr\u017Een\xED term\xEDn\u016F."}" data-svelte="svelte-1dlhr8c">`, ""}



<div class="${"container"}"><h1>O n\xE1s</h1>

	<p class="${"svelte-1xsjx9y"}">Jsme rodinn\xE1 geodetick\xE1 kancel\xE1\u0159, poskytujeme komplexn\xED geodetick\xE9 slu\u017Eby od roku 2011. Na\u0161imi z\xE1kazn\xEDky jsou jednotlivci, obce, realitn\xED kancel\xE1\u0159e i stavebn\xED firmy. Klademe d\u016Fraz na vysokou kvalitu slu\u017Eeb, dodr\u017Een\xED dohodnut\xFDch term\xEDn\u016F a individu\xE1ln\xED p\u0159\xEDstup.
	</p>

	<section class="${"svelte-1xsjx9y"}">${each(photos, (photo) => {
    return `<div class="${"photo svelte-1xsjx9y"}"><div class="${"label svelte-1xsjx9y"}">${escape(photo.name)}</div>
				<img${add_attribute("src", photo.imgurl, 0)}${add_attribute("alt", photo.name, 0)} class="${"svelte-1xsjx9y"}">
			</div>`;
  })}</section>
</div>`;
});
export {
  Page as default
};
