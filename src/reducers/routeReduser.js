const initState = {
    posts: [ 
        {"id": 1, "name": "Leanne Graham", "username": "Bret",  "email": "Sincere@april.biz"},
        {"id": 2, "name": "Ervin Howell", "username": "Antonette",  "email": "Shanna@melissa.tv"},
        {"id": 3, "name": "Clementine Bauch", "username": "Samantha",  "email": "Nathan@yesenia.net"}
    ],
    teamData: [
        {
            "name": "Australia",
            "continent": "Oceania",
            "population": "42 Million",
            "color": "yellow",
            "textColor": "black",
            "id": 1
        },
        {
            "name": "England",
            "continent": "Europe",
            "population": "37 Million",
            "color": "gray",    
            "textColor": "white",
            "id": 2
        },
        {
            "name": "Namibia",
            "continent": "Africa",
            "population": "14 Million",
            "color": "orange",
            "textColor": "black",
            "id": 3
        },
        {
            "name": "New Zealand",
            "continent": "Oceania",
            "population": "10 Million",
            "color": "black",
            "textColor": "white",
            "id": 4
        },
        {
            "name": "Pakistan",
            "continent": "Asia",
            "population": "232 Million",
            "color": "green",
            "textColor": "white",
            "id": 5
        },
        {
            "name": "Zimbabwe",
            "continent": "Africa",
            "population": "32 Million",
            "color": "red",
            "textColor": "white",
            "id": 6
        },
        {
            "name": "South Africa",
            "continent": "Africa",
            "population": "152 Million",
            "color": "purple",
            "textColor": "white",
            "id": 7
        },
        {
            "name": "India",
            "continent": "Asia",
            "population": "1.2 Billion",
            "color": "blue",
            "textColor": "white",
            "id": 8
        }
    ],
    //name: teamData[0].name
    selectedObj:{},
    // Select HTML Markup

    htmlMarkup : [
        {
            id: 1,
            name: 'Player Listing',
            html: 'HTML',
            css: 'CSS'
        },
        {
            id: 2,
            name: 'Filter Popup',
            html: 'HTML',
            css: 'CSS'
        },
        {
            id: 3,
            name: 'Success Popup',
            html: 'HTML',
            css: 'CSS'
        },
        {
            id: 4,
            name: 'Error Popup',
            html: 'HTML',
            css: 'CSS'
        },
    ]
}

const routeReduser = (state = initState, action) =>{
    console.log(action);
    if(action.type === "DELETE_POST"){
        let newPost = state.posts.filter(post =>{
            return action.id !== post.id
        });
        return{
            ...state,
            posts: newPost
        }
    }

    if(action.type === "SELECT_OPTION"){
        console.log("action",action);
        return{
            ...state,
            selectedObj: action.obj
        }
    }

    return state;  // step 3 then move to component
}

export default routeReduser;    