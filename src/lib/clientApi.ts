import "client-only";

import { API_URL } from "@/configs/app.config";
import { Api } from "@/lib/services";

export const ClientApi = new Api({
  baseURL: API_URL,
});
