/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../app/API.service";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUsers = /* GraphQL */ `mutation CreateUsers(
  $input: CreateUsersInput!
  $condition: ModelUsersConditionInput
) {
  createUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUsersMutationVariables,
  APITypes.CreateUsersMutation
>;
export const updateUsers = /* GraphQL */ `mutation UpdateUsers(
  $input: UpdateUsersInput!
  $condition: ModelUsersConditionInput
) {
  updateUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUsersMutationVariables,
  APITypes.UpdateUsersMutation
>;
export const deleteUsers = /* GraphQL */ `mutation DeleteUsers(
  $input: DeleteUsersInput!
  $condition: ModelUsersConditionInput
) {
  deleteUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUsersMutationVariables,
  APITypes.DeleteUsersMutation
>;
export const createTasks = /* GraphQL */ `mutation CreateTasks(
  $input: CreateTasksInput!
  $condition: ModelTasksConditionInput
) {
  createTasks(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTasksMutationVariables,
  APITypes.CreateTasksMutation
>;
export const updateTasks = /* GraphQL */ `mutation UpdateTasks(
  $input: UpdateTasksInput!
  $condition: ModelTasksConditionInput
) {
  updateTasks(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTasksMutationVariables,
  APITypes.UpdateTasksMutation
>;
export const deleteTasks = /* GraphQL */ `mutation DeleteTasks(
  $input: DeleteTasksInput!
  $condition: ModelTasksConditionInput
) {
  deleteTasks(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTasksMutationVariables,
  APITypes.DeleteTasksMutation
>;
