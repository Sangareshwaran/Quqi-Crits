async function return_item(material){
    var item = document.createElement('div');
    item.className = 'item';
    var materialImg = document.createElement('img');
    materialImg.src = 'https://raw.githubusercontent.com/Sangareshwaran/Quqi-Crits/main/images/items/' + material + '.png';
    item.appendChild(materialImg);

    var materialName = document.createElement('h4');
    materialName.textContent = material;
    item.appendChild(materialName);

    
    return item;
}


async function make(data) {
  console.log(data);
  var card = document.createElement('div');
  card.className = "card";

  var title = document.createElement('h1');
  title.textContent = 'Furina';
  card.appendChild(title);

  var todo = document.createElement('div');
  todo.className = 'todo';
  var img = document.createElement('img');
  img.src = 'https://raw.githubusercontent.com/Sangareshwaran/Quqi-Crits/main/images/charecters/'+'barbara'+'.png';
  
  var imgContainer = document.createElement('div');
  imgContainer.appendChild(img);
  todo.appendChild(imgContainer);

  var progress_bars = document.createElement('div');
  progress_bars.className = 'progress_bars';



  for (let material in data['others']) {
    progress_bars.appendChild(return_item(material));
    bar = document.createElement('div');
    innerbar = document.createElement('div');
    innerbar.style.setProperty('width', '75%');
    innerbar.style.setProperty('height', '100%');
    innerbar.style.setProperty('background', '#4c98e7');
    innerbar.style.setProperty('border-radius', '15px');
    bar.appendChild(innerbar);
    progress_bars.appendChild(bar);
  }
  todo.appendChild(progress_bars)

  card.appendChild(todo);
  document.getElementsByClassName("container")[0].appendChild(card);
}

function saveJson(data) {
  const jsonData = JSON.stringify(data);
  localStorage.setItem('data', jsonData);
  console.log("JSON saved to local storage.");
}

function load_local_Json() {
  const jsonData = localStorage.getItem('data');

  if (!jsonData) {

    
    saveJson(read_json("https://raw.githubusercontent.com/Sangareshwaran/Quqi-Crits/main/data/template.json"));
    console.log("No data found. Default data saved to local storage:", defaultData);
    return defaultData;
  } else {
    // Data found, parse and return it
    const data = JSON.parse(jsonData);
    console.log("Loaded JSON from local storage:", data);
    return data;
  }
}


async function read_json(path_file) {
  try {
    const response = await fetch(path_file);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data; // Process the JSON data
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

async function init() {
  const data = await read_json('https://raw.githubusercontent.com/Sangareshwaran/Quqi-Crits/main/data/furina.json');
  if (data) {
    make(data);
  }
}

init();
init();
