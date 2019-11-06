const initState = {
    posts: [
        { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz" },
        { "id": 2, "name": "Ervin Howell", "username": "Antonette", "email": "Shanna@melissa.tv" },
        { "id": 3, "name": "Clementine Bauch", "username": "Samantha", "email": "Nathan@yesenia.net" }
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
    selectedObj: {},
    // Select HTML Markup

    htmlMarkup: [
        {
            "id": 1,
            "name": "Player Listing",
            "html": "<h2 class=\"si-title\">Player List<\/h2><p class=\"si-para\">we are pioneer in providing consulting, developing and supporting complex IT solution<\/p>",
            "css": ".si-title:{color:\"red\"}.si-para{color:\"green\";fontSize:16px}"
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
    ],
    selectedMarkupOption: {},
    value: '',
    copied: false,
}

const routeReduser = (state = initState, action) => {
    if (action.type === "DELETE_POST") {
        let newPost = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPost
        }
    }

    if (action.type === "SELECT_OPTION") {
        return {
            ...state,
            selectedObj: action.obj
        }
    }

    if (action.type === "SELECT_MARKUP_OPTION") {
        return {
            ...state,
            selectedMarkupOption: action.object
        }
    }

   if(action.type === "COPY_TEXT"){
        // console.log("action",action);

       return{
           ...state,
           copied: action.status
       }
   }

    return state;  // step 3 then move to component
}

export default routeReduser;    