$(document).ready(function(){
    $(document).on('click', '#submit', function(){
        // Here, we are going to make sure they select all the fields. 
        console.log("Submit button clicked");
        function validateForm(){
            var isValid = true;
            $('.form-control').each(function(){
                if($(this).val() === ""){
                    isValid = false;
                }
            });

            $('.chosen-select').each(function(){
                if($(this).val() === ""){
                    isValid = false
                }
            });
            return isValid;
        }
        if(validateForm()){

            // This creates a new object with the data that was pulled from the fields. 
			var newSurveyArray = [
				parseInt($("#q1").val().trim()),
				parseInt($("#q2").val().trim()),
				parseInt($("#q3").val().trim()),
				parseInt($("#q4").val().trim()),
				parseInt($("#q5").val().trim()),
				parseInt($("#q6").val().trim()),
				parseInt($("#q7").val().trim()),
				parseInt($("#q8").val().trim()),
				parseInt($("#q9").val().trim()),
				parseInt($("#q10").val().trim())
				];
			
			var newSurveyResponse = {
				name: $("#name").val().trim(),
				photo: $("#photo").val().trim(),
				score: newSurveyArray
			};


            $.post(window.location.origin + "/api/friends", newSurveyResponse).done(function(bestMatch){
                $('#matchName').text(bestMatch.name);
				$('#matchImg').attr("src", bestMatch.picture);
				$('#resultsModal').modal('toggle');
            });
        }
        else{
            $("#errorModal").modal('toggle');
        }
    });
});