import {AuthActionCreators} from "./auth/authActionCreators";
import {PostsActionCreators} from "./posts/postsActionCreators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...PostsActionCreators
}