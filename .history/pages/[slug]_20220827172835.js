import { GraphQLClient } from "graphql-request";
const graphcms = new GraphQLClient("YOUR_GRAPHCMS_ENDOINT_FROM_STEP_6");

export default function Index(props) {
  return (
    <pre>{JSON.stringify(props, null, 2)}</pre>
  )
}
