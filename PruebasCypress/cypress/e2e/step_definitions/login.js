import {
    Given,
    When,
    Then,  
  } from "@badeball/cypress-cucumber-preprocessor";

  Given("El usuario visitará la página", () => {
    cy.visit("/");
  });
  //Validando cambios en este aplicativo
//Validación de la URL de ALICE --> CUF-01
  Then("Verifica que la URL sea la correcta", () => {
    cy.url().should("eq", "https://192.168.218.243:8444/ic_apps/lunch/login");  
  });
  
//Datos de Usuario válidos --> CUF-01
  When("Ingresará los datos de usuario y contraseña", () => {
    cy.get("#username").type("1110284954");
    cy.get("#password").type("brdqlemBt7");
    cy.get(".MuiButtonBase-root").click();
  });
  Then("Se carga la interfaz de usuario", () => {
    cy.log("Todo bien");
  });

  When("No escribirá nombre de usuario e intentará loguear", () => {
    c y.visit("/");
    cy.get("#password").type("12345678");
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.css-uvkclt').click();
  });
  
  Then("Verifica que arroje mensaje de usuario inválido", () => {
    cy.get('.swal2-html-container').should('have.text', 'El usuario no puede estar vacio');
  });
  
  When("No escribirá la clave e intentará loguear", () => {
    cy.visit("/");
    cy.get("#username").type("94543140");
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.css-uvkclt').click();
  });
  
  Then("Verifica que arroje mensaje de no clave", () => {
    cy.get('.swal2-html-container').should('have.text', 'La contraseña no puede estar vacia');
  });