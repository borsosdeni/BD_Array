Blockly.Blocks['BD_Array_Aray'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Array :")
      .appendField(new Blockly.FieldDropdown([["Int", "int"], ["Float", "float"], ["String", "String"]]), "Type")
      .appendField("  ")
      .appendField(new Blockly.FieldTextInput(""), "Arayname")
      .appendField("[] = {")
      .appendField(new Blockly.FieldTextInput(""), "value_CODE")
      .appendField("}");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};




Blockly.Blocks['BD_Array_value_of'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Value of")
      .appendField(new Blockly.FieldTextInput(""), "arr1")
    this.appendValueInput("at")
      .setCheck("Number")
      .appendField(" at:");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};



Blockly.Blocks['BD_Array_get'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Set array ")
      .appendField(new Blockly.FieldTextInput(""), "arr1")
    this.appendValueInput("index")
      .setCheck("Number")
      .appendField(" index");
	  
	this.appendValueInput("by")
      .setCheck("Number")
      .appendField(" by ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

