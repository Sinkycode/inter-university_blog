import { GraphqlClient, gql, graphql} from 'graphql'
import { GraphQLClient } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function register(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}` 
    }
  })
}
