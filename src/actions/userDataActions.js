import axios from "axios";
import {
  GET_USER_DATA,
  GET_USER_POSTS,
  GET_ALL_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_CURRENT,
  SET_LOADING,
} from "./types";

const backendURL = "https://social-app-backend-ali.herokuapp.com/";

export const signup = async (userData) => {
    setLoading(true);
    try {
        const res = await axios({
            method: 'POST',
            url: `${backendURL}/api/users`,
            data: userData,
        });

        const token = await res.data;
        localStorage.setItem("auth-token", token);

    } catch (err) {
        console.log("Error ", err);
    }
    setLoading(false);
};

export const login = (loginData) => async dispatch => {
    setLoading(true);
    try {
        const res = await axios({
            method: 'POST',
            url: `${backendURL}/api/auth`,
            data: loginData,
        });

        const token = await res.data;
        localStorage.setItem("auth-token", token);

    } catch (err) {
        console.log(err);
    }
    setLoading(false);
}

export const getUser = () => async dispatch => {
    setLoading(true);
    try {
        const res = await axios({
            method: 'GET',
            url: `${backendURL}/api/auth`,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem("auth-token")}`
            }
        })

        const user = await res.data;

        dispatch({
            type: GET_USER_DATA,
            payload: user,
        })
    } catch (err) {
        console.log("Error ", err);
    }
    setLoading(false);
}

export const getUserPosts = (userID) => async dispatch => {
    setLoading(true);
    try {
        const res = await axios({
            method: 'GET',
            url: `${backendURL}/api/posts/${userID}`,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem("auth-token")}`
            }
        })

        const userPosts = await res.data;

        dispatch({
            type: GET_USER_POSTS,
            payload: userPosts,
        })

    } catch (err) {
        console.log("Error ", err);
    }
    setLoading(false);
}

export const getAllPosts = () => async dispatch => {
    setLoading(true);
    try {
        const res = await axios({
            method: 'GET',
            url: `${backendURL}/api/posts`,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem("auth-token")}`
            }
        })

        const allPosts = await res.data;

        dispatch({
            type: GET_ALL_POSTS,
            payload: allPosts,
        })

    } catch (err) {
        console.log("Error ", err);
    }
    setLoading(false);
}

export const addPost = postData => async dispatch => {
    setLoading(true);
    try {
        const res = await axios({
            method: 'POST',
            url: `${backendURL}/api/posts`,
            data: postData,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem("auth-token")}`
            }
        })

        const post = await res.data;

        dispatch({
            type: ADD_POST,
            payload: post,
        })
    } catch (err) {
        console.log("Error ", err);
    }
    setLoading(false);
}

export const updatePost = (id, updatedPost) => async dispatch => {
    setLoading(true);
    try {
        const res = await axios({
            method: 'PUT',
            url: `${backendURL}/api/posts/${id}`,
            data: {
                body: updatedPost.body
            },
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem("auth-token")}`
            }
        })

        const returnedUpdatedPost = await res.data;

        dispatch({
            type: UPDATE_POST,
            payload: returnedUpdatedPost,
        })
    } catch (err) {
        console.log("Error ", err);
    }
    setLoading(false);
}

export const deletePost = (id) => async dispatch => {
    setLoading(true);
    try {
        const res = await axios({
            method: 'DELETE',
            url: `${backendURL}/api/posts/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem("auth-token")}`
            }
        })

        console.log("Post has been deleted");

        dispatch({
            type: DELETE_POST,
            payload: id,
        })
    } catch (err) {
        console.log("Error ", err);
    }
    setLoading(false);
}

export const setCurrent = post => ({
    type: SET_CURRENT,
    payload: post,
})

export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
})