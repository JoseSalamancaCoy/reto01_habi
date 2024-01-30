/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateUsers: OnCreateUsersSubscription;
  onUpdateUsers: OnUpdateUsersSubscription;
  onDeleteUsers: OnDeleteUsersSubscription;
  onCreateTasks: OnCreateTasksSubscription;
  onUpdateTasks: OnUpdateTasksSubscription;
  onDeleteTasks: OnDeleteTasksSubscription;
};

export type CreateUsersInput = {
  id?: string | null;
  name: string;
  email: string;
};

export type ModelUsersConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUsersConditionInput | null> | null;
  or?: Array<ModelUsersConditionInput | null> | null;
  not?: ModelUsersConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Users = {
  __typename: "Users";
  id: string;
  name: string;
  email: string;
  TaskCreated?: ModelTasksConnection | null;
  TaskAssigned?: ModelTasksConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelTasksConnection = {
  __typename: "ModelTasksConnection";
  items: Array<Tasks | null>;
  nextToken?: string | null;
};

export type Tasks = {
  __typename: "Tasks";
  id: string;
  title: string;
  created?: Users | null;
  assigned?: Users | null;
  createdAt: string;
  updatedAt: string;
  usersTaskCreatedId?: string | null;
  usersTaskAssignedId?: string | null;
};

export type UpdateUsersInput = {
  id: string;
  name?: string | null;
  email?: string | null;
};

export type DeleteUsersInput = {
  id: string;
};

export type CreateTasksInput = {
  id?: string | null;
  title: string;
  usersTaskCreatedId?: string | null;
  usersTaskAssignedId?: string | null;
};

export type ModelTasksConditionInput = {
  title?: ModelStringInput | null;
  and?: Array<ModelTasksConditionInput | null> | null;
  or?: Array<ModelTasksConditionInput | null> | null;
  not?: ModelTasksConditionInput | null;
  usersTaskCreatedId?: ModelIDInput | null;
  usersTaskAssignedId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateTasksInput = {
  id: string;
  title?: string | null;
  usersTaskCreatedId?: string | null;
  usersTaskAssignedId?: string | null;
};

export type DeleteTasksInput = {
  id: string;
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUsersFilterInput | null> | null;
  or?: Array<ModelUsersFilterInput | null> | null;
  not?: ModelUsersFilterInput | null;
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection";
  items: Array<Users | null>;
  nextToken?: string | null;
};

export type ModelTasksFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  and?: Array<ModelTasksFilterInput | null> | null;
  or?: Array<ModelTasksFilterInput | null> | null;
  not?: ModelTasksFilterInput | null;
  usersTaskCreatedId?: ModelIDInput | null;
  usersTaskAssignedId?: ModelIDInput | null;
};

export type ModelSubscriptionUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUsersFilterInput | null> | null;
  or?: Array<ModelSubscriptionUsersFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionTasksFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTasksFilterInput | null> | null;
  or?: Array<ModelSubscriptionTasksFilterInput | null> | null;
};

export type CreateUsersMutation = {
  __typename: "Users";
  id: string;
  name: string;
  email: string;
  TaskCreated?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  TaskAssigned?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUsersMutation = {
  __typename: "Users";
  id: string;
  name: string;
  email: string;
  TaskCreated?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  TaskAssigned?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUsersMutation = {
  __typename: "Users";
  id: string;
  name: string;
  email: string;
  TaskCreated?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  TaskAssigned?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTasksMutation = {
  __typename: "Tasks";
  id: string;
  title: string;
  created?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  assigned?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  usersTaskCreatedId?: string | null;
  usersTaskAssignedId?: string | null;
};

export type UpdateTasksMutation = {
  __typename: "Tasks";
  id: string;
  title: string;
  created?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  assigned?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  usersTaskCreatedId?: string | null;
  usersTaskAssignedId?: string | null;
};

export type DeleteTasksMutation = {
  __typename: "Tasks";
  id: string;
  title: string;
  created?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  assigned?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  usersTaskCreatedId?: string | null;
  usersTaskAssignedId?: string | null;
};

export type GetUsersQuery = {
  __typename: "Users";
  id: string;
  name: string;
  email: string;
  TaskCreated?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  TaskAssigned?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUsersConnection";
  items: Array<{
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTasksQuery = {
  __typename: "Tasks";
  id: string;
  title: string;
  created?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  assigned?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  usersTaskCreatedId?: string | null;
  usersTaskAssignedId?: string | null;
};

export type ListTasksQuery = {
  __typename: "ModelTasksConnection";
  items: Array<{
    __typename: "Tasks";
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    usersTaskCreatedId?: string | null;
    usersTaskAssignedId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateUsersSubscription = {
  __typename: "Users";
  id: string;
  name: string;
  email: string;
  TaskCreated?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  TaskAssigned?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUsersSubscription = {
  __typename: "Users";
  id: string;
  name: string;
  email: string;
  TaskCreated?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  TaskAssigned?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUsersSubscription = {
  __typename: "Users";
  id: string;
  name: string;
  email: string;
  TaskCreated?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  TaskAssigned?: {
    __typename: "ModelTasksConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTasksSubscription = {
  __typename: "Tasks";
  id: string;
  title: string;
  created?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  assigned?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  usersTaskCreatedId?: string | null;
  usersTaskAssignedId?: string | null;
};

export type OnUpdateTasksSubscription = {
  __typename: "Tasks";
  id: string;
  title: string;
  created?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  assigned?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  usersTaskCreatedId?: string | null;
  usersTaskAssignedId?: string | null;
};

export type OnDeleteTasksSubscription = {
  __typename: "Tasks";
  id: string;
  title: string;
  created?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  assigned?: {
    __typename: "Users";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  usersTaskCreatedId?: string | null;
  usersTaskAssignedId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUsers(
    input: CreateUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<CreateUsersMutation> {
    const statement = `mutation CreateUsers($input: CreateUsersInput!, $condition: ModelUsersConditionInput) {
        createUsers(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          TaskCreated {
            __typename
            nextToken
          }
          TaskAssigned {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUsersMutation>response.data.createUsers;
  }
  async UpdateUsers(
    input: UpdateUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<UpdateUsersMutation> {
    const statement = `mutation UpdateUsers($input: UpdateUsersInput!, $condition: ModelUsersConditionInput) {
        updateUsers(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          TaskCreated {
            __typename
            nextToken
          }
          TaskAssigned {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUsersMutation>response.data.updateUsers;
  }
  async DeleteUsers(
    input: DeleteUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<DeleteUsersMutation> {
    const statement = `mutation DeleteUsers($input: DeleteUsersInput!, $condition: ModelUsersConditionInput) {
        deleteUsers(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          TaskCreated {
            __typename
            nextToken
          }
          TaskAssigned {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUsersMutation>response.data.deleteUsers;
  }
  async CreateTasks(
    input: CreateTasksInput,
    condition?: ModelTasksConditionInput
  ): Promise<CreateTasksMutation> {
    const statement = `mutation CreateTasks($input: CreateTasksInput!, $condition: ModelTasksConditionInput) {
        createTasks(input: $input, condition: $condition) {
          __typename
          id
          title
          created {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          assigned {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          usersTaskCreatedId
          usersTaskAssignedId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTasksMutation>response.data.createTasks;
  }
  async UpdateTasks(
    input: UpdateTasksInput,
    condition?: ModelTasksConditionInput
  ): Promise<UpdateTasksMutation> {
    const statement = `mutation UpdateTasks($input: UpdateTasksInput!, $condition: ModelTasksConditionInput) {
        updateTasks(input: $input, condition: $condition) {
          __typename
          id
          title
          created {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          assigned {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          usersTaskCreatedId
          usersTaskAssignedId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTasksMutation>response.data.updateTasks;
  }
  async DeleteTasks(
    input: DeleteTasksInput,
    condition?: ModelTasksConditionInput
  ): Promise<DeleteTasksMutation> {
    const statement = `mutation DeleteTasks($input: DeleteTasksInput!, $condition: ModelTasksConditionInput) {
        deleteTasks(input: $input, condition: $condition) {
          __typename
          id
          title
          created {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          assigned {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          usersTaskCreatedId
          usersTaskAssignedId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTasksMutation>response.data.deleteTasks;
  }
  async GetUsers(id: string): Promise<GetUsersQuery> {
    const statement = `query GetUsers($id: ID!) {
        getUsers(id: $id) {
          __typename
          id
          name
          email
          TaskCreated {
            __typename
            nextToken
          }
          TaskAssigned {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUsersQuery>response.data.getUsers;
  }
  async ListUsers(
    filter?: ModelUsersFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUsersFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetTasks(id: string): Promise<GetTasksQuery> {
    const statement = `query GetTasks($id: ID!) {
        getTasks(id: $id) {
          __typename
          id
          title
          created {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          assigned {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          usersTaskCreatedId
          usersTaskAssignedId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTasksQuery>response.data.getTasks;
  }
  async ListTasks(
    filter?: ModelTasksFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($filter: ModelTasksFilterInput, $limit: Int, $nextToken: String) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            createdAt
            updatedAt
            usersTaskCreatedId
            usersTaskAssignedId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTasksQuery>response.data.listTasks;
  }
  OnCreateUsersListener(
    filter?: ModelSubscriptionUsersFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUsers">>
  > {
    const statement = `subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
        onCreateUsers(filter: $filter) {
          __typename
          id
          name
          email
          TaskCreated {
            __typename
            nextToken
          }
          TaskAssigned {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUsers">>
    >;
  }

  OnUpdateUsersListener(
    filter?: ModelSubscriptionUsersFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUsers">>
  > {
    const statement = `subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
        onUpdateUsers(filter: $filter) {
          __typename
          id
          name
          email
          TaskCreated {
            __typename
            nextToken
          }
          TaskAssigned {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUsers">>
    >;
  }

  OnDeleteUsersListener(
    filter?: ModelSubscriptionUsersFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUsers">>
  > {
    const statement = `subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
        onDeleteUsers(filter: $filter) {
          __typename
          id
          name
          email
          TaskCreated {
            __typename
            nextToken
          }
          TaskAssigned {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUsers">>
    >;
  }

  OnCreateTasksListener(
    filter?: ModelSubscriptionTasksFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTasks">>
  > {
    const statement = `subscription OnCreateTasks($filter: ModelSubscriptionTasksFilterInput) {
        onCreateTasks(filter: $filter) {
          __typename
          id
          title
          created {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          assigned {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          usersTaskCreatedId
          usersTaskAssignedId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTasks">>
    >;
  }

  OnUpdateTasksListener(
    filter?: ModelSubscriptionTasksFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTasks">>
  > {
    const statement = `subscription OnUpdateTasks($filter: ModelSubscriptionTasksFilterInput) {
        onUpdateTasks(filter: $filter) {
          __typename
          id
          title
          created {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          assigned {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          usersTaskCreatedId
          usersTaskAssignedId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTasks">>
    >;
  }

  OnDeleteTasksListener(
    filter?: ModelSubscriptionTasksFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTasks">>
  > {
    const statement = `subscription OnDeleteTasks($filter: ModelSubscriptionTasksFilterInput) {
        onDeleteTasks(filter: $filter) {
          __typename
          id
          title
          created {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          assigned {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          usersTaskCreatedId
          usersTaskAssignedId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTasks">>
    >;
  }
}
