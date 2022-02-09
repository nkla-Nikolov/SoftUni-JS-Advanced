function solve(requestObj){
    let validMethodValues = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersionValues = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegEx = /^([\w\d\.]+|\*)$/g;
    let messageRegEx = /^([^<>\\&'"]*)$/g;
    
    if(!requestObj.hasOwnProperty('method') || !validMethodValues.includes(requestObj.method)){
        throw new Error('Invalid request header: Invalid Method');
    }
    else if(!requestObj.hasOwnProperty('uri') || !uriRegEx.test(requestObj.uri)){
        throw new Error('Invalid request header: Invalid URI');
    }
    else if(!requestObj.hasOwnProperty('version') || !validVersionValues.includes(requestObj.version)){
        throw new Error('Invalid request header: Invalid Version');
    }
    else if(!requestObj.hasOwnProperty('message') || !messageRegEx.test(requestObj.message)){
        throw new Error('Invalid request header: Invalid Message');
    }
    
    return requestObj;
};