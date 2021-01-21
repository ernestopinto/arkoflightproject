
export class ResponseOperators {

    _response;

    // response is a stream or not
    constructor(response) {
        this._response = response;
    }

    arkResponse(){
        return this._response
    }

}