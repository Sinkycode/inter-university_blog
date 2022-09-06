import { GraphQLClient } from "graphql-request";
const graphcms = new GraphQLClient("YOUR_GRAPHCMS_ENDOINT_FROM_STEP_6");

export default function Index(props) {
  return (
    <pre>{JSON.stringify(props, null, 2)}</pre>
  )
}

export async function getStaticPaths() {
  const { pages } = await graphcms.request(`{
        pages {
            slug
        }
    }`)

  return {
    paths: pages.map(({ slug }) => ({ params: { slug } })),
    fallback: false
  }
}
