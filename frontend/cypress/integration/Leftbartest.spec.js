
describe('Social Bytes', () => {


it('Visits website', function() {
    
        cy.visit('http://localhost:3000')
        
        
    
        
      })

it('Checks if My Account button is clicked', function() {



    
    
    cy.get('a[href*="/account"]').click();
  })

  it('SignOut button ', function() {
    
    cy.get('[data-testid="ExitToAppIcon"]').click();
    
    

    
  })
  it('Checks if Create Event button is clicked', function() {



    
    
    cy.get('a[href*="/start-event"]').click();
  })
  it('Checks if Login button is clicked', function() {



    
    
    cy.get('a[href*="/Login"]').click();
  })
  it('Checks if Register button is clicked', function() {



    
    
    cy.get('a[href*="/Register"]').click();
  })



})