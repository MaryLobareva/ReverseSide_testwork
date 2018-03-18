$(document).ready(function() {
	// POP UP

	$('[data-popup-open]').on('click', function(){
	  $('[data-popup-body]').toggleClass('popup-show');
	});
	$('[data-popup-body] [data-popup-close]').on('click', function(){
	  $('[data-popup-body]').removeClass('popup-show');
	});


	// END POP UP 
	// TABS
		$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('open');
		$('.tabs-cont').removeClass('open');

		$(this).addClass('open');
		$("#"+tab_id).addClass('open');
	})
	// END TABS
	// table
	$('#table').DataTable( {
		paging: false,
		searching: false,
		info: false,
		ordering: false
	} );
	// end table

	// graph

	Highcharts.chart('graph', {
		chart: {
			type: 'area',
			backgroundColor: '#262626'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			type: 'datetime',
			tickInterval : 1 * 3600 * 1000, 
			dateTimeLabelFormats : { day : '%H:%M' }
	 
		},
		yAxis: {
			title: {
				text: ''
			},
			labels: {
				formatter: function () {
					return this.value / 50;
				}
			}
		},
		plotOptions: {
			area: {
				marker: {
					enabled: true,
					symbol: 'square',
					radius: 1,
					states: {
						hover: {
							enabled: true
						}
					}
				}
			},
		},
		series: [{
			color: '#cb3e4b',
			name: 'adSpoiler',
			fillColor: {
                linearGradient: {
                    x1: 1,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
	                [0, '#cb3e4b'],
	            	[1, '#262626']
                ]
            },
			pointStart: new Date().getTime(),
			pointInterval: 1 * 3600 * 1000, 
			data: [1.5 * 60 * 1000, 1.5 * 60 * 1000, .75 * 60 * 1000, .6 * 60 * 1000,.5 * 60 * 1000,.3 * 60 * 1000,.3 * 60 * 1000,.3 * 60 * 1000,.3 * 60 * 1000,.3 * 60 * 1000,.3 * 60 * 1000,],
		}, {
			color: '#3090c9',
			name: 'Пересечение',
			fillColor: {
                linearGradient: {
                    x1: 1,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
	                [0, '#3090c9'],
	            	[1, '#262626']
                ]
            },
			pointStart: new Date().getTime(),
			pointInterval: 1 * 3600 * 1000, 
			data: [1 * 60 * 1000, 1.3 * 60 * 1000, .6 * 60 * 1000, .2 * 60 * 1000,.2 * 60 * 1000,.2 * 60 * 1000,.2 * 60 * 1000,.2 * 60 * 1000,.2 * 60 * 1000,.2 * 60 * 1000,.2 * 60 * 1000,],
		}]
	});
	// END graph


});



