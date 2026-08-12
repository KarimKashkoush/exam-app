import type { RouteObject } from "react-router-dom";

import { AuthRoutes } from "./features/auth/routes/routes";
import { DiplomasRoute } from "./features/diploma/routes/routes";

export const routes: RouteObject[] = [
      ...AuthRoutes,
      ...DiplomasRoute,
];