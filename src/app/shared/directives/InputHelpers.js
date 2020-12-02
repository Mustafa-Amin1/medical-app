// OnlyEn directive
export const onlyEn = {
    bind(el) {
        el.addEventListener('keypress', e => {
            var key = e.which; //firefox

            if (key > 128 || (key > 47 && key < 58)) {
                e.preventDefault();
                return false;
            } else {
                if (key !== 35 && key !== 38) {
                    return;
                } else {
                    e.preventDefault();
                    return false;
                }
            }
        });
    }
};

// OnlyAr directive
export const onlyAr = {
    bind(el) {
        el.addEventListener('keypress', function (e) {
            let key = e.which;

            if (key !== 32 && key < 128 && key != 13) {
                e.preventDefault();
                //return false;
            } else {
                return;
            }
        });
    }
};

// stopPasteEn directive
export const stopPasteEn = {
    bind(el, binding) {
        el.addEventListener('paste', function (e) {
            let item = (e.clipboardData || window.clipboardData).getData(
                'text'
            );
            ////gets the paste value in the input
            item.getAsString(function () {
                el.value = binding.value.replace(
                    /[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF-#&0-9]/g,
                    ''
                );
                el.value = binding.value.trim();
                // $scope.$apply();
            });
        });
    }
};

//Only numbers
export const onlyNumeric = {
    bind(el) {
        el.addEventListener('keypress', function (e) {
            if (!(e.keyCode >= 48 && e.keyCode <= 57)) {
                e.preventDefault();
            }
            else {
                return;
            }
        });
    }
};

//Paste Only numbers
export const pasteOnlyNumeric = {
    bind(el) {
        el.addEventListener('paste', function (e) {
            let item = (e.clipboardData || window.clipboardData).getData(
                'text'
            );
            if (item.match(/[^\d]/)) {
                e.preventDefault();
            }
            else {
                return;
            }
        });
    }
};


export const allowDecimal = {
    bind(el, binding) {
        el.addEventListener('keypress', function (e) {
            if (e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 46) {
                e.preventDefault();
            }
            else if (el.value.indexOf(".") != -1 && e.keyCode == 46) { // allows only one (.)
                e.preventDefault();
            }
            else {
                let val = parseInt(binding.value) - 1
                let regexp = "^\\d*(\\.\\d{0," + val + "})?$";
                let rgx = new RegExp(regexp);
                if (!rgx.test(el.value)) {
                    e.preventDefault();
                }
                return;
            }
        });
    }
};


//allow decimal with constrains
//Only numbers
export const allowDecimalWithConstraint = {
    bind(el, binding) {
        el.addEventListener('keypress', function (e) {
            
            if (e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 46) {
                e.preventDefault();
            }
            let val = binding.value.split(',');
            let allowBeforeDec = 0;
            let allowAfterDec = 0;

            // handel one constarin val
            if(val[0] == ""){
                allowBeforeDec = Math.pow(10, 1000)
            }

            else if(val[0] != ""){
                allowBeforeDec = Number(val[0])
            }
            if(val[1] == ""){
                allowAfterDec = Math.pow(10, 1000)
            }

            else if(val[1] != ""){
                allowAfterDec = Number(val[1])
            }

            //no dec. point
            if (el.value.indexOf(".") == -1 && el.value.length >= allowBeforeDec && e.keyCode != 46 && e.target.selectionStart >= allowBeforeDec) { // allows only one (.)
                e.preventDefault();
            }

            else if(el.value.indexOf(".") != -1 && e.keyCode == 46){
                e.preventDefault();
            }

            //has dec. point
            else if(el.value.indexOf(".") != -1){
                const numbersBeforeDot = e.target.value.split('.')[0];
                const numbersAfterDot = e.target.value.split('.')[1];
                
                //editing before .  and got to max length
                if(0 <= e.target.selectionStart && e.target.selectionStart <= e.target.value.indexOf(".") && numbersBeforeDot.length >= allowBeforeDec){
                    e.preventDefault();
                }
                
                //editing after .  and got to max length
                if(e.target.value.indexOf(".") < e.target.selectionStart && e.target.selectionStart <= e.target.value.length && numbersAfterDot.length >= allowAfterDec){
                    e.preventDefault();
                }
                
            
            }

        });
    }
};

//limit textarea char
//export const limitChar = {
//    bind(el, binding) {
//        el.addEventListener('keypress', function(e) {            
//            if (e.target.value.length >= parseInt(binding.value)){
//                e.preventDefault();
//            }
//        });
//    }    
//};


//limit paste char
export const limitChar = {
    bind(el, binding, vnode) {
        let maxChars = binding.value;
        let handler = function (e) {
            if (e.target.value.length > maxChars) {
                e.target.value = e.target.value.substr(0, maxChars);
                vnode.elm.dispatchEvent(new CustomEvent('input')); // added this
            }
        }
        el.addEventListener('input', handler);
    }
};

// var ex = /^\d*\.$/;
// console.log(ex.test(el.value) + " - " + el.value);
// if(ex.test(el.value)==false){
//     el.value = el.value.substring(0,el.value.length - 1);
// }