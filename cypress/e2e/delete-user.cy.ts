import { random } from 'cypress/types/lodash';

describe('Delete User', () => {
  it('Delete first user of table', () => {
    cy.visit('/');

    cy.get(
      ':nth-child(1) > .cdk-column-actions > .mat-mdc-menu-trigger > .mat-icon'
    ).click();
    cy.get('.mat-mdc-menu-content > :nth-child(2)').click();
    cy.get('[ng-reflect-dialog-result="true"]').click();
  });
});
