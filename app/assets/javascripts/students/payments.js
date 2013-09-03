// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function getValue() {
	var total = $('#full_hours').val() * $('#hourly_cost').val()
	var totalArray = total.toString().split('');
	totalArray = totalArray.reverse();
	var output_total=""
		for (var i=totalArray.length-1; i>=0; i--){
			output_total+=totalArray[i]
			if(i%3==0 && !(i==0))
			{
					output_total+=','
			}
		}
	output_total+=" 원"
	$('#total_price').html(output_total);	
}