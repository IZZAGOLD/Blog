import PostAPI from "../../../API/PostAPI";
import {getPageCount} from "../../../utils/pages";

const SET_POSTS = 'SET_POSTS'
const SET_IS_POSTS_LOADING = 'SET_IS_POSTS_LOADING'
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const LIMIT = 'LIMIT'
const SET_TOTAL_POSTS = 'SET_TOTAL_POSTS'
const SET_IS_COMMENTS_LOADING = 'SET_IS_COMMENTS_LOADING'
const SET_COMMENTS_POST = 'SET_COMMENTS_POST'


export const PostsActionCreators = {
    setIsPostsIsLoading: (payload) => ({type: SET_IS_POSTS_LOADING, payload}),
    setIsCommentsLoading: (payload) => ({type: SET_IS_COMMENTS_LOADING, payload}),
    setPosts: (posts) => ({type: SET_POSTS, payload: posts}),
    setComments: (comments) => ({type: SET_COMMENTS_POST, payload: comments}),
    setCurrentPage: (page) => ({type: SET_CURRENT_PAGE, payload: page}),
    setTotalPosts: (totalCount) => ({type: SET_TOTAL_POSTS, payload: totalCount}),
    setLimit: (limit) => ({type: LIMIT, payload: limit}),
    setTotalPagesCount: (count) => ({type: SET_TOTAL_PAGES_COUNT, payload: count}),
    getPosts: (limit = 10, page = 1) => async (dispatch) => {
        dispatch(PostsActionCreators.setIsPostsIsLoading(true))
        const response = await PostAPI.getAll(limit, page)
        dispatch(PostsActionCreators.setPosts(response.data))
        const totalCount = response.headers['x-total-count']
        dispatch(PostsActionCreators.setTotalPosts(totalCount))
        dispatch(PostsActionCreators.setTotalPagesCount(getPageCount(totalCount, limit)))
    },
    getComments: (id) => async (dispatch) => {
        dispatch(PostsActionCreators.setIsCommentsLoading(true))
        const response = await PostAPI.getCommentsByPostId(id)
        dispatch(PostsActionCreators.setComments(response.data))
    }
}