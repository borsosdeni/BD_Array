Blockly.JavaScript['BD_Array_Aray'] = function (block) {
  var Type = block.getFieldValue('Type');
  var name = block.getFieldValue('Arayname');
  var value_CODE = block.getFieldValue('value_CODE');
  var value_CODE_Split = value_CODE.split(',');
  var filter = {
      int: x=>parseInt(x),
      String: x=> `"${x}"`,
      float:x=>parseFloat(x)
  }
  let code_aray = Type + " " + name + "["+value_CODE_Split.length+"] = {" + value_CODE_Split.map(x=>filter[Type](x)).join(',') + "};";
  let code = `#VARIABLE ${code_aray}#END`;
  
  return code;
};



Blockly.JavaScript['BD_Array_value_of'] = function (block) {
  let code = '';
  var arr1 = block.getFieldValue('arr1');
  var index2 = Blockly.JavaScript.valueToCode(block, 'at', Blockly.JavaScript.ORDER_ATOMIC)
  code = arr1 +"["+index2+"]";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['BD_Array_get'] = function (block) {
  let code = '';
  var arr1 = block.getFieldValue('arr1');
  var index2 = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC)
  var ertek = Blockly.JavaScript.valueToCode(block, 'by', Blockly.JavaScript.ORDER_ATOMIC)
  code = arr1 +"["+index2+"]="+ertek+";";
  return code;
};

