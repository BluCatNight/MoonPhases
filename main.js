
class Menu {
    constructor(BoundItem, Html) {
        this.BoundItem = BoundItem;
        this.Html = Html;
    }
}


allmenus = [new Menu("item1","<h1>hi!<h1>")]
function menuenter(Item) {
    for(i in allmenus) {
        if(Item == allmenus[i].BoundItem) {
            $("#Menu").html(allmenus[i].BoundItem) 
            $("#Menu").css('left', $("#" + Item).offset().left);
            $("#Menu").css('top', $("#" + Item).offset().top+$("#" + Item).height());
            $("#Menu").show(50)
        }
    }
}

function menuexit() {
    $("#Menu").hide(50)
}