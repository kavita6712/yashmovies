var MainApp = function (_param)  {
    var p = {
        movieList:[],
        wrapper:$(document),
        posterURL:'/',
        backDropURL:'/'
    }

    this.init = function(_param) {
        
        for(var i in _param) {
            p[i] = _param[i];
        }
        p.wrapper.empty();
        getData();
        
    }

    function getData() {
        $.ajax({
            url:'https://backend-ygzsyibiue.now.sh/api/v1/movies/'
        }).done(function(data){
            console.log('data',data);
            p.movieList = data;
            populateData();
        }).fail(function() {
            p.wrapper.html('<div class="row"><div class="col-sm-12"><h1>No data found</h1></div></div>');
            console.error('There is some issue with API ....');
        });
    }

    function populateData() {
        
        var htmlString = '';
        p.wrapper.empty();
        var counter = 0;
        var steps = 4;

        for(var i = 0; i < p.movieList.length; i++) {
            var item = p.movieList[i];

           if(i === 0 || (i%steps === 0)) {
                htmlString += '<div class="row">';
                counter = i+3;
            }

            htmlString += '<div class="col-sm-6 col-md-3" id="'+item._id+'"> \
                                <a href="single.html?_id='+item._id+'&slug='+item.slug+'" class="hvr-shutter-out-horizontal"><img src="'+p.posterURL+item.posterURL+'" title="album-name" class="img-responsive" alt=" " /> \
                                    <div class="action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div> \
                                </a>    \
                                <div class="mid-1 agileits_layouts_mid_1_home">   \
                                    <div class="movie-text">    \
                                        <h4><a href="single.html" class="m-text">'+item.title+'</a></h4> \
                                        <h6 class="pd-t10"><a href="single.html" class="m-text gray">'+item.releaseDate+'</a></h6> \
                                    </div>  \
                                </div>  \
                                <div class="ribben">    \
                                    <p>NEW</p>  \
                                </div>  \
                            </div>  ';
            if(counter == i || ((counter >= p.movieList.length) && i == p.movieList.length-1)) {
                htmlString += '</div>';        
            }
                            
        }
        p.wrapper.html(htmlString);
    }

}