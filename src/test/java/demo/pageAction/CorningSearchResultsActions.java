package demo.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import demo.pageElements.CorningSearchResultsLocators;
import demo.utilities.SetupDrivers;

 public class CorningSearchResultsActions {
	
	CorningSearchResultsLocators CorningSearchResultsLocatorsobj;
	
	public CorningSearchResultsActions (){
		CorningSearchResultsLocatorsobj = new CorningSearchResultsLocators();
		PageFactory.initElements(SetupDrivers.driver, CorningSearchResultsLocatorsobj);
		
			}
	public void verifyOptical() throws Exception {
//		option 1: isDisplayed
//		CorningSearchResultsLocatorsobj.txtOptical.isDisplayed();
//		CorningSearchResultsLocatorsobj.txtOptical.isEnabled();
		Thread.sleep(2000);
		
		//Option 2
//		Assert.assertEquals(CorningSearchResultsLocatorsobj.txtOptical.getText(), "" optical""); //Actual vs Expected
		Thread.sleep(2000);
		
		//Option 3
		Assert.assertTrue(CorningSearchResultsLocatorsobj.txtOptical.isDisplayed()); //object displayed or not
//		Thread.sleep(2000);
	}
	
	public void FilterItems(String Items) throws Exception {
		Thread.sleep(3000);
		if (Items.equals("Optical")) {		
		CorningSearchResultsLocatorsobj.cbxOpticalItems.click();
	} else if (Items.equals("Medical")) {
		CorningSearchResultsLocatorsobj.cbxMedicalItems.click();
	} else if(Items.equals("Optical")) {
		CorningSearchResultsLocatorsobj.cbxOpticalItems2.click(); {
		}
	}
	}
		public void validateItems (String Items) throws Exception {
			Thread.sleep(3000);
			if (Items.equals("Optical")) {		
			CorningSearchResultsLocatorsobj.txtUnifiedSearch.isDisplayed();
		} else if (Items.equals("Medical")) {
			CorningSearchResultsLocatorsobj.txtmedical.isDisplayed();
		} else if(Items.equals("Optical")) {
			CorningSearchResultsLocatorsobj.bnbproducts.isDisplayed();
			
			
		}
		}
		
	}
	
			
			
			

