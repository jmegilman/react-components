import { ErrorBoundary } from "react-error-boundary";

function ErrorFallbackComponent({ error }) {
  return <div>Oops, there was an error: {error.message}</div>;
}

function UserSearchErrorBoundary(props) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent} {...props} />
  );
}

export default UserSearchErrorBoundary;
