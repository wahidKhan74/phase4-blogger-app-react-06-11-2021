const apiURL = 'http://localhost:3001/posts';

export const getPosts = ()=> {
    return fetch(apiURL).then((response)=>{
        return response.json();
    });
}

export const addPosts = (post)=> {
    const headers = {'Content-Type':'application/json'};
    const body = JSON.stringify(post);
    return fetch(apiURL,{method:'POST',headers:headers,body:body}).then((response)=>{
        return response.json();
    });
};

export const deletePost = (id)=> {
    return fetch(`${apiURL}/${id}`,{method:'DELETE'}).then((response)=>{
        return response.json();
    });
}

export const updatePosts = (post)=> {
    const headers = {'Content-Type':'application/json'};
    const body = JSON.stringify(post);
    return fetch(apiURL,{method:'PUT',headers:headers,body:body}).then((response)=>{
        return response.json();
    });
};