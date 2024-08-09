import http from "../api";
import { ApiResponse } from "../types";
import { ApiPermission } from "./types";

async function getPermissions() {
  return await http.get<ApiResponse<ApiPermission[]>>("permissions");
}

export default {
  getPermissions,
};
