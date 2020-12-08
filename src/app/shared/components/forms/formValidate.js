import { extend } from "vee-validate";
import { alpha, alpha_dash, required, excluded, min, max } from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: " * required"
})
extend("userName", {
    ...alpha,
    ...alpha_dash
})
extend("confirmed", {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    },
    message: 'Password confirmation does not match'
})
extend("checked", {
    ...required,
    message: " * The terms field is required."
})
extend("EmailRegex", {
    validate(value) {
        var regex = new RegExp(/^[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](gmail.com|hotmail.com|yahoo.com)$/, 'g')
        return value.match(regex)
    }
})
extend("excluded", {
    ...excluded,
    message: " * required"
})
extend("isArabic", {
    validate(value) {
        var regex = new RegExp(/[\u0600-\u06FF\u0750-\u077F]/, 'g')
        return value.match(regex)
    },
    message: '*Arabic Letters Only'
})
extend("isEnglish", {
    validate(value) {
        var regex = new RegExp(/[A-Za-z ]/, 'g')
        return value.match(regex)
    },
    message: '*English Letters Only'
})
extend("radioBtn", {
    validate(value) {
        if (value) {
            return value
        }
    },
    message: '* required'
})
extend("positive", {
    validate(value) {
        if (value > 0) {
            return true;
        } else {
            return "* no negative numbers";
        }
    },
});
extend("minmax", {
    validate(value, { min, max }) {
        return value.length >= min && value.length <= max;
    },
    params: ["min", "max"],
    message: "* at least {min} and {max} characters at most",
});
extend("min", {
    ...min,
    message: " * at least {length}"
})
extend("max", {
    ...max,
    message: " * {length} characters at most"
})
// maxValue