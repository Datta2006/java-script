function upperCaseAsync(s) {
    return new Promise((resolve, reject) => {
        if (s) {
            resolve(s.toUpperCase());
        } else {
            reject();
        }
    });
}

upperCaseAsync("steve").then(console.log);
upperCaseAsync(null).catch((x) => {
    console.log("No string received!");
});