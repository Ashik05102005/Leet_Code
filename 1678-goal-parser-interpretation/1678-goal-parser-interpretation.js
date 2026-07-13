/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const res =command.replaceAll("()" , 'o').replaceAll("(al)","al");
    return res
    
};