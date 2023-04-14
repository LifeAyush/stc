import axios from "axios";
export const BACKEND_URL = "http://localhost:5000";

export function getGroupsData() {
  return axios.get(`${BACKEND_URL}/groups`);
}

export function getTeamData() {
  return axios.get(`${BACKEND_URL}/team`);
}

export function getEventsData() {
  return axios.get(`${BACKEND_URL}/events`);
}