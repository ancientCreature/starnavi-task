export interface IState<TData> {
  data: TData | null;
  loading: boolean;
  error: boolean;
}
