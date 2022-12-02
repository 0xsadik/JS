
// function friendlyFunction() {
//     return `hello`;
// }
// console.log(friendlyFunction());



// async function friendlyFunction() {
//     return `hello`;
// }
// console.log(friendlyFunction());



const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical meeting',
            location: 'Google meet',
            time: '10:00 pm'
        };
        resolve(meetingDetails);
    }
    else {
        reject(new Error ('meeting already scheduled!'));
    }
});


const addToCalendar = (meetingDetails) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calendar);
}

// meeting
//     .then(addToCalendar)
//     .then((res) => {
//         console.log(JSON.stringify(res));
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })

async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    }
    catch {
        console.log(`something wrong happened!`)
    }
}

// myMeeting();
// console.log(`hello world!`)