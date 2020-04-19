const connection = require('../../database/connection');

module.exports = {
    async create(request, response){
        const { description, user_type_id, allow } = request.body;

        const user_type = await connection('user_type')
                    .where('id', user_type_id)
                    .select('description')
                    .first();

        if (!user_type) {
            return response.status(400).json({ error: 'No USER TYPE found with this ID' });
        }

        const [id] = await connection('permissions')
        .insert({description, user_type_id, allow})
        
        return response.json( {id} );
    },

    async indexAll(request, response){
        var permissions = null;

        permissions = await connection('permissions')
                            .select('*');
       
        return response.json(permissions);
    },

    async delete(request, response){
        const{ id } = request.params;
        
        await connection('permissions').where('id', id).delete();

        return response.status(204).send();
    }
};