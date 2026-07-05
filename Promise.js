
// series of action - (Food delivery application)

// 1. order place
// 2. accept order by restaurent
// 3. food is preparing
// 4. food is ready to pick up
// 5. out for delivery
// 6. payment done
// 7. delivered

let p1 = new Promise((resolve, reject) => {

    console.log('order placed');
    let orderPlaceIndicator = true;
    setTimeout(() => {
        if (orderPlaceIndicator) {
            console.log('order accepted by restaurent.');
            resolve();
        } else {
            console.error('order rejected');
            reject();
        }
    }, 5000);
}).then(function () {
    console.log('food is preparing');

    let preparationIndicator = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (preparationIndicator) {
                console.log('food is ready to pack');
                resolve();
            } else {
                console.log('order is not prepared');
                reject();
            }
        }, 5000);

    })

}).then(function () {
    console.log('out for delivery');
    let deliveryStatus = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (deliveryStatus) {
                console.log('delivery guy arrived');
                resolve();
            } else {
                console.log('delivery guy has not arrive');
                reject();
            }
        }, 5000);

    })
}).then(function () {
    console.log('Make Payment');

}).then(function () {
    console.log('item delivered');

}).catch(function () {
    console.log('System failed');

}).finally(() => {
    console.log('promise end');

})
