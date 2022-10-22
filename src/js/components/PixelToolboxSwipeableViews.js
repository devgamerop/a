import React from "react";

import {
    withStyles,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    LinearProgress,
    ListItemText,
    ListSubheader,
    Typography,
    Slider,
    RadioGroup,
    Radio,
    FormLabel,
    Collapse,
    Divider,
    FormControlLabel,
    Button,
    Menu
} from "@material-ui/core";

import {HISTORY} from "../utils/constants";

import AllLayersIcon from "../icons/AllLayers";
import SelectIcon from "../icons/Select";
import ImageEffectIcon from "../icons/ImageEffect";
import ImageFilterMagicIcon from "../icons/ImageFilterMagic";
import SwipeableViews from "react-swipeable-views";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PixelColorPalette from "./PixelColorPalette";
import {ChromePicker} from "react-color";
import ImagePlusIcon from "../icons/ImagePlus";
import ImportIcon from "../icons/Import";
import DownloadIcon from "../icons/Download";
import FileDownloadIcon from "../icons/FileDownload";
import LayerSearchIcon from "../icons/LayerSearch";
import LayerOutlineIcon from "../icons/LayerOutline";
import LayerOffOutlineIcon from "../icons/LayerOffOutline";
import ImageOffOutlineIcon from "../icons/ImageOffOutline";
import ImageOutlineIcon from "../icons/ImageOutline";
import LayerEditIcon from "../icons/LayerEdit";
import LayerAddIcon from "../icons/LayerAdd";
import LayerDeleteIcon from "../icons/LayerDelete";
import ContentDuplicateIcon from "../icons/ContentDuplicate";
import MergeIcon from "../icons/Merge";
import FileImportIcon from "../icons/FileImport";
import DrawIcon from "../icons/Draw";
import ColorPickerIcon from "../icons/ColorPicker";
import PencilIcon from "../icons/Pencil";
import PencilPerfectIcon from "../icons/PencilPerfect";
import MirrorIcon from "../icons/Mirror";
import ShapesIcon from "../icons/Shapes";
import LineIcon from "../icons/Line";
import RectangleIcon from "../icons/Rectangle";
import EllipseIcon from "../icons/Ellipse";
import ContourIcon from "../icons/Contour";
import PaintIcon from "../icons/Paint";
import BucketIcon from "../icons/Bucket";
import PaletteSwatchIcon from "../icons/PaletteSwatch";
import BorderBottomIcon from "../icons/BorderBottom";
import SelectCompareIcon from "../icons/SelectCompare";
import SelectRemoveDifferenceIcon from "../icons/SelectRemoveDifference";
import SelectAddIcon from "../icons/SelectAdd";
import SelectInImageIcon from "../icons/SelectInImage";
import SelectColorIcon from "../icons/SelectColor";
import MagicIcon from "../icons/Magic";
import SquareSmallIcon from "../icons/SquareSmall";
import SelectionRectangleIcon from "../icons/SelectionRectangle";
import SelectionEllipseIcon from "../icons/SelectionEllipse";
import ImageMoveIcon from "../icons/ImageMove";
import MoveIcon from "../icons/Move";
import SelectInvertIcon from "../icons/SelectInvert";
import CopyIcon from "@material-ui/icons/FileCopy";
import CutIcon from "../icons/Cut";
import EraserIcon from "../icons/Eraser";
import CheckedIcon from "@material-ui/icons/CheckBoxOutlined";
import UncheckedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";

import TimeIcon from "@material-ui/icons/Timer";
import AlphaIcon from "../icons/Alpha";
import ColorizedIcon from "../icons/Colorized";
import ContrastCircleIcon from "../icons/ContrastCircle";
import DutoneIcon from "../icons/Dutone";
import ImageSmoothIcon from "../icons/ImageSmooth";
import ImageVignetteIcon from "../icons/ImageVignette";
import LessColorIcon from "../icons/LessColor";
import LessColorAutoIcon from "../icons/LessColorAuto";
import RotateLeftIcon from "../icons/RotateLeft";
import RotateRightIcon from "../icons/RotateRight";
import SwapHorizontalIcon from "../icons/SwapHorizontal";
import SwapVerticalIcon from "../icons/SwapVertical";

import ColorConversion from "../components/canvaspixels/utils/ColorConversion";
const color_conversion = Object.create(ColorConversion).new();

const styles = theme => ({
    listSubHeader: {
        width: "100%",
        alignSelf: "flex-start",
        boxShadow: "0px 3px 6px #050c4c4d",
        color: "#3729c1",
        fontWeight: "bold",
        backgroundColor: "#ededff",
        textTransform: "uppercase",
        "& span svg": {
            verticalAlign: "middle",
            color: "#050c4c",
            marginRight: theme.spacing(1),
            //display: "none",
        }
    },
    thanksSponsorsGhost: {
        opacity: 0,
        userSelect: "none",
        pointerEvents: "none",
        padding: "16px 24px 8px 24px",
        fontFamily: "'Jura'",
        textTransform: "uppercase",
        marginBottom: "-8px",
        marginTop: "16px",
        overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            marginBottom: "48px",
            marginTop: "36px",
        }
    },
    thanksSponsors: {
        position: "fixed",
        bottom: 0,
        padding: "16px 24px 8px 24px",
        fontFamily: "'Jura'",
        textTransform: "uppercase",
        boxShadow: "0px -2px 4px #011965",
        marginBottom: "-8px",
        marginTop: "16px",
        background: "radial-gradient(farthest-corner, #050126 40%, #001f74)",
        color: "#ddd",
        overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            marginBottom: "48px",
            marginTop: "36px",
        }
    },
    listItemIcon: {
        color: theme.palette.secondary.dark
    },
    
    menu: {
        "& .MuiList-padding": {
            padding: 0,
        },
    },
    layerThumbnail: {
        width: "128px !important",
        height: "auto",
        borderRadius: 2,
        marginRight: theme.spacing(2),
    },
    layerSelected: {
        borderRight: `4px solid ${theme.palette.primary.action}`,
        paddingRight: 12,
    },
    listOfTools: {
        paddingTop: 0
    },
    chromePicker: {
        fontFamily: "Open Sans !important",
    },
    flipExpandMoreIcon: {
        transform: "rotate(180deg)",
        transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
    },
    expandMoreIcon: {
        transform: "rotate(0deg)",
        transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
    },
    ListItemText: {
        "& .MuiTypography-colorTextSecondary": {
            color: "rgb(25 25 51 / 54%)"
        }
    },
    listItems: {
        textAlignLast: "center",
        display: "inline-flex",
        flexWrap: "wrap",
        alignContent: "stretch",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: "-20px",
        width: "100%",
        maxWidth: "100%",
        overflowX: "scroll",
        contentVisibility: "auto",
        padding: "16px 16px",
        contain: "paint style layout",
        "&.filters": {
            "& .MuiListItem-root": {
                width: 128,
                display: "inline-flex",
                height: "100%",
                contain: "paint style layout",
                margin: "8px !important",
                padding: "0px !important",
            },
            padding: "0px 8px",
            textAlignLast: "left",
        },
        "&.filters > .MuiListItem-root:hover > .MuiListItemText-root": {
            background: "linear-gradient(to top, #00000080 100%, #ffffff00)",
            opacity: "1",
            transition: "opacity, background 375ms ease-in 0ms",
        },
        "&.filters > .MuiListItem-root > .MuiListItemText-root": {
            background: "linear-gradient(to top, #00000040 75%, #ffffff00)",
            opacity: ".75",
            transition: "opacity, background 250ms ease-out 0ms",
        },
        "& .MuiFormGroup-root": {
            flexWrap: "nowrap",
            padding: "16px 0px !important",
            contain: "layout paint style",
            display: "inline-flex",
        },
        "& .MuiListItem-root": {
            display: "table",
            flexGrow: 1,
            flexBasis: "auto",
            width: "96px",
            padding: "8px !important",
            textAlign: "center",
            boxSizing: "content-box",
            contain: "paint style layout",
            "& .MuiListItemIcon-root": {
                minWidth: 0,
                contain: "paint style layout",
            },
            "& .MuiListItemText-root": {
                "& .MuiListItemText-primary": {
                    fontSize: "14px",
                },
                "& .MuiListItemText-secondary": {
                    fontSize: "10px",
                },
            }
        },
        [theme.breakpoints.down("md")]: {
            marginBottom: "-4px",
            display: "inline-flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            flexWrap: "wrap",
            overflowX: "overlay",
            width: "100%",
            maxWidth: "100%",
            flexFlow: "row",
            "& .MuiListItem-root": {
                display: "block",
                flexGrow: 1,
                flexBasis: "auto",
                width: "96px",
                textAlign: "center",
                "& .MuiListItemIcon-root": {
                    minWidth: 0,
                    contain: "paint style layout",
                },
                "& .MuiListItemText-root": {
                    "& .MuiListItemText-primary": {
                        fontSize: "14px",
                    },
                    "& .MuiListItemText-secondary": {
                        display: "none",
                    },
                }
            },
            "&.filters": {
                "& .MuiListItem-root": {
                    display: "inline-flex",
                },
            },
        },
    },
    sliderContainer: {
        display: "flex",
        overflow: "visible",
    },
    sliderLabel: {
        marginRight: theme.spacing(2),
    },
    linearProgress: {
        "& .MuiLinearProgress-barColorPrimary": {
            background: "linear-gradient(90deg, #0056ce 0%, #0056ce 100%)",
            zIndex: -1,
        },
        zIndex: 1,
        marginBottom: -2,
        height: 2,
        backgroundColor: "transparent",
        width: "100%",
        display: "flex",
        left: 0,
        bottom: 0,
        position: "absolute",
    },
});


class PixelToolboxSwipeableViews extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            canvas: props.canvas,
            is_mobile: props.is_mobile || false,
            view_names: props.view_names,
            view_name_index: props.view_name_index,
            current_color: props.current_color,
            second_color: props.second_color,
            slider_value: parseFloat(props.slider_value),
            layers: props.layers,
            layer_index: props.layer_index,
            can_undo: props.can_undo,
            can_redo: props.can_redo,
            width: props.width,
            height: props.height,
            default_width: !this.default_width ? (props.default_width || props.width || 96): 96,
            default_height: !this.default_height ? (props.default_height || props.height || 96): 96,
            is_image_import_mode: props.is_image_import_mode,
            hide_canvas_content: props.hide_canvas_content,
            show_original_image_in_background: props.show_original_image_in_background,
            show_transparent_image_in_background: props.show_transparent_image_in_background,
            tool: props.tool,
            filters: props.filters,
            select_mode: props.select_mode,
            pencil_mirror_mode: props.pencil_mirror_mode,
            is_something_selected: props.is_something_selected,
            previous_view_name_index: props.previous_view_name_index,
            hue: props.hue,
            should_update: props.should_update || false,
            _layer_opened: false,
            _anchor_el: null,
            _saturation: 60,
            _luminosity: 60,
            _opacity: 100,
            _history: HISTORY,
            too_much_colors_no_vector: false,
            import_size: props.import_size,
            import_colorize: props.import_colorize,
            filters_thumbnail: props.filters_thumbnail,
            last_filters_hash: props.last_filters_hash,
            filters_preview_progression: props.filters_preview_progression,
            _filter_aspect_ratio: "1 / 1",
            _filter_thumbnail_changed: true,
            _compressed: false,
            _vectorized: false,
        };
    };

    componentWillReceiveProps(new_props) {

        const {
            view_name_index,
            previous_view_name_index,
            view_names,
            layers,
            layer_index,
            is_image_import_mode,
            hide_canvas_content,
            show_original_image_in_background,
            show_transparent_image_in_background,
            can_undo,
            can_redo,
            current_color,
            second_color,
            slider_value,
            tool,
            width,
            height,
            last_filters_hash,
            filters_preview_progression,
            select_mode,
            pencil_mirror_mode,
            is_something_selected,
            import_size,
            import_colorize
        } = this.state;

        const _history_changed = Boolean(can_undo !== new_props.can_undo) ||  Boolean(can_redo !== new_props.can_redo);
        const must_compute_filter = Boolean(Boolean(view_name_index !== new_props.view_name_index || _history_changed) && Boolean(new_props.view_name_index === 6));

        let layers_colors_max = 0;
        Array.from(new_props.layers).forEach(function(l){ if(layers_colors_max < parseInt(l.number_of_colors)) { layers_colors_max = parseInt(l.number_of_colors);}});
        const too_much_colors_no_vector = Boolean(layers_colors_max >= 128);

        if (Boolean(new_props.should_update) && (
            too_much_colors_no_vector !== this.state.too_much_colors_no_vector,
            view_name_index !== new_props.view_name_index ||
            previous_view_name_index !== new_props.previous_view_name_index ||
            view_names !== new_props.view_names ||
            JSON.stringify(layers) !== JSON.stringify(new_props.layers) ||
            parseInt(layer_index) !== parseInt(new_props.layer_index) ||
            is_image_import_mode !== new_props.is_image_import_mode ||
            hide_canvas_content !== new_props.hide_canvas_content ||
            show_original_image_in_background !== new_props.show_original_image_in_background ||
            show_transparent_image_in_background !== new_props.show_transparent_image_in_background ||
            can_undo !== new_props.can_undo ||
            can_redo !== new_props.can_redo ||
            current_color !== new_props.current_color ||
            second_color !== new_props.second_color ||
            slider_value !== new_props.slider_value ||
            tool !== new_props.tool ||
            width !== new_props.width ||
            height !== new_props.height ||
            last_filters_hash !== new_props.last_filters_hash ||
            select_mode !== new_props.select_mode ||
            pencil_mirror_mode !== new_props.pencil_mirror_mode ||
            is_something_selected !== new_props.is_something_selected ||
            import_size !== new_props.import_size ||
            import_colorize !== new_props.import_colorize ||
           filters_preview_progression !== new_props.filters_preview_progression
        )) {

            let props_override = {last_filters_hash: this.state.last_filters_hash, too_much_colors_no_vector};

            if(must_compute_filter) {

                props_override = {last_filters_hash: last_filters_hash, too_much_colors_no_vector}
                this.compute_filters_preview();

            }else {

                if (this.state._filters_changed) {

                    let bmp;
                    let ar = "";
                    let processed = false;

                    for (let i = 0; i < new_props.filters.length; i++) {

                        bmp = new_props.filters_thumbnail[new_props.filters[i]] || {};

                        if (Boolean(bmp)) {
                            ar = `${bmp.width} / ${bmp.height}`;
                            processed = true;
                        }
                    }

                    if (ar !== this.state._filter_aspect_ratio && processed) {

                        props_override._filters_changed = false;
                        props_override._filter_aspect_ratio = ar;
                    }
                }
            }

            this.setState({...new_props, ...props_override, slider_value: parseFloat(new_props.slider_value)}, () => {
                this.forceUpdate();
            });


        }else {

            return false;
        }
    }

    compute_filters_preview = () => {

        try {
            this.setState({_filters_changed: true}, () => {

                this.state.canvas.compute_filters_preview();
            });
        } catch (e) {}
    };

    _to_filter = (name) => {

        this.state.canvas.to_filter(name, this.state.slider_value);
        if(!this.is_mobile) {
            this.compute_filters_preview();
        }
    };

    get_action_panel_names = () => {

        return ["palette", "image", "layers", "tools", "selection", "effects", "filters"];
    };

    get_before_action_panel = (index) => {

        const {
            classes,
            canvas,
            _anchor_el,
            layers,
            layer_index,
            _previous_layer_index,
            current_color,
            second_color,
            slider_value,
            width,
            height,
            _saturation,
            _luminosity,
            _opacity,
            _layer_opened,
            import_size,
            import_colorize
        } = this.state;

        let colors = [];
        for (let i = 1; i <= 128; i++) {

            colors.push(color_conversion.to_hex_from_rgba(color_conversion.to_rgba_from_hsla(Array.of((i / 128) * 360, _saturation, _luminosity, _opacity))));
        }

        const [r_1, g_1, b_1] = current_color === "#ffffff" ? [196, 196, 196] : color_conversion.to_rgba_from_hex(current_color);
        const is_current_color_dark = r_1 + g_1 + b_1 < 152 * 3;

        const [r_2, g_2, b_2] = second_color === "#ffffff" ? [196, 196, 196] : color_conversion.to_rgba_from_hex(second_color);
        const is_second_color_dark = r_2 + g_2 + b_2 < 152 * 3;

        const panel_names = this.get_action_panel_names();
        switch (panel_names[index]) {
            case "layers":
                return (
                    <div key={"layers-layers-main"} className={`swipetoolbox_i_${index}_${0}`}>
                        <ListSubheader className={classes.listSubHeader}>
                            <span><AllLayersIcon/></span>
                            <span>All layers</span>
                        </ListSubheader>
                        <div>
                            {Array.from(layers).reverse().map((layer, index, array) => {

                                const index_reverse_order = (array.length - 1) - index;
                                if (typeof layer.colors === "undefined") {
                                    return null;
                                }

                                return (
                                    <div key={index_reverse_order}>
                                        <ListItem
                                            divider
                                            className={layer_index === index_reverse_order ? classes.layerSelected : null}
                                            button
                                            onClick={() => this._change_active_layer(index_reverse_order)}>
                                            <ListItemAvatar>
                                                <canvas
                                                    className={"pixelated " + classes.layerThumbnail}
                                                    ref={(el) => {this._set_canvas_ref(el, layer.thumbnail)}}
                                                    width={layer.thumbnail.width || 0}
                                                    height={layer.thumbnail.height || 0}
                                                    style={{background: `repeating-conic-gradient(rgb(248 248 248 / 100%) 0% 25%, rgb(224 224 224 / 100%) 0% 50%) left top 50% / calc(200% / ${width}) calc(200% / ${height})`}}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText primary={layer.name}/>
                                            <ExpandMoreIcon
                                                className={_layer_opened && layer_index === index_reverse_order ? classes.flipExpandMoreIcon : classes.expandMoreIcon}/>
                                        </ListItem>
                                        {
                                            (layer_index === index_reverse_order || _previous_layer_index === index_reverse_order) &&
                                            <Collapse timeout={{appear: 250, enter: 250, exit: 250}}
                                                      in={_layer_opened && layer_index === index_reverse_order}
                                                      className={classes.layerSelected}>
                                                <div style={{padding: "12px 0px 12px 32px"}}>
                                                    <span>Colours: ({layer.colors.length}/{layer.number_of_colors})</span>
                                                    <PixelColorPalette
                                                        transparent={true}
                                                        padding="12px 0px"
                                                        size={32}
                                                        gap="8px"
                                                        colors={Array.from(layer.colors)}
                                                        selected_colors={Array.of(current_color)}
                                                        onColorClick={(event, color) => {
                                                            this._handle_current_color_change(color)
                                                        }}
                                                    />
                                                    {
                                                        layer.colors.length >= 2 ?
                                                            <div style={{padding: "12px 0px"}}>
                                                                <Button color="primary"
                                                                        onClick={() => this._less_colors_stepped(1)}>...Less
                                                                    colors</Button>
                                                            </div>
                                                            : null
                                                    }
                                                </div>
                                                <Divider style={{marginLeft: 24}}/>
                                                <div style={{padding: "12px 0px 12px 32px"}}>
                                                    <span>Actions:</span>
                                                    <div style={{padding: "12px 0px"}}>
                                                        <Button color="primary" onClick={() => {
                                                            canvas.current_layer_up()
                                                        }}>UP</Button>
                                                        <Button color="primary" onClick={() => {
                                                            canvas.current_layer_down()
                                                        }}>DOWN</Button>
                                                        <Button color="primary" onClick={() => {
                                                            canvas.toggle_layer_visibility(layer_index)
                                                        }}>{(layers[layer_index] || {}).hidden ? `SHOW` : `HIDE`}</Button>
                                                        <Button color="primary" onClick={() => {
                                                            canvas.change_layer_opacity(layer_index, slider_value)
                                                        }}>{`OPACITY: ${(layers[layer_index] || {}).opacity} -> ${slider_value}`}</Button>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            case "palette":
                return (
                    <div key={"palette-palette-main"} className={`swipetoolbox_i_${index}_${0}`}>
                        <Menu
                            className={classes.menu}
                            anchorEl={_anchor_el}
                            keepMounted
                            open={Boolean(_anchor_el)}
                            onClose={this._handle_color_menu_close}
                            style={{padding: 0}}
                        >
                            <ChromePicker className={classes.chromePicker}
                                          color={current_color}
                                          onChange={this._handle_current_color_change}
                                          disableAlpha={false}/>
                        </Menu>

                        <div style={{textAlign: "center"}}>
                            <Button variant={"contained"}
                                    style={{
                                        fontWeight: "bold",
                                        color: is_current_color_dark ? "white" : "black",
                                        boxShadow: `0px 2px 4px -1px rgb(${r_1} ${g_1} ${b_1} / 20%), 0px 4px 5px 0px rgb(${r_1} ${g_1} ${b_1} / 14%), 0px 1px 10px 0px rgb(${r_1} ${g_1} ${b_1} / 12%)`,
                                        margin: 24,
                                        boxSizing: "content-box",
                                        background: current_color,
                                        borderRadius: 4,
                                        height: 48,
                                        width: 96
                                    }}
                                    onClick={(event) => {
                                        this._handle_color_menu_open(event, current_color)
                                    }}>
                                Primary
                            </Button>
                            <Button variant={"contained"}
                                    style={{
                                        fontWeight: "bold",
                                        color: is_second_color_dark ? "white" : "black",
                                        boxShadow: `0px 2px 4px -1px rgb(${r_2} ${g_2} ${b_2} / 20%), 0px 4px 5px 0px rgb(${r_2} ${g_2} ${b_2} / 14%), 0px 1px 10px 0px rgb(${r_2} ${g_2} ${b_2} / 12%)`,
                                        margin: 24,
                                        boxSizing: "content-box",
                                        background: second_color,
                                        borderRadius: 4,
                                        height: 48,
                                        width: 96
                                    }}
                                    onClick={(event) => {
                                        this._switch_with_second_color()
                                    }}>
                                Secondary
                            </Button>
                        </div>

                        <PixelColorPalette
                            transparent={true}
                            padding="12px 16px 24px 24px"
                            gap="0px"
                            align="left"
                            colors={colors}
                            selected_colors={[current_color]}
                            onColorClick={(event, color) => {
                                this._handle_current_color_change(color)
                            }}
                        />

                        <div style={{
                            padding: "8px 24px",
                            position: "relative",
                            overflow: "visible",
                            boxSizing: "border-box",
                            width: "100%"
                        }} key={"palette-palette-secondary"} className={`swipetoolbox_i_${index}_${1}`}>
                            <div className={classes.sliderContainer}>
                                <Typography className={classes.sliderLabel} id="opacity-slider"
                                            gutterBottom>α</Typography>
                                <Slider defaultValue={_opacity} step={10} valueLabelDisplay="auto"
                                        min={0} max={100}
                                        onChangeCommitted={this._set_opacity_from_slider}
                                        aria-labelledby="opacity-slider"/>
                            </div>
                            <div className={classes.sliderContainer}>
                                <Typography className={classes.sliderLabel} id="luminosity-slider"
                                            gutterBottom>L</Typography>
                                <Slider defaultValue={_luminosity} step={10}
                                        valueLabelDisplay="auto" min={0} max={100}
                                        onChangeCommitted={this._set_luminosity_from_slider}
                                        aria-labelledby="luminosity-slider"/>
                            </div>
                            <div className={classes.sliderContainer}>
                                <Typography className={classes.sliderLabel} id="saturation-slider"
                                            gutterBottom>S</Typography>
                                <Slider defaultValue={_saturation} step={10}
                                        valueLabelDisplay="auto" min={0} max={100}
                                        onChangeCommitted={this._set_saturation_from_slider}
                                        aria-labelledby="strength-slider"/>
                            </div>
                        </div>

                    </div>
                );
            case "image":
                return (
                    <div key={"image-image-upload"} className={`swipetoolbox_i_${index}_${0}`}>
                        <ListSubheader className={classes.listSubHeader}>
                            <span><ImportIcon/></span>
                            <span>Upload</span>
                        </ListSubheader>
                        <div className={"image " + classes.listItems}>
                            <input
                                accept="image/jpg, image/jpeg, image/png, image/svg, image/webp, image/gif"
                                style={{display: "none"}}
                                id={`button-file-drawer-upload-key-${(layers[layer_index] || {}).hash}`}
                                key={`input-button-file-drawer-upload-key-${(layers[layer_index] || {}).hash}`}
                                type="file"
                                onChange={this._upload_image}
                            />
                            <ListItem component="label" button
                                      key={`list-item-button-file-drawer-upload-key-${(layers[layer_index] || {}).hash}`}
                                      htmlFor={`button-file-drawer-upload-key-${(layers[layer_index] || {}).hash}`}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <ImagePlusIcon/>
                                </ListItemIcon>
                                <ListItemText className={classes.ListItemText}
                                              primary={"Open image"} secondary={"[CTRL + O]"}/>
                            </ListItem>
                            <ListItem button onClick={() => {
                                this._upload_image_from_library()
                            }}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <ImagePlusIcon/>
                                </ListItemIcon>
                                <ListItemText className={classes.ListItemText}
                                              primary={"Library to new"} secondary={""}/>
                            </ListItem>
                        </div>
                        <div className={"image " + classes.listItems}>
                            <div style={{
                                padding: "8px 24px",
                                position: "relative",
                                overflow: "hidden",
                                boxSizing: "border-box",
                                width: "100%"
                            }}>
                                <Typography id="size-slider" gutterBottom>RESIZE NEW IMAGE TO : </Typography>
                                <Slider defaultValue={import_size} step={8} valueLabelDisplay="auto" min={0}
                                        max={import_size > 512 ? import_size : 512}
                                        onChangeCommitted={this._set_import_size}
                                        aria-labelledby="size-slider"/>
                            </div>
                        </div>
                        <FormLabel style={{padding: "24px 0px 12px 24px"}} component="legend">AI TUNING BEFORE
                            IMPORT</FormLabel>
                        <div className={"image " + classes.listItems}>
                            <RadioGroup row name="Colorize" onChange={this._set_import_colorize}
                                        value={import_colorize} style={{padding: "12px 0px", margin: "0px 11px"}}>
                                <FormControlLabel
                                    value={"0"}
                                    control={<Radio color="primary"/>}
                                    label="NONE"
                                    labelPlacement="bottom"
                                />
                                <FormControlLabel
                                    value={"1"}
                                    control={<Radio color="primary"/>}
                                    label="COLOR"
                                    labelPlacement="bottom"
                                />
                                <FormControlLabel
                                    value={"2"}
                                    control={<Radio color="primary"/>}
                                    label="SCALE"
                                    labelPlacement="bottom"
                                />
                                <FormControlLabel
                                    value={"3"}
                                    control={<Radio color="primary"/>}
                                    label="BOTH"
                                    labelPlacement="bottom"
                                />
                            </RadioGroup>
                        </div>
                    </div>
                );
        }
    };

    _set_canvas_ref = (can, bmp) => {

        if(typeof bmp === "undefined") {return}
        if(typeof bmp.width === "undefined") {return}
        if(typeof can === "undefined") {return}
        if(can === null) {return}
        if(typeof can.width === "undefined") {return}
        if(can.width === null) {return}
        let ctx = can.getContext("2d", {desynchronized: true});
        ctx.globalCompositeOperation = "copy"
        ctx.drawImage(bmp, 0, 0);
    };

    get_action_panel = (index) => {

        const {
            canvas,
            filters_thumbnail,
            last_filters_hash,
            layer_index,
            is_image_import_mode,
            hide_canvas_content,
            show_original_image_in_background,
            show_transparent_image_in_background,
            current_color,
            second_color,
            slider_value,
            tool,
            filters,
            select_mode,
            pencil_mirror_mode,
            is_something_selected,
            _filter_aspect_ratio,
            filters_preview_progression,
            too_much_colors_no_vector,
            _compressed,
            _vectorized,
        } = this.state;

        const _filters_preview_progression_stepped = Math.round(parseFloat(filters_preview_progression / 7) * 7);

        const panel_names = this.get_action_panel_names();

        switch (panel_names[index]) {
            case "palette": return [];
            case "image": return [
            {
                icon: <DownloadIcon/>,
                text: "Download pixelated",
                local_i: 1,
                label: "matrix",
                tools: [
                    {
                        icon: <FileDownloadIcon/>,
                        text: "Render (1x size)",
                        sub: "[CTRL + Q]", on_click: () => {
                            this._download_png(1)
                        }
                    },
                    {
                        icon: <FileDownloadIcon/>,
                        text: "Render (2x size)",
                        sub: "Upscale 2x",
                        on_click: () => {
                            this._download_png(2)
                        }
                    },
                    {
                        icon: <FileDownloadIcon/>,
                        text: "Render (4x size)",
                        sub: "Upscale 4x",
                        on_click: () => {
                            this._download_png(4)
                        }
                    },
                    {
                        icon: <FileDownloadIcon/>,
                        text: "Render (6x size)",
                        sub: "Upscale 6x",
                        on_click: () => {
                            this._download_png(6)
                        }
                    },
                    {
                        icon: <FileDownloadIcon/>,
                        text: "Render (8x size)",
                        sub: "Upscale 8x",
                        on_click: () => {
                            this._download_png(8)
                        }
                    },
                    {
                        icon: <FileDownloadIcon/>,
                        text: "Render (12x size)",
                        sub: "[CTRL + S]", on_click: () => {
                            this._download_png(12)
                        }
                    },
                    {
                        icon: <FileDownloadIcon/>,
                        text: "Render (16x size)",
                        sub: "Upscale 16x", on_click: () => {
                            this._download_png(16)
                        }
                    },
                    {
                        icon: <FileDownloadIcon/>,
                        text: "Render (24x size)",
                        sub: "Upscale 24x",
                        on_click: () => {
                            this._download_png(24)
                        }
                    }
                ]
            },
            {
                icon: <DownloadIcon/>,
                text: `Download enhanced${too_much_colors_no_vector ? " (Disabled)": ""}`,
                local_i: 2,
                label: "vector",
                tools: [
                    {
                        icon: <FileDownloadIcon/>,
                        text: "Omni",
                        sub: "Upscale by 8x using Omniscale",
                        disabled: too_much_colors_no_vector,
                        on_click: () => {
                            this._download_svg("omniscale", _compressed, _vectorized)
                        }
                    },
                    {
                        icon: <FileDownloadIcon/>,
                        text: "xBRZ",
                        sub: "Upscale by 6x using xBRZ",
                        disabled: too_much_colors_no_vector,
                        on_click: () => {
                            this._download_svg("xbrz", _compressed, _vectorized)
                        }
                    },
                    {
                        icon: <FileDownloadIcon/>,
                        text: "hqNx",
                        sub: "Upscale by 4x using hqNx",
                        disabled: too_much_colors_no_vector,
                        on_click: () => {
                            this._download_svg("hqnx", _compressed, _vectorized)
                        }
                    },
                    {
                        icon: <FileDownloadIcon/>,
                        text: "EPX",
                        sub: "Upscale by 4x using EPX",
                        disabled: too_much_colors_no_vector,
                        on_click: () => {
                            this._download_svg("epx", _compressed, _vectorized)
                        }
                    },
                    {
                        icon: _compressed ? <CheckedIcon/>: <UncheckedIcon/>,
                        text: "Compressed",
                        sub: "Reduce file weight",
                        disabled: false,
                        on_click: () => {
                            this._toggle_compressed()
                        }
                    },
                    {
                        icon: _vectorized ? <CheckedIcon/>: <UncheckedIcon/>,
                        text: "Vectorized",
                        sub: "Download an SVG file with it",
                        disabled: false,
                        on_click: () => {
                            this._toggle_vectorized()
                        }
                    },
                ]
            }
        ];
        case "layers": return [
            {
                icon: <LayerSearchIcon/>,
                local_i: 1,
                text: `Layer tools`,
                label: "tools",
                tools: [
                    {
                        icon: hide_canvas_content ? <LayerOutlineIcon/> : <LayerOffOutlineIcon/>,
                        text: hide_canvas_content ? "Show canvas content" : "Hide canvas content",
                        on_click: () => {
                            this._show_hide_canvas_content()
                        }
                    },
                    {
                        icon: show_original_image_in_background ? <ImageOffOutlineIcon/> : <ImageOutlineIcon/>,
                        text: show_original_image_in_background ? "Hide bg img" : "Show bg img",
                        on_click: () => {
                            this._show_hide_background_image()
                        }
                    },
                    {
                        icon: show_transparent_image_in_background ? <ImageOffOutlineIcon/> : <ImageOutlineIcon/>,
                        text: show_transparent_image_in_background ? "Hide chessboard" : "Show chessboard",
                        on_click: () => {
                            this._show_hide_transparent_image()
                        }
                    },
                ]
            },
            {
                icon: <LayerEditIcon/>,
                text: `Layer actions`,
                local_i: 2,
                label: "actions",
                tools: [
                    {
                        icon: <LayerAddIcon/>, text: "New layer", on_click: () => {
                            canvas.new_layer(layer_index)
                        }
                    },
                    {
                        icon: <LayerDeleteIcon/>, text: "Delete layer", on_click: () => {
                            canvas.delete_layer(layer_index)
                        }
                    },
                    {
                        icon: <ContentDuplicateIcon/>, text: "Duplicate layer", on_click: () => {
                            canvas.duplicate_layer(layer_index)
                        }
                    },
                    {
                        icon: <MergeIcon/>, text: "Merge down layer", on_click: () => {
                            canvas.merge_down_layer(layer_index)
                        }
                    },
                ]
            },
            {
                icon: <ImportIcon/>,
                text: "Import image",
                local_i: 3,
                label: "importing",
                tools: [
                    {
                        icon: <FileImportIcon/>, text: "Library to import", sub: "", on_click: () => {
                            this._import_image_from_libary()
                        }
                    },
                    {
                        icon: <FileImportIcon/>, text: "Import image", sub: "[CTRL + I]", for: "button-file-dialog-main", on_click: this.props.on_import_image
                    },
                    {
                        icon: <FileImportIcon/>,
                        text: "Confirm import",
                        sub: "[Enter]",
                        disabled: !is_image_import_mode,
                        on_click: () => {
                            canvas.confirm_import()
                        }
                    },
                ]
            },
        ];
        case "tools": return [
            {
                icon: <DrawIcon/>,
                text: "Drawing tools",
                label: "drawing",
                local_i: 1,
                tools: [
                    {
                        icon: <ColorPickerIcon/>,
                        disabled: tool === "PICKER",
                        text: "Picker",
                        sub: "[CTRL (HOLD)]",
                        on_click: () => {
                            this._set_tool("PICKER")
                        }
                    },
                    {
                        icon: <PencilIcon/>,
                        disabled: tool === "PENCIL",
                        text: "Pencil",
                        sub: "[P]",
                        on_click: () => {
                            this._set_tool("PENCIL")
                        }
                    },
                    {
                        icon: <PencilPerfectIcon/>,
                        disabled: tool === "PENCIL PERFECT",
                        text: "Pencil perfect",
                        sub: "[N]",
                        on_click: () => {
                            this._set_tool("PENCIL PERFECT")
                        }
                    },
                    {
                        icon: <MirrorIcon/>,
                        disabled: tool === "SET PENCIL MIRROR",
                        text: "Set pencil mirror",
                        sub: "[M]",
                        on_click: () => {
                            this._set_tool("SET PENCIL MIRROR")
                        }
                    },
                    {
                        icon: <MoveIcon/>,
                        disabled: tool === "MOVE",
                        text: "Move",
                        sub: "Middle mouse click moves it too...",
                        on_click: () => {
                            this._set_tool("MOVE")
                        }
                    },
                ]
            },
            {
                icon: <ShapesIcon/>,
                text: "Shapes tools",
                label: "shapes",
                local_i: 2,
                tools: [
                    {
                        icon: <LineIcon/>, disabled: tool === "LINE", text: "Line", sub: "[L]", on_click: () => {
                            this._set_tool("LINE")
                        }
                    },
                    {
                        icon: <RectangleIcon/>,
                        disabled: tool === "RECTANGLE",
                        text: "Rectangle",
                        sub: "[R]",
                        on_click: () => {
                            this._set_tool("RECTANGLE")
                        }
                    },
                    {
                        icon: <EllipseIcon/>,
                        disabled: tool === "ELLIPSE",
                        text: "Ellipse",
                        sub: "[E]",
                        on_click: () => {
                            this._set_tool("ELLIPSE")
                        }
                    },
                    {
                        icon: <ContourIcon/>,
                        disabled: tool === "CONTOUR",
                        text: "Free path",
                        sub: "[F]",
                        on_click: () => {
                            this._set_tool("CONTOUR")
                        }
                    },
                ]
            },
            {
                icon: <PaintIcon/>,
                text: "Paint tools",
                label: "basic",
                local_i: 3,
                tools: [
                    {
                        icon: <BucketIcon/>,
                        disabled: tool === "BUCKET",
                        text: "Bucket",
                        sub: "[B]",
                        on_click: () => {
                            this._set_tool("BUCKET")
                        }
                    },
                    {
                        icon: <BucketIcon/>,
                        disabled: tool === "HUE BUCKET",
                        text: "Hue bucket",
                        sub: "[H]",
                        on_click: () => {
                            this._set_tool("HUE BUCKET")
                        }
                    },
                    {
                        icon: <PaletteSwatchIcon/>,
                        disabled: tool === "EXCHANGE",
                        text: "Exchange",
                        sub: "[X]",
                        on_click: () => {
                            this._set_tool("EXCHANGE")
                        }
                    },
                    {
                        icon: <BorderBottomIcon/>,
                        disabled: tool === "BORDER",
                        text: "Border",
                        sub: "[U]",
                        on_click: () => {
                            this._set_tool("BORDER")
                        }
                    },
                ]
            },
            {
                icon: <MirrorIcon/>,
                text: "Set pencil mirrors",
                label: "mirror",
                local_i: 4,
                tools: [
                    {
                        icon: <MirrorIcon/>,
                        disabled: pencil_mirror_mode === "NONE",
                        text: "None",
                        on_click: () => {
                            this._set_pencil_mirror_mode("NONE")
                        }
                    },
                    {
                        icon: <MirrorIcon/>,
                        disabled: pencil_mirror_mode === "VERTICAL",
                        text: "Vertical",
                        on_click: () => {
                            this._set_pencil_mirror_mode("VERTICAL")
                        }
                    },
                    {
                        icon: <MirrorIcon/>,
                        disabled: pencil_mirror_mode === "HORIZONTAL",
                        text: "Horizontal",
                        on_click: () => {
                            this._set_pencil_mirror_mode("HORIZONTAL")
                        }
                    },
                    {
                        icon: <MirrorIcon/>,
                        disabled: pencil_mirror_mode === "BOTH",
                        text: "Both",
                        on_click: () => {
                            this._set_pencil_mirror_mode("BOTH")
                        }
                    },
                ]
            },
        ];
        case "selection": return [
            {
                icon: <SelectCompareIcon/>,
                text: "Select mode",
                local_i: 0,
                label: "mode",
                tools: [
                    {
                        icon: <SelectRemoveDifferenceIcon/>,
                        disabled: select_mode === "REMOVE",
                        text: "Select remove",
                        sub: "[CTRL (HOLD)]",
                        on_click: () => {
                            this._set_select_mode("REMOVE")
                        }
                    },
                    {
                        icon: <SelectAddIcon/>,
                        disabled: select_mode === "ADD",
                        text: "Select add",
                        sub: "[SHIFT (HOLD)]",
                        on_click: () => {
                            this._set_select_mode("ADD")
                        }
                    },
                    {
                        icon: <SelectIcon/>,
                        disabled: select_mode === "REPLACE",
                        text: "Select replace",
                        on_click: () => {
                            this._set_select_mode("REPLACE")
                        }
                    },
                ]
            },
            {
                icon: <SelectInImageIcon/>,
                text: "Select tool",
                label: "selecting",
                local_i: 1,
                tools: [
                    {
                        icon: <SelectIcon/>,
                        disabled: tool === "SELECT PATH",
                        text: "Select path",
                        sub: "[CTRL + F]",
                        on_click: () => {
                            this._set_tool("SELECT PATH")
                        }
                    },
                    {
                        icon: <SelectColorIcon/>,
                        disabled: tool === "SELECT COLOR",
                        text: "Select color",
                        sub: "[CTRL + G]",
                        on_click: () => {
                            this._set_tool("SELECT COLOR")
                        }
                    },
                    {
                        icon: <MagicIcon/>,
                        disabled: tool === "SELECT COLOR THRESHOLD",
                        text: "Select color threshold",
                        sub: "[CTRL + K]",
                        on_click: () => {
                            this._set_tool("SELECT COLOR THRESHOLD")
                        }
                    },
                    {
                        icon: <SquareSmallIcon/>,
                        disabled: tool === "SELECT PIXEL",
                        text: "Select pixel",
                        sub: "[CTRL + P]",
                        on_click: () => {
                            this._set_tool("SELECT PIXEL")
                        }
                    },
                    {
                        icon: <SquareSmallIcon/>,
                        disabled: tool === "SELECT PIXEL PERFECT",
                        text: "Select pixel perfect",
                        sub: "[CTRL + N]",
                        on_click: () => {
                            this._set_tool("SELECT PIXEL PERFECT")
                        }
                    },
                    {
                        icon: <SelectIcon/>,
                        disabled: tool === "SELECT LINE",
                        text: "Select line",
                        sub: "[CTRL + L]",
                        on_click: () => {
                            this._set_tool("SELECT LINE")
                        }
                    },
                    {
                        icon: <SelectionRectangleIcon/>,
                        disabled: tool === "SELECT RECTANGLE",
                        text: "Select rectangle",
                        sub: "[CTRL + R]",
                        on_click: () => {
                            this._set_tool("SELECT RECTANGLE")
                        }
                    },
                    {
                        icon: <SelectionEllipseIcon/>,
                        disabled: tool === "SELECT ELLIPSE",
                        text: "Select ellipse",
                        sub: "[CTRL + E]",
                        on_click: () => {
                            this._set_tool("SELECT ELLIPSE")
                        }
                    },
                ]
            },
            {
                icon: <ImageMoveIcon/>,
                text: "Apply to selection",
                label: "applying",
                local_i: 2,
                tools: [
                    {
                        icon: <SelectInImageIcon/>,
                        disabled: !is_something_selected,
                        text: "Shrink",
                        on_click: () => {
                            canvas.to_selection_size(-1)
                        }
                    },
                    {
                        icon: <SelectInImageIcon/>,
                        disabled: !is_something_selected,
                        text: "Grow",
                        on_click: () => {
                            canvas.to_selection_size(1)
                        }
                    },
                    {
                        icon: <BorderBottomIcon/>,
                        disabled: !is_something_selected,
                        text: "Border",
                        on_click: () => {
                            canvas.to_selection_border()
                        }
                    },
                    {
                        icon: <BucketIcon/>, disabled: !is_something_selected, text: "Bucket", on_click: () => {
                            canvas.to_selection_bucket()
                        }
                    },
                    {
                        icon: <SelectInImageIcon/>,
                        disabled: !is_something_selected,
                        text: "Crop",
                        on_click: () => {
                            canvas.to_selection_crop()
                        }
                    },
                    {
                        icon: <SelectInvertIcon/>,
                        disabled: !is_something_selected,
                        text: "Invert",
                        on_click: () => {
                            canvas.to_selection_invert()
                        }
                    },
                    {
                        icon: <SelectRemoveDifferenceIcon/>,
                        disabled: !is_something_selected,
                        text: "Unselect",
                        on_click: () => {
                            canvas.to_selection_none()
                        }
                    },
                    {
                        icon: <CopyIcon/>, disabled: !is_something_selected, text: "Copy", on_click: () => {
                            canvas.copy_selection()
                        }
                    },
                    {
                        icon: <CutIcon/>, disabled: !is_something_selected, text: "Cut", on_click: () => {
                            canvas.cut_selection()
                        }
                    },
                    {
                        icon: <EraserIcon/>, disabled: !is_something_selected, text: "Erase", on_click: () => {
                            canvas.erase_selection()
                        }
                    },
                    {
                        icon: <BucketIcon/>,
                        disabled: !is_something_selected,
                        text: "Colorize dynamical",
                        on_click: () => {
                            canvas.to_selection_changes(current_color, false)
                        }
                    },
                    {
                        icon: <SelectColorIcon/>,
                        disabled: !is_something_selected,
                        text: "Get average color",
                        on_click: () => {
                            this._get_average_color_of_selection()
                        }
                    },
                ]
            },
        ];
        case "effects": return [
            {
                icon: <ImageEffectIcon/>,
                text: "Effects",
                label: "primary",
                local_i: 0,
                tools: [
                    {
                        icon: <ImageSmoothIcon/>, text: "Smooth", sub: "Run smooth effect once", on_click: () => {
                            canvas.smooth_adjust(1);
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <ContrastCircleIcon/>,
                        text: "To auto contrast",
                        sub: "Effect strength have an impact",
                        on_click: () => {
                            canvas.auto_adjust_contrast(slider_value);
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <ContrastCircleIcon/>,
                        text: "To auto saturation",
                        sub: "Effect strength have an impact",
                        on_click: () => {
                            canvas.auto_adjust_saturation(slider_value);
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <ImageVignetteIcon/>,
                        text: "To vignette",
                        sub: "Current color and effect strength have an impact",
                        on_click: () => {
                            canvas.to_vignette(current_color, slider_value);
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <LessColorIcon/>,
                        text: "Less colors by strength",
                        sub: "Effect strength have an impact",
                        on_click: () => {
                            canvas.to_less_color(slider_value / 5);
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <LessColorIcon/>,
                        text: "Less colors by small steps",
                        sub: "Remove colors slowly",
                        on_click: () => {
                            this._less_colors_stepped();
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <LessColorAutoIcon/>,
                        text: "Less colors auto",
                        sub: "Apply to current layer",
                        on_click: () => {
                            canvas.to_less_color("auto");
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <DutoneIcon/>,
                        text: "To dutone",
                        sub: "Current color and effect strength have an impact",
                        on_click: () => {
                            canvas.to_dutone(slider_value, second_color, current_color);
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <ColorizedIcon/>,
                        text: "To colorized",
                        sub: "Current color and effect strength have an impact",
                        on_click: () => {
                            this._colorize();
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <AlphaIcon/>,
                        text: "To alpha",
                        sub: "Current color and effect strength have an impact",
                        on_click: () => {
                            canvas.to_alpha(current_color, slider_value);
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <SwapVerticalIcon/>,
                        text: "Mirror vertical",
                        sub: "Apply to current layer",
                        on_click: () => {
                            canvas.to_mirror(false);
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <SwapHorizontalIcon/>,
                        text: "Mirror horizontal",
                        sub: "Apply to current layer",
                        on_click: () => {
                            canvas.to_mirror(true);
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <RotateRightIcon/>, text: "Rotate 90°", sub: "Apply to all layers", on_click: () => {
                            canvas.to_rotation(true);
                            this._handle_action_close();
                        }
                    },
                    {
                        icon: <RotateLeftIcon/>, text: "Rotate - 90°", sub: "Apply to all layers", on_click: () => {
                            canvas.to_rotation(false);
                            this._handle_action_close();
                        }
                    }
                ]
            }
        ];
        case "filters":
            const {height, width} = filters_thumbnail.get(filters[0]) || new Object();
            return [
                {
                    icon: <ImageFilterMagicIcon/>,
                    progression: _filters_preview_progression_stepped,
                    text: `Filters`,
                    style: {position: "relative"},
                    label: "primary",
                    local_i: 0,
                    sub: "The strength selected matters meanwhile preview are only shown at 100% intensity. To cancel any operation, use 'undo'.",
                    tools: filters.map((name, name_index) => {


                        const bmp = filters_thumbnail.get(name) || new Object();
                        return {
                            style: {position: "relative", width: "100%", height: "100%" },
                            icon: <canvas
                                className={"pixelated"}
                                ref={(el) => {this._set_canvas_ref(el, bmp)}}
                                width={width | 0}
                                height={height | 0}
                                style={{ zIndex: "-1", aspectRatio: _filter_aspect_ratio, boxSizing: "border-box", height: "100%", minWidth: "100%", width: 128, boxShadow: "0px 1px 2px #3729c1a8", border: "4px solid #020529", borderRadius: 2, contain: "paint style size"}}
                                key={"name-" + name + "-ratio-" + _filter_aspect_ratio + "-over-" + (bmp.width || 0).toString() + "x" + (bmp.height || 0).toString() + "-preview-hash-" + last_filters_hash}
                                />,
                            text: name,
                            text_style: {
                                flex: "1 1",
                                bottom: 16,
                                left: 8,
                                width: "100%",
                                right: 24,
                                color: "white",
                                padding: 8,
                                borderBottomLeftRadius: "4px",
                                borderBottomRightRadius: "4px",
                                textAlign: "initial",
                                zIndex: 1,
                                wordBreak: "break-word",
                                position: "absolute",
                                margin: "-16px -12px -12px -8px",
                                boxSizing: "border-box",
                            },
                            on_click: () => {
                                this._to_filter(name);
                                this._handle_action_close();
                            }
                        };
                    })
                },
            ];
            default: return [];
        }
    };

    get_after_action_panel = (index) => {

        const {
            classes,
            width,
            height
        } = this.state;

        const panel_names = this.get_action_panel_names();

        switch (panel_names[index]) {
            case "image": return (
                <div key={"image-image-create"} className={`swipetoolbox_i_${index}_${3}`}>
                    <ListSubheader className={classes.listSubHeader}>
                        <span><ImagePlusIcon/></span>
                        <span>Create new</span>
                    </ListSubheader>
                    <div style={{
                        padding: "8px 24px",
                        position: "relative",
                        overflow: "hidden",
                        boxSizing: "border-box",
                        width: "100%"
                    }}>
                        <Typography id="width-slider" gutterBottom>Width</Typography>
                        <Slider value={width} step={8} valueLabelDisplay="auto" min={0}
                                max={width > 512 ? width : 512}
                                onChangeCommitted={this._set_width_from_slider}
                                aria-labelledby="width-slider"/>
                        <Typography id="height-slider" gutterBottom>Height</Typography>
                        <Slider value={height} step={8} valueLabelDisplay="auto" min={0}
                                max={height > 512 ? height : 512}
                                onChangeCommitted={this._set_height_from_slider}
                                aria-labelledby="height-slider"/>
                    </div>
                </div>
            );
        }
    };

    _rgba_from_hex = (hex) => {

        const { get_rgba_from_hex } = this.state.canvas;

        if(!Boolean(get_rgba_from_hex)) { return [0, 0, 0, 0] }

        return get_rgba_from_hex(hex);
    };

    _download_png = (scale) => {

        if(this.props.on_download_image) {

            this.props.on_download_image(scale);
        }
    };

    _toggle_compressed = () => {

        this.setState({_compressed: !this.state._compressed}, () => {

            this.forceUpdate();
        });
    }

    _toggle_vectorized = () => {

        this.setState({_vectorized: !this.state._vectorized}, () => {

            this.forceUpdate();
        });
    }

    _download_svg = (using = "xbrz", optimize_render_size = false, download_svg = false) => {

        if(this.props.on_download_svg) {

            this.props.on_download_svg(using, optimize_render_size, download_svg);
        }
    };

    _less_colors_stepped = (increase = 1) => {

        const { _less_colors_stepped } = this.state.canvas;
        _less_colors_stepped(increase)
    };

    _colorize = () => {

        const { current_color, slider_value } = this.state;
        const { to_color } = this.state.canvas;

        const [h, s, l, o] = color_conversion.to_hsla_from_rgba(color_conversion.to_rgba_from_hex(current_color));

        to_color(h, slider_value, s === 0 ? null: s, l === 0 ? null: l);
    }

    _import_image_from_libary = () => {

        if(this.props.on_import_image_library) {

            this.props.on_import_image_library();
        }
    };

    _upload_image = (event) => {

        if(this.props.on_upload_image) {

            this.props.on_upload_image(event);
        }
    };

    _upload_image_from_library = () => {

        if(this.props.on_upload_image_library) {

            this.props.on_upload_image_library();
        }
    };

    _handle_current_color_change = (color) => {

        if(this.props.on_current_color_change) {

            this.props.on_current_color_change(color);
        }
    };

    _handle_view_name_change = (view_name_index, previous_name_index = null) => {

        if(this.props.on_view_name_change) {

            this.props.on_view_name_change(view_name_index, previous_name_index);
        }
    };

    _handle_color_menu_open = (event) => {

        this.setState({_anchor_el: event.currentTarget}, () => {

            this.forceUpdate();
        });
    };

    _handle_color_menu_close = () => {

        this.setState({_anchor_el: null}, () => {

            this.forceUpdate();
        });
    };

    _set_saturation_from_slider = (event, value) => {

        this.setState({_saturation: value}, () => {

            this.forceUpdate();
        });
    };

    _set_luminosity_from_slider = (event, value) => {

        this.setState({_luminosity: value}, () => {

            this.forceUpdate();
        });
    };

    _set_opacity_from_slider = (event, value) => {

        this.setState({_opacity: value}, () => {

            this.forceUpdate();
        });
    };

    _set_tool = (name) => {

        if(this.props.set_tool) {

            this.props.set_tool(name);
        }
    }

    _set_select_mode = (mode) => {

        if(this.props.set_select_mode) {

            this.props.set_select_mode(mode);
        }
    }

    _set_pencil_mirror_mode = (mode) => {

        if(this.props.set_pencil_mirror_mode) {

            this.props.set_pencil_mirror_mode(mode);
        }
    }

    _switch_with_second_color = () => {

        if(this.props.switch_with_second_color) {

            this.props.switch_with_second_color();
        }
    };

    _show_hide_canvas_content = () => {

        if(this.props.show_hide_canvas_content) {

            this.props.show_hide_canvas_content();
        }
    }

    _show_hide_background_image = () => {

        if(this.props.show_hide_background_image) {

            this.props.show_hide_background_image();
        }
    }

    _show_hide_transparent_image = () => {

        if(this.props.show_hide_transparent_image) {

            this.props.show_hide_transparent_image();
        }
    }

    _set_width_from_slider = (event, value) => {

        if(this.props.set_width_from_slider) {

            this.props.set_width_from_slider(event, value);
        }
    };

    _set_height_from_slider = (event, value) => {

        if(this.props.set_height_from_slider) {

            this.props.set_height_from_slider(event, value);
        }
    };

    _set_import_size = (event, value) => {

        if(this.props.set_import_size) {

            this.props.set_import_size(event, value);
        }
    };

    _set_import_colorize = (event) => {

        if(this.props.set_import_colorize) {

            this.props.set_import_colorize(event);
        }
    };

    _get_average_color_of_selection = () => {

        const { get_average_color_of_selection } = this.state.canvas;
        const color = get_average_color_of_selection();

        this._handle_current_color_change(color);
    };

    _change_active_layer = (index) => {

        const { layer_index, _layer_opened } = this.state;
        const { change_active_layer } = this.state.canvas;

        if(layer_index !== index) {

            if(_layer_opened) {

                this.setState({_layer_opened: false}, () => {

                    this.forceUpdate();
                });
            }

            change_active_layer(index);
        }else {

            this.setState({_layer_opened: !_layer_opened}, () => {

                this.forceUpdate();
            });
        }
    };

    _handle_action_close = () => {

        if(this.props.onActionClose) {

            this.props.onActionClose();
        }
    };

    render() {

        const {
            classes,
            canvas,
            view_name_index,
            too_much_colors_no_vector,
            filters_preview_progression
        } = this.state;

        const _filters_preview_progression_stepped = Math.round(parseFloat(filters_preview_progression / 7) * 7);

        return (
            <SwipeableViews
                containerStyle={{overflow: "visible", contain: "style size"}}
                animateHeight={true}
                animateTransitions={true}
                disableLazyLoading={true}
                resistance={true}
                springConfig={{tension: 450, friction: 60, duration: '75ms', easeFunction: 'ease-in', delay: '0ms'}}
                index={view_name_index}
                onChangeIndex={this._handle_view_name_change}
                disabled={false}
                key={"fixlol"}
            >
                {this.get_action_panel_names().map((name, index) => {

                        if(view_name_index !== index) {
                            return (<List key={name} style={{ willChange: "none", minHeight: "100%", contain: "style layout paint", overflow: "auto", contentVisibility: "visible", paddingTop: 0}} />);
                        }

                        return (
                            <List key={name} style={{willChange: (Boolean(parseInt(_filters_preview_progression_stepped) === 0 || name !== "filters") ? "": "contents").toString(), minHeight: "100%", contain: "style layout paint", overflow: "visible", contentVisibility: "visible", paddingTop: 0}}>

                                {this.get_before_action_panel(index)}

                                {
                                    this.get_action_panel(index).map((action_set) => {
                                        return (
                                            <div key={name + "-" + action_set.label + "-" + action_set.text.toLowerCase() + "-wrapper"} className={`swipetoolbox_i_${index}_${action_set.local_i}`}>
                                                <ListSubheader className={classes.listSubHeader}>
                                                    <span>{action_set.icon}</span>
                                                    <span>{action_set.text}</span>
                                                    {Boolean(action_set.progression) &&
                                                    <LinearProgress
                                                        color="primary"
                                                        variant="determinate"
                                                        role="progressbar" aria-valuenow={action_set.progression} aria-valuemin="0" aria-valuemax="100"
                                                        aria-label={`main-progressbar-${action_set.text}`}
                                                        className={classes.linearProgress}
                                                        value={parseInt(action_set.progression) % 100} />
                                                    }
                                                </ListSubheader>
                                                {
                                                    Boolean(Boolean(name === "filters" || action_set.label === "vector") && too_much_colors_no_vector) ?
                                                        <ListItem button={name !== "filters"} onClick={() => {canvas.to_less_color("auto")}}>
                                                            <ListItemIcon><LessColorAutoIcon className={classes.listItemIcon} /></ListItemIcon>
                                                            <ListItemText primary="Auto reduce color palette" secondary={"May you need less color in your palette?"} />
                                                        </ListItem>: Boolean(name === "filters") ?
                                                            <blockquote>DID YOU KNOW? Just double-tap/right-click around the drawing area to open a context menu with shortcuts including some to adjust saturation and contrast like a professional...</blockquote>: null
                                                }
                                                {
                                                    Boolean(name === "filters" ) &&
                                                    <ListItem button={true} onClick={this.compute_filters_preview}>
                                                        <ListItemIcon><TimeIcon className={classes.listItemIcon} /></ListItemIcon>
                                                        <ListItemText primary="Refresh filter previews" />
                                                    </ListItem>
                                                }
                                                <div className={name + " " + classes.listItems}
                                                     key={name + "-" + action_set.label + "-" + action_set.text.toLowerCase() + "-inner"}
                                                     style={Object.assign({
                                                                 flexWrap: "wrap",
                                                                 alignContent: "stretch",
                                                                 flexDirection: "row",
                                                                 justifyContent: "flex-start",
                                                             }, Boolean(action_set.text.toLowerCase().includes("filter")) ? {padding: "0px !important", margin: "8px !important"}: {})}>
                                                    {action_set.tools.map((tool, index) => {
                                                        return tool.for ? (
                                                            <div key={name + "-" + action_set.label + tool.text.toLowerCase().replaceAll(" ", "-")}>
                                                                <input
                                                                    accept="image/jpg, image/jpeg, image/png, image/svg, image/webp, image/gif"
                                                                    style={{display: "none"}}
                                                                    id={tool.for}
                                                                    type="file"
                                                                    onChange={tool.on_click}
                                                                />
                                                                <ListItem component="label" key={index + (tool.disabled ? "-0": "-1").toString()} htmlFor={tool.for} button disabled={tool.disabled}>
                                                                    <ListItemIcon className={classes.listItemIcon} style={tool.style || {}}>
                                                                        {tool.icon}
                                                                    </ListItemIcon>
                                                                    <ListItemText className={classes.ListItemText}
                                                                                  primary={tool.text} secondary={tool.sub}/>
                                                                </ListItem>
                                                            </div>
                                                        ):
                                                        (
                                                            <ListItem key={name + "-" + action_set.label + (tool.text || "").toLowerCase().replaceAll(" ", "-")} button disabled={tool.disabled || false}
                                                                      onClick={tool.on_click}>
                                                                <ListItemIcon className={classes.listItemIcon} style={tool.style || {}}>
                                                                    {tool.icon}
                                                                </ListItemIcon>
                                                                <ListItemText className={classes.ListItemText} style={tool.text_style ||{}}
                                                                              primary={tool.text} secondary={tool.sub}/>
                                                            </ListItem>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })
                                }

                                {this.get_after_action_panel(index)}

                                <div className={classes.thanksSponsorsGhost} >
                                    <h4>INTERESTED INTO SPONSORING? Please email-us at: <a href={"mailto:pixa.pics@protonmail.com"}>pixa.pics@protonmail.com</a>.</h4>
                                    <h3>>>> Thanks for support!</h3>
                                </div>
                                <div className={classes.thanksSponsors}>
                                    <h4>INTERESTED INTO SPONSORING? Please email-us at: <a style={{color: "#3f9bd3"}} href={"mailto:pixa.pics@protonmail.com"}>pixa.pics@protonmail.com</a>.</h4>
                                    <h3>>>> Thanks for support</h3>
                                </div>
                            </List>
                        );
                    })
                }
            </SwipeableViews>
        );
    }
}

export default withStyles(styles)(PixelToolboxSwipeableViews);
