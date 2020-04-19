const connection = require('../../database/connection');

module.exports = {
    async create(request, response){
        const { description } = request.body;

        const [id] = await connection('user_type')
        .insert({description})
        
        return response.json( {id} );
    },

    async indexByAdmin(request, response){
        var user_types = null;

        const { is_admin } = request.params;
        if(is_admin == true){
            user_types = await connection('user_type')
                            .where('description','admin')
                            .select('id');
        } else  {
            user_types = await connection('user_type')
                            .whereNot('description','admin')
                            .select('id');
        }
        

        return response.json(user_types);
    },

    async indexAll(request, response){
        var user_types = null;

        user_types = await connection('user_type')
                            .select('*');
       
        return response.json(user_types);
    },

    async delete(request, response){
        const{ id } = request.params;
        
        await connection('user_type').where('id', id).delete();

        return response.status(204).send();
    }
};