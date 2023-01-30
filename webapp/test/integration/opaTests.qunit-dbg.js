/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dksh/connectclient/InventoryAtp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});