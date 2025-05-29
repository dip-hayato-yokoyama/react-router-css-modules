import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),

    route("team/:teamId", "routes/team.tsx"),

] satisfies RouteConfig;
