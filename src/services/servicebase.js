export class BaseService{
    static BASEURL="https://dummyjson.com";
    
    static buildURL(path){
        return (`${this.BASEURL}${path}`)
    }
}


