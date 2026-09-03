const para = document.createElement('p');
para.textContent ="This is a paragraph using JavaScript";
para.id = "para1";
para.style.color="white";

const element = document.getElementById('first');
element.after(para);

// const item1 = document.createElement('li');
// item1.textContent = "Iron Man";

// const item2 = document.createElement('li');
// item2.textContent = "Spider Man";

// const item4 = document.createElement('li');
// item4.textContent = "Thor";

// const item5 = document.createElement('li');
// item5.textContent = "Bat Man";


// const unorderedlist = document.getElementById('list');
// unorderedlist.appendChild(item1);
// unorderedlist.appendChild(item2);
// unorderedlist.prepend(item3);

const arr = ["Iron Man", "Spider Man", "Thor", "Bat Man"];

const unorderedlist = document.getElementById('list');
const fragment = document.createDocumentFragment();

for(let food of arr)
{
    const list = document.createElement('li');
    list.textContent = food;
    // unorderedlist.appendChild(list);
    fragment.appendChild(list);

}
unorderedlist.appendChild(fragment);

// remove element
const removeElement = document.getElementById('para1');
removeElement.remove();
