/// <reference types="cypress" /> ///
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutosLista('Ajax Full-Zip Sweatshirt')
         cy.get('#tab-title-description > a').should('contain' , 'Descrição')
        
    });

    it.only('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProdutos('Aether Gym Pant')
        cy.get('.product_title').should('contain' , 'Aether Gym Pant')
    });

    it('Deve visitar a pagina do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});