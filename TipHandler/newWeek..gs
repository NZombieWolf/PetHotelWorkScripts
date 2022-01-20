function newWeek() {
  Logger.log('function started');
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetname = ss.getSheetName();
  

  Logger.log('sheet collected and name of current sheet found');
  var sheet = ss.getSheetByName(sheetname).copyTo(ss);
  var newsheet = ss.getSheetByName("copy of " + sheetname);
  ss.setActiveSheet(newsheet);
  ss.moveActiveSheet(2);
  // At this point the sheet is duplicated, and set to be front of the list

  //The following section will delete the contents and collect the dates

  var sheetnew = ss.getActiveSheet();
  var range = sheetnew.getRange('B4:H16');
  range.clearContent()

  var range = sheetnew.getRange('B2')
  var datecellold = range.getCell(1,1)
  var olddate = datecellold.getValue();
  var oldformat = datecellold.getNumberFormat();
  var oldyear = olddate.valueOf();

  Logger.log('base value ' + oldyear);
  var stringoldyear = oldyear.toString();
  
  Logger.log('To String Output ' + stringoldyear);
  Logger.log('Old date is ' + oldyear);

// need to get year, month, and day out of the old value.
 // FIX THIS PART BUDDY BOY
 //-------------------------------------------------------------------------------------------------
  var newdate = new Date(oldyear);
  newdate = new Date(newdate.setDate(newdate.getDate()+7));

  //var test = new Date();
  Logger.log('Old date is ' + olddate);
   Logger.log('New date is ' + newdate);
  //Logger.log(test);
  
  //Logger.log(swapdate);
  //olddate = new Date

  //below we want to change the date then rewrite it to the new sheet.
  Logger.log(olddate);
  //var swapdate = new Date(oldday.setDate(oldday.getDate()+7));
  //Logger.log('The new date is ' + newdate);
  //var swapdate = new Date(olddate.setDate(olddate.getDate()+5)));
  var newday = newdate.getDate();
  var newmonth = newdate.getMonth();
  
  
  datecellold.setValue(newdate);
  var enddate = new Date(newdate.setDate(newdate.getDate()+6));
  Logger.log(enddate);

  //Rename Sheet
  var endmonth = enddate.getMonth();
  var endday = enddate.getDate();
  var endyear = enddate.getYear();
  
  Logger.log('End Year Produces This ' + endyear);
  
  endmonth = endmonth +1;
  newmonth = newmonth +1;
  endyear = endyear - 100;

  Logger.log(newmonth + ' / ' + newday);
  Logger.log(endmonth + ' / ' + endday);
  sheetnew.setName(newmonth + '/' + newday + '-' + endmonth + '/' + endday + '/' + endyear);



  Logger.log('sheet copied and updated');


}
