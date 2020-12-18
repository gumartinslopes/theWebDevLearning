
function sayIt(it) {
    console.log("Antes da callback");
    it();
    console.log("depois da callback");
}

sayIt(
    () => {
        console.log("Isso é uma callback");
    }
);