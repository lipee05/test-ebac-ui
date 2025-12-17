/// <reference types="cypress" /> ///
const perfil = require ('../../fixtures/perfil.json')


describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')

    });

    afterEach(() => {
        cy.screenshot()

    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('luizfelipe.teste@gmail.com')
        cy.get('#password').type('25010643A')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain' , 'Minha conta')
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

    it('Deve fazer login com sucesso usando - Massa de Dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain' , 'Minha conta')
    });

    it('Deve fazer login com sucesso - usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha , {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain' , 'Minha conta')
        })
    });

    it('deve fazer login com sucesso - usando Comando Customizado', () => {
        cy.login('luizfelipe.teste@gmail.com', '25010643A')
        cy.get('.page-title').should('contain' , 'Minha conta')

    })
});
