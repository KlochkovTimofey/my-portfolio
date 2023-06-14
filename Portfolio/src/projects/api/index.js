const ul = document.getElementById('authors');
const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

fetch(url)
.then( (resp) => resp.json() )
.then( function(data) {
    console.log(data)
    let info = data;
     let li = createNode('li');
        let img = createNode('img');
        let p = createNode('p');
        let p2 = createNode('p');
        let p3 = createNode('p');

        img.src = info.url;
        p.innerHTML = info.title;
        p2.innerHTML = info.explanation;
        p3.innerHTML = info.date;
        append(li, img);
        append(li, p);
        append(li, p2);
        append(li, p3);
        append(ul, li);
    // return data.map( function(info) {
       
    // } );
} )