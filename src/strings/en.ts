export interface ILocalizedMessages {
    NONE: string;
    ERROR: string;
    WARNING: string;
    INIT_WARNINGS_FOUND: string;
    INIT_WARNING_BING_API_KEY_REQD: string;
    INIT_WARNING_BING_UNKNOWN_LAYER: string;
    INIT_WARNING_UNSUPPORTED_GOOGLE_MAPS: string;
    LAYER_TRANSPARENCY: string;
    LAYER_ID_BASE: string;
    LAYER_ID_MG_BASE: string;
    LAYER_ID_MG_SEL_OVERLAY: string;
    UNKNOWN_WIDGET: string;
    UNKNOWN_COMMAND_REFERENCE: string;
    INIT: string;
    INIT_DESC: string;
    INIT_ERROR_TITLE: string;
    INIT_ERROR_UNKNOWN_RESOURCE_TYPE: string;
    INIT_ERROR_MISSING_RESOURCE_PARAM: string;
    INIT_ERROR_UNSUPPORTED_COORD_SYS: string;
    INIT_ERROR_UNREGISTERED_EPSG_CODE: string;
    INIT_ERROR_EXPIRED_SESSION: string;
    INIT_ERROR_RESOURCE_NOT_FOUND: string;
    INIT_ERROR_NO_CONNECTION: string;
    TPL_SIDEBAR_OPEN_TASKPANE: string;
    TPL_SIDEBAR_OPEN_LEGEND: string;
    TPL_SIDEBAR_OPEN_SELECTION_PANEL: string;
    TPL_TITLE_TASKPANE: string;
    TPL_TITLE_LEGEND: string;
    TPL_TITLE_SELECTION_PANEL: string;
    TT_GO_HOME: string;
    TT_GO_BACK: string;
    TT_GO_FORWARD: string;
    SESSION_EXPIRED: string;
    SESSION_EXPIRED_DETAILED: string;
    SESSION_EXPIRED_AVAILABLE_ACTIONS: string;
    SESSION_EXPIRED_RELOAD_VIEWER: string;
    ERR_UNREGISTERED_LAYOUT: string;
    ERR_UNREGISTERED_COMPONENT: string;
    ERR_NO_COMPONENT_ID: string;
    LOADING_MSG: string;
    MENU_TASKS: string;
    NO_SELECTED_FEATURES: string;
    FMT_SCALE_DISPLAY: string;
    FMT_SELECTION_COUNT: string;
    DIGITIZE_POINT_PROMPT: string;
    DIGITIZE_LINE_PROMPT: string;
    DIGITIZE_LINESTRING_PROMPT: string;
    DIGITIZE_CIRCLE_PROMPT: string;
    DIGITIZE_RECT_PROMPT: string;
    DIGITIZE_POLYGON_PROMPT: string;
    MEASURE: string;
    MEASURING: string;
    MEASURING_MESSAGE: string;
    MEASUREMENT: string;
    MEASUREMENT_TYPE: string;
    MEASUREMENT_TYPE_LENGTH: string;
    MEASUREMENT_TYPE_AREA: string;
    MEASUREMENT_USE_GEODESIC: string;
    MEASUREMENT_CLEAR: string;
    MEASUREMENT_CONTINUE_POLYGON: string;
    MEASUREMENT_CONTINUE_LINE: string;
    MEASUREMENT_START_DRAWING: string;
    MEASUREMENT_START: string;
    MEASUREMENT_END: string;
    NAVIGATOR_PAN_EAST: string;
    NAVIGATOR_PAN_WEST: string;
    NAVIGATOR_PAN_SOUTH: string;
    NAVIGATOR_PAN_NORTH: string;
    NAVIGATOR_ZOOM_OUT: string;
    NAVIGATOR_ZOOM_IN: string;
    FMT_NAVIGATOR_ZOOM_TO_SCALE: string;
    EXTERNAL_BASE_LAYERS: string;
    SELECTION_PROPERTY: string;
    SELECTION_VALUE: string;
    SELECTION_PREV_FEATURE: string;
    SELECTION_NEXT_FEATURE: string;
    SELECTION_ZOOMTO_FEATURE: string;
    VIEWER_OPTIONS: string;
    ABOUT: string;
    HELP: string;
    QUICKPLOT_HEADER: string;
    QUICKPLOT_TITLE: string;
    QUICKPLOT_SUBTITLE: string;
    QUICKPLOT_PAPER_SIZE: string;
    QUICKPLOT_ORIENTATION: string;
    QUICKPLOT_ORIENTATION_P: string;
    QUICKPLOT_ORIENTATION_L: string;
    QUICKPLOT_SHOWELEMENTS: string;
    QUICKPLOT_SHOWLEGEND: string;
    QUICKPLOT_SHOWNORTHARROW: string;
    QUICKPLOT_SHOWCOORDINTES: string;
    QUICKPLOT_SHOWSCALEBAR: string;
    QUICKPLOT_SHOWDISCLAIMER: string;
    QUICKPLOT_ADVANCED_OPTIONS: string;
    QUICKPLOT_SCALING: string;
    QUICKPLOT_DPI: string;
    QUICKPLOT_BOX_INFO: string;
    QUICKPLOT_BOX_ROTATION: string;
    QUICKPLOT_GENERATE: string;
    QUICKPLOT_COMMERCIAL_LAYER_WARNING: string;
    FEATURE_TOOLTIPS: string;
    GEOLOCATION_SUCCESS: string;
    GEOLOCATION_WARN_OUTSIDE_MAP: string;
    GEOLOCATION_ERROR: string;
    TASK_PANE_CONTENT_FOR_INACTIVE_MAP_TITLE: string;
    TASK_PANE_CONTENT_FOR_INACTIVE_MAP_WARNING: string;
    COORDTRACKER: string;
    COORDTRACKER_NO_PROJECTIONS: string;
    MAP_SIZE_DISPLAY_UNITS: string;
    OK: string;
}

const STRINGS_EN: ILocalizedMessages = {
    "OK": "OK",
    "NONE": "NONE",
    "ERROR": "Error",
    "WARNING": "Warning",
    "INIT_WARNINGS_FOUND": "The following warnings were encountered loading the viewer",
    "INIT_WARNING_BING_API_KEY_REQD": "A Bing Maps API key is required. Sign up for an API key at http://www.bingmapsportal.com/",
    "INIT_WARNING_BING_UNKNOWN_LAYER": "Unknown bing maps layer type {type}. This layer was skipped",
    "INIT_WARNING_UNSUPPORTED_GOOGLE_MAPS": "This viewer does not support Google Maps base layers",
    "LAYER_TRANSPARENCY": "Layer Transparency",
    "LAYER_ID_BASE": "Base Layers",
    "LAYER_ID_MG_BASE": "MapGuide Map",
    "LAYER_ID_MG_SEL_OVERLAY": "MapGuide Selection Overlay",
    "UNKNOWN_WIDGET": "This button references an unknown or unsupported widget: {widget}",
    "UNKNOWN_COMMAND_REFERENCE": "This button references an unknown command or unsupported: {command}",
    "INIT": "Initializing",
    "INIT_DESC": "Please wait while the viewer is loading required assets ...",
    "INIT_ERROR_TITLE": "An error occurred during startup",
    "INIT_ERROR_UNKNOWN_RESOURCE_TYPE": "<p>Unknown or unsupported resource type for resource: <strong>{resourceId}</strong></p>",
    "INIT_ERROR_MISSING_RESOURCE_PARAM": "<p>No <strong>resource</strong> parameter found. This viewer requires this parameter to be set in the query string and must refer to a valid Web Layout or Application Definition</p>",
    "INIT_ERROR_UNSUPPORTED_COORD_SYS": "<p>The Map Definition <strong>{mapDefinition}</strong>, uses a coordinate system that does not resolve to a valid EPSG code and cannot be loaded in this viewer</p><p>Solution:</p><ul><li>Change the coordinate system of this Map Definition to one that resolves to an EPSG code</li><li>Please note: There will be a small performance overhead for server-side re-projection as a result of doing this</li></ul>",
    "INIT_ERROR_UNREGISTERED_EPSG_CODE": "<p>The Map Definition <strong>{mapDefinition}</strong>, uses a coordinate system that resolves to a valid EPSG code (<strong>EPSG:{epsg}</strong>), but no projection for this EPSG code has been registered</p><p>Solution:</p><ol><li>Search for the matching proj4js definition at <a href='http://epsg.io/'>http://epsg.io/</a></li><li>Register this projection to the viewer before mounting it</li></ol>",
    "INIT_ERROR_EXPIRED_SESSION": "<p>The session id given has expired: <strong>{sessionId}</strong></p><p>Reload the viewer without the <strong>session</strong> parameter, or supply a valid session id for the <strong>session</strong> parameter</p>",
    "INIT_ERROR_RESOURCE_NOT_FOUND": "Attempted to load the following resource, but it was not found: <strong>{resourceId}</strong>",
    "INIT_ERROR_NO_CONNECTION": "<p>There is no connection between the MapGuide Web Tier and the MapGuide Server.</p><p>Possible causes:</p><ul><li>MapGuide Server is not running or is no longer responding</li><li>Internet connection problems</li></ul><p>Possible solutions:</p><ul><li>Restart the MapGuide Server Service</li><li>Contact your server administrator</li></ul>",
    "TPL_SIDEBAR_OPEN_TASKPANE": "Open Task Pane",
    "TPL_SIDEBAR_OPEN_LEGEND": "Open Legend",
    "TPL_SIDEBAR_OPEN_SELECTION_PANEL": "Open Selection Panel",
    "TPL_TITLE_TASKPANE": "Task Pane",
    "TPL_TITLE_LEGEND": "Legend",
    "TPL_TITLE_SELECTION_PANEL": "Selection",
    "TT_GO_HOME": "Go home",
    "TT_GO_BACK": "Go back",
    "TT_GO_FORWARD": "Go forward",
    "SESSION_EXPIRED": "Session Expired",
    "SESSION_EXPIRED_DETAILED": "Your current MapGuide session has expired",
    "SESSION_EXPIRED_AVAILABLE_ACTIONS": "Available Actions:",
    "SESSION_EXPIRED_RELOAD_VIEWER": "Reload the viewer",
    "ERR_UNREGISTERED_LAYOUT": "ERROR: No layout named ({layout}) registered",
    "ERR_UNREGISTERED_COMPONENT": "ERROR: No such registered component ({componentId}). Ensure the component has been registered in the component registry with an id of: {componentId}",
    "ERR_NO_COMPONENT_ID": "No component id specified",
    "LOADING_MSG": "Loading ...",
    "MENU_TASKS": "Tasks",
    "NO_SELECTED_FEATURES": "No selected features",
    "FMT_SCALE_DISPLAY": "Scale - 1:{scale}",
    "FMT_SELECTION_COUNT": "Selected {total} features in {layerCount} layers",
    "DIGITIZE_POINT_PROMPT": "Click to finish and draw a point at this location<br/><br/>Press ESC to cancel",
    "DIGITIZE_LINE_PROMPT": "Click to set this position as the start.<br/>Click again to finish the line at this position<br/><br/>Press ESC to cancel",
    "DIGITIZE_LINESTRING_PROMPT": "Click to set this position as the start.<br/>Click again to add a vertex at this position.<br/>Hold SHIFT and drag while digitizing to draw in freehand mode<br/></br>Double click to finish<br/>Press ESC to cancel",
    "DIGITIZE_CIRCLE_PROMPT": "Click to set this position as the center.<br/>Move out to the desired radius and click again to finish<br/><br/>Press ESC to cancel",
    "DIGITIZE_RECT_PROMPT": "Click to set this position as one corner.<br/>Click again to finish and set this position as the other corner<br/><br/>Press ESC to cancel",
    "DIGITIZE_POLYGON_PROMPT": "Click to set this positon as the start.<br/>Click again to add a vertex at this position.<br/>Hold SHIFT and drag while digitizing to draw in freehand mode<br/><br/>Double click to finish and close the polygon<br/>Press ESC to cancel",
    "MEASURE": "Measure",
    "MEASURING": "Measuring",
    "MEASURING_MESSAGE": "You are currently measuring",
    "MEASUREMENT": "Measurement",
    "MEASUREMENT_TYPE": "Measurement Type",
    "MEASUREMENT_TYPE_LENGTH": "Length (LineString)",
    "MEASUREMENT_TYPE_AREA": "Area (Polygon)",
    "MEASUREMENT_USE_GEODESIC": "Use geodesic measure",
    "MEASUREMENT_CLEAR": "Clear",
    "MEASUREMENT_CONTINUE_POLYGON": "Click to continue drawing the polygon. Double-click to finish.",
    "MEASUREMENT_CONTINUE_LINE": "Click to continue drawing the line. Double-click to finish.",
    "MEASUREMENT_START_DRAWING": "Click to start drawing",
    "MEASUREMENT_START": "Start",
    "MEASUREMENT_END": "End",
    "NAVIGATOR_PAN_EAST": "Pan East",
    "NAVIGATOR_PAN_WEST": "Pan West",
    "NAVIGATOR_PAN_SOUTH": "Pan South",
    "NAVIGATOR_PAN_NORTH": "Pan North",
    "NAVIGATOR_ZOOM_OUT": "Zoom Out",
    "NAVIGATOR_ZOOM_IN": "Zoom In",
    "FMT_NAVIGATOR_ZOOM_TO_SCALE": "Zoom to 1:{scale}",
    "EXTERNAL_BASE_LAYERS": "External Base Layers",
    "SELECTION_PROPERTY": "Property",
    "SELECTION_VALUE": "Value",
    "SELECTION_PREV_FEATURE": "Previous Feature",
    "SELECTION_NEXT_FEATURE": "Next Feature",
    "SELECTION_ZOOMTO_FEATURE": "Zoom to selected feature",
    "VIEWER_OPTIONS": "Viewer Options",
    "ABOUT": "About",
    "HELP": "Help",
    "QUICKPLOT_HEADER": "Quick Plot",
    "QUICKPLOT_TITLE": "Title",
    "QUICKPLOT_SUBTITLE": "Sub-Title",
    "QUICKPLOT_PAPER_SIZE": "Paper Size",
    "QUICKPLOT_ORIENTATION": "Orientation",
    "QUICKPLOT_ORIENTATION_P": "Portrait",
    "QUICKPLOT_ORIENTATION_L": "Landscape",
    "QUICKPLOT_SHOWELEMENTS": "Show Elements",
    "QUICKPLOT_SHOWLEGEND": "Show Legend",
    "QUICKPLOT_SHOWNORTHARROW": "Show North Arrow",
    "QUICKPLOT_SHOWCOORDINTES": "Show Coordinates",
    "QUICKPLOT_SHOWSCALEBAR": "Show Scalebar",
    "QUICKPLOT_SHOWDISCLAIMER": "Show Disclaimer",
    "QUICKPLOT_ADVANCED_OPTIONS": "Advanced Options",
    "QUICKPLOT_SCALING": "Scale",
    "QUICKPLOT_DPI": "DPI",
    "QUICKPLOT_BOX_INFO": "Quick Plot Map Capture box is active. Map rotation is disabled while box is active",
    "QUICKPLOT_BOX_ROTATION": "Capture Box Rotation",
    "QUICKPLOT_GENERATE": "Generate Plot",
    "QUICKPLOT_COMMERCIAL_LAYER_WARNING": "Quick Plot will NOT include any visible commercial map layers",
    "FEATURE_TOOLTIPS": "Feature Tooltips",
    "GEOLOCATION_SUCCESS": "Zoomed to your position",
    "GEOLOCATION_WARN_OUTSIDE_MAP": "Zoomed to your position. It is outside the extents of your map",
    "GEOLOCATION_ERROR": "Geolocation error: {message} ({code})",
    "TASK_PANE_CONTENT_FOR_INACTIVE_MAP_TITLE": "Invalid Task Pane Content",
    "TASK_PANE_CONTENT_FOR_INACTIVE_MAP_WARNING": "The current task pane content is not applicable for the current active map. If the content was loaded from a command, re-run that command",
    "COORDTRACKER": "Coordinate Tracker",
    "COORDTRACKER_NO_PROJECTIONS": "You have no projections configured for this component",
    "MAP_SIZE_DISPLAY_UNITS": "Map view size display units"
};

export default STRINGS_EN;