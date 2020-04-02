const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { username, password, email, fullname, initials, state } = request.body;

        const [id] = await connection('user')
        .insert({
            username,
            password,
            email,
            fullname,
            initials,
            state
        })
        
        return response.json( {id} );
    }
};