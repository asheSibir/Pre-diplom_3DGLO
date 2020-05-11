
const showDataPhot = () => {
    const command = document.getElementById('command'),
        images = command.querySelectorAll('img');
        let basicPic;

        images.forEach((img)=>{
            
            img.addEventListener('mouseover', (event)=> {
                basicPic = img.currentSrc;
                if (event){
                    img.src = img.dataset.img;
                }
            });
            img.addEventListener('mouseout', (event)=> {
                img.src = basicPic;
            }); 
        });
        
};
export default showDataPhot;