class ProdutosPage {
    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProdutos(nomeProduto) {
    cy.get('[name="s"]').eq(1).type(nomeProduto)
    cy.get('.button-search').eq(1).click()
    }

    buscarProdutosLista(nomePrdouto) {
        cy.get('.product-block')
        .contains(nomePrdouto)
        .click()
    }

    visitarProduto() {

    }

    addProdutoCarrinho() {

    }

}

export default new ProdutosPage();