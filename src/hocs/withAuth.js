import withAuthRedirect from "./withAuthRedirect";

export default function withAuth(WrappedComponent, location = "/") {
  return withAuthRedirect({
    WrappedComponent,
    expectedAuth: true,
    location,
  });
}
