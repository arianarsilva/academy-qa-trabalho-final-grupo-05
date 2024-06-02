import { faker } from "@faker-js/faker";

Cypress.Commands.add("createUser", function (nome, email, senha, failOnStatusCode) {
  cy.request( 
    {method:'POST', url: `/users`,
     body: {
      "name": nome,
       "email": email,
        "password": senha
    }, failOnStatusCode: failOnStatusCode})
});

Cypress.Commands.add("createAndLoginUser", function (nome, email, senha) {
  let uId;
  let uToken;
  cy.request("POST", "/users", {
    name: nome,
    email: email,
    password: senha,
  }).then(function (response) {
    uId = response.body.id;
    return cy
      .request("POST", "/auth/login", {
        email: email,
        password: senha,
      })
      .then(function (response) {
        uToken = response.body.accessToken;
        {
          return {
            id: uId,
            token: uToken,
          };
        }
      });
  });
});

Cypress.Commands.add("deleteUser", function (id, token) {
  cy.request({
    method: "DELETE",
    url: "/users/" + id,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
});

Cypress.Commands.add("inactivateUser", function (token) {
  cy.request({
    method: "PATCH",
    url: "/users/inactivate",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
});

Cypress.Commands.add("createAndLogAdmin", function (nome, email, senha) {
  let uId;
  let uToken;
  cy.request("POST", "/users", {
    name: nome,
    email: email,
    password: senha,
  }).then(function (response) {
    uId = response.body.id;
    return cy
      .request("POST", "/auth/login", {
        email: email,
        password: senha,
      })
      .then(function (response) {
        uToken = response.body.accessToken;
        cy.request({
          method: "PATCH",
          url: "/users/admin",
          headers: {
            Authorization: "Bearer " + uToken,
          },
        }).then(function () {
          return {
            token: uToken,
            id: uId,
          };
        });
      });
  });
});

Cypress.Commands.add("createAndLoginCritic", function (nome, email, senha) {
  let uId;
  let uToken;
  cy.request("POST", "/users", {
    name: nome,
    email: email,
    password: senha,
  }).then(function (response) {
    uId = response.body.id;
    return cy
      .request("POST", "/auth/login", {
        email: email,
        password: senha,
      })
      .then(function (response) {
        uToken = response.body.accessToken;
        cy.request({
          method: "PATCH",
          url: "/users/apply",
          headers: {
            Authorization: "Bearer " + uToken,
          },
        }).then(function () {
          return {
            id: uId,
            token: uToken,
          };
        });
      });
  });
});
