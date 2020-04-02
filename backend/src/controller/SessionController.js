const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { username, password } = request.body;

        const user = await connection('user')
                    .where('username', username)
                    .where('password', password)
                    .select('fullname')
                    .first();
        
        if (!user) {
            return response.status(400).json({ error: 'Authentication failed.' });
        }

        return response.json(user);
    }
};