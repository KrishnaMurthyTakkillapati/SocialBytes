
describe('Social Bytes', () => {


it('Visits website', function() {
    
        cy.visit('http://localhost:3000')
        // cy.visit('http://localhost:3000/Login')
        // cy.get('label').contains('Username').click({force: true}).type('eshwar@gmail.com');
        // cy.get('label').contains('Password').click({force: true}).type('eshwar123');
        // cy.get('button').contains('Login').click();
        // cy.wait(1000)
      })

it('Checks if My Account button is clicked', function() {

    
    cy.get('a[href*="/account"]').click();
  })

  // it('SignOut button ', function() {
    
  //   cy.get('[data-testid="ExitToAppIcon"]').click();
    
    

    
  // })
  it('Checks if Create Event button is clicked', function() {
    
    
    cy.get('a[href*="/start-event"]').click();
  })

  it('Checks if Search Event button is clicked', function() {
    
    
    cy.get('a[href*="/search-event"]').click();
  })
  it('Checks if Home button is clicked', function() {
    
    
    cy.get('svg[data-testid="HomeIcon"').click();
  })



})