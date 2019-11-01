export const deletePost = (id) =>{
    // console.log('Delete Post', id);
    return{
        type: 'DELETE_POST',
        id
    }
}

export const selectOption = (obj) =>{
    return{
        type: 'SELECT_OPTION',
        obj
    }
}