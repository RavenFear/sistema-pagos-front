import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Params
} from '@angular/router';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import { Injectable } from "@angular/core";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  data: any;
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

@Injectable()
export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
      const { url } = routerState;
      const { queryParams } = routerState.root;

      let state: ActivatedRouteSnapshot = routerState.root;
      while (state.firstChild) {
          state = state.firstChild;
      }
      const { params } = state;

      const { data } = state;

      return { url, queryParams, params, data };
  }
}
