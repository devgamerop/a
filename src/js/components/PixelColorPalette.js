import React from "react";
import { withStyles } from "@material-ui/core";

import PixelColorPaletteItem from "../components/PixelColorPaletteItem";
import EraserIcon from "../icons/Eraser";

const styles = theme => ({
    colorPalette: {
        contain: "contents",
        padding: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "stretch",
        "& > *:not(:last-child)": {
            marginRight: 8,
            marginBottom: 8,
        },
        flexWrap: "wrap"
    },
    eraseButton: {
        marginBottom: 8,
    },
});


class PixelColorPalette extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            colors: props.colors || [],
            selected_colors:  props.selected_colors || [],
            padding: props.padding || 24,
            gap: props.gap || 0,
            size: props.size || 32,
            transparent: props.transparent || false,
            align: props.align || "center",
        };
    };

    componentWillReceiveProps(new_props) {

        const { colors, selected_colors } = this.state;
        const update = (new_props.colors.length !== colors.length || (new_props.colors.selected_colors||[])[0] !== (selected_colors||[])[0]);
        this.setState(new_props, () => {

            if(update){
                this.forceUpdate();
            }
        });
    }

    _handle_color_item_click = (event, color) => {

        if(this.props.onColorClick) {

            this.props.onColorClick(event, color);
        }
    };

    render() {

        let { classes, colors, padding, gap, size, transparent, align, selected_colors } = this.state;
        const selected_colors_set = new Set(selected_colors);

        return (
            <div className={classes.colorPalette} style={align === "center" ? {padding, gap}: align === "left" ? {justifyContent: "start", padding, gap}: {justifyContent: "start", padding, gap}}>
                <PixelColorPaletteItem style={transparent ? {}: {display: "none"}}
                                       size={40}
                                       className={classes.eraseButton}
                                       icon={<EraserIcon />}
                                       full_width={true}
                                       color={"#00000000"}
                                       selected={selected_colors_set.has("#00000000") || false}
                                       onClick={(event) => {this._handle_color_item_click(event, "#00000000")}}/>
                {colors.map((color, index) => {

                    return (<PixelColorPaletteItem key={index}
                                                  color={color}
                                                  size={size}
                                                  selected={selected_colors_set.has(color) || false}
                                                  onClick={(event) => {this._handle_color_item_click(event, color)}} />);
                })}
            </div>
        );
    }
}

export default withStyles(styles)(PixelColorPalette);
