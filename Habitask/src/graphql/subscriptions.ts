/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../app/API.service";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUsers = /* GraphQL */ `subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
  onCreateUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUsersSubscriptionVariables,
  APITypes.OnCreateUsersSubscription
>;
export const onUpdateUsers = /* GraphQL */ `subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
  onUpdateUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUsersSubscriptionVariables,
  APITypes.OnUpdateUsersSubscription
>;
export const onDeleteUsers = /* GraphQL */ `subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
  onDeleteUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUsersSubscriptionVariables,
  APITypes.OnDeleteUsersSubscription
>;
export const onCreateTasks = /* GraphQL */ `subscription OnCreateTasks($filter: ModelSubscriptionTasksFilterInput) {
  onCreateTasks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTasksSubscriptionVariables,
  APITypes.OnCreateTasksSubscription
>;
export const onUpdateTasks = /* GraphQL */ `subscription OnUpdateTasks($filter: ModelSubscriptionTasksFilterInput) {
  onUpdateTasks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTasksSubscriptionVariables,
  APITypes.OnUpdateTasksSubscription
>;
export const onDeleteTasks = /* GraphQL */ `subscription OnDeleteTasks($filter: ModelSubscriptionTasksFilterInput) {
  onDeleteTasks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTasksSubscriptionVariables,
  APITypes.OnDeleteTasksSubscription
>;
