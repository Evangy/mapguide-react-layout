import * as React from "react";
import { Collapse } from "@blueprintjs/core";
import Measure = require("react-measure");

/**
 * Accordion panel dimensions
 *
 * @export
 * @interface IAccordionPanelContentDimensions
 */
export interface IAccordionPanelContentDimensions {
    width: number;
    height: number;
}

/**
 * Describes a panel in the accordion
 *
 * @export
 * @interface IAccordionPanelSpec
 */
export interface IAccordionPanelSpec {
    id: string;
    title: string;
    contentRenderer: (dim: IAccordionPanelContentDimensions) => JSX.Element;
}

/**
 * Accordion component props
 *
 * @export
 * @interface IAccordionProps
 */
export interface IAccordionProps {
    style: React.CSSProperties;
    panels: IAccordionPanelSpec[];
    onActivePanelChanged?: (id: string) => void;
    activePanelId?: string;
}

const PANEL_HEADER_HEIGHT = 24;

/**
 * A generic, reusable Accordion component
 *
 * @export
 * @class Accordion
 * @extends {React.Component<IAccordionProps, any>}
 */
export class Accordion extends React.Component<IAccordionProps, any> {
    private fnTogglePanel: GenericEventHandler;
    constructor(props: IAccordionProps) {
        super(props);
        this.fnTogglePanel = this.onTogglePanel.bind(this);
        const activeId = this.validatePanelId(props.panels, props.activePanelId);
        this.state = {
            openPanel: activeId || props.panels[props.panels.length - 1].id
        };
    }
    private onTogglePanel(e: GenericEvent) {
        const { onActivePanelChanged } = this.props;
        const id = e.currentTarget.attributes["data-accordion-panel-id"].value;
        if (this.state.openPanel != id) {
            this.setState({ openPanel: id }, () => {
                if (onActivePanelChanged) {
                    onActivePanelChanged(id);
                }
            });
        }
    }
    private validatePanelId(panels: IAccordionPanelSpec[], id: string | undefined): string | null {
        if (!id) {
            return null;
        }
        const panel = panels.filter(p => p.id == id)[0];
        if (panel) {
            return id;
        }
        return null;
    }
    componentWillReceiveProps(nextProps: IAccordionProps) {
        if (this.props.activePanelId != nextProps.activePanelId) {
            const newId = this.validatePanelId(nextProps.panels, nextProps.activePanelId);
            if (newId) {
                this.setState({ openPanel: newId });
            }
        }
    }
    render(): JSX.Element {
        const { openPanel } = this.state;
        const { panels, style } = this.props;
        return <Measure>
            {(dim: any) => {
                return <div style={style} className="component-accordion">
                {panels.map(p => {
                    const isOpen = (p.id == openPanel);
                    return <div key={p.id} className="component-accordion-panel">
                        <div className="component-accordion-panel-header" style={{ height: PANEL_HEADER_HEIGHT }} data-accordion-panel-id={p.id} onClick={this.fnTogglePanel}>
                            <span className={`pt-icon-standard pt-icon-chevron-${isOpen ? "up" : "down"}`}></span> {p.title}
                        </div>
                        <Collapse isOpen={isOpen}>
                            {p.contentRenderer({ width: dim.width, height: (dim.height - (panels.length * PANEL_HEADER_HEIGHT)) })}
                        </Collapse>
                    </div>;
                })}
            </div>
            }}
        </Measure>;
    }
}