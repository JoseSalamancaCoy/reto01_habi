/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../app/API.service";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUsers = /* GraphQL */ `query GetUsers($id: ID!) {
  getUsers(id: $id) {
    id
    name
    email
    TaskCreated {
      nextToken
      __typename
    }
    TaskAssigned {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUsersQueryVariables, APITypes.GetUsersQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getTasks = /* GraphQL */ `query GetTasks($id: ID!) {
  getTasks(id: $id) {
    id
    title
    created {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
    assigned {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
    dateCreated
    dateFinished
    completed
    createdAt
    updatedAt
    usersTaskCreatedId
    usersTaskAssignedId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTasksQueryVariables, APITypes.GetTasksQuery>;
export const listTasks = /* GraphQL */ `query ListTasks(
  $filter: ModelTasksFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      dateCreated
      dateFinished
      completed
      createdAt
      updatedAt
      usersTaskCreatedId
      usersTaskAssignedId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTasksQueryVariables, APITypes.ListTasksQuery>;
export const listTasksV2 = `
query ListTaskV2(
  $filter: ModelTasksFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      completed
      assigned {
        name
      }
      created {
        name
      }
      id
      title
      dateCreated
      dateFinished
      usersTaskAssignedId
      usersTaskCreatedId
    }
  }
}
`as GeneratedQuery<APITypes.ListTasksQueryVariables, APITypes.ListTasksQuery>;
export const tasksByDateCreated = /* GraphQL */ `query TasksByDateCreated(
  $dateCreated: Int!
  $sortDirection: ModelSortDirection
  $filter: ModelTasksFilterInput
  $limit: Int
  $nextToken: String
) {
  tasksByDateCreated(
    dateCreated: $dateCreated
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      dateCreated
      dateFinished
      completed
      createdAt
      updatedAt
      usersTaskCreatedId
      usersTaskAssignedId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TasksByDateCreatedQueryVariables,
  APITypes.TasksByDateCreatedQuery
>;
