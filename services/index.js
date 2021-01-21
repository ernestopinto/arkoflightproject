import {ApiEndPoints} from "~/env/Environment";
import {ServicesConstants} from "~/services/servicesConstants";

export class ArkServices extends ServicesConstants{

    constructor(axios) {
        super (axios)
    }

    // services

    async getImageData (code, result){
        await this.GET(ApiEndPoints.endpoints.getImageByCode +`/${code}`, response => {
            //.. logic
            result(response);
        })
    }

    async getImages (result){
        await this.GET(ApiEndPoints.endpoints.getImages, response => {
            //.. logic
            result(response);
        })
    }

    async sendImageWithData (data, result){
        await this.POSTFILEWITHDATA(ApiEndPoints.endpoints.sendImage, data, response => {
            //.. logic
            result(response);
        })
    }

    async registerUser(user, result){
        await this.POST(ApiEndPoints.endpoints.registerUser, user, response => {
            //...
            result (response);
        })
    }
}


export default {


}