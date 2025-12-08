/// <reference types="cypress" /> ///

describe('Funcionalidade: Detalhes da Conta', () => {


    beforeEach(() => {
        cy.visit('/minha-conta/edit-account/')
        cy.fixture('perfil').then(login => {   
            cy.login(login.usuario, login.senha)
        }
        )
    });


it('deve completar detalhes da conta com sucesso', () => {
    cy.detalhesConta('Luiz Felipe', 'Silva Medeiros', 'felipe.qa')
    cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
});

});
