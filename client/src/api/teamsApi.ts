import axios from 'axios';

export const TEAM_URL = 'https://www.balldontlie.io/api/v1/teams';

export const teamsApiInstance = axios.create({
  withCredentials: true,
  baseURL: TEAM_URL,
});