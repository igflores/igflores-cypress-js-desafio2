const consT = require('../../support/utils/constants');

describe('Actividad complementaria 5', () => { 
    const numero = Math.floor(Math.random() * 100000)

    //! PENDIENTE: uso de XPATH 
        //! PENDIENTE: uso de XPATH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    beforeEach("Prcondiciones", () => {
        cy.visit('');
        cy.url().should('include','pushing-it')
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type(consT.Act5.username)
        cy.get('#pass').type(consT.Act5.password)
        cy.get('#submitForm').click()
        cy.get(`[id*='user_pushingit']`).should('exist')
        cy.get('[data-cy="todolistlink"]').click(); 
        
    })

    it('Should add 5 new tasks', () => {
        for(let i = 0; i < 5; i++){
            cy.get('[data-cy="task"]').type("Mi tarea: " + numero);       
            cy.get('[data-cy="sendTask"]').click();
        };
    })
    it('Should exist the buttons “All”, “Completed”, “Active” y “Remove all”', () => {
        cy.get('[data-cy="all"]').should('be.visible').and('have.text', consT.Act5.allButtonText);
        cy.get('[data-cy="completed"]').should('be.visible').and('have.text',consT.Act5.completedButtonText);
        cy.get('[data-cy="active"]').should('be.visible').and('have.text',consT.Act5.activeButtonText);
        cy.get('[data-cy="removeAll"]').should('be.visible').and('have.text', consT.Act5.removeAllButtonText);
    })

    // it('Should add 2 tasks, complete them, and delete the second one' () => {

    // })




    //Todo: wait
    // it("Deberia verificar que el boton 'cargando' su texto vuelva a ser 'button", () =>{
    //     cy.get('#wait').should('have.text','Cargando').wait(consT.Act5.timeout10s);
    //     cy.get('#wait').should('have.text','Button');
    // })    

    // it("Deberia verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds'", () =>{
    //     cy.get('[data-cy="colorChangeMessage"]', {timeout: consT.Act5.timeout10s}).should('have.text', consT.Act5.messageWait_5seconds);
	// })

    // it("Verificar que el primer mensaje que aparece a los 10 luego de 5 segundos mas sea diferente. (que cambie el mensaje)", () => {
    //     cy.get('[data-cy="message"]', {timeout: consT.Act5.timeout10s}).should('have.text',consT.Act5.messageWaited_5seconds).wait(consT.Act5.timeout5s);
    //     cy.get('[data-cy="message"]', {timeout: consT.Act5.timeout5s}).should('have.text', consT.Act5.messageManOfPatience);
	// })
})