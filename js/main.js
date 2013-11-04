(function($) {
	$(function() {

		// Top Level Menu Expansion
		$('#menu-expand').click(function(e) {
			var mainExpandButton = $(this);
			var menuContainer = $('#main-navigation');

			menuContainer.toggleClass('active');

			var contents = $(mainExpandButton).contents();
			if (menuContainer.hasClass('active'))
				contents[contents.length - 1].nodeValue = ' hide menu';
			else
				contents[contents.length - 1].nodeValue = ' show menu';

			return false;
		});

		// Second Level Menu Expansion (with span)
		$('#main-navigation .expand').click(function(e) {
			var subExpandButton = $(this);
			var buttonParent = subExpandButton.closest('.has-submenu');

			buttonParent.toggleClass('active');

			if (buttonParent.hasClass('active'))
				subExpandButton.text('-');
			else 
				subExpandButton.text('+');

			return false;
		});

		// Activating Tabs
		$('.tabs li a').click(function(e) {
			var tabButton = $(this);
			var tabs = $('.tabs li a');

			tabs.removeClass('active');
			tabButton.addClass('active');

			return false;
		});

		// FitVids
		$(".video-wrapper").fitVids();

        if(!('placeholder' in document.createElement('input'))){
            // HTML5 Placeholders in IE9 and below
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        }

		// Custom Form Elements
		$('input').iCheck({
		  checkboxClass: 'icheckbox_square-grey',
		  radioClass: 'iradio_square-grey',
		  increaseArea: '20%' // optional
		});

		// Custom Select Boxes
		$('select').each(function() {

		    var $this = $(this),
		        numberOfOptions = $(this).children('option').length;

		    $this.addClass('s-hidden');

		    $this.wrap('<div class="select"></div>');

		    $this.after('<div class="styled-select"></div>');

		    var $styledSelect = $this.next('div.styled-select');

		    $this.val() ? $styledSelect.text($this.children('option:selected').text()) : $styledSelect.text($this.children('option').eq(0).text());

		    var $list = $('<ul />', {
		        'class': 'options'
		    }).insertAfter($styledSelect);

		    for (var i = 0; i < numberOfOptions; i++) {
		        $('<li />', {
		            text: $this.children('option').eq(i).text(),
		            rel: $this.children('option').eq(i).val()
		        }).appendTo($list);
		    }

		    var $listItems = $list.children('li');

		    $styledSelect.click(function(e) {
		        e.stopPropagation();
		        $('div.styled-select.active').each(function() {
		            $(this).removeClass('active').next('ul.options').hide();
		        });
		        $(this).toggleClass('active').next('ul.options').toggle();
		    });

		    $listItems.click(function(e) {
		        e.stopPropagation();
		        $styledSelect.text($(this).text()).removeClass('active');
		        $this.val($(this).attr('rel'));
		        $list.hide();
		        $this.change();
		    });

		    $(document).click(function() {
		        $styledSelect.removeClass('active');
		        $list.hide();
		    });

		});
	});
})(jQuery);