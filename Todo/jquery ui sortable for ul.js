          // jquery ui sortable for ul class and return focus to contentEditable class
				
                function makeUlSortable(){ 
                  $(".ulElemClass").sortable();
                  $(".menuListItems").on("mousedown", function() {                    
                      this.focus();
                      });                    
                }
				
			