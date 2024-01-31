/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUsersInput = {
  id?: string | null,
  name: string,
  email: string,
};

export type ModelUsersConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Users = {
  __typename: "Users",
  id: string,
  name: string,
  email: string,
  TaskCreated?: ModelTasksConnection | null,
  TaskAssigned?: ModelTasksConnection | null,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelTasksConnection = {
  __typename: "ModelTasksConnection",
  items:  Array<Tasks | null >,
  nextToken?: string | null,
};

export type Tasks = {
  __typename: "Tasks",
  id: string,
  title: string,
  created?: Users,
  assigned?: Users,
  dateCreated: number,
  dateFinished: number,
  completed: boolean,
  createdAt: string,
  updatedAt: string,
  usersTaskCreatedId?: string | null,
  usersTaskAssignedId?: string | null,
};

export type UpdateUsersInput = {
  id: string,
  name?: string | null,
  email?: string | null,
};

export type DeleteUsersInput = {
  id: string,
};

export type CreateTasksInput = {
  id?: string | null,
  title: string,
  dateCreated: number,
  dateFinished: number,
  completed: boolean,
  usersTaskCreatedId?: string | null,
  usersTaskAssignedId?: string | null,
};

export type ModelTasksConditionInput = {
  title?: ModelStringInput | null,
  dateCreated?: ModelIntInput | null,
  dateFinished?: ModelIntInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelTasksConditionInput | null > | null,
  or?: Array< ModelTasksConditionInput | null > | null,
  not?: ModelTasksConditionInput | null,
  usersTaskCreatedId?: ModelIDInput | null,
  usersTaskAssignedId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTasksInput = {
  id: string,
  title?: string | null,
  dateCreated?: number | null,
  dateFinished?: number | null,
  completed?: boolean | null,
  usersTaskCreatedId?: string | null,
  usersTaskAssignedId?: string | null,
};

export type DeleteTasksInput = {
  id: string,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
};

export type ModelTasksFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  dateCreated?: ModelIntInput | null,
  dateFinished?: ModelIntInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelTasksFilterInput | null > | null,
  or?: Array< ModelTasksFilterInput | null > | null,
  not?: ModelTasksFilterInput | null,
  usersTaskCreatedId?: ModelIDInput | null,
  usersTaskAssignedId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTasksFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  dateCreated?: ModelSubscriptionIntInput | null,
  dateFinished?: ModelSubscriptionIntInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionTasksFilterInput | null > | null,
  or?: Array< ModelSubscriptionTasksFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    email: string,
    TaskCreated?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    TaskAssigned?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    email: string,
    TaskCreated?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    TaskAssigned?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    email: string,
    TaskCreated?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    TaskAssigned?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTasksMutationVariables = {
  input: CreateTasksInput,
  condition?: ModelTasksConditionInput | null,
};

export type CreateTasksMutation = {
  createTasks?:  {
    __typename: "Tasks",
    id: string,
    title: string,
    created:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    assigned:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    dateCreated: number,
    dateFinished: number,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    usersTaskCreatedId?: string | null,
    usersTaskAssignedId?: string | null,
  } | null,
};

export type UpdateTasksMutationVariables = {
  input: UpdateTasksInput,
  condition?: ModelTasksConditionInput | null,
};

export type UpdateTasksMutation = {
  updateTasks?:  {
    __typename: "Tasks",
    id: string,
    title: string,
    created:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    assigned:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    dateCreated: number,
    dateFinished: number,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    usersTaskCreatedId?: string | null,
    usersTaskAssignedId?: string | null,
  } | null,
};

export type DeleteTasksMutationVariables = {
  input: DeleteTasksInput,
  condition?: ModelTasksConditionInput | null,
};

export type DeleteTasksMutation = {
  deleteTasks?:  {
    __typename: "Tasks",
    id: string,
    title: string,
    created:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    assigned:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    dateCreated: number,
    dateFinished: number,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    usersTaskCreatedId?: string | null,
    usersTaskAssignedId?: string | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    email: string,
    TaskCreated?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    TaskAssigned?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTasksQueryVariables = {
  id: string,
};

export type GetTasksQuery = {
  getTasks?:  {
    __typename: "Tasks",
    id: string,
    title: string,
    created:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    assigned:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    dateCreated: number,
    dateFinished: number,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    usersTaskCreatedId?: string | null,
    usersTaskAssignedId?: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTasksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTasksConnection",
    items:  Array< {
      __typename: "Tasks", 
      id: string,
      title: string,
      dateCreated: number,
      dateFinished: number,
      completed: boolean,
      createdAt: string,
      updatedAt: string,
      usersTaskCreatedId?: string | null,
      usersTaskAssignedId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TasksByDateCreatedQueryVariables = {
  dateCreated: number,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTasksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TasksByDateCreatedQuery = {
  tasksByDateCreated?:  {
    __typename: "ModelTasksConnection",
    items:  Array< {
      __typename: "Tasks",
      id: string,
      title: string,
      dateCreated: number,
      dateFinished: number,
      completed: boolean,
      createdAt: string,
      updatedAt: string,
      usersTaskCreatedId?: string | null,
      usersTaskAssignedId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    email: string,
    TaskCreated?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    TaskAssigned?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    email: string,
    TaskCreated?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    TaskAssigned?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    email: string,
    TaskCreated?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    TaskAssigned?:  {
      __typename: "ModelTasksConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTasksSubscriptionVariables = {
  filter?: ModelSubscriptionTasksFilterInput | null,
};

export type OnCreateTasksSubscription = {
  onCreateTasks?:  {
    __typename: "Tasks",
    id: string,
    title: string,
    created:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    assigned:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    dateCreated: number,
    dateFinished: number,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    usersTaskCreatedId?: string | null,
    usersTaskAssignedId?: string | null,
  } | null,
};

export type OnUpdateTasksSubscriptionVariables = {
  filter?: ModelSubscriptionTasksFilterInput | null,
};

export type OnUpdateTasksSubscription = {
  onUpdateTasks?:  {
    __typename: "Tasks",
    id: string,
    title: string,
    created:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    assigned:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    dateCreated: number,
    dateFinished: number,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    usersTaskCreatedId?: string | null,
    usersTaskAssignedId?: string | null,
  } | null,
};

export type OnDeleteTasksSubscriptionVariables = {
  filter?: ModelSubscriptionTasksFilterInput | null,
};

export type OnDeleteTasksSubscription = {
  onDeleteTasks?:  {
    __typename: "Tasks",
    id: string,
    title: string,
    created:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    assigned:  {
      __typename: "Users",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    dateCreated: number,
    dateFinished: number,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
    usersTaskCreatedId?: string | null,
    usersTaskAssignedId?: string | null,
  } | null,
};
