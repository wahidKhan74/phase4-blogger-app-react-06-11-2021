const apiURL = 'http://localhost:3001/categories';

export const getCategories = ()=> {
    return fetch(apiURL).then((response)=>{
        return response.json();
    });
};
