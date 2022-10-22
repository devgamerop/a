import React from "react";
import { withStyles } from "@material-ui/core";
import {ButtonBase, Tooltip, Fade} from "@material-ui/core";

import CheckBoldIcon from "../icons/CheckBold";

const styles = theme => ({
    colorPaletteItem: {
        padding: 0,
        borderRadius: 0,
        height: 40,
        width: 40
    },
});


class PixelColorPaletteItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            selected: props.selected || false,
            color: props.color || "#00000000",
            size: props.size || "inherit",
            full_width: props.full_width || false,
            icon: props.icon || null,
            style: props.style || {}
        };
    };

    componentWillReceiveProps(new_props) {

        const { selected, color, size, icon } = this.state;
        const update = (selected !== new_props.selected || color !== new_props.color || size !== new_props.size || icon !== new_props.icon);
        this.setState(new_props, () => {

            if(update) {

                this.forceUpdate();
            }
        });
    }

    render() {

        const { classes, full_width, selected, size, color, icon, style } = this.state;

        let [r, g, b, a] = new Uint8ClampedArray(Uint32Array.of(parseInt((color||"#ffffffff").slice(1), 16)).buffer).reverse();

        const is_color_dark = a > 96 && (r + g + b) * (255 - a) / 255 < 192 * 3;

        return (
            <Tooltip title={color}>
                <ButtonBase
                    onClick={this.props.onClick ? this.props.onClick: null}
                    style={{
                        background: color,
                        /*boxShadow: `inset 0px 2px 4px -1px rgb(${0} ${0} ${0} / 20%), inset 0px 4px 5px 0px rgb(${0} ${0} ${0} / 14%), inset 0px 1px 10px 0px rgb(${0} ${0} ${0} / 12%)`,*/
                        width: full_width ? "100%": size,
                        height: size,
                        ...style
                    }}
                    className={!full_width ? classes.colorPaletteItem: null}>
                    {selected ? <Fade in><CheckBoldIcon style={{color: is_color_dark ? "white": "black"}} /></Fade>: icon}
                </ButtonBase>
            </Tooltip>
        );
    }
}

export default withStyles(styles)(PixelColorPaletteItem);
