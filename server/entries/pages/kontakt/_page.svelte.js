import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-35hai9.svelte-35hai9{margin-bottom:40px}.people.svelte-35hai9.svelte-35hai9{display:flex;flex-wrap:wrap;justify-content:space-between}.contact-card.svelte-35hai9.svelte-35hai9{display:flex;margin-bottom:20px}.contact-card.svelte-35hai9 img.svelte-35hai9{max-width:220px;margin-right:20px}.contact-card.svelte-35hai9 .contact-info.svelte-35hai9{display:flex;flex-direction:column;justify-content:center;line-height:1.6em}.location.svelte-35hai9.svelte-35hai9{display:flex;margin-top:80px}@media(max-width: 991px){.location.svelte-35hai9.svelte-35hai9{flex-direction:column;margin-top:40px}}.address.svelte-35hai9.svelte-35hai9{display:flex;flex-direction:column;justify-content:center;margin-right:20px}.address.svelte-35hai9>div.svelte-35hai9{margin-bottom:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Kontakt | Geozem</title>`, ""}<meta name="${"description"}" content="${"Geod\xE9zie Zem\xE1nek - rodinn\xE1 geodetick\xE1 kancel\xE1\u0159. Kde n\xE1s najdete, kontaktn\xED osoby, telefonn\xED \u010D\xEDslo, email, adresa."}" data-svelte="svelte-vk9yln">`, ""}



<div class="${"container"}"><h1>Kontakt</h1>

	<section class="${"people svelte-35hai9"}"><div class="${"contact-card svelte-35hai9"}"><img src="${"Jan_Zemanek.jpg"}" alt="${"Ing. Jan Zem\xE1nek"}" class="${"svelte-35hai9"}">
				<div class="${"contact-info svelte-35hai9"}"><strong>Kontaktn\xED osoba</strong>
					<div>Ing. Jan Zem\xE1nek</div>
					<div><i>mobil</i>: 725 95 77 11</div>
					<div><i>e-mail</i>: zemanek@geozem.cz</div>
					<div><i>ID datov\xE9 schr\xE1nky</i>: dy7wdmt</div></div></div>

			<div class="${"contact-card svelte-35hai9"}"><img src="${"empty.webp"}" alt="${"Ing. Anna Zahradn\xEDkov\xE1"}" class="${"svelte-35hai9"}">
				<div class="${"contact-info svelte-35hai9"}"><div>Ing. Anna Zahradn\xEDkov\xE1</div>
					<div>(roz. Zem\xE1nkov\xE1)</div>
					<div><i>e-mail</i>: zahradnikova@geozem.cz</div></div></div></section>

	<p>Nev\xE1hejte n\xE1s oslovit a po\u017E\xE1dat o cenovou nab\xEDdku na Va\u0161i popt\xE1vku nebo m\u016F\u017Eete vyu\u017E\xEDt n\xE1\u0161 <a href="${"/poptavka"}">popt\xE1vkov\xFD formul\xE1\u0159</a>. Konzultace p\u0159ed vyhotoven\xEDm zak\xE1zky jsou v cen\u011B.</p>

	<section class="${"location svelte-35hai9"}"><div class="${"address svelte-35hai9"}"><div class="${"svelte-35hai9"}"><strong>Provozovna Blansko</strong>
				<div>N\xE1m. Svobody 3 (zadn\xED trakt radnice)</div>
				<div>678 01 Blansko</div>
				<div><i>Vchod z ulice A. Skot\xE1ka</i></div></div>
			<div class="${"svelte-35hai9"}"><strong>S\xEDdlo</strong>
				<div>Ko\u0159enec 166</div>
				<div>680 01 Boskovice</div></div>
			<div class="${"svelte-35hai9"}"><strong>Provozn\xED doba</strong>
				<div>Po-P\xE1: 8-16h</div>
				<div><i>*Pro osobn\xED jedn\xE1n\xED v kancel\xE1\u0159i v Blansku je t\u0159eba se p\u0159edem telefonicky objednat.</i></div></div></div>
		<div class="${"map"}"><iframe width="${"600"}" height="${"450"}" style="${"border:0"}" loading="${"lazy"}" allowfullscreen src="${"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJSXItUZeOEkcRLnUzjWsTULA&key=AIzaSyB5QRw0ineo-heivRoWNTjn30OWa7zB_iI"}"></iframe></div></section>
</div>`;
});
export {
  Page as default
};
