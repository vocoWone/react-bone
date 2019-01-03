import Main from "./component/Main";
import {register, Handler, Listener} from "../../../core";
import {State} from "./type";
import {delay, SagaIterator} from "redux-saga";
import {call, put} from "redux-saga/effects";

const initialState: State = {
    name: "string",
};

class ActionHandler extends Handler<State> implements Listener {
    *onInitialized(): SagaIterator {
        yield call(delay, 3000);
        // yield* this.toggleWelcome(false);
    }

    *test(): SagaIterator {
        yield* this.setState({name: "voco"});
    }
}
const actions = register(new ActionHandler("resume", initialState));
export {actions, Main};
