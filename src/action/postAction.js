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

export const handleChange = (object) =>{
    return{
        type: 'SELECT_MARKUP_OPTION',
        object
    }
}

export const copyText = (status) =>{
    return{
        type: 'COPY_TEXT',
        status: status
    }
}