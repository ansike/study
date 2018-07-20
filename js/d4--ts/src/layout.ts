export default class Layout {

    constructor() {
        this.createDom();
    }

    public createDom(){
        document.getElementsByTagName("body")[0].innerHTML="<div>this is ts test</div>"
    }
}
