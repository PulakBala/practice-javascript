function anoGlobalFunc () {
    console.log('Global Function');

    function localFunc () {
        console.log('Local Function')
    }
}
anoGlobalFunc();
localFunc();