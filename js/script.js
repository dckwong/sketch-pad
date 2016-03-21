var height;
var width;
function makeDivs(){
    height = prompt("Please enter the height");
    width = prompt("Please enter the width");
    if(height === null && width === null){
	height = 2;
	width = 2;
    }
    else if(width === null){
	width = 2;
    }
    else if(height === null){
	height = 2;
    }
    var gridwidth = 960/width-2;
    var gridheight = 960/height-2;
    for(var i=0; i<height;i++){
	for(var j=0;j<width;j++){
	    $('#container').append("<div class='grid'></div>");
	}
    }
    $('.grid').width(gridwidth);
    $('.grid').height(gridheight);
}
function removeDivs(){
    $('.grid').remove();
}

$(document).ready(function(){
    makeDivs();
    $("#button").click(function(){
	removeDivs();
	makeDivs();
	regular();
    });
    $("#default").click(function(){
	regular();
    });
    $("#random").click(function(){
	randomColors();
    });
    $("#trail").click(function(){
	clear();
	trail();
    });
    $("#clear").click(function(){
	clear();
    });
    regular();
})

function clear(){
    $('div > .grid').css('background-color','#fff');
}

function trail(){
    $('div > .grid').hover(function(){
	$(this).removeClass('trail');
	$(this).css('background-color','#000');
    },function(){
	$(this).addClass('trail');
	$(this).css('background-color','#fff');
    });
}

function regular(){
    $('div > .grid').hover(function(){
	$(this).css('background-color','#008B8B');
    });
}
function randomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function randomColors(){
    $('div > .grid').hover(function(){
	var curr = $(this).css('background-color');
	$(this).css('background-color',randomColor());	   
    });
}

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for(var i=1; i<=3; i++){
	parts[i] = parseInt(parts[i]).toString(16);
	if(parts[i].length == 1) parts[i] = '0'+parts[i];
    }
    color = '#'+parts.join('');
    return color;
}
