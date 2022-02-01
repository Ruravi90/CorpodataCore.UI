import service from './services';

const resource = '/users';

export default{
    get() {
        return service.get(resource);
    },
}