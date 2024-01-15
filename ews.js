import { EWSItemSheet } from "./module/EWSItemSheet.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

/**
 * Init hook.
 */
Hooks.once("init", async function() {
  console.log("ews | initialize EWS");

  //Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("ews", EWSItemSheet, { makeDefault: true });

});
