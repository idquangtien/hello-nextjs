import api from '../core/apis';

class UserServices {
    fetchUsers = async () => {
        const { data } = await api.get('todos');
        return data;
    };
} 

export default new UserServices()