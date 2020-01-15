import * as content from "./content.js";

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
    <div class="col-md-6">
      <div class="contact-box">
        <h2 class="contact-icon"><i class="fas fa-mobile"></i></h2>
        <h5>Telefon</h5>
        <p class="contact-text"><a class="btn btn-outline-dark btn-sm btn-contact" href="#" role="button">${
          content.contactData.mobile
        }</a></p>
      </div>
    </div>
    <div class="col-md-6">
      <div class="contact-box">
        <h2 class="contact-icon"><i class="fas fa-envelope"></i></h2>
        <h5>E-mail</h5>
        <p class="contact-text"><a class="btn btn-outline-dark btn-sm btn-contact" href="#" role="button">${
          content.contactData.email
        }</a></p>
      </div>
    </div>
  </div>
  <div class="row align-items-center justify-content-center sub-section-padding">
    <div class="col-md-6">
      <div class="contact-box">
        <h2 class="contact-icon"><i class="fas fa-map-marked-alt"></i></h2>
        <h5>Adresse</h5>
        <p class="contact-address">${content.contactData.address.street}</p>
        <p class="contact-address">${content.contactData.address.city}</p>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.347873837244!2d13.459081315809044!3d52.56331997982235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84dbe7141da4b%3A0x64c17bc286a9a8b0!2sAn+der+Industriebahn+12%2C+13088+Berlin!5e0!3m2!1spl!2sde!4v1538128774985" width="100%" height="400px" frameborder="0" style="border: solid 4px #c5c5c5;" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>
`;

$("#contact").append(contact);
