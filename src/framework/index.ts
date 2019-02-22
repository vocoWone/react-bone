import {render, register} from "./core/App";
import {Handler} from "./core/redux";
import {Listener, LocationChangedEvent} from "./core/type";
import {Exception} from "./core/Exception";
import {async} from "./components/async";

export type Listener = Listener;
export type LocationChangedEvent = LocationChangedEvent;
export {render, register, async, Handler, Exception};

const Do = {
    render,
    register,
};

export default Do;
