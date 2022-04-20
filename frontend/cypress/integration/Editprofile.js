describe('Social Bytes', () => {
    it('Visits website', function() {
    
        cy.visit('http://localhost:3000')
        
        
    
        
      })
      it('Checks if My Account button is clicked', function() {



    
    
        cy.get('a[href*="/account"]').click();
      })
      it('Checks if My account settings button is clicked', function() {



    
    
        cy.get('a[href*="/account/settings"]').click();

})


})