import { state, action, createStore } from 'usm-redux';
import { compose } from 'redux';
import { ApkData } from '../../interfaces/models';


const composeEnhancers =
    // @ts-ignore
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Speciffy extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

export interface IStates {
    currentPage: number,
    itemsPerPage: number,
    seconds: number,
    showData: boolean,
    totalApk: number,
    sourceCode: Array<ApkData>,
    searchValue: string,
    // catSubValue: Array<any>,
    categoryValue: string,
    categorySubValue: string|null ,
    open: boolean
}

export class Controller {
    @state
    states: IStates = {
        currentPage: 1,
        itemsPerPage: 8,
        seconds: 10,
        showData: false,
        totalApk: 0,
        sourceCode: [],
        searchValue: '',
        // catSubValue: [],
        categoryValue: '',
        categorySubValue: null,
        open: false
    }

    @action
    setState(states: Partial<IStates>) {
        this.states = {
            ...this.states,
            ...states
        }
    }

}

export const controller = new Controller();

export const store = createStore(
    {
        modules: [controller],
    },
    undefined,
    {
        reduxEnhancer: composeEnhancers(),
    }
);