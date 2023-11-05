console.log("i am working just fine");

const btn = document.querySelector('.bforbtn');
btn.addEventListener('click', function (e) {
    console.log(btn);
    console.log('you click on btn');
    alert('Hi i am working just fine');
})