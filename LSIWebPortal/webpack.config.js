var webpack = require('webpack');
var path = require("path");
module.exports = {
	context: __dirname + '/public/app',
	entry: {
		app: [
			'./script/app.js',
			'./script/config.js',
			'./script/controllers/loginCtrl.js',
			'./script/controllers/commonCtrl.js',
			'./script/controllers/logoutCtrl.js',
			'./script/controllers/dashboardCtrl.js',
			'./script/controllers/sparkflyCtrl.js',
			'./script/controllers/prismCtrl.js',
			'./script/controllers/fortinentCtrl.js',
			'./script/controllers/changepasswordCtrl.js',
			'./script/controllers/viewprofileCtrl.js',
			'./script/controllers/adduserCtrl.js',
			'./script/controllers/userdetailsCtrl.js',
			'./script/controllers/edituserCtrl.js',
			'./script/controllers/deleteuserCtrl.js',
			'./script/controllers/fortinenthomeCtrl.js',
			'./script/controllers/fortinentcustdwelldistCtrl.js',
			'./script/controllers/fortinentfreqdistCtrl.js',
			'./script/controllers/fortinentcustrecedistCtrl.js',
			'./script/controllers/fortinentrealcalibrationCtrl.js',
			'./script/controllers/fortinentrealtimetrackCtrl.js',
			'./script/controllers/fortinentrealdensheatmapCtrl.js',
			'./script/controllers/fortinentpmapcdwelltimeCtrl.js',
			'./script/controllers/fortinentpmapcpersonsCtrl.js',
			'./script/controllers/fortinentpmapctrafficCtrl.js',
			'./script/controllers/fortinentpmappophotspotCtrl.js',
			'./script/controllers/fortinentcampcreateCtrl.js',
			'./script/controllers/fortinentcampresultCtrl.js',
			'./script/controllers/fortinentpersonvisibleCtrl.js',
			'./script/controllers/fortinentpersontophoursCtrl.js',

			'./script/services/authService.js',
			'./script/services/transformRequestAsFormPost.js',
			'./script/services/sparkflyService.js',
			'./script/services/prismService.js',
			'./script/services/fortinetService.js',
			'./script/services/fortinetCampaignService.js',

			'./script/filters/filters.js',
			'./script/directives/chartsDirective.js'
		],
		vendor: [
			'jquery',
			'./library/bootstrap/js/bootstrap.min.js',
			'angular',
			'./library/angular/angular-cookies.min.js',
			'./library/angular/angular-ui-router.js',
			'./library/angular/angular-modal-service.js',
			'./library/angular/angular-sanitize.js',
			'./library/angular/ui-bootstrap-tpls-1.3.2.js',
			'./library/datepicker/ng-bs-daterangepicker.js',
			'./library/rzslider/rzslider.js',
			'./library/datepicker/daterangepicker.js',
			'./library/datepicker/bootstrap-datetimepicker.min.js'
		]
	},
	output: {
		path: __dirname + '/public/app/js',
		filename: 'app.bundle.js'
	},
	resolve: {
	  modules: [
	    path.join(__dirname, "/public/app/library"),
	    path.join(__dirname, "/node_modules")
	  ]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "vendor.bundle.js"
		}),
		new webpack.ContextReplacementPlugin(/moment[\\\/]lang$/, /^\.\/(en-gb|de|pl)$/),
		new webpack.ProvidePlugin({
		    $: 'jquery',
		    jQuery: 'jquery',
		    'window.jQuery': 'jquery',
		})
	]
};