// creating a button thats returns a  random link
// math.random seems like a good place to start
// ill start off with a function
// create a nested array with link as the link:
// we'll see what else i need :)
//

// const randomLinks = [
    
    // ]
    const randomButton = document.querySelector('#random-link')
    const linkArr = document.querySelectorAll('.link')
    
    

    function getRandomLink(){
        alert(linkArr[Math.floor(Math.random() * linkArr.length)])
    }
    randomButton.addEventListener('click', getRandomLink)
