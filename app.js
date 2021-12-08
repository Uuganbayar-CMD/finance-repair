//Дэлгэцтэй ажиллах контроллер
var uiController = (function(){})();

//Санхүүтэй ажиллах когтроллер
var financeController = (function(){})();


//Санхүүтэй ажиллах контроллер
var appController = (function(uiController, financeController)
{
var ctrlAddItem = function(){
    //1. Оруулах өгөгдлийг дэлгэцээс олж авна.
console.log('delgetsnees ugugdul awsn');
//2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.

//3. Олж авсан өгөгдлүүдээ веб дээрээ тохирох хэсэгт нь гаргана.

//4. Төсвийг тооцоолно.

//5. Эцсийн үлдэгдлийг дэлгэцэнд гаргана.
}

document.querySelector('.add__btn').addEventListener('click',function(){
ctrlAddItem();
});
document.addEventListener('keypress',function(event){
    if(event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
    }
    
});
})(uiController,financeController);