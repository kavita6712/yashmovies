var SinglePage = function (_param)  {
    var p = {
        id:'',
        movieData:{},
        wrapper:$(document),
        posterURL:'/',
        backDropURL:'/'
    }

    this.init = function(_param) {
        
        for(var i in _param) {
            p[i] = _param[i];
        }

        p.id = GetURLParameter('_id');
        console.log('p.id ' ,p.id);
        getData();
        
    }

    function getData() {
        $.ajax({
            url:'https://backend-ygzsyibiue.now.sh/api/v1/movies/'+p.id
        }).done(function(data){
            console.log('data',data);
            p.movieData = data;
            populateData();
        }).fail(function() {
            p.wrapper.html('<div class="row"><div class="col-sm-12"><h1>No data found</h1></div></div>');
            console.error('There is some issue with API ....');
        });
    }

    function populateData() {
        
        p.wrapper.empty();
        var htmlString = '<div class="col-sm-12 pd0">  \
                                <div class="song">  \
                                    <div class="video-grid-single-page-agileits">   \
                                        <div data-video="dLmKio67pVQ" id="video">   \
                                            <img src="'+p.backDropURL+p.movieData.backdropURL+'" alt="" class="img-responsive"> <div id="play" style=""></div> \
                                        </div>  \
                                    </div>  \
                                    <div class="movie-content container"> \
                                        <div class="col-xs-4 col-sm-2 movie-img">    \
                                            <a href="single.html" class="hvr-shutter-out-horizontal">   \
                                                <img src="'+p.posterURL+p.movieData.posterURL+'" title="album-name" class="img-responsive" alt=" ">    \
                                            </a>   \
                                        </div>  \
                                        <div class="col-xs-6 col-sm-8 song-info">    \
                                            <h3>'+p.movieData.title+'</h3>  \
                                            <p>'+p.movieData.releaseDate+'</p>  \
                                        </div>  \
                                        <div class="col-xs-12 col-sm-12 pd-tb20"> \
                                            <div class="movie-desc">    \
                                            '+p.movieData.plot+'    \
                                            </div>  \
                                        </div>  \
                                    </div>  \
                                </div>  \
                            </div>  \
                            <div class="clearfix"> </div>';

        p.wrapper.html(htmlString);
    }


    function GetURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return decodeURIComponent(sParameterName[1]);
            }
        }
    }
}
