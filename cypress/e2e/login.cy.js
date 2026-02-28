describe("Login Form E2E", () => {

  it("Başarılı login olmalı", () => {

    cy.visit("http://localhost:5173/login");

    cy.get('input[placeholder="Email"]').type("a@a.com");
    cy.get('input[placeholder="Şifre"]').type("Aa123456");
    cy.get('input[type="checkbox"]').check();

    cy.get('button[type="submit"]').should("not.be.disabled");
    cy.get('button[type="submit"]').click();

    cy.contains("Form başarıyla gönderildi").should("be.visible");

  });

});