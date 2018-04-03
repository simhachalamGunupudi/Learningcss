var myLib = {
    logAsync: function (val) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Logging: ' + val);
                resolve(val);
            }, Math.random() * 1000);
        });
    }
}

var sequence = Promise.resolve();

[1, 2, 3, 4].forEach(function (chapterUrl) {
    sequence = sequence.then(function () {
        console.log(chapterUrl);
        return myLib.logAsync(chapterUrl);
    })
});


myLib.logAsync(1)
    .then(function () {
        return myLib.logAsync(2);
    })
    .then(function () {
        return myLib.logAsync(3);
    })
    .then(function () {
        return myLib.logAsync(4);
    })
    .then(function () {
        return myLib.logAsync(5);
    });

[1, 2, 3, 4].reduce(function (promiseChain, item) {
    return promiseChain.then(function () {
        return myLib.logAsync(item);
    })
}, Promise.resolve());

function echo(message) {
    return new Promise(function (Resolve, Reject) {
        if (message) {
            Resolve(message)
        } else {
            Reject('No Message')
        }
    });
}

var promise = new Promise(function (resolve, reject) {
    resolve(1);
});

promise.then(function (val) {
    console.log(val); // 1
    return val + 2;
}).then(function (val) {
    console.log(val); // 3
    return val;
}).then(function (val) {
    return val;
});

// It an error but for my trails I set like this
var p = Promise.resolve();
map.forEach(function (url, key) {
    p = p.then(function () {
        return log(url);
    });
});

function log(url) {
    return $.ajax({
        url: url,
        dataType: 'json',
        success: function (result) {
            console.log(result.value);
            console.log(result.name);
            console.log(result.action);
        }
    });
}








