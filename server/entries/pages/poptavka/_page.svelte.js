import { c as create_ssr_component, d as add_attribute, e as each, f as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-1f1j1g8{max-width:640px}.fa-solid.svelte-1f1j1g8{margin-left:5px}button.svelte-1f1j1g8{margin-right:10px}.fa-spinner.svelte-1f1j1g8{animation-name:svelte-1f1j1g8-spin;animation-duration:1000ms;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes svelte-1f1j1g8-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formEl;
  const services = [
    "Zam\u011B\u0159en\xED budovy / p\u0159\xEDstavby",
    "Rozd\u011Blen\xED pozemku",
    "Zam\u011B\u0159en\xED pozemku pro projekt",
    "Vyty\u010Den\xED stavby dle projektu",
    "V\u011Bcn\xE9 b\u0159emeno-vyzna\u010Den\xED rozsahu",
    "Vyty\u010Den\xED hranice pozemku v ter\xE9nu",
    "Jin\xE9 (up\u0159esn\u011Bte pros\xEDm do pozn\xE1mky)"
  ];
  const form = {
    name: "",
    email: "",
    phone: "",
    city: "",
    parcel: "",
    service: "",
    note: "",
    order: false
  };
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Popt\xE1vkov\xFD formul\xE1\u0159 | Geozem</title>`, ""}<meta name="${"description"}" content="${"Geod\xE9zie Zem\xE1nek - rodinn\xE1 geodetick\xE1 kancel\xE1\u0159. Popt\xE1vkov\xFD formul\xE1\u0159 - napi\u0161te n\xE1m Va\u0161i popt\xE1vku a my se V\xE1m ozveme nazp\u011Bt s nab\xEDdkou."}" data-svelte="svelte-139pw47"><script src="${"https://www.google.com/recaptcha/api.js"}" async defer data-svelte="svelte-139pw47"><\/script>`, ""}



<div class="${"container d-flex flex-column align-items-center"}"><h1>Popt\xE1vkov\xFD formul\xE1\u0159</h1>

	<form novalidate class="${"needs-validation svelte-1f1j1g8"}"${add_attribute("this", formEl, 0)}><div class="${"form-group row"}"><label for="${"name"}" class="${"col-sm-2 col-form-label"}">Jm\xE9no*</label>
			<div class="${"col-sm-10"}"><input type="${"text"}" class="${"form-control"}" id="${"name"}" required${add_attribute("value", form.name, 0)}>
				<div class="${"invalid-feedback"}">Vypl\u0148te pros\xEDm sv\xE9 jm\xE9no.
				</div></div></div>
		<div class="${"form-group row"}"><label for="${"email"}" class="${"col-sm-2 col-form-label"}">E-mail</label>
			<div class="${"col-sm-10"}"><input type="${"email"}" class="${"form-control"}" id="${"email"}"${add_attribute("value", form.email, 0)}></div></div>
		<div class="${"form-group row"}"><label for="${"phone"}" class="${"col-sm-2 col-form-label"}">Telefon*</label>
			<div class="${"col-sm-10"}"><input type="${"text"}" class="${"form-control"}" id="${"phone"}" required${add_attribute("value", form.phone, 0)}>
				<div class="${"invalid-feedback"}">Vypl\u0148te pros\xEDm sv\u016Fj telefon.
				</div></div></div>
		<div class="${"form-group row"}"><label for="${"city"}" class="${"col-sm-2 col-form-label"}">Obec / katastr\xE1ln\xED \xFAzem\xED</label>
			<div class="${"col-sm-10"}"><input type="${"text"}" class="${"form-control"}" id="${"city"}"${add_attribute("value", form.city, 0)}></div></div>
		<div class="${"form-group row"}"><label for="${"parcel"}" class="${"col-sm-2 col-form-label"}">Parceln\xED \u010D\xEDslo</label>
			<div class="${"col-sm-10"}"><input type="${"text"}" class="${"form-control"}" id="${"parcel"}"${add_attribute("value", form.parcel, 0)}></div></div>
		<div class="${"form-group row"}"><label for="${"service"}" class="${"col-sm-2 col-form-label"}">Druh po\u017Eadovan\xE9 slu\u017Eby</label>
			<div class="${"col-sm-10"}"><select class="${"form-control"}" id="${"service"}">${each(services, (service) => {
    return `<option${add_attribute("value", service, 0)}>${escape(service)}</option>`;
  })}</select>
				<small id="${"serviceHelp"}" class="${"form-text text-muted"}">V\u0161echny slu\u017Eby jsou podrobn\u011Bji pops\xE1ny v sekci slu\u017Eby. Pokud si nejste jist\xED, jak\xFD druh slu\u017Eby popt\xE1v\xE1te, zvolte pros\xEDm mo\u017Enost \u201Ejin\xE9\u201C a do pozn\xE1mky popi\u0161te vlastn\xEDmi slovy, do 3 pracovn\xEDch dn\u016F se s V\xE1mi spoj\xEDme.
				</small></div></div>
		<div class="${"form-group row"}"><label for="${"note"}" class="${"col-sm-2 col-form-label"}">Pozn\xE1mka</label>
			<div class="${"col-sm-10"}"><textarea class="${"form-control"}" id="${"note"}" rows="${"3"}">${""}</textarea></div></div>
		<div class="${"form-group row"}"><div class="${"col-sm-2"}"></div>
			<div class="${"col-sm-10"}"><div class="${"form-check"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"order"}"${add_attribute("checked", form.order, 1)}>
					<label class="${"form-check-label"}" for="${"order"}">Chci z\xE1vazn\u011B objednat
					</label>
					
				<small id="${"orderHelp"}" class="${"form-text text-muted"}">Pokud jste se ji\u017E rozhodli zak\xE1zku objednat u na\u0161\xED firmy, za\u0161krtn\u011Bte pros\xEDm pole \u201EChci z\xE1vazn\u011B objednat\u201C.
				</small></div></div></div>
		<div class="${"form-group row"}"><div class="${"col-sm-2"}"></div>
			<div class="${"col-sm-10"}"><i>Vypln\u011Bn\xE9 \xFAdaje budou zpracov\xE1ny pouze za \xFA\u010Delem zasl\xE1n\xED odpov\u011Bdi.</i></div></div>
		<div class="${"form-group row"}"><div class="${"col-sm-2"}"></div>
			<div class="${"col-sm-10"}"><div class="${"g-recaptcha"}" data-sitekey="${"6LdHpkQiAAAAAL-psQQJRkOYjEVO-6_19CpZdsg6"}"></div></div></div>
		<div class="${"form-group row"}"><div class="${"col-sm-2"}"></div>
			<div class="${"col-sm-10 d-flex"}"><button type="${"submit"}" class="${"btn btn-primary svelte-1f1j1g8"}">Odeslat
					${`${``}`}</button>
				${`${``}`}</div></div></form>
</div>`;
});
export {
  Page as default
};
