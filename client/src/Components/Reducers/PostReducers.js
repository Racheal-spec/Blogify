const PostReducers = (state=[], action) => {
console.log(action);

switch (action.type) {
    case "FETCH_BLOGS":

    return action.payload
    case "CREATE":

    return [
        ...state,
       action.payload
    ]
    default:
        return state;
}
}

export default PostReducers;