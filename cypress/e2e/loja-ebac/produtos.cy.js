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

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProdutos('Aether Gym Pant')
        cy.get('.product_title').should('contain' , 'Aether Gym Pant')
    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Argus All-Weather Tank')
        cy.get('.product_title').should('contain' , 'Argus All-Weather Tank')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 5
        produtosPage.buscarProdutos('Cassia Funnel Sweatshirt')
        produtosPage.addProdutoCarrinho('XS', 'Orange', qtd)
        cy.get('.woocommerce-message').should('contain' , qtd + ' × “Cassia Funnel Sweatshirt” foram adicionados no seu carrinho.')
    })

    it.only('Deve adicionar produto ao carrinho com Massa de Dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProdutos(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
            dados[0].tamanho, 
            dados[0].cor, 
            dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
    })
});