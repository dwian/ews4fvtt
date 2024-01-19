import { EWSItemSheet } from "./module/sheets/EWSItemSheet.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

/**
 * Init hook.
 */
Hooks.once("init", function() {
  console.log("ews | initialize EWS");

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("ews", EWSItemSheet, { makeDefault: true });

});
