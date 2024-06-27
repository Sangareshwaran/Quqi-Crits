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
  img.src = 'https://raw.githubusercontent.com/Sangareshwaran/Quqi-Crits/main/images/charecters/'+'nahida'+'.png';
  
  var imgContainer = document.createElement('div');
  imgContainer.appendChild(img);
  todo.appendChild(imgContainer);

  var progress_bars = document.createElement('div');
  progress_bars.className = 'progress_bars';

  for (let material in data['materials']) {
    var item = document.createElement('div');
    item.className = 'item';
    var materialImg = document.createElement('img');
    materialImg.src = 'https://raw.githubusercontent.com/Sangareshwaran/Quqi-Crits/main/images/items/' + data['materials'][material] + '.png';
    item.appendChild(materialImg);

    var materialName = document.createElement('h4');
    materialName.textContent = data['materials'][material].split('-')[0];
    item.appendChild(materialName);

    progress_bars.appendChild(item);
    progress_bars.appendChild(document.createElement('hr'));
    console.log(material);
  }
  todo.appendChild(progress_bars)

  card.appendChild(todo);
  document.getElementsByClassName("container")[0].appendChild(card);
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
