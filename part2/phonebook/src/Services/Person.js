import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => 
axios.get(baseUrl).then(response => response.data);

const create = (person) => 
axios.post(baseUrl, person).then(response => response.data);

const remove = (id) => 
axios.delete(`${baseUrl}/${id}`);

const update = (id, newPerson) => {
	const request = axios.put(`${baseUrl}/${id}`, newPerson);
	return request.then(response => response.data);
};

const noteService = { getAll, create, remove, update };
export default noteService;