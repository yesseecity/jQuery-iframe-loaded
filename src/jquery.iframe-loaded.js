(function( $ ){
    "use strict";
    var a1 = function (iframe_dom) {
        try{
            if(Object.keys(iframe_dom.contentWindow).length > 0){
                return false;
            }else{
                return true;
            }
        }catch(e){
            console.log('catch');
            return true;
        }
    };
    
    $.fn.iframeload = function(p){
        if(this.length === 1){
            return a1(this[0]);
        }else{
            var returnArray = [];
            
            for (var i=0; i<this.length; i++) {
                returnArray.push( a1(this[i]) );
            }
            return returnArray;
        }
    };
})(jQuery);