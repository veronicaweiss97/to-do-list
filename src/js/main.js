'use strict';

const input = document.querySelector('.form'),
      ul = document.querySelector('.todo');

function createNewToDo() {
    const li = document.createElement('li');
    const toDoText = document.createElement('span');

    toDoText.classList.add('todo-text');

    const newToDo = input.value;
    toDoText.append(newToDo);

    li.append(toDoText);

    const deleteBtn = document.createElement('img');
    deleteBtn.classList.add('icon');

    deleteBtn.src = '/src/icons/trasher.svg';
    li.append(deleteBtn);

    ul.append(li);
    function del() {
        const trash = document.querySelectorAll('.icon'),
             allLi = document.querySelectorAll('li');
        trash.forEach((item, i) => {
            item.addEventListener('click', () => {
                allLi[i].remove();
            });
        });
    }
    del();
}
    input.addEventListener('keypress', (e) => {
        const keyEnter = 13;
        if (e.which == keyEnter) {
            createNewToDo();
            input.value = '';
        }
        
    });

    //date 

    function clock() {
        var d = new Date();
        var month = d.getMonth()+ 1;
        var day = d.getDate();
     
        if (day <= 9) day = "0" + day;
        
        
         const date_time = "Today:" + day + "." + month + "." + d.getFullYear();
        if (document.layers) {
         document.layers.doc_time.document.write(date_time);
         document.layers.doc_time.document.close();
        }
        else document.getElementById("doc_time").innerHTML = date_time;
            setTimeout("clock()", 1000);}

         clock();
