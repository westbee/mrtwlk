import * as content from "./content.js";

let address = "", contactData = "", taxData = "", info = "";

content.impressum.address.forEach(function(el){
  address += `${el}<br />`
});

content.impressum.contactData.forEach(function(index){
  contactData += `${index.name}: ${index.key}<br />`
});

content.impressum.taxData.forEach(function(index){
  taxData += `<strong>${index.name}:</strong> ${index.key}<br />`
});

content.impressum.info.forEach(function(index){
  info += `<p><strong>${index.name}:</strong><br />${index.key}</p>`
});

let impressum = `
<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-9">
      <h3>${content.impressum.title}</h3>
        <p>${address}</p>
        <p>${contactData}</p>
        <p>${taxData}</p>
        <p>${content.impressum.explainer}</p>
        ${info}
    </div>
  </div>
</div>
`
;

$("#impressum").append(impressum);

let datenInfo = "", datenPoints = "", bodyItems = "";

content.datenschutz.info.forEach(function(el){
  if (el.items){
    datenInfo += `<p><strong>${el.name}</strong><br />- ${el.items}</p>`
  } else {
    datenInfo += `<p>${el.name}</p>`
  }
});

content.datenschutz.points.forEach(function(el, index){
  if (el.body.length > 1){

    el.body = el.body.map(function(item, i){
      return `<p>${index+1}.${[i+1]}. ${item}</p>`
    });

    bodyItems = el.body.join(" ");

    datenPoints += `
      <p><strong>${index+1}. ${el.head}</strong></p>
      ${bodyItems}
    `
  } else {
    datenPoints += `
      <p><strong>${index+1}. ${el.head}</strong></p>
      <p>${el.body}</p>
    `
  }
});

let datenschutz = `
<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-9">
      <h3>${content.datenschutz.title}</h3>
      <p>${content.datenschutz.explainer}</p>
      <p>${datenInfo}</p>
      <p>${content.datenschutz.datum}</p>
      <div class="datenschutz-points">
        ${datenPoints}
      </div>
    </div>
  </div>
</div>
`
;

$("#datenschutz").append(datenschutz);