import axios from 'axios';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

const getProjects = () => {
    return Observable.fromPromise(axios.get('assets/projects.json'))
        .map(res => res.data);
};

const getMe = () => {
    return Observable.fromPromise(axios.get('assets/me.json'))
        .map(res => res.data);
};

export const ContentService = {
    getProjects: getProjects,
    getMe: getMe
};