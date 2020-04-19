const connection = require('../../database/connection');

module.exports = {
    async create(request, response){
        const { username, password, email, fullname, initials, state, user_type_id } = request.body;
        
        const user_type = await connection('user_type')
                    .where('id', user_type_id)
                    .select('description')
                    .first();

        if (!user_type) {
            return response.status(400).json({ error: 'No USER TYPE found with this ID' });
        }

        const [id] = await connection('user')
        .insert({
            username,
            password,
            email,
            fullname,
            initials,
            state,
            user_type_id
        })
        
        return response.json( {id} );
    },

    async index(request, response){
        const users = await connection('user')
                            .select('*');

        return response.json(users);
    }
};