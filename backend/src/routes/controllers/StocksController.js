const connection = require('../../database/connection');

module.exports = {
    async create(request, response){
        const { id , name , setup_date , from_wild , collection_date , collection_location , 
            collection_details , date_of_birth , has_parents , mom_id , dad_id , 
            responsible_user_id , relevance , comment , genotype , phenotype , number_of_males , 
            number_of_females , number_of_hermaphrodites , number_of_juveniles , has_dna_sample , 
            dna_sample_details , has_other_sample , other_sample_details , amount_founder_fish , 
            last_check_date , last_check_user_id , photo1 , photo2 } = request.body;

        //FK validation beginning
        const user = await connection('user')
                        .where('id', responsible_user_id)
                        .select('username')
                        .first();

        if (!user) {
            return response.status(400).json({ error: 'Responsible User ID: No USER found with this ID' });
        }

        if(last_check_user_id) {
            const user = await connection('user')
                            .where('id', last_check_user_id)
                            .select('username')
                            .first();
    
            if (!user) {
                return response.status(400).json({ error: 'Last Check User ID: No USER found with this ID' });
            }
        }

        if(mom_id) {
            const user = await connection('stocks')
                            .where('id', mom_id)
                            .select('name')
                            .first();
    
            if (!user) {
                return response.status(400).json({ error: 'Mom ID: No STOCK found with this ID' });
            }
        }

        if(dad_id) {
            const user = await connection('stocks')
                            .where('id', dad_id)
                            .select('name')
                            .first();
    
            if (!user) {
                return response.status(400).json({ error: 'Dad ID: No STOCK found with this ID' });
            }
        }
        //FK validation end

        await connection('stocks')
            .insert({ id , name , setup_date , from_wild , collection_date , collection_location , 
            collection_details , date_of_birth , has_parents , mom_id , dad_id , 
            responsible_user_id , relevance , comment , genotype , phenotype , number_of_males , 
            number_of_females , number_of_hermaphrodites , number_of_juveniles , has_dna_sample , 
            dna_sample_details , has_other_sample , other_sample_details , amount_founder_fish , 
            last_check_date , last_check_user_id , photo1 , photo2 })
        
        return response.json( {id} );
    },

    async indexAll(request, response){
        var stocks = null;

        stocks = await connection('stocks')
                    .select('*');
       
        return response.json(stocks);
    },

    async delete(request, response){
        const{ id } = request.params;
        
        await connection('stocks').where('id', id).delete();

        return response.status(204).send();
    }
};