import { Alert } from "ui";

export default function ErrorBoundary({ error }) {
  if (!error) return null;
  if (error instanceof Error)
    return (
      <Alert variant="danger">
        <pre>{error?.message}</pre>
      </Alert>
    );
  return <Alert variant="danger">Something went wrong...</Alert>;
}
