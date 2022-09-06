import { GraphqlClient, gql, graphql} from 'graphql'
import { GraphQLClient } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function register( req, res) {
  console.log({graphcmsToken})

  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

   const query = gql`
   mutation CreateRegister($username: String!, $email: String!, $password: String!, $slug: String!) {
     CreateRegister(data: {username: $name, email: $email, password: $password, post: {connect: {slug: $slug}}}) { id }
   }
 `;

try {
  const result = await graphQLClient.request(query, req.body)
  return res.status(200).send(result)
} catch (error) {
  console.log(error)
  return res.status(500).send(error)
}

const result = await graphQLClient.request(query, {
  username: req.body.name,
  email: req.body.email,
  password: req.body.password,
  slug: req.body.slug,
});

return res.status(200).send(result);
}
