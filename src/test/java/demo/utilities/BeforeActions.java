package demo.utilities;

import cucumber.api.Scenario;
import cucumber.api.java.Before;

public class BeforeActions {
	
	@Before				
	public void beforeActions(Scenario scen){                            //Pass cucumber scenario parameter.
		System.out.println(".....Initializing Driver....");				
		SetupDrivers.setupDriver();	
		
		System.out.println("Test Scenario Name is: " + scen.getName());		//Just printing out scenario name

	}


}
