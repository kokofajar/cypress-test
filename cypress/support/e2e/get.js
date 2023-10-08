describe('get single user API', ()=> {
    it('get single user reqres.in', () => {
        cy.request('api/users/2').as('getSingleUser');
        cy.get('@getSingleUser').then(findUser => {
            expect(findUser.status).to.equal(200);
        })
    })
})