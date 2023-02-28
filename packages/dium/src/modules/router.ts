import {Filters, Finder} from "../api";

const mapping = {
    Redirect: Filters.bySource(".computedMatch", ".to"),
    Route: Filters.bySource(".computedMatch", ".location"),
    Router: Filters.byKeys("computeRootMatch"),
    Switch: Filters.bySource(".cloneElement"),
    withRouter: Filters.bySource("withRouter("),
    RouterContext: Filters.byName("Router")
};

export interface Router extends Pick<typeof import("react-router"), Exclude<keyof typeof mapping, "RouterContext">> {
    RouterContext: React.Context<any>;
}

export const Router: Router = /* @__PURE__ */ Finder.demangle(mapping, ["withRouter"]);