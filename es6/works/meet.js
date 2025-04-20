let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }

};

meeting.add('John').add('Jane').add('Peter');
console.log(`The latest attendee in the meeting is  ${meeting.latest}`);