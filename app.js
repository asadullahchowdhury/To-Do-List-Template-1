/*variables*/
const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')


/*adding list item*/
function addTask() {
    if (inputBox.value === '') {
        inputBox.classList.add('error');
        alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}


/*mark as checked  and remove list item*/
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false)


/*save data*/
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}


/*show task when reload*/
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask()


/*add task by pressing key Enter*/
document.querySelector('body').addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && inputBox.value != '') {
        addTask()
    }
});