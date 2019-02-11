function Test8()
{
  //Iterates through the specified mobile devices.
  var MobileDevices, i;
  MobileDevices = new Array(3);
  MobileDevices[0] = Mobile.Device("Swift 2 X");
  MobileDevices[1] = Mobile.Device("emulator-5554");
  MobileDevices[2] = Mobile.Device("emulator-5556");
  for(i = 0; i < MobileDevices.length; i++)
  {
    Mobile.SetCurrent(MobileDevices[i].DeviceName, MobileDevices[i].Index);
    //Runs the "Orders" tested application.
    TestedApps.Orders.Run();
    //Simulates a single touch on the specified item. The item can be specified as an index, from 0, or as a name.
    Aliases.Device.Process_example_orders.RootLayout.ListView_listView1.TouchItem(1);
    //Simulates a single touch on the specified item. The item can be specified as an index, from 0, or as a name.
    Aliases.Device.Process_example_orders.RootLayout.ListView_listView1.TouchItem(3);
    //Performs a single touch on the specified button.
    Aliases.Device.Process_example_orders.RootLayout.Layout_buttons_layout.Button_New.TouchButton();
    //Enters text in the edit control.
    Aliases.Device.Process_example_orders.RootLayout.ScrollView_NO_ID.EditText_cust_name.SetText("Eve Erlang");
    //Enters text in the edit control.
    Aliases.Device.Process_example_orders.RootLayout.ScrollView_NO_ID.EditText_street.SetText("10 Fake Street");
    //Enters text in the edit control.
    Aliases.Device.Process_example_orders.RootLayout.ScrollView_NO_ID.EditText_city.SetText("Fakerton");
    //Enters text in the edit control.
    Aliases.Device.Process_example_orders.RootLayout.ScrollView_NO_ID.EditText_state.SetText("Fakeville");
    //Enters text in the edit control.
    Aliases.Device.Process_example_orders.RootLayout.ScrollView_NO_ID.EditText_card_number.SetText("123123123123");
    //Performs a single touch on the specified button.
    Aliases.Device.Process_example_orders.RootLayout.ScrollView_NO_ID.Layout_setdate_layout.Layout_NO_ID.Button_Set_Date.TouchButton();
    //Returns the date selected in the calendar control.
    Aliases.Device.Process_example_orders.RootLayout.Layout_content.DatePicker_datePicker.wDate = "07/02/2020";
    //Performs a single touch on the specified button.
    Aliases.Device.Process_example_orders.RootLayout.Layout_content.Layout_buttonPanel.Layout_NO_ID.Button_OK.TouchButton();
    //Enters text in the edit control.
    Aliases.Device.Process_example_orders.RootLayout.ScrollView_NO_ID.Layout_setdate_layout.Layout_NO_ID1.EditText_exp_date.SetText("7.2.2020");
    //Performs a single touch on the specified button.
    Aliases.Device.Process_example_orders.RootLayout.ScrollView_NO_ID.Button_Ok.TouchButton();
    //Delays the test execution for the specified time period.
    Delay(5000);
    //Simulates pressing the Home button on the device.
    Mobile.Device().PressHome();
  }
}