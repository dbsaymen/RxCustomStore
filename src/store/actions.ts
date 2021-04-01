export const ADD_TODO = '[TODO] ADD_TODO';
export const DELETE_TODO = '[TODO] DELETE_TODO';

export class AddTodo {
  readonly type = ADD_TODO

  constructor(private payload: any) {
  }
}
export class DeleteTodo {
  readonly type = DELETE_TODO

  constructor(private payload: any) {
  }
}
