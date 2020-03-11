let table;

function preload() {
  table = loadTable('grades.csv', 'csv' );
}

function setup() {
  //count the columns
  createCanvas(600, 600);
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  print(table.getColumn('name'));

  for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
      text(table.getString(r,c),25 + 70*c, 25+ 50*r);
    }
}
