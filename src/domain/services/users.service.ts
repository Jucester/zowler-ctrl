
class UsersService {

    async findAll(queryParams: any) {
        return {
            statusCode: 200,
            body: {
                message: 'Working'
            }
        }
    }
}

export default new UsersService();