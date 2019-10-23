export const deletePost = (id) =>{
    // console.log('Delete Post', id);
    return{
        type: 'DELETE_POST',
        id
    }
}

export const selectOption = (name) =>{
    // console.log('Selected Option', name);
    return{
        type: 'SELECT_OPTION',
        name
    }
}
