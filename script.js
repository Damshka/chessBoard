// начальные параметры для таблицы
var cols = 9, rows = 9,
table_width = 600, table_height = 600,
color = '#656565', active_color_player1 = '#c85959', active_color_player2='#0acccc', arr=[],
players_flag = 0, start_flag = 0, start_cell = '', finish_cell = '' ;

function createTable(){
	var table = document.createElement('table');

	table.setAttribute('width', table_width);
	table.setAttribute('height', table_height);
	
	document.body.appendChild(table);

	for (var i = 0; i < rows; i++) {
       var tr = document.createElement("tr");

        for (var j = 0; j < cols; j++) {
        var  td = document.createElement("td");
                      
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }

      console.log('test1');
      
 
   function AddColors(){

       var tr_0 = table.childNodes[0];
       var tr_1 = table.childNodes[1];
       var tr_all = table.childNodes;
       var tr_2 = table.childNodes[2];
       var tr_7 = table.childNodes[7];
       var tr_8 = table.childNodes[8];
      	// console.log(tr_all);
       var td_0 = tr_0.childNodes;
       var td_1 = tr_1.childNodes;
       var td_2 = tr_2.childNodes;
       var td_7 = tr_7.childNodes;
       var td_8 = tr_8.childNodes;
       



		for (var y = 0; y < tr_all.length; y++) {
			   td_0[y].style.backgroundColor = '#fff';
		       var td_all = tr_all[y].childNodes;
		        


		
			if (y % 2) {
			for(var even_cols = 2; even_cols<td_all.length; even_cols = even_cols+2){
					td_all[even_cols].style.backgroundColor = color;
					
			}
		}

		else if (y%2 == 0){

			for(var odd_cols = 1; odd_cols<td_all.length; odd_cols = odd_cols+2){
					td_all[odd_cols].style.backgroundColor = color;
							
			}
		}


	
		text_num = document.createTextNode(y);
		console.log(text_num);
      	td_all[0].appendChild(text_num);


		 }



		var alph=64, a=65;
      	for (var z = 1; z < td_0.length; z++) {
      	alph++;
      	text = document.createTextNode(String.fromCharCode(alph));
      	td_0[z].appendChild(text);
     	
	}

	// записываем массив done!
		 for(i=1; i<rows; i++){
		    arr[i] = new Array();
		    for(j=1; j<cols; j++){
		    	
		     arr[i][j] = String.fromCharCode(a) + i;
		     a++;
		 	
		    }
		    a=65;
		}




function AddFigures(){			      
	
	 
		// запись фигур

	for (var z=1; z < td_2.length; z++ ){
		black_chess_pawn = document.createTextNode('\u265F');
		td_2[z].appendChild(black_chess_pawn);

	}
	

	for (var x=1; x < td_7.length; x++ ){
		white_chess_pawn = document.createTextNode('\u2659');
		td_7[x].appendChild(white_chess_pawn);
		
	}

	white_chess_king = document.createTextNode('\u2654');
	white_chess_queen = document.createTextNode('\u2655');
	white_chess_rook = document.createTextNode('\u2656');
	white_chess_bishop = document.createTextNode('\u2657');
	white_chess_knight = document.createTextNode('\u2658');
	white_chess_rook_1 = document.createTextNode('\u2656');
	white_chess_bishop_1 = document.createTextNode('\u2657');
	white_chess_knight_1 = document.createTextNode('\u2658');
	black_chess_king = document.createTextNode('\u265A');
	black_chess_queen = document.createTextNode('\u265B');
	black_chess_rook = document.createTextNode('\u265C');
	black_chess_bishop = document.createTextNode('\u265D');
	black_chess_knight = document.createTextNode('\u265E');
	black_chess_rook_1 = document.createTextNode('\u265C');
	black_chess_bishop_1 = document.createTextNode('\u265D');
	black_chess_knight_1 = document.createTextNode('\u265E');

	td_8[1].appendChild(white_chess_rook);
	// td_8[1].onclick = function(){
	// 	alert('hello!');
	// }
	td_8[2].appendChild(white_chess_knight);
	td_8[3].appendChild(white_chess_bishop);
	td_8[4].appendChild(white_chess_queen);
	td_8[5].appendChild(white_chess_king);
	td_8[6].appendChild(white_chess_bishop_1);
	td_8[7].appendChild(white_chess_knight_1);
	td_8[8].appendChild(white_chess_rook_1);

	td_1[1].appendChild(black_chess_rook);
	td_1[2].appendChild(black_chess_knight);
	td_1[3].appendChild(black_chess_bishop);
	td_1[4].appendChild(black_chess_queen);
	td_1[5].appendChild(black_chess_king);
	td_1[6].appendChild(black_chess_bishop_1);
	td_1[7].appendChild(black_chess_knight_1);
	td_1[8].appendChild(black_chess_rook_1);


	var div = document.createElement('div');
			document.body.appendChild(div);



	for (z=1; z<tr_all.length;z++) {
			var td_all = tr_all[z].childNodes;


		for(y=1; y<td_all.length; y++){

		    	var computedStyle = getComputedStyle(td_all[y]);
		       	var backgroundComputedStyle = computedStyle.backgroundColor;

 		

					var count = 0;
					var tmp, temp, temp_figure;
					var color_white = '#fff';
					// console.log(color, color_white);

		td_all[y].onclick = function cell_click(){


			        computedStyle = getComputedStyle(this);
				    backgroundComputedStyle = computedStyle.backgroundColor;
					var figure = this.innerHTML;
            		console.log(figure, typeof figure);

            		if(figure==='' && start_flag === 0 ){
            			alert('Start with figure!');
					}
					else {

                        if (players_flag == 0) {
                            if (start_flag == 0) {
                                this.style.border = '2px solid ' + active_color_player1;

                                start_flag = 1;

                            }
                            else {
                                this.style.backgroundColor = active_color_player1;
                                players_flag = 1;
                                start_flag = 0;
                            }
                        }
                        else {
                            if (start_flag == 0) {
                                this.style.border = '2px solid ' + active_color_player2;
                                start_flag = 1;
                            }
                            else {
                                this.style.backgroundColor = active_color_player2;
                                players_flag = 0;
                                start_flag = 0;
                            }
                        }


  		           var newcomputedStyle = getComputedStyle(this);
		       	   var newbackgroundComputedStyle = computedStyle.backgroundColor;

  		           	tmp = this;
					count ++;

                        //нужно, чтобы другой игрок начинал со своей фигуры, а действия предыдущего остались, как были


		       	     if (count>1) {
						temp_figure = temp.innerHTML;
						temp.style.backgroundColor = prevbackgroundComputedStyle;
		       	    	temp.style.border = 'none';


		       	    }

                        if(temp_figure !== undefined) {
                            temp.innerHTML = '';
		       	     }

		       	    temp = tmp;
		       	    prevbackgroundComputedStyle = backgroundComputedStyle;


		       	    if(temp_figure !== undefined) {

		       	    	tmp.innerHTML = temp_figure;
		       	    	console.log(players_flag, 'player');

					}

		       	    for(i=1; i<tr_all.length; i++){
		       	    		td_all = tr_all[i].childNodes;
						     for(j=1; j<td_all.length; j++){


						    	var num_of_cell = arr[i][j];
						    	td_all[j].setAttribute('id', num_of_cell);

						    }

						}

		       	    if(this) {
                        var div_result;

                        if (players_flag === 0) {


                            if (start_flag === 1) {
                                start_cell = this.getAttribute('id');
                                // console.log(start_cell, 'start');
                                // div_result = document.createTextNode(start_cell +  '- player 2');

                            }
                            else {
                                // console.log(start_flag, 'start flag');
                                div_result = document.createTextNode(start_cell + ' : ' + this.getAttribute('id') + ' - player 2');
                                var br = document.createElement("br");
                                div.appendChild(div_result);
                                div.appendChild(br);
                            }


                        }
                        else {

                            if (start_flag === 1) {
                                start_cell = this.getAttribute('id');
                                // console.log(start_cell, 'start');
                                // div_result = document.createTextNode(start_cell +  '- player 2');

                            }
                            else {
                                // console.log(start_flag, 'start flag');
                                div_result = document.createTextNode(start_cell + ' : ' + this.getAttribute('id') + ' - player 1');
                                var br = document.createElement("br");
                                div.appendChild(div_result);
                                div.appendChild(br);
                            }
                        }


                    }


		       	    }



		 }








	}
	
}


	
}

AddFigures();

}

AddColors();

}

createTable();




