import "jquery";

export default class Layout {

    constructor($root:any) {
        this.createDom($root);
    }

    public createDom($root:any){
        $("#app").html("welcome to typescript");
        // $root.innerHTML="welcome to typescript"
    }
}
