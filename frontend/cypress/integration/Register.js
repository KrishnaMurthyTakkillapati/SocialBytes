describe('Social Bytes', () => {
    it('Visits website', function() {
    
        cy.visit('http://localhost:3000')
        
        
    
        
      })
      it('Checks if SignUp button is clicked', function() {



    
    
        cy.visit('http://localhost:3000/Register')
      })

      it('Checks if firstName is filled', function() {



            cy.get('label').contains('First Name').click({force: true}).type('Test');
            
            
        
        })
        it('Checks if lastname is filled', function() {



            cy.get('label').contains('Last Name').click({force: true}).type('User');
            
            
        
        })
        it('Checks if username is filled', function() {



            cy.get('label').contains('Create Username').click({force: true}).type('venky@gmail.com');
            
            
        
        })
        it('Checks if password is filled', function() {



            cy.get('label').contains('Create Password').click({force: true}).type('123456789');
            
            
        
        })
        it('Checks if password is retyped', function() {



            cy.get('label').contains('Retype Password').click({force: true}).type('123456789');
            
            
        
        })

        it('Checks if Register button is clicked', function() {



            cy.get('button').contains('Register').click();
            
            
        
        })
        
       


//       it('Checks if My account settings button is clicked', function() {



    
    
//         cy.get('a[href*="/account/settings"]').click();

// })
// it('Checks if firstName is filled', function() {



//     cy.get('label').contains('firstName').click({force: true}).type('Krishna');
    
    

// })



})