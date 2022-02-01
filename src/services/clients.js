import service from './services';

const resource = '/clients';

export default{
    get() {
        return service.get(resource);
    },
    post(data) {
        return service.post(resource, data);
    },
    put(data) {
        return service.put(resource + '/' + data.id, data);
    },
}