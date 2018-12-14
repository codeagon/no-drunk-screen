module.exports = function noBlurScreen(mod) {
    mod.hook('S_ABNORMALITY_BEGIN', 3, (event) => {
        //console.log('Abnormality:'+event.id+' Duration:'+event.duration+' Stacks:'+event.stacks)
        if (event.id == "48733" || event.id == "48734" || event.id == "48735" || event.id == "48736" || event.id == "48737" || event.id == "48738" || event.id == "48739" || event.id == "70234" || event.id == "70235" || event.id == "70236" || event.id == "70237" || event.id == "70238" || event.id == "905434") {
            return false; //dis ugly code lmoaooa
        }
    });
};
