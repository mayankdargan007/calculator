$(document).ready(function(){
	var operators=[];
	var operands=[];
	value='';
	$('body').on('click','.numbers',function(){
	   temp=$(this).val();
	   if(temp=='.'){
				if(value.indexOf(".")==-1){
				    if(value.length=="0"){
						value="0"+""+temp+"";
						$('#screen').val(value);
							}
				else {
					value=value+temp;
					$('#screen').val(value);
					}
		}
		  
	}
	   else{
	   value=value+temp;
		$('#screen').val(value);
		 }
})
	$('body').on('click','.operators',function(){
		$('body').on('click','.operators',function(){ 
			operators.shift();
			operators.push($(this).val());
		})

		$('.history').toggle().show();
		$('.history').val($(this).val());
		$('.history').fadeOut("slow");
		if(value!=''){
			operands.push(value);
				value='';	
			}
		if(operands[0]!=null){
			operators.push($(this).val());
			}
		if(operators[0]=='='){
					operators.shift();
					$('#screen').val(operands[0]);
					}
		if(operands[1]!=null){
			if(operators[0]=='+'){
				operands[0]=(Number(operands[0])+Number(operands[1])).toFixed(2);
				$('#screen').val(operands[0]);
				operands.pop();
				}
			if(operators[0]=='-'){
				operands[0]=(Number(operands[0])-Number(operands[1])).toFixed(2);
				$('#screen').val(operands[0]);
				operands.pop();
					}
			if(operators[0]=='*'){
				operands[0]=Number(operands[0])*Number(operands[1]).toFixed(2);
				$('#screen').val(operands[0]);
				operands.pop();
				}
			if(operators[0]=='/'){
				operands[0]=Number(operands[0])/Number(operands[1]).toFixed(2);
				$('#screen').val(operands[0]);
				operands.pop();
				}
			operators.shift();
			}
	})
	$('body').on('click','.clr',function(){
		for(i=operands.length;i>=0;i--){
			operands.pop();
			}
		for(j=operators.length;j>=0;j--){
			operators.pop();
			}
		$('#screen').val('');
		$('.history').val('');
		value='';
	})
	
})

