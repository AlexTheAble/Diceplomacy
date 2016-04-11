$("#player-modal").modal("show")

$("#player-modal-start").click( function(){
	
		var leader = $("#player-modal-form-leader-input").val()
		var nation = $("#player-modal-form-nation-input").val()

		if(leader == "" || nation == "")
		{
			if(leader == "")
			{
				$("#player-modal-form-leader-label").addClass("label-danger")
			}

			if(nation == "")
			{
				$("#player-modal-form-nation-label").addClass("label-danger")
			}
		}

		else
		{
			//load GLOBAL player variable
			loadPlayer(leader, nation)
			//Show Score on UI
			updatePlayerScore()
			
			$("#player-modal").modal("toggle")

		}

	}

)