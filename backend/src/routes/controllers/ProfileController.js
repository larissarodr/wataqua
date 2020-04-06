const connection = require('../../database/connection');
const atob = require('atob');

module.exports = {
    async index(request, response){
        const userHash = request.headers.authorization;
        
        const username = atob(userHash);

        const user = await connection('user')
                            .where('username', username)
                            .select('*')
                            .first();
        if (!user){
          return response.status(401).json({ error: 'Operation not permited.' })
        }
        return response.json(user);
    }
};