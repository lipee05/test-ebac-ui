/// <reference types="cypress" /> ///

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    afterEach(() => {
        cy.screenshot()

    });

    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('luizfelipe.teste@gmail.com')
        cy.get('#password').type('25010643A')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, luizfelipe.teste (não é luizfelipe.teste? Sair)')
    });
    
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {

        cy.get('#username').type('felipe.teste@gmail.com')
        cy.get('#password').type('25010643A')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido.')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => { 
        cy.get('#username').type('luizfelipe.teste@gmail.com')
        cy.get('#password').type('250106')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail')
    });
});
