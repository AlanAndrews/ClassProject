// console.log("hi");

// function renderButtons() {
// var itunesInfo;
// var artist;
// var queryURL = "https://itunes.apple.com/search?term=" + &limit=5"


$("#artistSearch").on("click", function(event){
    event.preventDefault();
    // console.log("search");
  
    var artist = $("#artist").val().trim();
    // console.log(artist);
  
    var itunesQueryURL = "https://itunes.apple.com/search?term="+ artist + "&limit=5";

$.ajax({
  url: itunesQueryURL,
  method: "GET"
}).then(function(response) {
    itunesInfo = response
  //console.log(itunesInfo);
  var itunesObject = JSON.parse(itunesInfo);
  // console.log(itunesObject);
  
  var itunesResults = itunesObject.results
  // console.log(itunesResults);

  for (var i=0; i<itunesResults.length; i++){
    console.log(itunesResults[i].artistName);
    console.log(itunesResults[i].trackName);
    console.log(itunesResults[i].artistViewUrl);
    console.log(itunesResults[i].trackViewUrl);
  }
});
} );


// }
//   var itunesObject = JSON.parse(itunesInfo);
//   console.log(itunesObject);


// var itunesInfo;
// $.ajax({
//     url: "https://itunes.apple.com/search?term=Whitney&limit=5",
//     method: "GET"
//   }).then(function(response) {
//     itunesInfo = response
//     console.log(itunesInfo);
//   });

  

// Using jQuery
// $("#artistSearch").on("click", function(event){
//   event.preventDefault();

//   var artist = $("#artist").val().trim();
//   var wikipedia
 
//   var wikipediaURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + artist + "&key=" + youTubeAPIkey;

// var wikiData;
// $.ajax( {
// url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2",
// // data: queryData,
// dataType: 'jsonp',
// type: 'POST',
// headers: { 'Api-User-Agent': 'Example/1.0' },
// // success: function(data) {
// //    // do something with data
// // }
// }).then(function(response) {
//   wikiData = response;
//   console.log(wikiData);

// });

// });



// var wikiData;
// $.ajax({
//       url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2",
//       method: "GET"
//     }).then(function(response) {
//       wikiData = response
//       console.log(wikiData);
// });



// $("#artistSearch").on("click", function(event){
//   event.preventDefault();

// // https://www.youtube.com/watch?v=
// var artist = $("#artist").val().trim();
// var youTube
// var youTubeAPIkey = "AIzaSyDXIkTs44eGNfH2r9jIyECiQgv4dJ6_RWM";
// var youTubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + artist + "&key=" + youTubeAPIkey;
// $.ajax({
//   // url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&key=AIzaSyDXIkTs44eGNfH2r9jIyECiQgv4dJ6_RWM",
//   url: youTubeURL,
//   method: "GET"
// }).then(function(response) {
//     youTube = response
//     // console.log(youTube);
//     var youTubeVideos = youTube.items;
//     // console.log(youTubeVideos);
//     for (var i=0; i<youTubeVideos.length; i++){
//       // console.log(youTubeVideos[i].snippet.title);
//       // console.log("https://www.youtube.com/watch?v=" + youTubeVideos[i].id.videoId);
    
//     }
// });
// // var youTubeVidEmbed = youTube.items.

// });


// var apiKey = "kJgzQXUSlb55GtDLH5Qh4BI1eZYNZvcp";

// var ticketMasterQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=3&keyword="+ artist + "&apikey=" + apiKey;

//  $.ajax({
//    type:"GET",
//    url:ticketMasterQueryURL,
//    async:true,
//    dataType: "json",
//    success: function(ticketMasterResults) {
//                console.log(ticketMasterResults);
//                var ticketMasterEvents = ticketMasterResults._embedded.events;
//                console.log(ticketMasterEvents);
//                // Parse the response.
//                // Do other things.
//                 for (var i=0; i<ticketMasterEvents.length; i++){
//                   console.log(ticketMasterEvents[i].name);
//                   console.log(ticketMasterEvents[i].url);

//                 }
//             },
//    error: function(xhr, status, err) {
//                // This time, we do not end up here!
//             }
//  });


// $(document).on("click", ".tunes", displayItunesInfo);




// $("#artistSearch").on("click", function(event){
//   event.preventDefault();
//   // console.log("search");

//   var artist = $("#artist").val().trim();
//   // console.log(artist);

//   var apiKey = "kJgzQXUSlb55GtDLH5Qh4BI1eZYNZvcp";
 
  
//   var ticketMasterQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=3&keyword="+ artist + "&apikey=" + apiKey;
  
//   $.ajax({
//     type:"GET",
//     url:ticketMasterQueryURL,
//     async:true,
//     dataType: "json",
//     success: function(ticketMasterResults) {
//                     //  console.log(ticketMasterResults);
//                      var ticketMasterEvents = ticketMasterResults._embedded.events;
//                     //  console.log(ticketMasterEvents);
//                      // Parse the response.
//                      // Do other things.
//                       for (var i=0; i<ticketMasterEvents.length; i++){
//                         // console.log(ticketMasterEvents[i].name);
//                         // console.log(ticketMasterEvents[i].url);
//                         var listItem = $("<li>");
//                         var tourDates = ("<a>" + ticketMasterEvents[i].name + "</a>");
//                         $(tourDates).attr("href", ticketMasterEvents[i].url);
//                         listItem.append(tourDates);

//                         $(tourDates).appendTo("#tour-dates");
                        
//                       }




//                   },
//     error: function(xhr, status, err) {
//                 // This time, we do not end up here!
//              }
//   });

//     } );


  
