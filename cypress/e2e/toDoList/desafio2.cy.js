import data from "../../fixtures/data/desafio2.json";

describe('Actividad complementaria 5', () => { 

    beforeEach("Prcondiciones", () => {
        cy.visit('');
        cy.url().should('include','pushing-it');        
        cy.xpath('//span[contains(@id,"register")]').dblclick();
        cy.xpath('//input[@data-cy="user"]').type(data.Act5.username);
        cy.xpath('//input[@data-cy="pass"]').type(data.Act5.password);
        cy.xpath('//button[starts-with(@id,"submit")]').click();
        cy.get('[id*="user_pushingit"]').should('exist');
        cy.xpath('//a[text()="To Do List"]').click(); 
        cy.get('[data-cy="removeAll"]').should('be.visible').click();
        cy.get('.css-tdm0fr').should('not.contain','button','Delete');
    })

    it('TC01: Should add 5 new tasks', () => {
        cy.get('[data-cy="task"]').type(data.Act5.message1);
        cy.get('[data-cy="sendTask"]').click();
        cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text', data.Act5.message1);

        cy.get('[data-cy="task"]').type(data.Act5.message2);
        cy.get('[data-cy="sendTask"]').click();
        cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text', data.Act5.message2);
        
        cy.get('[data-cy="task"]').type(data.Act5.message3);
        cy.get('[data-cy="sendTask"]').click();
        cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text', data.Act5.message3);

        cy.get('[data-cy="task"]').type(data.Act5.message4);
        cy.get('[data-cy="sendTask"]').click();
        cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text',data.Act5.message4);

        cy.get('[data-cy="task"]').type(data.Act5.message5);
        cy.get('[data-cy="sendTask"]').click();
        cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text', data.Act5.message5);
        
        cy.get('[class="css-tdm0fr"] p').should('have.length', data.Act5.numberOfTasks);
    })

    it('TC02: Should exist the buttons “All”, “Completed”, “Active” y “Remove all”', () => {
        cy.get('[data-cy="all"]').should('be.visible').and('have.text', data.Act5.allButtonText);
        cy.get('[data-cy="completed"]').should('be.visible').and('have.text',data.Act5.completedButtonText);
        cy.get('[data-cy="active"]').should('be.visible').and('have.text',data.Act5.activeButtonText);
        cy.get('[data-cy="removeAll"]').should('be.visible').and('have.text', data.Act5.removeAllButtonText);
    })

    it('TC03: Should add 2 tasks, complete them, and delete the second one', () => {
        cy.get('[data-cy="task"]').type(data.Act5.message1);
        cy.get('[data-cy="sendTask"]').click();
        cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text', data.Act5.message1);

        cy.get('[data-cy="task"]').type(data.Act5.message2);
        cy.get('[data-cy="sendTask"]').click();
        cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text', data.Act5.message2);

        cy.get('[class="css-tdm0fr"] p').should('have.length', data.Act5.twoTasks);
        cy.get('[class="css-tdm0fr"] button[class$="css-1evfvqt"]').last().click();
        cy.get('[class="css-tdm0fr"] p').should('have.length', data.Act5.twoTasks - 1);
    })


    it('TC04: Should add 2 tasks, complete them, and delete the first one', () => {
        cy.get('[data-cy="task"]').type(data.Act5.message1);
        cy.get('[data-cy="sendTask"]').click();
        cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text', data.Act5.message1);

        cy.get('[data-cy="task"]').type(data.Act5.message2);
        cy.get('[data-cy="sendTask"]').click();
        cy.get('[class="css-tdm0fr"] p', {timeout:2000}).last().should('have.text', data.Act5.message2);;

        cy.get('[class="css-tdm0fr"] p').should('have.length', data.Act5.twoTasks);
        cy.get('[class="css-tdm0fr"] button[class$="css-1evfvqt"]').first().click();
        cy.get('[class="css-tdm0fr"] p').should('have.length', data.Act5.twoTasks - 1);
    })
})