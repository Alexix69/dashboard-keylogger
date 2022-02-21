import withAuthRedirect from "./withAuthRedirect";
import LoadingAuth from "../components/LoadingAuth";

// import Routes from "@/constants/routes";

/**
 * Require the user to be unauthenticated in order to render the component.
 * If the user is authenticated, forward to the given URL.
 */
export default function withoutAuth(WrappedComponent, location = "/dashboard") {
  // const from = history.location.state && history.location.state.from.pathname;

  return withAuthRedirect({
    WrappedComponent,
    expectedAuth: false,
    location /*from ||*/,
  });
}
