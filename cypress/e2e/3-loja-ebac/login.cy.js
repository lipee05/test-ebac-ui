/// <reference types="cypress" /> ///

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('luizfelipe.teste@gmail.com')
        cy.get('#password').type('25010643A')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, luizfelipe.teste (não é luizfelipe.teste? Sair)')
    });
    
});