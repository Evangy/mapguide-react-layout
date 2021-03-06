import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App, { IAppProps } from "../containers/app";
import { ClientKind } from "../api/common";
import configureStore from "../store/configure-store";
import { INITIAL_STATE } from "../reducers/config";

/**
 * This is the entry point to the Application component
 *
 * In the browser globals context, this is accessible via MapGuide.Application
 */
export class ApplicationViewModel {
    /**
     * @hidden
     */
    constructor() {

    }
    /**
     * Mounts the map viewer application at the specified DOM element with the
     * given component props.
     *
     * For the viewer templates already provided, this method is already called
     * for you in the template's HTML. If you are creating your own viewer template, be
     * sure to call this method must on the template's HTML.
     *
     * @param {Element} node
     * @param {IAppProps} props
     *
     * @memberof ApplicationViewModel
     */
    public mount(node: Element, props: IAppProps) {
        const agentConf = {
            agentUri: props.agent.uri,
            agentKind: props.agent.kind || "mapagent"
        };
        const store = configureStore({ config: { ...INITIAL_STATE, ...agentConf } });
        ReactDOM.render(<Provider store={store}>
            <App {...props} />
        </Provider>, node);
    }
}