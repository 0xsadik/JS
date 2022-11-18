

class Book {
    constructor(
        title,
        author, 
        pagenumber,
        readstatus
    ) {
        this.title = title;
        this.author = author;
        this.pagenumber = pagenumber;
        this.readstatus = readstatus;
    }

    updateReadStatus (newReadStatus) {
        this.readstatus = newReadStatus;
    }
}

export default Book;