import JSLoader from "./JSLoader";

const PARAM_PROPS_NAME = ["faw", "fluc", "flc", "fllc", "tuc", "tlc", "aed", "ated"];

const lang_import_en = async() => { return JSLoader( () => import(`../locales/en`))};
const lang_import_fr = async() => { return JSLoader( () => import(`../locales/fr`))};
const lang_import_id = async() => { return JSLoader( () => import(`../locales/id`))};
const lang_import_pt = async() => { return JSLoader( () => import(`../locales/pt`))};
const lang_import_it = async() => { return JSLoader( () => import(`../locales/it`))};
const lang_import_de = async() => { return JSLoader( () => import(`../locales/de`))};
const lang_import_ja = async() => { return JSLoader( () => import(`../locales/ja`))};
const lang_import_zh = async() => { return JSLoader( () => import(`../locales/zh`))};
const lang_import_ko = async() => { return JSLoader( () => import(`../locales/ko`))};
const lang_import_ru = async() => { return JSLoader( () => import(`../locales/ru`))};
const lang_import_hi = async() => { return JSLoader( () => import(`../locales/hi`))};
const lang_import_es = async() => { return JSLoader( () => import(`../locales/es`))};

const get_lang_lib = async (name) => {

    switch (name) {

        case "fr":
            return lang_import_fr();
            break;
        case "id":
            return lang_import_id();
            break;
        case "pt":
            return lang_import_pt();
            break;
        case "it":
            return lang_import_it();
            break;
        case "de":
            return lang_import_de();
            break;
        case "ja":
            return lang_import_ja();
            break;
        case "zh":
            return lang_import_zh();
            break;
        case "ko":
            return lang_import_ko();
            break;
        case "ru":
            return lang_import_ru();
            break;
        case "hi":
            return lang_import_hi();
            break;
        case "es":
            return lang_import_es();
            break;
        default:
            return lang_import_en();
    }
}

/* Do not flood the read of the translate object and the document lang element, just set an interval to check it*/
const l = async(_l = null, callback_function = () => {}, time_ago = false) => {

    let l1 = "";
    if(Boolean(_l)) {

        l1 = _l.toLowerCase();
        document.documentElement.lang = l1;
    }else {

        l1 = document.documentElement.lang;
    }

    if(window.LANG !== l1) {

        window.LANG = l1;

    }

    get_lang_lib(l1).then(function(ld){

        window.LANG_DIR = Object.assign({}, ld);

        if(time_ago) {
            JSLoader( () => import("javascript-time-ago/bundle/javascript-time-ago")).then(function(TimeAgo) {

                TimeAgo.default.addDefaultLocale(window.LANG_DIR["_time_ago"]);
                window.TIME_AGO = new TimeAgo.default(window.LANG);
                callback_function(true);
            }).catch(function(){

                callback_function(false);
            });
        }else {

            callback_function(true);
        }
    }).catch(function(){

        callback_function(false);
    });
};

const t = (path = "", variables = {}, parameters = {}) => {

    if(typeof path === "number") {

        if (typeof window.TIME_AGO !== "undefined") {

            let option = null;

            if(variables.mini === true){
                option = "mini"
            }

            return window.TIME_AGO.format(path, option) || "";
        }
    }else if(typeof window.LANG_DIR !== "undefined") {

        // Split path every dot
        const paths_array = path.split(".");

        // Goes to the first dir, (it is the language)
        let dir = window.LANG_DIR;

        // Goes to all other dir except pre-first (lang) and last (value :Object or :String)
        for(let i = 0; i < paths_array.length-1; i++) {

            dir = dir[paths_array[i]];
        }

        // Detect if variables has been used as parameters for shorter syntax
        let variables_is_in_fact_parameters = false;
        Object.entries(variables).forEach(([key, value] ) => {

            variables_is_in_fact_parameters = PARAM_PROPS_NAME.includes(key.toLowerCase());
        });
        if(variables_is_in_fact_parameters) { parameters = variables; variables = {}; }

        // Get the object in the last dir
        let end_dir_name = "";

        // Needs to remove '"', "'", ",", and so on so it can look for the right sentence... "My computer's mouse" -> "my computers mouse"
        if(parameters.faw || parameters.FAW) { // Format All Words

            end_dir_name = paths_array[paths_array.length-1]
                .replaceAll("'", "")
                .replaceAll('"', "")
                .replaceAll(",", "")
                .toLowerCase();

        }else {

            end_dir_name = paths_array[paths_array.length-1];
        }

        // It select the array property by its name so it is important to format it eventually if specified by FAW parameters...
        const end_path_value = dir[end_dir_name];

        // Stringify so it supports objects
        let value_with_variables = JSON.stringify(end_path_value);

        // Replace variables with real value(s) in the translate object value chosen
        Object.entries(variables).forEach(variable => {

            const [
                variable_name_to_replace, // dog
                variable_value_to_replace // "dog" or {dog: 2}
            ] = variable;

            if(variable_name_to_replace.length || variable_value_to_replace.toString()){

                const is_value_a_plural = typeof variable_value_to_replace === "object" && variable_value_to_replace !== null && variable_value_to_replace !== 0;

                if(is_value_a_plural) { // {dog: 2}

                    const [
                        variable_value_to_replace_props_pair, // dog: 2 in array mode
                        variable_number_to_replace_props_pair // _n: {few: 20, plenty: 100} in array mode
                    ] = Object.entries(variable_value_to_replace); // {dog: 2, _n: {few: 20, plenty: 100} } in array mode

                    const [
                        start_plural_key, // dog
                        plural_number_value // 2
                    ] = variable_value_to_replace_props_pair;

                    if(start_plural_key === variable_name_to_replace) {

                        let few_how_much = null;
                        let plenty_how_much = null;

                        const [
                            variable_value_to_replace_props_pair_name_id, // _n
                            variable_number_to_replace_props_pair_value_pair // {few: 20, plenty: 100}
                        ] = Object.entries(variable_value_to_replace_props_pair);

                        if (variable_value_to_replace_props_pair_name_id === "_n"){

                            few_how_much = variable_number_to_replace_props_pair_value_pair["few"] || null;
                            plenty_how_much = variable_number_to_replace_props_pair_value_pair["plenty"] || null;
                        }

                        const need_to_find_string = "%n {{{_plurals." + start_plural_key + "}}}";

                        let numbered_plural_var_text = plural_number_value <= 1 ? // Either one or many
                            window.LANG_DIR["_plurals"][start_plural_key]["one"]:
                            window.LANG_DIR["_plurals"][start_plural_key]["many"];


                        // From one up to few
                        numbered_plural_var_text = (few_how_much && plural_number_value > 1 && plural_number_value < few_how_much) ?
                            window.LANG_DIR["_plurals"][start_plural_key]["few"]: numbered_plural_var_text;


                        // From plenty up to infinity
                        numbered_plural_var_text = (plenty_how_much && plural_number_value >= plenty_how_much) ?
                            window.LANG_DIR["_plurals"][start_plural_key]["plenty"]: numbered_plural_var_text;


                        const need_to_replace_string = plural_number_value + " " + numbered_plural_var_text;

                        value_with_variables = value_with_variables.replace(need_to_find_string, need_to_replace_string);
                    }
                }else { // "dog"

                    const need_to_find_string = "{{" + variable_name_to_replace + "}}";
                    const need_to_replace_string = variable_value_to_replace === null ? "": variable_value_to_replace.toString();

                    value_with_variables = value_with_variables.replaceAll(need_to_find_string, need_to_replace_string);

                }
            }

        });

        value_with_variables = JSON.parse(value_with_variables);
        parameters = Object.assign(variables, parameters);

        if(parameters.fluc || parameters.FLUC || parameters.flc || parameters.FLC) { // First Letter Upper Case

            value_with_variables = value_with_variables.charAt(0).toUpperCase() + value_with_variables.slice(1);
        }

        if(parameters.fllc || parameters.FLLC) { // First letter Lower Case

            value_with_variables = value_with_variables.charAt(0).toLowerCase() + value_with_variables.slice(1);
        }

        if(parameters.tuc || parameters.TUC) { // To Upper Case

            value_with_variables = value_with_variables.toUpperCase();
        }

        if(parameters.tlc || parameters.TLC) { // To Lower Case

            value_with_variables = value_with_variables.toLowerCase();
        }

        if(parameters.aed || parameters.AED) { // Add End Dot

            value_with_variables = value_with_variables + ".";
        }

        if(parameters.ated || parameters.ATED) { // Add End Dot

            value_with_variables = value_with_variables + "...";
        }

        return value_with_variables;
    }else {

        return " ";
    }
};



module.exports = {
    l,
    t
};