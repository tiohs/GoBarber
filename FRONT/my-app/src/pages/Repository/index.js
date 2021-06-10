export default function Repository ({ match }) {
  return <h1>Repository { decodeURIComponent(match.params.repository )} </h1>
}