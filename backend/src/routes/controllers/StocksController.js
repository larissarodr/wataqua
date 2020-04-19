const connection = require('../../database/connection');

module.exports = {
    async create(request, response){
        const { id , name , setup_date , from_wild , collection_date , collection_location , 
            collection_details , date_of_birth , has_parents , mom_id , dad_id , 
            responsible_user_id , relevance , comment , genotype , phenotype , number_of_males , 
            number_of_females , number_of_hermaphrodites , number_of_juveniles , has_dna_sample , 
            dna_sample_details , has_other_sample , other_sample_details , amount_founder_fish , 
            last_check_date , last_check_user_id , photo1 , photo2 } = request.body;

        /*TO-DO NEED TO ADD VALIDATION HERE for:
            mom_id, dad_id, responsible_user_id, last_check_user_id
        */

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