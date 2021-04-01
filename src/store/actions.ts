export const ADD_TODO = '[TODO] ADD_TODO';

export class AddTodo {
  readonly type = ADD_TODO

  constructor(private payload: any) {
  }
}
