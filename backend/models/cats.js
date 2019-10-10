const Cats = class CatsClass {

    constructor(
        id, text, type, upvotes
    ) {
        this._id = id;
        this._text = text;
        this._type = type;
        this._upvotes = upvotes;
    }

    get id() {
        return this._id;
    }

    get upvotes() {
        return this._upvotes;
    }

    set upvotes(value) {
        this._upvotes = value;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }
}

module.exports.Cats;
