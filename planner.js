


function make(data) 
{
  var card = document.createElement('div');
  card.className = "card" ;
  
  var title = document.createElement('h1');
  title.textContent = 'Furina';
  card.appendChild(title);
  
  var todo = document.createElement('div');
  todo.className = 'todo';
  var img = document.createElement('img');
  img.src = './images/charecters/'+'furina'+'/icon.webp';
  todo.appendChild(document.createElement('div').appendChild(img));
  
  var progress_bars = document.createElement('div');
  progress_bars.className = 'progress_bars';
  
  for (let material in data['materials'])
    {
      var item = document.createElement('div');
      item.className = 'item';
      var img = document.createElement('img');
      img.src = 'https://raw.githubusercontent.com/Sangareshwaran/Quqi-Crits/main/images/items/'+ material + '.webp'
      item.appendChild(img)
      item.appendChild(document.createElement('h4').textContent = material.split('-')[0])
      
      todo.appendChild(item)
      todo.appendChild(document.createElement('hr'))
      console.log(item)
    }
    
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
        console.log(data); // Process the JSON data
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }
make(read_json('https://raw.githubusercontent.com/Sangareshwaran/Quqi-Crits/main/data/furina.json'));