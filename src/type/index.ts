import Store from 'store';
import { RouteComponentProps } from 'react-router-dom';

export type TStore = {
  store?: Store,
};

export type TRouter = RouteComponentProps;

export type TPage = TStore & RouteComponentProps;
