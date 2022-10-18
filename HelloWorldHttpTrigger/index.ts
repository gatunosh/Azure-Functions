import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    let name: string;

    if(req.method === 'GET') {
        name = req.query.name;
    } else if (req.method === 'POST') {
        name = (req.body?.name);
    }

    let responseStatus: number;
    let responseMessage: string;

    if(name) {
        responseStatus = 200;
        responseMessage = `Hello ${name}. This HTPP triggered function executed successfully`;
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