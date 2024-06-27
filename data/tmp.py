import requests
from bs4 import BeautifulSoup
from PIL import Image
from io import BytesIO

def download_image(url,name):

    # URL of the image

    # Send a GET request to the URL
    response = requests.get(url)

    if response.status_code == 200:
        # Convert the content of the response to an image
        png_image = Image.open(BytesIO(response.content))
        
        # Save the image in WebP format
        png_image.save(f"./images/items/{name}.webp", "WEBP")

        print("Image downloaded and converted successfully.")
    else:
        print(f"Failed to download image. Status code: {response.status_code}")

# Function to scrape the webpage
def scrape_webpage(url):
    items = {} # Initialize items list inside the function
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find all the card containers
    card_containers = soup.find_all('div', class_='card-container')
    
    for card in card_containers:
        # Locate the card-caption element
        card_caption = card.find('span', class_='card-caption')
        img = BeautifulSoup(str(card),'html.parser').find_all('img')
        img_link = (img[0].get('data-src').removesuffix('/scale-to-width-down/74?cb=20210106073715'))
        
        # Extract the title from the <a> tag within card-caption
        if card_caption:
            link = card_caption.find('a')
            if link:
                title = link.get('title')
                if title:
                    if len(items) > 25:
                        break
                    items[title] = img_link
                    
    return items  # Return the list of titles

# URL of the webpage to scrape
url = 'https://genshin-impact.fandom.com/wiki/Furina'
titles = scrape_webpage(url)
for i in titles:
    download_image(titles[i],i.replace(' ','_'))


