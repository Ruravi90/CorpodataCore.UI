import service from './services';

const resource = '/Admin/Authenticate';

export default{
    LogIn(user) {
        return service.post(resource + "/login", user);
    },
    Register(form) {
        return service.post(resource + '/register', form);
    },
}