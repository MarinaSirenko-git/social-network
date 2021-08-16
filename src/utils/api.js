import * as axios from "axios";

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0';
const API_KEY = '4e62e502-9bfd-4fc2-bce0-8be991c093c8'

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": API_KEY
  }
})

export const getUsers = (currentPage, pageSize) => {
  return instance.get(`${BASE_URL}/users?page=${currentPage}&count=${pageSize}`)
  .then(res => res.data)
}

export const followUserQuery = (id) => {
  return instance.post(`${BASE_URL}/follow/${id}`, {})
  .then(res => res.data)
}

export const unfollowUserQuery = (id) => {
  return instance.delete(`${BASE_URL}/follow/${id}`)
  .then(res => res.data)
}

export const tokenCheck = () => {
  return instance.get(`${BASE_URL}/auth/me`)
  .then(res => res.data)
}