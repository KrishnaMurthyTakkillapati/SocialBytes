describe('Social Bytes', () => {
    it('Visits website', function() {
    
        cy.visit('http://localhost:3000')
        
        
    
        
      })
      it('Checks if LogIn button is clicked', function() {



    
    
        cy.visit('http://localhost:3000/Login')
      })
    //   it('Checks if SignUp button is clicked', function() {



    
    
    //     cy.visit('http://localhost:3000/Register')
    //   })
      it('Checks if Username is filled', function() {



        cy.get('label').contains('Username').click({force: true}).type('eshwar@gmail.com');
        
        
    
    })
    it('Checks if password is filled', function() {



        cy.get('label').contains('Password').click({force: true}).type('eshwar123');
        
        
    
    })
     it('Checks if Register button is clicked', function() {



            cy.get('button').contains('Login').click();
            cy.wait(3000)
            
            
        
        })

    })