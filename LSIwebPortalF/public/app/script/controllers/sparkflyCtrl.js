angular.module('lsi').controller("sparkflyCtrl", function ($scope, sparkflyService,$cookieStore) {
    $scope.currentUser = $cookieStore.get('globals').currentUser;
    

    $scope.cStoreList = [{ 'id': '1', 'name': 'Sales Information' }, { 'id': '2', 'name': 'Redemptions by Offer' }, { 'id': '3', 'name': 'Redemptions by Channel' }, { 'id': '4', 'name': 'Redemptions by Day' }, { 'id': '5', 'name': 'Redemptions by Location' }, { 'id': '6', 'name': 'Transaction Information' }, { 'id': '7', 'name': 'Landing Page Impression' }, { 'id': '8', 'name': 'Download Reports' }]
    $scope.selectedMode = { v: $scope.cStoreList[0].name };
    $scope.getCStoreListValue = $scope.selectedMode.v;

    /*datepicker starts*/
     
    $scope.dates = {startDate: moment().subtract(183, 'day'), endDate: moment()};

    $scope.chartLoaded = false;
    $scope.chartDivLoaded = false;
    $scope.noDateFound = false;
    $scope.myTansData1 = false;
    $scope.myTansData2 = false;
    $scope.loader = true;

    $scope.ranges = {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 days': [moment().subtract(7, 'days'), moment()],
        'Last 30 days': [moment().subtract(30, 'days'), moment()],
        'This month': [moment().startOf('month'), moment().endOf('month')]
    };
    /*datepicker ends*/

    $scope.getCStoreList = function (selectedMode, d) {
		$scope.dates = d;
        $scope.getCStoreListValue = selectedMode;		
        $scope.getDate();
    };

    /* ============ Starts API Calls ========================= */

    $scope.getDate = function () {
        $scope.loader = true;
        $scope.chartDivLoaded = true;
        $scope.chartLoaded = false;
        $scope.noDateFound = false;
        $scope.myTansData1 = false;
        $scope.myTansData2 = false;
        $scope.authErrorStatus = false;

        // This time convertion is used in reports
        $scope.startDateFormat = moment(this.dates.startDate).format("MM/DD/YYYY");
        $scope.endDateFormat = moment(this.dates.endDate).format("MM/DD/YYYY");          
		
        // Time in unix seconds.
        var startDate = moment.utc(this.dates.startDate).startOf('day').format('X');
        var endDate = moment.utc(this.dates.endDate).endOf('day').format('X');    
        if (startDate == NaN || endDate == NaN) return;

        var dataArray = [];
        var seriesArray = [];
        var categoriesArray = [];

        if ($scope.getCStoreListValue == "Landing Page Impression") {
           $scope.getLandingPageImpression(startDate, endDate);
        }else {
         $scope.getAccountLevel(startDate, endDate);           
        }
    };

    
    $scope.getLandingPageImpression = function(startDate, endDate){
         sparkflyService.getImpressionsLevel(startDate, endDate, function (response) {                
                $scope.loader = false;
                var data_items = response.report.impressions.data_items;
                var series = response.report.impressions.series;
                if (data_items.length == 0 && series.length == 0) {
                    $scope.noDateFound = true;
                    $scope.chartLoaded = false;
                }
                else {
                    $scope.noDateFound = false; 
					$scope.chartLoaded = true;				
                  				   
				   	var n, i, r, a, o, s, l, u, c, d, h, p, f, g, m;
					for (g = [], s = 0, h = 0, p = series, a = 0, c = series.length; c > a; a++) {
						for (r = p[a], m = [], f =data_items[s], u = 0, d = f.length; d > u; u++) l = f[u], i = l[0], n = l[1], m.push([Date.parse(i), Number(n)]);
						
						m = m.sort(), g.push({
							name: r.name + " - " + r.value,
							data: m,
						   // visible: !1
						}), g[s].name.length > h && (h = g[s].name.length), s += 1
					}	
					
					 $scope.chartOptions = {
                       chart: {
                            type: 'line',
                            height: 3 * g.length + 400
                        },
                        title: {
                            text: 'Unique Visits'
                        },
                       xAxis: [{
							type: "datetime",
							title: {
								text: null
							},
							dateTimeLabelFormats: {
								month: "%e. %b",
								year: "%b"
							}
						}],
						yAxis: [{
							title: {
								text: "Unique Visits"
							},
							min: 0
						}],
						series: g,
						legend: {
							layout: "horizontal",
							label_formatter: function() {
								return this.name
							},
						
						},
						tooltip: {
							formatter: function () {
								return  '' + Highcharts.dateFormat('%B %e, %Y',  this.x) +'<br> Impressions : '+ this.y ;
							}
						}
                }
				}
        });
    };

    $scope.getAccountLevel = function(startDate, endDate){
        sparkflyService.getAccountLevel(startDate, endDate, function (res) {
            $scope.loader = false;
            switch ($scope.getCStoreListValue) {
                case 'Sales Information': {$scope.loadSalesInformation(res.sData);}break;
                case 'Redemptions by Offer': {$scope.loadRedemptionsOffer(res.sData);}break;
                case 'Redemptions by Channel': {$scope.loadRedemptionsChannel(res.sData);}break;
                case 'Redemptions by Day': {$scope.loadRedemptionsDay(res.sData);}break;
                case 'Redemptions by Location': {$scope.loadRedemptionsLocation(res.sData);} break;
                case 'Transaction Information': {$scope.loadTransactionInformation(res.sData);}break;
                case 'Download Reports': {$scope.loadDownloadReports(startDate, endDate,res.sData);}break;
                default: {}
            }
        });
    };

    $scope.loadSalesInformation = function(res){                             
        $scope.chartLoaded = true;
        var hr_data = JSON.stringify(res.hourly_sales);
        if (hr_data == '[0,0,0,0,0]') {
            $scope.noDateFound = true;
            $scope.chartLoaded = false;
        }
        else {
            $scope.noDateFound = false;
            var dataArray = res.hourly_sales;
            var dataArraywithSymbol = [];
            for (i = 0; i < dataArray.length; i++) {
                var newElemt = "$" + dataArray[i];
                dataArraywithSymbol.push(newElemt);
            }
            $scope.chartOptions = {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: '<html><b>Sales: $' + res.total_purchase_amount + '</b></html>'
                },
                xAxis: {
                    categories: ['open-11', '11-2', '2-4', '4-8', '8-close']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total Sales',
                        categories: dataArraywithSymbol
                    },
                    labels: {
                        overflow: 'justify',
                        formatter: function () {
                            return '$' + Math.abs(this.value) + '.00';
                        }
                    }
                },
                series: [{
                    name: 'Sales',
                    data: dataArray
                }],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            chart: {
                                height: 300,
                                width: 300
                            },
                            subtitle: {
                                text: null
                            }
                        }
                    }]
                }
            };
        }
        var resultData = res.item_counts;
        if (resultData == '0' || res.number_of_items == '0') {
            $scope.noDateFound = true;
            $scope.chartLoaded = false;
        } else {
            $scope.noDateFound = false;
            var result = '';
            $.each(resultData, function (keyVal, value) {
                result = value;
            });
            $scope.chartOptionsTotal = {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: '<html><b>Total Items: ' + res.number_of_items + '</b></html>'
                },
                xAxis: {
                    categories: ['Category']
                },
                yAxis: {
                    title: {
                        text: 'Total Item Sales',
                        categories: res.hourly_sales
                    }
                },
                series: [{
                    name: 'Items',
                    data: [result[0]]
                }],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            chart: {
                                height: 300,
                                width: 300
                            },
                            subtitle: {
                                text: null
                            }
                        }
                    }]
                }
            };
        }                            
    };

    $scope.loadRedemptionsOffer = function(res){
        $scope.chartLoaded = true;
		$scope.redemOffData={};
            var resultData = JSON.stringify(res.redemptions_by_offer);
            if (resultData.length == 2) {
                $scope.noDateFound = true;
                $scope.chartLoaded = false;
            }
            else {
                $scope.noDateFound = false;
					var n, i, r, a, o, s, l, u;
				s = [], o = res.redemptions_by_offer;
				for (a in o) {
					i = o[a], l = [], u = 0;
					for (r in i) n = i[r], l.push([Date.parse(r), n]), u += n;
					l = l.sort(), s.push({
						name: a + " - " + u,
						data: l
					})
				}			
			
                $scope.chartOptions = {
                    chart: {
                        type: "line"
                    },
                    title: {
                    text: ""
                },
                xAxis: [{
                    type: "datetime",
                    title: {
                        text: null,
                        dateTimeLabelFormats: {
                            month: "%e. %b",
                            year: "%b"
                        }
                    }
                }],
                yAxis: [{
                    min: 0,
                    title: {
                        text: "Redemptions"
                    }
                }],
                series: s,
                legend: {
                    layout: "vertical",
                    label_formatter: function() {
                        return this.name
                    }
                },
                tooltip: {
                    formatter: function () {
                        return  '' + Highcharts.dateFormat('%B %e, %Y',  this.x) +'<br> Redemptions : '+ this.y ;
                    }
                }
                };
            }
    };
    $scope.loadRedemptionsChannel = function(res){
        $scope.chartLoaded = true;
        var resultData = JSON.stringify(res.redemptions_by_channel);
        if (resultData.length == 2) {
            $scope.noDateFound = true;
            $scope.chartLoaded = false;
        }
        else {
            $scope.noDateFound = false;
            var dataArray = res.redemptions_by_channel;
            var arr1 = [], arr2 = [], arr3 = [], obj1 = {};
            angular.forEach(dataArray, function (v, k) {
                angular.forEach(v, function (v1, k1) {
                    arr2.push(k1);
                    arr3.push(v1);
                });
                obj1 = { "name": k, "data": arr3 };
                arr1.push(obj1);
            });

            $scope.chartOptions = {
                chart: {
                    type: "bar"
                },
                title: {
                    text: ""
                },
                xAxis: {
                    categories: arr2
                },
                yAxis: {
                    title: {
                        text: ''
                    }
                },
                series: [{
                    name: arr1[0].name,
                    data: arr3
                }]
            };
        }
    };
    $scope.loadRedemptionsDay = function(res){  
        $scope.chartLoaded = true;
        var resultData = JSON.stringify(res.redemptions_by_date);
      
        if (resultData.length == 2) {
            $scope.noDateFound = true;
            $scope.chartLoaded = false;
        }
        else {
            $scope.noDateFound = false;
            var dataArray = res.redemptions_by_date;
            var resRedByDate = Object.keys(dataArray).map(function(item){
              return [item,dataArray[item]];
            })  
			
			for (var i=0; i < resRedByDate.length; i++) {
        	  resRedByDate[i][0] = moment.utc(resRedByDate[i][0], "M/D/YYYY").format("x");              
   			}
            resRedByDate.sort(sortFunction);

            function sortFunction(a, b) {
                if (a[0] === b[0]) {
                    return 0;
                }
                else {
                    return (a[0] < b[0]) ? -1 : 1;
                }
            }

            var resRedByDateFinal = resRedByDate.map(function(arr1) {
				return {
					date : arr1[0],
					count : arr1[1]
				}
            });
            var xaxisArray=[]; var yaxisArray=[];
            for (var i=0; i < resRedByDateFinal.length; i++) {
        	  xaxisArray.push(moment.utc(resRedByDateFinal[i].date, "x").format('x'));
              yaxisArray.push(resRedByDateFinal[i].count);  
   			}
			
			
            $scope.chartOptions = {
                chart: {
                    type: "line"
                },
                title: {
                    text: ""
                },
                xAxis: {
                    categories: xaxisArray,
					 labels: {
						format: '{value:%e. %b}'					   
					}					
                },
                yAxis: {
                    title: {
                        text: 'Redemption Count',
                        categories: yaxisArray,
                    }
                },
                series: [{
                    name: 'Total Redemptions',
                    data: yaxisArray
                }],
                tooltip: {
                    formatter: function () {
                        return  '' + Highcharts.dateFormat('%B %e, %Y',  this.x) +'<br> Total Redemptions : '+ this.y ;
                    }
                }
            }
        }
    };
    $scope.loadRedemptionsLocation = function(res){
        $scope.chartLoaded = true;
        var resultData = JSON.stringify(res.redemptions_by_location);
        if (resultData.length == 2) {
            $scope.noDateFound = true;
            $scope.chartLoaded = false;
        }
        else {
            $scope.noDateFound = false;
            var dataArray = res.redemptions_by_location;
            var arr1 = [], arr2 = [];
            angular.forEach(dataArray, function (v, k) {         
                arr2.push(k);
                arr1.push(v);
            });

            $scope.chartOptions = {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    title: {
                        text: 'Locations'
                    },
                    categories: arr2,
                },
                yAxis: {
                    title: {
                        text: 'Redemption Count',
                        categories: arr1[0].data
                    }
                },
                series: [{
                    name: 'Redemptions by Location',
                    data: arr1
                }
                ],
				tooltip: {
                    formatter: function () {
                        return  '' + this.x +'<br> Total Redemptions: '+ this.y ;
                    }
                }
            };
        }
    };
    $scope.loadTransactionInformation = function(res){
        $scope.myTansData1 = true;
        $scope.myTansData2 = true;

        var resultData = JSON.stringify(res.average_purchase_by_location);
        if (resultData.length == 2) {
            $scope.noDateFound = true;
            $scope.myTansData1 = false;
            $scope.myTansData2 = false;
        }
        else {
            $scope.noDateFound = false;
            $scope.myTansData1 = true;
            var dataArray = res.average_purchase_by_location;
            var arr1 = [], arr2 = [];
            angular.forEach(dataArray, function (v, k) {
                arr1.push(v);
                arr2.push(k);
                var myTable1 = "<div class='mar_lg_rt_20'><div class='trans_table_hd'>Transaction Value</div> <table class='table table-bordered table-hover table-striped'><tr><th>Location</th>";
                myTable1 += "<th>Average Value</th>";

                for (var i = 0; i < arr1.length; i++) {
                    myTable1 += "<tr>";
                    myTable1 += "<td style=''>" + arr2[i] + "</td>";
                    myTable1 += "<td style=''> $" + Math.round(arr1[i] * 100) / 100 + "</td></tr>";
                }
                myTable1 += "</table></div>";

                $scope.myTable1 = myTable1;
            });

        }

        var resultData = JSON.stringify(res.average_items_per_transaction_per_location);
        if (resultData.length == 2) {
            $scope.noDateFound = true;
            $scope.myTansData1 = false;
            $scope.myTansData2 = false;
        }
        else {
            $scope.noDateFound = false;
            $scope.myTansData2 = true;
            var dataArray = res.average_items_per_transaction_per_location;
            var arr3 = [], arr4 = [];
            angular.forEach(dataArray, function (v, k) {
                arr3.push(v);
                arr4.push(k);
                var myTable2 = "<div class='mar_lg_rt_20'><div class='trans_table_hd'>Items per Ticket</div> <table class='table table-bordered table-hover table-striped'> <tr><th>Location</th>";
                myTable2 += "<th>Average Item Count</th>";

                for (var i = 0; i < arr4.length; i++) {
                    myTable2 += "<tr>";
                    myTable2 += "<td style=''>" + arr4[i] + "</td>";
                    myTable2 += "<td style=''> " + Math.round(arr3[i] * 100) / 100 + "</td></tr>";
                }
                myTable2 += "</table></div>";

                $scope.myTable2 = myTable2;
            });

        }
    };
    $scope.loadDownloadReports = function(startDate, endDate,res){        
        $scope.chartLoaded = true;

        $scope.generateRedemptionReport = function () {
            var arr1 = [];
            angular.forEach(res.redemptions_by_offer, function (v, k) {
                arr1.push(k);
            });
            var redemption = res.redemptions_by_offer[arr1[0]];
            var trand = res.average_purchase_by_location;
            var trandPerLoc = res.average_items_per_transaction_per_location;
            var redemByDate = res.redemptions_by_date;
            var redemByLoc = res.redemptions_by_location;

            var opts = [{
                sheetid: 'Redemptions',
                headers: true,
                caption: {
                    title: arr1[0]
                }
            }, {
                sheetid: 'Average Transaction Values',
                headers: true
            }, {
                sheetid: 'Average Item Count',
                headers: true
            }, {
                sheetid: 'Aggregated Redemptions',
                headers: true
            }, {
                sheetid: 'Redemptions By Location',
                headers: true
            }];


            $scope.redemItems = [];		
			$scope.redemItems = Object.keys(redemption).map(function(item){
              return [item,redemption[item]];
            })  
			
			for (var i=0; i < $scope.redemItems.length; i++) {
        	  $scope.redemItems[i][0] = moment.utc($scope.redemItems[i][0], "M/D/YYYY").format("x");              
   			}
			
            $scope.redemItems.sort(sortFunction);
            function sortFunction(a, b) {
                if (a[0] === b[0]) {
                    return 0;
                }
                else {
                    return (a[0] < b[0]) ? -1 : 1;
                }
            }
            $scope.redemItems = $scope.redemItems.map(function(arr1) {
				return {
					"Date" : moment.utc(arr1[0], "x").format("M/D/YYYY"),
					"Redemption Count" : arr1[1]
				}
            });
			
			
			$scope.redemItems.push({ "Date": " ", "Redemption Count": " " }, { "Date": "Redemption Sub Total", "Redemption Count": res.total_redemptions }, { "Date": " ", "Redemption Count": " " }, { "Date": "Total Redemptions", "Redemption Count": res.total_redemptions })
           

            var avgTransacValue = [];
            angular.forEach(trand, function (val, key) {
                avgTransacValue.push({
                    "Location": key,
                    "Average Value": "$" + val
                });
            });
            avgTransacValue.push({ "Location": " ", "Average Value": " " }, { "Location": "Total Average Ticket Value", "Average Value": "$" + res.average_purchase });


            var avgItemValue = [];
            angular.forEach(trandPerLoc, function (val, key) {
                avgItemValue.push({
                    "Location": key,
                    "Average Value": val
                });
            });
            avgItemValue.push({ "Location": " ", "Average Value": " " }, { "Location": "Average Number of Items", "Average Value": res.average_items_per_transaction });


            var aggeRedem = [];
            angular.forEach(redemByDate, function (val, key) {
                aggeRedem.push({
                    "Date": key,
                    "Redemption Count": val
                });
            });
            aggeRedem.push({ "Date": " ", "Redemption Count": " " }, { "Date": "Total no. of Redemptions", "Redemption Count": res.total_redemptions });



            var redemByLocation = [];
            angular.forEach(redemByLoc, function (val, key) {
                redemByLocation.push({
                    "Location": key,
                    "Redemption Count": val
                });
            });
            redemByLocation.push({ "Location": " ", "Redemption Count": " " }, { "Location": "Total Redemptions", "Redemption Count": res.total_redemptions });


            alasql('SELECT INTO XLSX("redemption-report.xlsx",?) FROM ?', [opts, [$scope.redemItems, avgTransacValue, avgItemValue, aggeRedem, redemByLocation]]);

        }


        $scope.generateRawTranxReport = function () {
            $scope.items = [];
            angular.forEach(res.data, function (val, key) {
                $scope.items.push({
                    "First Impression": val.impression_datetime,
                    "Redemption": val.redemption_datetime,
                    "Customer ID": val.customer_identifier,
                    "Member ID": val.member_id,
                    "Store Name": val.store_name,
                    "Store ID": val.store_id,
                    "Offer Name": val.offer_name,
                    "Offer ID": val.offer_id,
                    "Channel Name": val.channel_name,
                    "Channel ID": val.channel_id,
                    "Creative": val.creative,
                    "POS Transaction ID": val.pos_transaction_id,
                    "Operator ID": val.operator_id,
                    "Discount Amount": val.value,
                    "Purchase Amount": val.purchase_amount,
                    "Items": val.items,
                    "Impressions": val.impression_ids
                });
            });
            alasql('SELECT * INTO XLSX("raw-transaction-report.xlsx",{sheetid:"raw-transaction-report",headers:true}) FROM ?', [$scope.items]);
        }

        $scope.generateConversionReport = function () {
            sparkflyService.getConversions(startDate, endDate, function (response) {

                //var summary = [];
                var headerDetails = response.report.conversions.header;
                var headingInfo0 = ["Sparkfly Channel Reporting - Summary", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
                var headingInfo1 = ["Date Range: "+$scope.startDateFormat+" to "+$scope.endDateFormat+"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

                var headingInfo00 = ["Sparkfly Channel Reporting - Beacon", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
                var headingInfo01 = ["Date Range: "+$scope.startDateFormat+" to "+$scope.endDateFormat+"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
                var summary = response.report.conversions.Summary;
                //headerDetails.shift();
                var beacon = response.report.conversions.Beacon; 
                beacon.splice(0, 0, headingInfo00);
                beacon.splice(1, 0, headingInfo01);
                beacon.splice(2, 0, " ");
                beacon.splice(3, 0, headerDetails);
                //summary.join();
                summary.splice(0, 0, headingInfo0);
                summary.splice(1, 0, headingInfo1);
                summary.splice(2, 0, " ");
                summary.splice(3, 0, headerDetails);

                var opts = [{
                    sheetid: 'Summary',
                    headers: false
                }, {
                    sheetid: 'Beacon',
                    headers: false
                }];
                alasql('SELECT INTO XLSX("conversion-report.xlsx",?) FROM ?', [opts, [summary, beacon]]);
            });
        }
    };
if ($scope.currentUser.CStoreAnalyticsLoadedStatus) {
           $scope.getDate();
    }else{$scope.cStoreLoader = false;}

});

//---- functions sorting javascritp object datewise (* keep this code on top) starts here ----//
(function () {
    if (typeof Object.defineProperty === 'function') {
        try {
            Object.defineProperty(Array.prototype, 'sortBy', { value: sb });
        } catch (e) {
        }
    }
    if (!Array.prototype.sortBy)
        Array.prototype.sortBy = sb;

    function sb(f) {
        for (var i = this.length; i;) {
            var o = this[--i];
            this[i] = [].concat(f.call(o, o, i), o);
        }
        this.sort(function (a, b) {
            for (var i = 0, len = a.length; i < len; ++i) {
                if (a[i] != b[i])
                    return a[i] < b[i] ? -1 : 1;
            }
            return 0;
        });
        for (var i = this.length; i;) {
            this[--i] = this[i][this[i].length - 1];
        }
        return this;
    }
})();

//---- functions for sorting javascritp object datewise ends here --// 