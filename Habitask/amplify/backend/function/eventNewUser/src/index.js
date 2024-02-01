/* Amplify Params - DO NOT EDIT
	API_HABITASK_GRAPHQLAPIENDPOINTOUTPUT
	API_HABITASK_GRAPHQLAPIIDOUTPUT
	API_HABITASK_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */


import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = process.env.API_HABITASK_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_HABITASK_GRAPHQLAPIKEYOUTPUT;

const mutation = /* GraphQL */ `
mutation CreateUsers($input: CreateUsersInput!, $condition: ModelUsersConditionInput) {
  createUsers(input: $input, condition: $condition) {
    id
    name
    email
  }
}
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
    console.log(event);
    // Define las variables para la mutación
    const variables = {
        input: {
            id: event.request.userAttributes.sub,
            name: event.request.userAttributes.name,
            email: event.request.userAttributes.email
        }
    };
  /** @type {import('node-fetch').RequestInit} */

  const options = {
    method: 'POST',
    headers: {
        'x-api-key': GRAPHQL_API_KEY,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        query: mutation,
        variables: variables
    })
};

  const request = new Request(GRAPHQL_ENDPOINT, options);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 400;
    body = {
      errors: [
        {
          status: response.status,
          message: error.message,
          stack: error.stack
        }
      ]
    };
  }

  return event;
};