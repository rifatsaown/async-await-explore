const stateControll = true;
const mark = 100;

function enroll() {
    console.log('Enrollment in progress...');
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stateControll) {
                resolve();
            } else {
                reject('Payment failed');
            }
        }, 1000);
    });
    return promise;
}
function progress() {
    console.log('Continue');
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mark > 90) {
                resolve();
            } else {
                reject("You don't have emough mark to get the cirtificate");
            }
        }, 1000);
    });
    return promise;
}
function certificate() {
    console.log('Certificate in progress...');
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("You have got the certificate");
        }, 1000);
    });
    return promise;
}

// enroll().then(progress).then(certificate).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });
async function asyncFunction() {
    try {
        await enroll();
        await progress();
        const result = await certificate();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
asyncFunction();