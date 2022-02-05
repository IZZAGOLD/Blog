const SET_POSTS = 'SET_POSTS'
const SET_IS_POSTS_LOADING = 'SET_IS_POSTS_LOADING'
const SET_IS_COMMENTS_LOADING = 'SET_IS_COMMENTS_LOADING'
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const LIMIT = 'LIMIT'
const SET_TOTAL_POSTS = 'SET_TOTAL_POSTS'
const SET_COMMENTS_POST = 'SET_COMMENTS_POST'


const initialState = {
    isPostsLoading: false,
    posts: [],
    totalPagesCount: null,
    currentPage: 1,
    limit: 10,
    totalCount: 0,
    commentsForPost: [],
    isCommentsLoading: false,
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.payload, isPostsLoading: false}
        case SET_IS_POSTS_LOADING:
            return {...state, isPostsLoading: action.payload}
        case SET_TOTAL_PAGES_COUNT:
            return {...state, totalPagesCount: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case LIMIT:
            return {...state, limit: action.payload}
        case SET_TOTAL_POSTS:
            return {...state, totalCount: action.payload}
        case SET_COMMENTS_POST:
            return {...state, commentsForPost: action.payload, isCommentsLoading: false}
        case SET_IS_COMMENTS_LOADING:
            return {...state, isCommentsLoading: action.payload}
        default:
            return state;

    }
}