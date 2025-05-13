const HOST = `http://apiweb.api-web-tech.local/`;
var TOKEN = '';
const CONTENT = document.querySelector('.content');


loadPageAuth();
function loadPageAuth(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/modules/authorization.html");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { 
           // console.log(xhr.responseText);
            CONTENT.innerHTML = xhr.responseText
            onLoadPageAuth()
        }
    }
}


function onLoadPageAuth() {
   document.querySelector('.auth-block button').addEventListener('click', function() {
     let fdata = new FormData();
     fdata.append("email", document.querySelector('input[name="login"]').value);
     fdata.append("password", document.querySelector('input[name="pass"]').value);
     let xhr = new XMLHttpRequest();
     xhr.open("POST", `${HOST}/authorization`);
     xhr.send(fdata);
     xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(this.responselext);
            if (xhr.status == 200) {
                let resp = JSON.parse(xhr.responseText)  
                TOKEN = resp.token
            }
            if (xhr.status == 401) {
                let resp = JSON.parse(xhr.responseText)
                alert(resp.message)
            }
        }
    }
    }
 )
}



function loadPageData() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/modules/data.html");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            CONTENT.innerHTML = xhr.responseText
            onLoadPageData();
        }
    }
} 







//АВТОРИЗАЦИЯ


_get({ url: '/modules/authorization.html' }, function (responseText) {
    CONTENT.innerHTML = responseText;
    



                let rdata = new FormData()


                rdata.append('first_name', _elem('input[name="first_name"]').value)
                rdata.append('last_name', _elem('input[name="last_name"]').value)
                rdata.append('email', _elem('input[name="email"]').value)
                rdata.append('password', _elem('input[name="password"]').value)

                _post({ url: `${HOST}/registration`, data: rdata }, function (responseText) {
                    responseText = JSON.parse(responseText)
                    console.log(responseText);
                    if (responseText.success) {
                        token = responseText.token
                        console.log(token)
                        _load('/modules/profile.html', function (responseText) {
                            CONTENT.innerHTML = responseText
                        })
                    }

                })
           

  _elem('.authorize').addEventListener('click', function () {
        let edata = new FormData()
        let email = _elem('input[name="email"]').value
        let password = _elem('input[name="password"]').value
        edata.append('email', email)
        edata.append('password', password)
  _post({ url: `${HOST}/authorization`, data: edata }, function (responseText) {
            responseText = JSON.parse(responseText)
            console.log(responseText);
            if (responseText.success) {
                token = responseText.token
                console.log(token)

  _elem('.btn-upload-file').addEventListener('click', function () {
          
                    })

            }
            else {
                alert("login failed")
            }

        })

    })


})







//КНОПКА ВЫХОДА

function onLoadPageData(){
    document.querySelector('.auth-block button').addEventListener('click', function(){
        let fdata = new FornData();
        fdata.append('token', TOKEN)
        let xhr = new XMLHttpRequest();
        xhr.open("POST", `${HOST}/logout`);
        xhr.send(fdata);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                console.log(this.responseText);
                if (xhr.status == 200) {
                    document.body.innerHTML = xhr.responseText
                }
                if (xhr.status == 403) {
                    let resp = JSON.parse(xhr.responseText)
                    alert(resp.message)
                }
            }
        }

    }
       
)

   

//ТАБЛИЦА

let fdata = new FormData ();
fdata.append(`token`, TOKEN)
let xhr = new XMLHttpRequest();
xhr.open("POST", `${HOST}/data`);
xhr.send(fdata);
xhr.onreadystatechange = function () {
    if (xhr.readyState ==4) {
        if (xhr.status == 200) {
            let resp = JSON.parse(xhr.responseText)
            makeTableData(resp)
        }
        if (xhr.status == 403) {
            let resp = JSON.parse(xhr.responseText)
            alert(resp.message)
        }
    }
  }
}



function makeTableData(content) {
    let cell = document.createElement('td')
    cell.textContent = content
    return cell;
}


function makeTableData(data) {
    var counter = 0;
    data.forEach(element => {
        let row = document.createElement('tr')
        row.append(makeTableCell(element.name))
        row.append(makeTableCell(element.gender))
        row.append(makeTableCell(element.age))
        row.append(makeTableCell(element.eyeColor))
        row.append(makeTableCell(element.balance))
        row.append(makeTableCell(element.company))
        row.append(makeTableCell(element.email))
        row.append(makeTableCell(element.phone))
        row.append(makeTableCell(element.address))
        row.append(makeTableCell(element.favoriteFruit))
        row.append(makeTableBtn("Кнопка"))
        row.append(makeTableCell("Ссылка", "https://google.com"))



        if (counter%2 == 0){
            row.classList.add('row_odd')
        } else{
            row.classList.add('row_even')
        }




        document.querySelector('.data-table tbody').append(row)
        counter++;


        cell = document.createElement('td')
        cell.textContent = element.name
        row.append(cell)

       
    });
}