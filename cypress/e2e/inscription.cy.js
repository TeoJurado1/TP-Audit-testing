describe("Inscription", () => {
  const motDePasse = "userPassword1";

  beforeEach(() => {
    cy.visit("/register");
  });

  it("inscrit un utilisateur avec des données valides", () => {
    const email = "userEmail@test.fr";

    cy.get('input[name="firstname"]').type("userFirstname1");
    cy.get('input[name="lastname"]').type("userSurname1");
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(motDePasse);
    cy.get('input[name="confirm-password"]').type(motDePasse);
    cy.get('input[name="submit"]').click();

    cy.contains("p", `Le compte : ${email} a été ajouté en BDD`).should("be.visible");
  });
});

describe("Inscription", () => {
  const motDePasse = "userPassword1";

  //Etape A1 : Se connecter au site avec des données valides
  beforeEach(() => {
    cy.visit("http://localhost:8080/login");
  });

  it("inscrit un utilisateur avec des données valides", () => {
    const email = "userEmail@test.fr";

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(motDePasse);
    cy.get('input[name="submit"]').click();

  });

  //Etape A2 : ajouter la tache

  //Etape A3 : vérifier que la tache est présente dans la page mes taches actives
});