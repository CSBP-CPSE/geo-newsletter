init();

function init(){
  var lang = document.getElementById("lang").getAttribute("value");
  var divisions = ['AGRI','EESD','MMWTD','ISTD','RSID','TTD','TECH'];
  
  d3.csv('nov_articles.csv', function(row){
  		// Add "Total Average" value as a map layer
  		if (row["lang"] == lang) {
        for (var i = 0; i < divisions.length; i++) {
          if (row["topic"] == divisions[i]) {
            if (!document.getElementById(divisions[i])) {
              $('#articles').append('<h2 class="pt-5" id="'+divisions[i]+'">'+row["division"]+'</h2>');
              $('#buttons').append('<a class="p-3 col-2 text-center border" href="#'+divisions[i]+'">'+row["division"]+'</a>');
            }
            var card = '<div class="card mt-2"><div class="card-body"><h3 class="card-title">';
            card += '<a href="'+row["source"]+'" target="_blank">"'+row["title"]+'"</a></h3>'; 
            card += '<p class="card-text">'+row["description"]+'</p></div></div></div>'
            $('#articles').append(card);   
          }  
        }
  		}
  });
}

// <div class="container m-5">
//   <h2 id='EESD'>Environment and Energy</h2>
//   <div class="card mt-2">
//     <div class="card-body">
//       <h3 class="card-title"><a href="https://cleantechnica.com/2020/10/20/convolutional-neural-networks-may-allow-mapping-of-every-tree-on-earth/" target="_blank">Convolutional Neural Networks May Allow Mapping of Every Tree on Earth</a></h3>
//       <p class="card-text">Advancement in the use of CNNs to detect trees. Case study presented in West Africa. Though notably different than Canada’s geography, general techniques can still be applied.</p>
//     </div>
//   </div>
// </div>
