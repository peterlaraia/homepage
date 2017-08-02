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

const getWorkHistory = () => {
    return Observable.fromPromise(axios.get('assets/work_history.json'))
        .map(res => res.data);
}

const getContactInfo = () => {
    return Observable.fromPromise(axios.get('assets/contact.json'))
        .map(res => res.data);
}

const getSkills = () => {
    return Observable.fromPromise(axios.get('assets/skills.json'))
        .map(res => res.data);
}

export const ContentService = {
    getProjects: getProjects,
    getMe: getMe,
    getContactInfo: getContactInfo,
    getWorkHistory: getWorkHistory,
    getSkills: getSkills
};