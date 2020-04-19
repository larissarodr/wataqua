const connection = require('../../database/connection');

module.exports = {
    async create(request, response){
        const { description } = request.body;

        const [id] = await connection('user_type')
        .insert({description})
        
        return response.json( {id} );
    },

    async index(request, response){
        const user_types = await connection('user_type')
                            .select('*');

        return response.json(user_types);
    }
};