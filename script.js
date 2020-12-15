
            function searchFunction(){
                var giphy_name=document.getElementById("search").value;
                var url="https://api.giphy.com/v1/gifs/search?api_key=EIkbwVRNCK8YVEfOVdMHG3ujfSCFjGVO&q="+giphy_name+"&limit=1";
                console.log(url);
                fetch(url)
                .then(response=>response.json())
                .then(content=>{
                    console.log(content.data)
                    document.getElementById("gif").src=content.data[0].images.fixed_height_still.url;
                    document.getElementById("gif").props=content.data[0].images.downsized.url;
                })
                .catch((err)=>console.log(err));
            }
            function playPause(){
                var temp=document.getElementById("gif").src;
                document.getElementById("gif").src=document.getElementById("gif").props;
                document.getElementById("gif").props=temp;
            }
            function randomFunction() {
                var url="https://api.giphy.com/v1/gifs/random?&api_key=dc6zaTOxFJmzC&limit=1";    
                fetch(url)
                .then(response=>response.json())
                .then(content=>{
                    console.log(content.data);
                    document.getElementById("gif").src = content.data.images.fixed_height_still.url;
	                document.getElementById("gif").props = content.data.images.downsized.url;
  })
  .catch((err) => alert(err));
   
}
                