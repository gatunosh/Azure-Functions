import { AzureFunction, Context, HttpRequest } from "@azure/functions";

interface Person {
    name: string;
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const person: Person = req.body;

    let responseStatus: number;
    let responseMessage: string;

    if(person && person.name) {
        responseStatus = 200;
        responseMessage = `Hello ${person.name}. This HTPP triggered function executed successfully`;
    } else {
        responseStatus = 401;
        responseMessage = `UnAuthorized`;
    }

    context.res = {
        status: responseStatus,
        body: responseMessage
    }

};

export default httpTrigger;