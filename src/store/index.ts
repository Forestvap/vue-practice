import Vue from 'vue';
import * as Vuex from 'vuex';
import { storeObject } from './store';

Vue.use(Vuex);

export const store = new Vuex.Store(storeObject);