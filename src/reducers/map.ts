import * as Constants from "../constants";
import { IMapReducerState, ActiveMapTool } from "../api/common";
import uniq = require("lodash.uniq");

export const INITIAL_STATE: IMapReducerState = {
    state: null,
    viewer: {
        busyCount: 0,
        tool: ActiveMapTool.None,
        featureTooltipsEnabled: true,
        layerGroupVisibility: {
            showLayers: [],
            showGroups: [],
            hideLayers: [],
            hideGroups: []
        }
    }
};

export function runtimeMapReducer(state = INITIAL_STATE, action = { type: '', payload: null }): IMapReducerState {
    const payload: any = typeof(action.payload) != 'undefined' ? action.payload : {};
    switch (action.type) {
        case Constants.MAP_REFRESH:
        case Constants.INIT_APP:
            {
                const state1 = { "state": payload.map };
                return { ...state, ...state1 };
            }
        case Constants.MAP_SET_ACTIVE_TOOL:
            {
                const state1 = {
                    viewer: {
                        busyCount: state.viewer.busyCount,
                        tool: payload,
                        featureTooltipsEnabled: state.viewer.featureTooltipsEnabled,
                        layerGroupVisibility: state.viewer.layerGroupVisibility 
                    }
                };
                return { ...state, ...state1 };
            }
        case Constants.MAP_SET_MAPTIP:
            {
                const state1 = {
                    viewer: {
                        busyCount: state.viewer.busyCount,
                        tool: state.viewer.tool,
                        featureTooltipsEnabled: payload,
                        layerGroupVisibility: state.viewer.layerGroupVisibility 
                    }
                };
                return { ...state, ...state1 };
            }
        case Constants.MAP_SET_BUSY_COUNT:
            {
                const state1 = {
                    viewer: {
                        busyCount: payload,
                        tool: state.viewer.tool,
                        featureTooltipsEnabled: state.viewer.featureTooltipsEnabled,
                        layerGroupVisibility: state.viewer.layerGroupVisibility
                    }
                };
                return { ...state, ...state1 };
            }
        case Constants.LEGEND_SET_GROUP_VISIBILITY:
            {
                let showGroups: string[] = state.viewer.layerGroupVisibility.showGroups;
                let hideGroups: string[] = state.viewer.layerGroupVisibility.hideGroups;
                if (payload.value === true) { //Show it
                    showGroups.push(payload.id);
                    showGroups = uniq(showGroups);
                    hideGroups = hideGroups.filter(g => g != payload.id);
                } else { //Hide it
                    hideGroups.push(payload.id);
                    hideGroups = uniq(hideGroups);
                    showGroups = showGroups.filter(g => g != payload.id);
                }
                const state1 = {
                    viewer: {
                        busyCount: state.viewer.busyCount,
                        tool: state.viewer.tool,
                        featureTooltipsEnabled: state.viewer.featureTooltipsEnabled,
                        layerGroupVisibility: {
                            showLayers: state.viewer.layerGroupVisibility.showLayers,
                            showGroups: showGroups,
                            hideLayers: state.viewer.layerGroupVisibility.hideLayers,
                            hideGroups: hideGroups
                        }
                    }
                };
                return { ...state, ...state1 };
            }
        case Constants.LEGEND_SET_LAYER_VISIBILITY:
            {
                let showLayers: string[] = state.viewer.layerGroupVisibility.showLayers;
                let hideLayers: string[] = state.viewer.layerGroupVisibility.hideLayers;
                if (payload.value === true) { //Show it
                    showLayers.push(payload.id);
                    showLayers = uniq(showLayers);
                    hideLayers = hideLayers.filter(g => g != payload.id);
                } else { //Hide it
                    hideLayers.push(payload.id);
                    hideLayers = uniq(hideLayers);
                    showLayers = showLayers.filter(g => g != payload.id);
                }
                const state1 = {
                    viewer: {
                        busyCount: state.viewer.busyCount,
                        tool: state.viewer.tool,
                        featureTooltipsEnabled: state.viewer.featureTooltipsEnabled,
                        layerGroupVisibility: {
                            showLayers: showLayers,
                            showGroups: state.viewer.layerGroupVisibility.showGroups,
                            hideLayers: hideLayers,
                            hideGroups: state.viewer.layerGroupVisibility.hideGroups
                        }
                    }
                };
                return { ...state, ...state1 };
            }
    }
    return state;
}