const consT = require('../../support/utils/constants');

describe('Actividad complementaria 5', () => { 

    beforeEach("Prcondiciones", () => {
        cy.visit('');
        cy.url().should('include','pushing-it');
        cy.get("#registertoggle").dblclick();
        cy.get('#user').type(consT.Act5.username);
        cy.get('#pass').type(consT.Act5.password);
        cy.get('#submitForm').click();
        cy.get('[id*="user_pushingit"]').should('exist');
        cy.get('[data-cy="todolistlink"]').click(); 
        cy.get('[data-cy="removeAll"]').should('be.visible').click();
        cy.get('.css-tdm0fr').should('not.contain','button','Delete');
    })

    it('TC01: Should add 5 new tasks', () => {
        let count = 0;
        for(let i = 0; i < 5; i++){
            let numero = Math.floor(Math.random() * 100000);
            cy.get('[data-cy="task"]').type(`Mi tarea #${numero}`);
            cy.get('[data-cy="sendTask"]').click();
            count++;

            cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text',`Mi tarea #${numero}`);
            cy.get('[class="css-tdm0fr"] p').should('have.length',count);
        };
        cy.get('[class="css-tdm0fr"] p').should('have.length', consT.Act5.numberOfTasks);
    })

    it('TC02: Should exist the buttons “All”, “Completed”, “Active” y “Remove all”', () => {
        cy.get('[data-cy="all"]').should('be.visible').and('have.text', consT.Act5.allButtonText);
        cy.get('[data-cy="completed"]').should('be.visible').and('have.text',consT.Act5.completedButtonText);
        cy.get('[data-cy="active"]').should('be.visible').and('have.text',consT.Act5.activeButtonText);
        cy.get('[data-cy="removeAll"]').should('be.visible').and('have.text', consT.Act5.removeAllButtonText);
    })

    it('TC03: Should add 2 tasks, complete them, and delete the second one', () => {
        let count = 0;
        for(let i = 0; i < 2; i++){
            let numero = Math.floor(Math.random() * 100000);
            cy.get('[data-cy="task"]').type(`Mi tarea #${numero}`);
            cy.get('[data-cy="sendTask"]').click();
            count++;

            cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text',`Mi tarea #${numero}`);
            cy.get('[class="css-tdm0fr"] p').should('have.length',count);
        };
        cy.get('[class="css-tdm0fr"] p').should('have.length', consT.Act5.twoTasks);

        cy.get('[class="css-tdm0fr"] button[class$="css-1evfvqt"]').last().click();
        cy.get('[class="css-tdm0fr"] p').should('have.length', consT.Act5.twoTasks - 1);
    })


    it('TC04: Should add 2 tasks, complete them, and delete the first one', () => {
        let count = 0;
        for(let i = 0; i < 2; i++){
            let numero = Math.floor(Math.random() * 100000);
            cy.get('[data-cy="task"]').type(`Mi tarea #${numero}`);
            cy.get('[data-cy="sendTask"]').click();
            count++;

            cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text',`Mi tarea #${numero}`);
            cy.get('[class="css-tdm0fr"] p').should('have.length',count);
        };
        cy.get('[class="css-tdm0fr"] p').should('have.length', consT.Act5.twoTasks);

        cy.get('[class="css-tdm0fr"] button[class$="css-1evfvqt"]').first().click();
        cy.get('[class="css-tdm0fr"] p').should('have.length', consT.Act5.twoTasks - 1);
    })

    afterEach('Remove all tasks', () => {
        cy.get('[data-cy="removeAll"]').should('be.visible').click();
        cy.get('.css-tdm0fr').should('not.contain','button','Delete');
    })
})