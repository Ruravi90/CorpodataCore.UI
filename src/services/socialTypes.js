import service from './services';

const resource = '/socialTypes';

export default{
    get() {
        return service.get(resource);
    },
}