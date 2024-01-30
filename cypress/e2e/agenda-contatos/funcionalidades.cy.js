/// <reference types="cypress"/>

describe("Testando funcionalidade da agenda", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve INCLUIR o contato na agenda", () => {
    cy.get("input[type='text']").type("Gabriel Yuji");
    cy.get("input[type='email']").type("gabriel@ebac.com.br");
    cy.get("input[type='tel']").type("41 911223344");
    cy.get(".adicionar").click();
  });

  it("Deve ALTERAR o contato na agenda", () => {
    cy.get(":nth-child(4) > .sc-gueYoa > .edit").click();
    cy.get("input[type='text']").clear();
    cy.get("input[type='text']").type("Gian Souza");

    cy.get("input[type='email']").clear();
    cy.get("input[type='email']").type("giansouza@ebac.com");

    cy.get("input[type='tel']").clear();
    cy.get("input[type='tel']").type("11 912345678");
    cy.get(".alterar").click();
  });
  it("Deve REMOVER o contato da agenda", () => {
    cy.get(":nth-child(5) > .sc-gueYoa > .delete").click();
  });
});
