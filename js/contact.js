import * as content from "./content.js";

// let contact = `
// <div class="container">
//   <div class="row justify-content-center">
//     <div class="col-md-8 col-lg-6">
//       <div class="contact-box">
//         <h3>Lass uns kennenlernen!</h3>
//         <p class="contact-text">${content.contactData.text}</p>
//       </div>
//     </div>
//   </div>
//   <div class="row justify-content-center">
//     <div class="col-md-4 col-6">
//       <div class="contact-box">
//         <h2 class="contact-icon"><i class="fas fa-mobile"></i></h2>
//         <h6>Telefon</h6>
//         <p class="contact-text">${content.contactData.mobile}</p>
//       </div>
//     </div>
//     <div class="col-md-4 col-6">
//       <div class="contact-box">
//         <h2 class="contact-icon"><i class="fas fa-envelope"></i></h2>
//         <h6>E-mail</h6>
//         <p class="contact-text">${content.contactData.email}</p>
//       </div>
//     </div>
//     <div class="col-md-4 col-6">
//       <div class="contact-box">
//         <h2 class="contact-icon"><i class="fas fa-map-marked-alt"></i></h2>
//         <h6>Adresse</h6>
//         <p class="contact-text">${content.contactData.address.street}</p>
//         <p class="contact-text">${content.contactData.address.city}</p>
//       </div>
//     </div>
//   </div>
// </div>
// `;

let contact = `
<div class="container">
  <div class="row justify-content-center">
    <div class="col">
      <div class="contact-image-eg">
        <img src="img/faq/faq1.jpg" class="contact-image-width"/>
        <div class="contact-intro contact-intro-over">
          <h5>Lass uns kennenlernen!</h5>
          <p class="contact-text">${content.contactData.text}</p>
          <p class="text-center"><a class="btn btn-outline-dark btn-sm custom-button" href="#contact-details" role="button">Kontaktiere mich</a></p>
        </div>
      </div>
    </div>
  </div>
  <div id="contact-details" class="row justify-content-center">
    <div class="col-md-4">
      <div class="contact-box">
        <h2 class="contact-icon"><i class="fas fa-mobile"></i></h2>
        <h6>Telefon</h6>
        <p class="contact-text">${content.contactData.mobile}</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="contact-box">
        <h2 class="contact-icon"><i class="fas fa-envelope"></i></h2>
        <h6>E-mail</h6>
        <p class="contact-text">${content.contactData.email}</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="contact-box">
        <h2 class="contact-icon"><i class="fas fa-map-marked-alt"></i></h2>
        <h6>Adresse</h6>
        <p class="contact-text">${content.contactData.address.street}</p>
        <p class="contact-text">${content.contactData.address.city}</p>
      </div>
    </div>
  </div>
</div>
`;

$('#contact').append(contact);