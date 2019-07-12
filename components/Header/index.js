// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container');

function Header(date, title, temp) {
    //create elements
    const header = document.querySelector('div');
    const dateHead = document.querySelector('span');
    const titleHead = document.querySelector('h1');
    const tempHead = document.querySelector('span');

    //set class names
    header.classList.add('header');
    dateHead.classList.add('date');
    tempHead.classList.add('temp');

    //set content
    dateHead.textContent = date;
    titleHead.textContent = title;    
    tempHead.textContent = temp;

    //put together
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return header;
}
