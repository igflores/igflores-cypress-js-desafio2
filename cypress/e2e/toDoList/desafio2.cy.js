const consT = require('../../support/utils/constants');

describe('Actividad complementaria 5', () => { 
    
    beforeEach("Prcondiciones", () => {
        cy.visit('https://pushing-it.vercel.app');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get(`[id*='user_pushingit']`).should('exist')
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    })

    it("Deberia verificar que el boton 'cargando' su texto vuelva a ser 'button", () =>{
        cy.get('#wait').should('have.text','Cargando').wait(consT.Act5.timeout10s);
        cy.get('#wait').should('have.text','Button');
    })    

    it("Deberia verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds'", () =>{
        cy.get('[data-cy="colorChangeMessage"]', {timeout: consT.Act5.timeout10s}).should('have.text', consT.Act5.messageWait_5seconds);
	})

    it("Verificar que el primer mensaje que aparece a los 10 luego de 5 segundos mas sea diferente. (que cambie el mensaje)", () => {
        cy.get('[data-cy="message"]', {timeout: consT.Act5.timeout10s}).should('have.text',consT.Act5.messageWaited_5seconds).wait(consT.Act5.timeout5s);
        cy.get('[data-cy="message"]', {timeout: consT.Act5.timeout5s}).should('have.text', consT.Act5.messageManOfPatience);
	})
})