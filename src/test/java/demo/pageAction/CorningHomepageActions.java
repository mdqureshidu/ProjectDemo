package demo.pageAction;

import org.openqa.selenium.support.PageFactory;

import demo.pageElements.CorningHomepageLocators;
import demo.utilities.SetupDrivers;

public class CorningHomepageActions {
	
	 CorningHomepageLocators CorningHomepageLocatorsobj;
	
	public CorningHomepageActions() {
		CorningHomepageLocatorsobj = new CorningHomepageLocators();
		PageFactory.initElements(SetupDrivers.driver, CorningHomepageLocatorsobj);
		}
	
	public void loadCorningHomepage () throws Exception {
    SetupDrivers.driver.get("https://www.corning.com/worldwide/en.html");
	
		//String tittle = SetupDriver.driver.getTitle();
		//System.out.print(">>>>>> Page tittle>>>>>");
		
		//String currentUrl = SetupDriver.driver.getCurrentUrl();
		System.out.println(">>RSL>>>Page URL");
	
		}
	
	public void ClickSearchbx() {
	CorningHomepageLocatorsobj.txtbxClick.click();
	
	}
	
	public void SearchOptical() throws Exception{
		CorningHomepageLocatorsobj.cbxSearch.sendKeys("optical");
		CorningHomepageLocatorsobj.cbxSearch.click(); 
		Thread.sleep(3000);
	}
		public void SubmitOptical() {
			CorningHomepageLocatorsobj.btnSubmit.click();
			
		}

    public void SearchItems(String Items) {
    	
    CorningHomepageLocatorsobj.cbxSearch.sendKeys(Items);
    CorningHomepageLocatorsobj.btnSubmit.click(); 
    }
    
    
    
    }
 
		


