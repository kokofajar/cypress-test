describe('Create User API', ()=> {
    it('Create user reqres.in', () => {
        let body = {
            
                "name": "jamal",
                "job": "CEO"
            
        }

        cy.request('POST','api/users',body).as('CreateUser');
        cy.get('@CreateUser').then(createUser => {
            expect(createUser.status).to.equal(201);
        })
    })
})