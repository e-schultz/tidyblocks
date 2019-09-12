//
// Select columns by name.
//
Blockly.JavaScript['transform_select'] = (block) => {
  const columns = block.getFieldValue('MULTIPLE_COLUMNS')
        .split(',')
        .map(c => c.trim())
        .filter(c => (c.length > 0))
        .map(c => Blockly.JavaScript.quote_(c))
        .join(',')

  const descending = (block.getFieldValue('DESCENDING') === 'FALSE')
  return `.sort(${block.tbId}, [${columns}], ${descending})`
}