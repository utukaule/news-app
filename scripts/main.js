async function apiCall(url) {


    //add api call logic here
    try{
        let res = await fetch(url)
        let data = await res.json();
        return data;
    }
    catch(error){
        console.log('error: ',error)
    }

}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(element =>{
        let div = document.createElement('div');
        div.addEventListener('click',()=>{
            localStorage.setItem('articles',JSON.stringify(element));
            window.location.href = 'news.html';
        })
        
        let content = document.createElement('p');
        content.textContent = element.title;


        let image = document.createElement('img');
        // image.src = element.
        image.src = element.urlToImage;
        image.style.width = '50%';

        div.append(image,content);
        main.append(div);

    })

}

export { apiCall, appendArticles }