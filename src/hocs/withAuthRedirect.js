import { useAuth } from "../contexts/auth";
import LoadingAuth from "../components/LoadingAuth";
//import Routes from "../constants/routes";
import { useRouter } from "next/router";

/**
 * Support client-side conditional redirecting based on the user's
 * authenticated state.
 *
 * @param WrappedComponent The component that this functionality
 * will be added to.
 * @param LoadingComponent The component that will be rendered while
 * the auth state is loading.
 * @param expectedAuth Whether the user should be authenticated for
 * the component to be rendered.
 * @param location The location to redirect to.
 */
export default function withAuthRedirect({
  WrappedComponent,
  LoadingComponent = LoadingAuth,
  expectedAuth,
  location,
}) {
  // eslint-disable-next-line  react/display-name
  return (props) => {
    const { user } = useAuth();
    const router = useRouter();

    if (user === null) {
      return LoadingComponent;
    }

    const isAuthenticated = !!user;
    const shouldRedirect = expectedAuth !== isAuthenticated;

    if (shouldRedirect) {
      router.push(location);
      return null;
    }
    return <WrappedComponent {...props} />;
  };
}
